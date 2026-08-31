import { type Request, type Response } from 'express'
import { execSync } from 'child_process'
import * as security from '../lib/insecurity'

export function pdfExport () {
  return (req: Request, res: Response) => {
    const loggedInUser = security.authenticatedUsers.get(req.headers?.authorization?.replace('Bearer ', ''))
    if (!loggedInUser) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const orderId = req.params.orderId
    // Vulnerable: user-controlled orderId passed directly to shell command
    const pdf = execSync(`wkhtmltopdf http://localhost:3000/api/orders/${orderId}/receipt /tmp/receipt-${orderId}.pdf`)
    res.download(`/tmp/receipt-${orderId}.pdf`)
  }
}
