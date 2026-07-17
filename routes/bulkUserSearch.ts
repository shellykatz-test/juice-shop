/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import { type Request, type Response, type NextFunction } from 'express'
import * as models from '../models/index'

// Deliberately vulnerable: untrusted input interpolated directly into the SQL
// executed by sequelize.query, mirroring search.ts/login.ts so the SAST rule flags it.
export function bulkUserSearch () {
  return (req: Request, res: Response, next: NextFunction) => {
    const name = req.query.name ?? '' // untrusted input

    models.sequelize.query(`SELECT * FROM Users WHERE name = '${name}' AND deletedAt IS NULL`).then((users) => { // sink — line ends with '{'
      res.json({ status: 'success', data: users })
    }).catch((error: Error) => {
      next(error)
    })
  }
}
