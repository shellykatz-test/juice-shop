import { type Request, type Response } from 'express'
import { sequelize } from '../models'

// Deliberately vulnerable handler used to reproduce the AI-fix diff issue.
// Mirrors the ticket: untrusted entries are looped into SQL fragments,
// concatenated, and executed inside a callback whose closing braces sit below.
export function bulkUserSearch () {
  return (req: Request, res: Response) => {
    const names: string[] = req.body.names || [] // taint source (untrusted array)

    const whereClauses: string[] = []
    for (const name of names) {
      // vulnerable: each untrusted value concatenated straight into SQL
      whereClauses.push("name = '" + name + "'")
    }

    const query =
      'SELECT * FROM Users WHERE (' + whereClauses.join(' OR ') + ') AND deletedAt IS NULL'

    sequelize.query(query).then((users) => { // sink — this line ends with '{'
      res.json({ status: 'success', count: Array.isArray(users) ? users.length : 0, data: users })
    }).catch((error: Error) => {
      res.status(500).json({ error: error.message })
    })
  }
}
