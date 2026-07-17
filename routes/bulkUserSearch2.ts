/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import { type Request, type Response, type NextFunction } from 'express'
import * as models from '../models/index'

export function bulkUserSearch () {
  return (req: Request, res: Response, next: NextFunction) => {
    const name = req.query.name ?? '' // taint SOURCE

    // intervening lines widen the flagged range so the snippet is non-contiguous
    const table = 'Users'
    const orderColumn = 'name'
    const limit = 50
    const offset = 0

    models.sequelize.query(`SELECT * FROM ${table} WHERE name = '${name}' AND deletedAt IS NULL ORDER BY ${orderColumn} LIMIT ${limit} OFFSET ${offset}`).then((rows) => { // SINK — ends with '{'
      const result = Array.isArray(rows) ? rows : []
      res.json({ status: 'success', count: result.length, data: result })
    }).catch((error: Error) => {
      next(error)
    })
  }
}
