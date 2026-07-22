/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Large, intentionally-vulnerable fixture used to exercise AI-autofix large-file windowing.
// The file is >180KB, so it is sent to the model as a 180KB window (not the whole file, and not
// just the scanner snippet). The SQL-injection sink below (dynamic ORDER BY identifier, which has
// no bind-parameter fix) sits ~150 lines beneath the `safeSortColumn` allow-list helper that the
// correct fix must reuse -- close enough to be inside the window, far enough to be outside the
// dataflow snippet.

import { type Request, type Response, type NextFunction } from 'express'
import * as models from '../models/index'


export function aggregateBucket0 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 3 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 0
}


export function aggregateBucket1 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 4 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 1
}


export function aggregateBucket2 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 5 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 2
}


export function aggregateBucket3 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 6 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 3
}


export function aggregateBucket4 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 7 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 4
}


export function aggregateBucket5 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 8 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 5
}


export function aggregateBucket6 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 9 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 6
}


export function aggregateBucket7 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 10 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 7
}


export function aggregateBucket8 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 11 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 8
}


export function aggregateBucket9 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 12 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 9
}


export function aggregateBucket10 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 13 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 10
}


export function aggregateBucket11 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 14 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 11
}


export function aggregateBucket12 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 15 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 12
}


export function aggregateBucket13 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 16 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 13
}


export function aggregateBucket14 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 17 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 14
}


export function aggregateBucket15 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 18 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 15
}


export function aggregateBucket16 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 19 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 16
}


export function aggregateBucket17 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 20 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 17
}


export function aggregateBucket18 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 21 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 18
}


export function aggregateBucket19 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 22 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 19
}


export function aggregateBucket20 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 23 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 20
}


export function aggregateBucket21 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 24 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 21
}


export function aggregateBucket22 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 25 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 22
}


export function aggregateBucket23 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 26 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 23
}


export function aggregateBucket24 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 27 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 24
}


export function aggregateBucket25 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 28 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 25
}


export function aggregateBucket26 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 29 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 26
}


export function aggregateBucket27 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 30 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 27
}


export function aggregateBucket28 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 31 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 28
}


export function aggregateBucket29 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 32 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 29
}


export function aggregateBucket30 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 33 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 30
}


export function aggregateBucket31 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 34 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 31
}


export function aggregateBucket32 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 35 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 32
}


export function aggregateBucket33 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 36 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 33
}


export function aggregateBucket34 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 37 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 34
}


export function aggregateBucket35 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 38 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 35
}


export function aggregateBucket36 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 39 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 36
}


export function aggregateBucket37 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 40 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 37
}


export function aggregateBucket38 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 41 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 38
}


export function aggregateBucket39 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 42 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 39
}


export function aggregateBucket40 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 43 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 40
}


export function aggregateBucket41 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 44 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 41
}


export function aggregateBucket42 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 45 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 42
}


export function aggregateBucket43 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 46 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 43
}


export function aggregateBucket44 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 47 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 44
}


export function aggregateBucket45 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 48 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 45
}


export function aggregateBucket46 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 49 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 46
}


export function aggregateBucket47 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 50 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 47
}


export function aggregateBucket48 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 51 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 48
}


export function aggregateBucket49 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 52 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 49
}


export function aggregateBucket50 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 53 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 50
}


export function aggregateBucket51 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 54 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 51
}


export function aggregateBucket52 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 55 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 52
}


export function aggregateBucket53 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 56 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 53
}


export function aggregateBucket54 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 57 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 54
}


export function aggregateBucket55 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 58 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 55
}


export function aggregateBucket56 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 59 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 56
}


export function aggregateBucket57 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 60 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 57
}


export function aggregateBucket58 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 61 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 58
}


export function aggregateBucket59 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 62 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 59
}


export function aggregateBucket60 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 63 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 60
}


export function aggregateBucket61 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 64 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 61
}


export function aggregateBucket62 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 65 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 62
}


export function aggregateBucket63 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 66 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 63
}


export function aggregateBucket64 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 67 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 64
}


export function aggregateBucket65 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 68 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 65
}


export function aggregateBucket66 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 69 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 66
}


export function aggregateBucket67 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 70 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 67
}


export function aggregateBucket68 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 71 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 68
}


export function aggregateBucket69 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 72 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 69
}


export function aggregateBucket70 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 73 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 70
}


export function aggregateBucket71 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 74 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 71
}


export function aggregateBucket72 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 75 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 72
}


export function aggregateBucket73 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 76 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 73
}


export function aggregateBucket74 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 77 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 74
}


export function aggregateBucket75 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 78 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 75
}


export function aggregateBucket76 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 79 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 76
}


export function aggregateBucket77 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 80 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 77
}


export function aggregateBucket78 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 81 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 78
}


export function aggregateBucket79 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 82 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 79
}


export function aggregateBucket80 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 83 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 80
}


export function aggregateBucket81 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 84 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 81
}


export function aggregateBucket82 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 85 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 82
}


export function aggregateBucket83 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 86 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 83
}


export function aggregateBucket84 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 87 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 84
}


export function aggregateBucket85 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 88 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 85
}


export function aggregateBucket86 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 89 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 86
}


export function aggregateBucket87 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 90 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 87
}


export function aggregateBucket88 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 91 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 88
}


export function aggregateBucket89 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 92 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 89
}


export function aggregateBucket90 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 93 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 90
}


export function aggregateBucket91 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 94 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 91
}


export function aggregateBucket92 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 95 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 92
}


export function aggregateBucket93 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 96 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 93
}


export function aggregateBucket94 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 97 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 94
}


export function aggregateBucket95 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 98 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 95
}


export function aggregateBucket96 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 99 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 96
}


export function aggregateBucket97 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 100 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 97
}


export function aggregateBucket98 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 101 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 98
}


export function aggregateBucket99 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 102 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 99
}


export function aggregateBucket100 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 103 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 100
}


export function aggregateBucket101 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 104 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 101
}


export function aggregateBucket102 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 105 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 102
}


export function aggregateBucket103 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 106 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 103
}


export function aggregateBucket104 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 107 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 104
}


export function aggregateBucket105 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 108 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 105
}


export function aggregateBucket106 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 109 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 106
}


export function aggregateBucket107 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 110 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 107
}


export function aggregateBucket108 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 111 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 108
}


export function aggregateBucket109 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 112 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 109
}


export function aggregateBucket110 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 113 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 110
}


export function aggregateBucket111 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 114 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 111
}


export function aggregateBucket112 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 115 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 112
}


export function aggregateBucket113 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 116 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 113
}


export function aggregateBucket114 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 117 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 114
}


export function aggregateBucket115 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 118 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 115
}


export function aggregateBucket116 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 119 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 116
}


export function aggregateBucket117 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 120 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 117
}


export function aggregateBucket118 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 121 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 118
}


export function aggregateBucket119 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 122 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 119
}


export function aggregateBucket120 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 123 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 120
}


export function aggregateBucket121 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 124 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 121
}


export function aggregateBucket122 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 125 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 122
}


export function aggregateBucket123 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 126 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 123
}


export function aggregateBucket124 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 127 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 124
}


export function aggregateBucket125 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 128 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 125
}


export function aggregateBucket126 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 129 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 126
}


export function aggregateBucket127 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 130 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 127
}


export function aggregateBucket128 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 131 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 128
}


export function aggregateBucket129 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 132 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 129
}


export function aggregateBucket130 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 133 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 130
}


export function aggregateBucket131 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 134 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 131
}


export function aggregateBucket132 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 135 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 132
}


export function aggregateBucket133 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 136 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 133
}


export function aggregateBucket134 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 137 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 134
}


export function aggregateBucket135 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 138 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 135
}


export function aggregateBucket136 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 139 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 136
}


export function aggregateBucket137 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 140 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 137
}


export function aggregateBucket138 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 141 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 138
}


export function aggregateBucket139 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 142 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 139
}


export function aggregateBucket140 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 143 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 140
}


export function aggregateBucket141 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 144 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 141
}


export function aggregateBucket142 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 145 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 142
}


export function aggregateBucket143 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 146 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 143
}


export function aggregateBucket144 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 147 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 144
}


export function aggregateBucket145 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 148 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 145
}


export function aggregateBucket146 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 149 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 146
}


export function aggregateBucket147 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 150 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 147
}


export function aggregateBucket148 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 151 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 148
}


export function aggregateBucket149 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 152 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 149
}


export function aggregateBucket150 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 153 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 150
}


export function aggregateBucket151 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 154 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 151
}


export function aggregateBucket152 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 155 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 152
}


export function aggregateBucket153 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 156 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 153
}


export function aggregateBucket154 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 157 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 154
}


export function aggregateBucket155 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 158 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 155
}


export function aggregateBucket156 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 159 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 156
}


export function aggregateBucket157 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 160 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 157
}


export function aggregateBucket158 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 161 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 158
}


export function aggregateBucket159 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 162 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 159
}


export function aggregateBucket160 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 163 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 160
}


export function aggregateBucket161 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 164 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 161
}


export function aggregateBucket162 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 165 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 162
}


export function aggregateBucket163 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 166 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 163
}


export function aggregateBucket164 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 167 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 164
}


export function aggregateBucket165 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 168 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 165
}


export function aggregateBucket166 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 169 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 166
}


export function aggregateBucket167 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 170 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 167
}


export function aggregateBucket168 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 171 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 168
}


export function aggregateBucket169 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 172 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 169
}


export function aggregateBucket170 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 173 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 170
}


export function aggregateBucket171 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 174 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 171
}


export function aggregateBucket172 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 175 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 172
}


export function aggregateBucket173 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 176 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 173
}


export function aggregateBucket174 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 177 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 174
}


export function aggregateBucket175 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 178 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 175
}


export function aggregateBucket176 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 179 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 176
}


export function aggregateBucket177 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 180 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 177
}


export function aggregateBucket178 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 181 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 178
}


export function aggregateBucket179 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 182 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 179
}


export function aggregateBucket180 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 183 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 180
}


export function aggregateBucket181 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 184 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 181
}


export function aggregateBucket182 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 185 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 182
}


export function aggregateBucket183 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 186 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 183
}


export function aggregateBucket184 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 187 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 184
}


export function aggregateBucket185 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 188 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 185
}


export function aggregateBucket186 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 189 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 186
}


export function aggregateBucket187 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 190 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 187
}


export function aggregateBucket188 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 191 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 188
}


export function aggregateBucket189 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 192 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 189
}


export function aggregateBucket190 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 193 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 190
}


export function aggregateBucket191 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 194 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 191
}


export function aggregateBucket192 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 195 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 192
}


export function aggregateBucket193 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 196 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 193
}


export function aggregateBucket194 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 197 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 194
}


export function aggregateBucket195 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 198 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 195
}


export function aggregateBucket196 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 199 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 196
}


export function aggregateBucket197 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 200 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 197
}


export function aggregateBucket198 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 201 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 198
}


export function aggregateBucket199 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 202 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 199
}


export function aggregateBucket200 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 203 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 200
}


export function aggregateBucket201 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 204 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 201
}


export function aggregateBucket202 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 205 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 202
}


export function aggregateBucket203 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 206 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 203
}


export function aggregateBucket204 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 207 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 204
}


export function aggregateBucket205 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 208 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 205
}


export function aggregateBucket206 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 209 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 206
}


export function aggregateBucket207 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 210 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 207
}


export function aggregateBucket208 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 211 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 208
}


export function aggregateBucket209 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 212 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 209
}


export function aggregateBucket210 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 213 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 210
}


export function aggregateBucket211 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 214 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 211
}


export function aggregateBucket212 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 215 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 212
}


export function aggregateBucket213 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 216 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 213
}


export function aggregateBucket214 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 217 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 214
}


export function aggregateBucket215 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 218 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 215
}


export function aggregateBucket216 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 219 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 216
}


export function aggregateBucket217 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 220 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 217
}


export function aggregateBucket218 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 221 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 218
}


export function aggregateBucket219 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 222 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 219
}


export function aggregateBucket220 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 223 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 220
}


export function aggregateBucket221 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 224 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 221
}


export function aggregateBucket222 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 225 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 222
}


export function aggregateBucket223 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 226 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 223
}


export function aggregateBucket224 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 227 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 224
}


export function aggregateBucket225 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 228 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 225
}


export function aggregateBucket226 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 229 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 226
}


export function aggregateBucket227 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 230 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 227
}


export function aggregateBucket228 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 231 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 228
}


export function aggregateBucket229 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 232 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 229
}


export function aggregateBucket230 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 233 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 230
}


export function aggregateBucket231 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 234 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 231
}


export function aggregateBucket232 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 235 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 232
}


export function aggregateBucket233 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 236 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 233
}


export function aggregateBucket234 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 237 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 234
}


export function aggregateBucket235 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 238 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 235
}


export function aggregateBucket236 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 239 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 236
}


export function aggregateBucket237 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 240 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 237
}


export function aggregateBucket238 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 241 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 238
}


export function aggregateBucket239 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 242 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 239
}


export function aggregateBucket240 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 243 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 240
}


export function aggregateBucket241 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 244 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 241
}


export function aggregateBucket242 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 245 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 242
}


export function aggregateBucket243 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 246 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 243
}


export function aggregateBucket244 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 247 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 244
}


export function aggregateBucket245 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 248 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 245
}


export function aggregateBucket246 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 249 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 246
}


export function aggregateBucket247 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 250 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 247
}


export function aggregateBucket248 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 251 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 248
}


export function aggregateBucket249 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 252 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 249
}


export function aggregateBucket250 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 253 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 250
}


export function aggregateBucket251 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 254 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 251
}


export function aggregateBucket252 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 255 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 252
}


export function aggregateBucket253 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 256 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 253
}


export function aggregateBucket254 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 257 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 254
}


export function aggregateBucket255 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 258 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 255
}


export function aggregateBucket256 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 259 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 256
}


export function aggregateBucket257 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 260 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 257
}


export function aggregateBucket258 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 261 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 258
}


export function aggregateBucket259 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 262 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 259
}


export function aggregateBucket260 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 263 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 260
}


export function aggregateBucket261 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 264 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 261
}


export function aggregateBucket262 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 265 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 262
}


export function aggregateBucket263 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 266 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 263
}


export function aggregateBucket264 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 267 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 264
}


export function aggregateBucket265 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 268 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 265
}


export function aggregateBucket266 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 269 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 266
}


export function aggregateBucket267 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 270 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 267
}


export function aggregateBucket268 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 271 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 268
}


export function aggregateBucket269 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 272 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 269
}


export function aggregateBucket270 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 273 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 270
}


export function aggregateBucket271 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 274 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 271
}


export function aggregateBucket272 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 275 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 272
}


export function aggregateBucket273 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 276 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 273
}


export function aggregateBucket274 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 277 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 274
}


export function aggregateBucket275 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 278 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 275
}


export function aggregateBucket276 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 279 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 276
}


export function aggregateBucket277 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 280 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 277
}


export function aggregateBucket278 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 281 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 278
}


export function aggregateBucket279 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 282 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 279
}


export function aggregateBucket280 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 283 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 280
}


export function aggregateBucket281 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 284 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 281
}


export function aggregateBucket282 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 285 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 282
}


export function aggregateBucket283 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 286 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 283
}


export function aggregateBucket284 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 287 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 284
}


export function aggregateBucket285 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 288 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 285
}


export function aggregateBucket286 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 289 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 286
}


export function aggregateBucket287 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 290 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 287
}


export function aggregateBucket288 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 291 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 288
}


export function aggregateBucket289 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 292 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 289
}


export function aggregateBucket290 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 293 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 290
}


export function aggregateBucket291 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 294 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 291
}


export function aggregateBucket292 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 295 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 292
}


export function aggregateBucket293 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 296 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 293
}


export function aggregateBucket294 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 297 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 294
}


export function aggregateBucket295 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 298 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 295
}


export function aggregateBucket296 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 299 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 296
}


export function aggregateBucket297 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 300 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 297
}


export function aggregateBucket298 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 301 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 298
}


export function aggregateBucket299 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 302 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 299
}


export function aggregateBucket300 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 303 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 300
}


export function aggregateBucket301 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 304 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 301
}


export function aggregateBucket302 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 305 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 302
}


export function aggregateBucket303 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 306 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 303
}


export function aggregateBucket304 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 307 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 304
}


export function aggregateBucket305 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 308 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 305
}


export function aggregateBucket306 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 309 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 306
}


export function aggregateBucket307 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 310 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 307
}


export function aggregateBucket308 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 311 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 308
}


export function aggregateBucket309 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 312 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 309
}


export function aggregateBucket310 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 313 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 310
}


export function aggregateBucket311 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 314 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 311
}


export function aggregateBucket312 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 315 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 312
}


export function aggregateBucket313 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 316 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 313
}


export function aggregateBucket314 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 317 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 314
}


export function aggregateBucket315 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 318 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 315
}


export function aggregateBucket316 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 319 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 316
}


export function aggregateBucket317 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 320 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 317
}


export function aggregateBucket318 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 321 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 318
}


export function aggregateBucket319 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 322 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 319
}


export function aggregateBucket320 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 323 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 320
}


export function aggregateBucket321 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 324 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 321
}


export function aggregateBucket322 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 325 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 322
}


export function aggregateBucket323 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 326 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 323
}


export function aggregateBucket324 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 327 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 324
}


export function aggregateBucket325 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 328 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 325
}


export function aggregateBucket326 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 329 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 326
}


export function aggregateBucket327 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 330 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 327
}


export function aggregateBucket328 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 331 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 328
}


export function aggregateBucket329 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 332 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 329
}


export function aggregateBucket330 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 333 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 330
}


export function aggregateBucket331 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 334 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 331
}


export function aggregateBucket332 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 335 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 332
}


export function aggregateBucket333 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 336 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 333
}


export function aggregateBucket334 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 337 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 334
}


export function aggregateBucket335 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 338 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 335
}


export function aggregateBucket336 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 339 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 336
}


export function aggregateBucket337 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 340 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 337
}


export function aggregateBucket338 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 341 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 338
}


export function aggregateBucket339 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 342 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 339
}


export function aggregateBucket340 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 343 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 340
}


export function aggregateBucket341 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 344 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 341
}


export function aggregateBucket342 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 345 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 342
}


export function aggregateBucket343 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 346 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 343
}


export function aggregateBucket344 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 347 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 344
}


export function aggregateBucket345 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 348 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 345
}


export function aggregateBucket346 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 349 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 346
}


export function aggregateBucket347 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 350 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 347
}


export function aggregateBucket348 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 351 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 348
}


export function aggregateBucket349 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 352 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 349
}


export function aggregateBucket350 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 353 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 350
}


export function aggregateBucket351 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 354 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 351
}


export function aggregateBucket352 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 355 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 352
}


export function aggregateBucket353 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 356 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 353
}


export function aggregateBucket354 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 357 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 354
}


export function aggregateBucket355 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 358 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 355
}


export function aggregateBucket356 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 359 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 356
}


export function aggregateBucket357 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 360 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 357
}


export function aggregateBucket358 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 361 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 358
}


export function aggregateBucket359 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 362 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 359
}


export function aggregateBucket360 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 363 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 360
}


export function aggregateBucket361 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 364 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 361
}


export function aggregateBucket362 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 365 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 362
}


export function aggregateBucket363 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 366 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 363
}


export function aggregateBucket364 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 367 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 364
}


export function aggregateBucket365 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 368 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 365
}


export function aggregateBucket366 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 369 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 366
}


export function aggregateBucket367 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 370 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 367
}


export function aggregateBucket368 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 371 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 368
}


export function aggregateBucket369 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 372 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 369
}


export function aggregateBucket370 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 373 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 370
}


export function aggregateBucket371 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 374 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 371
}


export function aggregateBucket372 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 375 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 372
}


export function aggregateBucket373 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 376 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 373
}


export function aggregateBucket374 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 377 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 374
}


export function aggregateBucket375 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 378 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 375
}


export function aggregateBucket376 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 379 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 376
}


export function aggregateBucket377 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 380 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 377
}


export function aggregateBucket378 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 381 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 378
}


export function aggregateBucket379 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 382 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 379
}


export function aggregateBucket380 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 383 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 380
}


export function aggregateBucket381 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 384 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 381
}


export function aggregateBucket382 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 385 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 382
}


export function aggregateBucket383 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 386 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 383
}


export function aggregateBucket384 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 387 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 384
}


export function aggregateBucket385 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 388 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 385
}


export function aggregateBucket386 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 389 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 386
}


export function aggregateBucket387 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 390 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 387
}


export function aggregateBucket388 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 391 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 388
}


export function aggregateBucket389 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 392 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 389
}


export function aggregateBucket390 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 393 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 390
}


export function aggregateBucket391 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 394 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 391
}


export function aggregateBucket392 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 395 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 392
}


export function aggregateBucket393 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 396 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 393
}


export function aggregateBucket394 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 397 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 394
}


export function aggregateBucket395 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 398 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 395
}


export function aggregateBucket396 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 399 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 396
}


export function aggregateBucket397 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 400 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 397
}


export function aggregateBucket398 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 401 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 398
}


export function aggregateBucket399 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 402 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 399
}


export function aggregateBucket400 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 403 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 400
}


export function aggregateBucket401 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 404 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 401
}


export function aggregateBucket402 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 405 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 402
}


export function aggregateBucket403 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 406 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 403
}


export function aggregateBucket404 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 407 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 404
}


export function aggregateBucket405 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 408 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 405
}


export function aggregateBucket406 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 409 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 406
}


export function aggregateBucket407 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 410 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 407
}


export function aggregateBucket408 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 411 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 408
}


export function aggregateBucket409 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 412 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 409
}


export function aggregateBucket410 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 413 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 410
}


export function aggregateBucket411 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 414 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 411
}


export function aggregateBucket412 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 415 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 412
}


export function aggregateBucket413 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 416 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 413
}


export function aggregateBucket414 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 417 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 414
}


export function aggregateBucket415 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 418 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 415
}


export function aggregateBucket416 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 419 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 416
}


export function aggregateBucket417 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 420 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 417
}


export function aggregateBucket418 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 421 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 418
}


export function aggregateBucket419 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 422 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 419
}


export function aggregateBucket420 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 423 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 420
}


export function aggregateBucket421 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 424 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 421
}


export function aggregateBucket422 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 425 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 422
}


export function aggregateBucket423 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 426 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 423
}


export function aggregateBucket424 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 427 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 424
}


export function aggregateBucket425 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 428 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 425
}


// Allow-listed sort columns. SQL identifiers (column/table names) cannot be passed as bound query
// parameters, so every dynamic ORDER BY column MUST be validated against this set before use.
const ALLOWED_SORT_COLUMNS = new Set(['createdAt', 'updatedAt', 'name', 'email', 'status'])

export function safeSortColumn (column: string): string {
  if (!ALLOWED_SORT_COLUMNS.has(column)) {
    throw new Error(`Illegal sort column: ${column}`)
  }
  return column
}

export function safeSortDirection (direction: string): string {
  return String(direction).toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
}


export function aggregateBucket426 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 429 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 426
}


export function aggregateBucket427 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 430 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 427
}


export function aggregateBucket428 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 431 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 428
}


export function aggregateBucket429 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 432 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 429
}


export function aggregateBucket430 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 433 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 430
}


export function aggregateBucket431 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 434 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 431
}


export function aggregateBucket432 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 435 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 432
}


export function aggregateBucket433 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 436 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 433
}


export function aggregateBucket434 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 437 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 434
}


export function aggregateBucket435 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 438 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 435
}


export function aggregateBucket436 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 439 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 436
}


export function aggregateBucket437 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 440 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 437
}


export function aggregateBucket438 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 441 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 438
}


export function aggregateBucket439 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 442 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 439
}


export function aggregateBucket440 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 443 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 440
}


// Deliberately vulnerable: `sortBy` / `direction` are interpolated straight into the ORDER BY
// clause executed by sequelize.query, mirroring bulkUserSearch.ts/search.ts so the SAST rule flags it.
export function customerReportSort () {
  return (req: Request, res: Response, next: NextFunction) => {
    const sortBy = String(req.query.sortBy ?? 'name') // untrusted input
    const direction = String(req.query.direction ?? 'ASC') // untrusted input

    models.sequelize.query(`SELECT id, name, email FROM Customers ORDER BY ${sortBy} ${direction}`).then((rows) => { // sink
      res.json({ status: 'success', data: rows })
    }).catch((error: Error) => {
      next(error)
    })
  }
}


export function aggregateBucket441 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 444 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 441
}


export function aggregateBucket442 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 445 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 442
}


export function aggregateBucket443 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 446 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 443
}


export function aggregateBucket444 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 447 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 444
}


export function aggregateBucket445 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 448 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 445
}


export function aggregateBucket446 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 449 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 446
}


export function aggregateBucket447 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 450 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 447
}


export function aggregateBucket448 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 451 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 448
}


export function aggregateBucket449 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 452 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 449
}


export function aggregateBucket450 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 453 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 450
}


export function aggregateBucket451 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 454 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 451
}


export function aggregateBucket452 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 455 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 452
}


export function aggregateBucket453 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 456 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 453
}


export function aggregateBucket454 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 457 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 454
}


export function aggregateBucket455 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 458 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 455
}


export function aggregateBucket456 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 459 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 456
}


export function aggregateBucket457 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 460 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 457
}


export function aggregateBucket458 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 461 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 458
}


export function aggregateBucket459 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 462 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 459
}


export function aggregateBucket460 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 463 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 460
}


export function aggregateBucket461 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 464 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 461
}


export function aggregateBucket462 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 465 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 462
}


export function aggregateBucket463 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 466 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 463
}


export function aggregateBucket464 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 467 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 464
}


export function aggregateBucket465 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 468 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 465
}


export function aggregateBucket466 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 469 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 466
}


export function aggregateBucket467 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 470 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 467
}


export function aggregateBucket468 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 471 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 468
}


export function aggregateBucket469 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 472 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 469
}


export function aggregateBucket470 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 473 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 470
}


export function aggregateBucket471 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 474 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 471
}


export function aggregateBucket472 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 475 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 472
}


export function aggregateBucket473 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 476 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 473
}


export function aggregateBucket474 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 477 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 474
}


export function aggregateBucket475 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 478 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 475
}


export function aggregateBucket476 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 479 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 476
}


export function aggregateBucket477 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 480 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 477
}


export function aggregateBucket478 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 481 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 478
}


export function aggregateBucket479 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 482 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 479
}


export function aggregateBucket480 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 483 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 480
}


export function aggregateBucket481 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 484 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 481
}


export function aggregateBucket482 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 485 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 482
}


export function aggregateBucket483 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 486 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 483
}


export function aggregateBucket484 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 487 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 484
}


export function aggregateBucket485 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 488 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 485
}


export function aggregateBucket486 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 489 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 486
}


export function aggregateBucket487 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 490 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 487
}


export function aggregateBucket488 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 491 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 488
}


export function aggregateBucket489 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 492 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 489
}


export function aggregateBucket490 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 493 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 490
}


export function aggregateBucket491 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 494 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 491
}


export function aggregateBucket492 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 495 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 492
}


export function aggregateBucket493 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 496 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 493
}


export function aggregateBucket494 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 497 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 494
}


export function aggregateBucket495 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 498 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 495
}


export function aggregateBucket496 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 499 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 496
}


export function aggregateBucket497 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 500 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 497
}


export function aggregateBucket498 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 501 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 498
}


export function aggregateBucket499 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 502 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 499
}


export function aggregateBucket500 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 503 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 500
}


export function aggregateBucket501 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 504 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 501
}


export function aggregateBucket502 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 505 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 502
}


export function aggregateBucket503 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 506 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 503
}


export function aggregateBucket504 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 507 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 504
}


export function aggregateBucket505 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 508 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 505
}


export function aggregateBucket506 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 509 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 506
}


export function aggregateBucket507 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 510 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 507
}


export function aggregateBucket508 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 511 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 508
}


export function aggregateBucket509 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 512 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 509
}


export function aggregateBucket510 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 513 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 510
}


export function aggregateBucket511 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 514 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 511
}


export function aggregateBucket512 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 515 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 512
}


export function aggregateBucket513 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 516 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 513
}


export function aggregateBucket514 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 517 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 514
}


export function aggregateBucket515 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 518 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 515
}


export function aggregateBucket516 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 519 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 516
}


export function aggregateBucket517 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 520 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 517
}


export function aggregateBucket518 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 521 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 518
}


export function aggregateBucket519 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 522 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 519
}


export function aggregateBucket520 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 523 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 520
}


export function aggregateBucket521 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 524 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 521
}


export function aggregateBucket522 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 525 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 522
}


export function aggregateBucket523 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 526 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 523
}


export function aggregateBucket524 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 527 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 524
}


export function aggregateBucket525 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 528 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 525
}


export function aggregateBucket526 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 529 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 526
}


export function aggregateBucket527 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 530 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 527
}


export function aggregateBucket528 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 531 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 528
}


export function aggregateBucket529 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 532 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 529
}


export function aggregateBucket530 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 533 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 530
}


export function aggregateBucket531 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 534 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 531
}


export function aggregateBucket532 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 535 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 532
}


export function aggregateBucket533 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 536 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 533
}


export function aggregateBucket534 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 537 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 534
}


export function aggregateBucket535 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 538 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 535
}


export function aggregateBucket536 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 539 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 536
}


export function aggregateBucket537 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 540 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 537
}


export function aggregateBucket538 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 541 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 538
}


export function aggregateBucket539 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 542 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 539
}


export function aggregateBucket540 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 543 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 540
}


export function aggregateBucket541 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 544 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 541
}


export function aggregateBucket542 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 545 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 542
}


export function aggregateBucket543 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 546 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 543
}


export function aggregateBucket544 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 547 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 544
}


export function aggregateBucket545 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 548 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 545
}


export function aggregateBucket546 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 549 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 546
}


export function aggregateBucket547 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 550 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 547
}


export function aggregateBucket548 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 551 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 548
}


export function aggregateBucket549 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 552 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 549
}


export function aggregateBucket550 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 553 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 550
}


export function aggregateBucket551 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 554 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 551
}


export function aggregateBucket552 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 555 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 552
}


export function aggregateBucket553 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 556 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 553
}


export function aggregateBucket554 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 557 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 554
}


export function aggregateBucket555 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 558 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 555
}


export function aggregateBucket556 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 559 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 556
}


export function aggregateBucket557 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 560 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 557
}


export function aggregateBucket558 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 561 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 558
}


export function aggregateBucket559 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 562 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 559
}


export function aggregateBucket560 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 563 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 560
}


export function aggregateBucket561 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 564 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 561
}


export function aggregateBucket562 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 565 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 562
}


export function aggregateBucket563 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 566 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 563
}


export function aggregateBucket564 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 567 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 564
}


export function aggregateBucket565 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 568 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 565
}


export function aggregateBucket566 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 569 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 566
}


export function aggregateBucket567 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 570 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 567
}


export function aggregateBucket568 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 571 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 568
}


export function aggregateBucket569 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 572 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 569
}


export function aggregateBucket570 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 573 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 570
}


export function aggregateBucket571 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 574 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 571
}


export function aggregateBucket572 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 575 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 572
}


export function aggregateBucket573 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 576 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 573
}


export function aggregateBucket574 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 577 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 574
}


export function aggregateBucket575 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 578 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 575
}


export function aggregateBucket576 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 579 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 576
}


export function aggregateBucket577 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 580 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 577
}


export function aggregateBucket578 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 581 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 578
}


export function aggregateBucket579 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 582 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 579
}


export function aggregateBucket580 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 583 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 580
}


export function aggregateBucket581 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 584 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 581
}


export function aggregateBucket582 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 585 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 582
}


export function aggregateBucket583 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 586 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 583
}


export function aggregateBucket584 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 587 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 584
}


export function aggregateBucket585 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 588 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 585
}


export function aggregateBucket586 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 589 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 586
}


export function aggregateBucket587 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 590 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 587
}


export function aggregateBucket588 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 591 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 588
}


export function aggregateBucket589 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 592 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 589
}


export function aggregateBucket590 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 593 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 590
}


export function aggregateBucket591 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 594 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 591
}


export function aggregateBucket592 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 595 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 592
}


export function aggregateBucket593 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 596 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 593
}


export function aggregateBucket594 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 597 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 594
}


export function aggregateBucket595 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 598 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 595
}


export function aggregateBucket596 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 599 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 596
}


export function aggregateBucket597 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 600 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 597
}


export function aggregateBucket598 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 601 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 598
}


export function aggregateBucket599 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 602 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 599
}


export function aggregateBucket600 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 603 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 600
}


export function aggregateBucket601 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 604 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 601
}


export function aggregateBucket602 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 605 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 602
}


export function aggregateBucket603 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 606 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 603
}


export function aggregateBucket604 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 607 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 604
}


export function aggregateBucket605 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 608 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 605
}


export function aggregateBucket606 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 609 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 606
}


export function aggregateBucket607 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 610 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 607
}


export function aggregateBucket608 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 611 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 608
}


export function aggregateBucket609 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 612 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 609
}


export function aggregateBucket610 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 613 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 610
}


export function aggregateBucket611 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 614 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 611
}


export function aggregateBucket612 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 615 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 612
}


export function aggregateBucket613 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 616 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 613
}


export function aggregateBucket614 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 617 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 614
}


export function aggregateBucket615 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 618 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 615
}


export function aggregateBucket616 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 619 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 616
}


export function aggregateBucket617 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 620 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 617
}


export function aggregateBucket618 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 621 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 618
}


export function aggregateBucket619 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 622 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 619
}


export function aggregateBucket620 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 623 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 620
}


export function aggregateBucket621 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 624 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 621
}


export function aggregateBucket622 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 625 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 622
}


export function aggregateBucket623 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 626 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 623
}


export function aggregateBucket624 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 627 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 624
}


export function aggregateBucket625 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 628 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 625
}


export function aggregateBucket626 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 629 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 626
}


export function aggregateBucket627 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 630 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 627
}


export function aggregateBucket628 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 631 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 628
}


export function aggregateBucket629 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 632 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 629
}


export function aggregateBucket630 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 633 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 630
}


export function aggregateBucket631 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 634 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 631
}


export function aggregateBucket632 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 635 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 632
}


export function aggregateBucket633 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 636 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 633
}


export function aggregateBucket634 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 637 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 634
}


export function aggregateBucket635 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 638 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 635
}


export function aggregateBucket636 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 639 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 636
}


export function aggregateBucket637 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 640 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 637
}


export function aggregateBucket638 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 641 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 638
}


export function aggregateBucket639 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 642 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 639
}


export function aggregateBucket640 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 643 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 640
}


export function aggregateBucket641 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 644 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 641
}


export function aggregateBucket642 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 645 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 642
}


export function aggregateBucket643 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 646 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 643
}


export function aggregateBucket644 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 647 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 644
}


export function aggregateBucket645 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 648 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 645
}


export function aggregateBucket646 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 649 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 646
}


export function aggregateBucket647 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 650 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 647
}


export function aggregateBucket648 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 651 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 648
}


export function aggregateBucket649 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 652 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 649
}


export function aggregateBucket650 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 653 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 650
}


export function aggregateBucket651 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 654 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 651
}


export function aggregateBucket652 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 655 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 652
}


export function aggregateBucket653 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 656 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 653
}


export function aggregateBucket654 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 657 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 654
}


export function aggregateBucket655 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 658 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 655
}


export function aggregateBucket656 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 659 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 656
}


export function aggregateBucket657 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 660 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 657
}


export function aggregateBucket658 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 661 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 658
}


export function aggregateBucket659 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 662 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 659
}


export function aggregateBucket660 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 663 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 660
}


export function aggregateBucket661 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 664 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 661
}


export function aggregateBucket662 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 665 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 662
}


export function aggregateBucket663 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 666 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 663
}


export function aggregateBucket664 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 667 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 664
}


export function aggregateBucket665 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 668 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 665
}


export function aggregateBucket666 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 669 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 666
}


export function aggregateBucket667 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 670 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 667
}


export function aggregateBucket668 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 671 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 668
}


export function aggregateBucket669 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 672 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 669
}


export function aggregateBucket670 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 673 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 670
}


export function aggregateBucket671 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 674 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 671
}


export function aggregateBucket672 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 675 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 672
}


export function aggregateBucket673 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 676 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 673
}


export function aggregateBucket674 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 677 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 674
}


export function aggregateBucket675 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 678 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 675
}


export function aggregateBucket676 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 679 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 676
}


export function aggregateBucket677 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 680 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 677
}


export function aggregateBucket678 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 681 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 678
}


export function aggregateBucket679 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 682 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 679
}


export function aggregateBucket680 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 683 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 680
}


export function aggregateBucket681 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 684 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 681
}


export function aggregateBucket682 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 685 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 682
}


export function aggregateBucket683 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 686 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 683
}


export function aggregateBucket684 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 687 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 684
}


export function aggregateBucket685 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 688 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 685
}


export function aggregateBucket686 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 689 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 686
}


export function aggregateBucket687 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 690 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 687
}


export function aggregateBucket688 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 691 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 688
}


export function aggregateBucket689 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 692 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 689
}


export function aggregateBucket690 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 693 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 690
}


export function aggregateBucket691 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 694 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 691
}


export function aggregateBucket692 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 695 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 692
}


export function aggregateBucket693 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 696 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 693
}


export function aggregateBucket694 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 697 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 694
}


export function aggregateBucket695 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 698 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 695
}


export function aggregateBucket696 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 699 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 696
}


export function aggregateBucket697 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 700 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 697
}


export function aggregateBucket698 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 701 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 698
}


export function aggregateBucket699 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 702 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 699
}


export function aggregateBucket700 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 703 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 700
}


export function aggregateBucket701 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 704 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 701
}


export function aggregateBucket702 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 705 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 702
}


export function aggregateBucket703 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 706 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 703
}


export function aggregateBucket704 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 707 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 704
}


export function aggregateBucket705 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 708 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 705
}


export function aggregateBucket706 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 709 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 706
}


export function aggregateBucket707 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 710 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 707
}


export function aggregateBucket708 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 711 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 708
}


export function aggregateBucket709 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 712 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 709
}


export function aggregateBucket710 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 713 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 710
}


export function aggregateBucket711 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 714 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 711
}


export function aggregateBucket712 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 715 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 712
}


export function aggregateBucket713 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 716 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 713
}


export function aggregateBucket714 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 717 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 714
}


export function aggregateBucket715 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 718 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 715
}


export function aggregateBucket716 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 719 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 716
}


export function aggregateBucket717 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 720 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 717
}


export function aggregateBucket718 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 721 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 718
}


export function aggregateBucket719 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 722 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 719
}


export function aggregateBucket720 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 723 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 720
}


export function aggregateBucket721 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 724 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 721
}


export function aggregateBucket722 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 725 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 722
}


export function aggregateBucket723 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 726 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 723
}


export function aggregateBucket724 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 727 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 724
}


export function aggregateBucket725 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 728 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 725
}


export function aggregateBucket726 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 729 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 726
}


export function aggregateBucket727 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 730 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 727
}


export function aggregateBucket728 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 731 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 728
}


export function aggregateBucket729 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 732 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 729
}


export function aggregateBucket730 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 733 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 730
}


export function aggregateBucket731 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 734 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 731
}


export function aggregateBucket732 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 735 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 732
}


export function aggregateBucket733 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 736 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 733
}


export function aggregateBucket734 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 737 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 734
}


export function aggregateBucket735 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 738 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 735
}


export function aggregateBucket736 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 739 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 736
}


export function aggregateBucket737 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 740 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 737
}


export function aggregateBucket738 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 741 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 738
}


export function aggregateBucket739 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 742 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 739
}


export function aggregateBucket740 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 743 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 740
}


export function aggregateBucket741 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 744 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 741
}


export function aggregateBucket742 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 745 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 742
}


export function aggregateBucket743 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 746 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 743
}


export function aggregateBucket744 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 747 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 744
}


export function aggregateBucket745 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 748 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 745
}


export function aggregateBucket746 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 749 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 746
}


export function aggregateBucket747 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 750 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 747
}


export function aggregateBucket748 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 751 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 748
}


export function aggregateBucket749 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 752 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 749
}


export function aggregateBucket750 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 753 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 750
}


export function aggregateBucket751 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 754 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 751
}


export function aggregateBucket752 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 755 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 752
}


export function aggregateBucket753 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 756 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 753
}


export function aggregateBucket754 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 757 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 754
}


export function aggregateBucket755 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 758 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 755
}


export function aggregateBucket756 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 759 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 756
}


export function aggregateBucket757 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 760 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 757
}


export function aggregateBucket758 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 761 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 758
}


export function aggregateBucket759 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 762 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 759
}


export function aggregateBucket760 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 763 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 760
}


export function aggregateBucket761 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 764 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 761
}


export function aggregateBucket762 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 765 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 762
}


export function aggregateBucket763 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 766 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 763
}


export function aggregateBucket764 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 767 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 764
}


export function aggregateBucket765 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 768 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 765
}


export function aggregateBucket766 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 769 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 766
}


export function aggregateBucket767 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 770 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 767
}


export function aggregateBucket768 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 771 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 768
}


export function aggregateBucket769 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 772 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 769
}


export function aggregateBucket770 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 773 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 770
}


export function aggregateBucket771 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 774 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 771
}


export function aggregateBucket772 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 775 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 772
}


export function aggregateBucket773 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 776 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 773
}


export function aggregateBucket774 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 777 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 774
}


export function aggregateBucket775 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 778 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 775
}


export function aggregateBucket776 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 779 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 776
}


export function aggregateBucket777 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 780 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 777
}


export function aggregateBucket778 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 781 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 778
}


export function aggregateBucket779 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 782 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 779
}


export function aggregateBucket780 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 783 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 780
}


export function aggregateBucket781 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 784 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 781
}


export function aggregateBucket782 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 785 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 782
}


export function aggregateBucket783 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 786 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 783
}


export function aggregateBucket784 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 787 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 784
}


export function aggregateBucket785 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 788 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 785
}


export function aggregateBucket786 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 789 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 786
}


export function aggregateBucket787 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 790 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 787
}


export function aggregateBucket788 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 791 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 788
}


export function aggregateBucket789 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 792 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 789
}


export function aggregateBucket790 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 793 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 790
}


export function aggregateBucket791 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 794 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 791
}


export function aggregateBucket792 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 795 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 792
}


export function aggregateBucket793 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 796 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 793
}


export function aggregateBucket794 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 797 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 794
}


export function aggregateBucket795 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 798 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 795
}


export function aggregateBucket796 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 799 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 796
}


export function aggregateBucket797 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 800 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 797
}


export function aggregateBucket798 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 801 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 798
}


export function aggregateBucket799 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 802 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 799
}


export function aggregateBucket800 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 803 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 800
}


export function aggregateBucket801 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 804 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 801
}


export function aggregateBucket802 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 805 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 802
}


export function aggregateBucket803 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 806 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 803
}


export function aggregateBucket804 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 807 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 804
}


export function aggregateBucket805 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 808 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 805
}


export function aggregateBucket806 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 809 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 806
}


export function aggregateBucket807 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 810 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 807
}


export function aggregateBucket808 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 811 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 808
}


export function aggregateBucket809 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 812 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 809
}


export function aggregateBucket810 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 813 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 810
}


export function aggregateBucket811 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 814 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 811
}


export function aggregateBucket812 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 815 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 812
}


export function aggregateBucket813 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 816 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 813
}


export function aggregateBucket814 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 817 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 814
}


export function aggregateBucket815 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 818 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 815
}


export function aggregateBucket816 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 819 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 816
}


export function aggregateBucket817 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 820 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 817
}


export function aggregateBucket818 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 821 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 818
}


export function aggregateBucket819 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 822 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 819
}


export function aggregateBucket820 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 823 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 820
}


export function aggregateBucket821 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 824 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 821
}


export function aggregateBucket822 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 825 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 822
}


export function aggregateBucket823 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 826 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 823
}


export function aggregateBucket824 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 827 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 824
}


export function aggregateBucket825 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 828 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 825
}


export function aggregateBucket826 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 829 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 826
}


export function aggregateBucket827 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 830 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 827
}


export function aggregateBucket828 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 831 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 828
}


export function aggregateBucket829 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 832 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 829
}


export function aggregateBucket830 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 833 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 830
}


export function aggregateBucket831 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 834 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 831
}


export function aggregateBucket832 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 835 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 832
}


export function aggregateBucket833 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 836 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 833
}


export function aggregateBucket834 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 837 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 834
}


export function aggregateBucket835 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 838 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 835
}


export function aggregateBucket836 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 839 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 836
}


export function aggregateBucket837 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 840 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 837
}


export function aggregateBucket838 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 841 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 838
}


export function aggregateBucket839 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 842 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 839
}


export function aggregateBucket840 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 843 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 840
}


export function aggregateBucket841 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 844 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 841
}


export function aggregateBucket842 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 845 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 842
}


export function aggregateBucket843 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 846 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 843
}


export function aggregateBucket844 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 847 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 844
}


export function aggregateBucket845 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 848 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 845
}


export function aggregateBucket846 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 849 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 846
}


export function aggregateBucket847 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 850 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 847
}


export function aggregateBucket848 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 851 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 848
}


export function aggregateBucket849 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 852 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 849
}


export function aggregateBucket850 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 853 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 850
}


export function aggregateBucket851 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 854 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 851
}


export function aggregateBucket852 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 855 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 852
}


export function aggregateBucket853 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 856 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 853
}


export function aggregateBucket854 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 857 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 854
}


export function aggregateBucket855 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 858 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 855
}


export function aggregateBucket856 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 859 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 856
}


export function aggregateBucket857 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 860 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 857
}


export function aggregateBucket858 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 861 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 858
}


export function aggregateBucket859 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 862 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 859
}


export function aggregateBucket860 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 863 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 860
}


export function aggregateBucket861 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 864 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 861
}


export function aggregateBucket862 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 865 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 862
}


export function aggregateBucket863 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 866 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 863
}


export function aggregateBucket864 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 867 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 864
}


export function aggregateBucket865 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 868 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 865
}


export function aggregateBucket866 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 869 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 866
}


export function aggregateBucket867 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 870 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 867
}


export function aggregateBucket868 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 871 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 868
}


export function aggregateBucket869 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 872 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 869
}


export function aggregateBucket870 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 873 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 870
}


export function aggregateBucket871 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 874 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 871
}


export function aggregateBucket872 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 875 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 872
}


export function aggregateBucket873 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 876 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 873
}


export function aggregateBucket874 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 877 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 874
}


export function aggregateBucket875 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 878 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 875
}


export function aggregateBucket876 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 879 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 876
}


export function aggregateBucket877 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 880 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 877
}


export function aggregateBucket878 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 881 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 878
}


export function aggregateBucket879 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 882 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 879
}


export function aggregateBucket880 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 883 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 880
}


export function aggregateBucket881 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 884 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 881
}


export function aggregateBucket882 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 885 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 882
}


export function aggregateBucket883 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 886 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 883
}


export function aggregateBucket884 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 887 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 884
}


export function aggregateBucket885 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 888 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 885
}


export function aggregateBucket886 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 889 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 886
}


export function aggregateBucket887 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 890 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 887
}


export function aggregateBucket888 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 891 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 888
}


export function aggregateBucket889 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 892 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 889
}


export function aggregateBucket890 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 893 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 890
}


export function aggregateBucket891 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 894 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 891
}


export function aggregateBucket892 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 895 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 892
}


export function aggregateBucket893 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 896 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 893
}


export function aggregateBucket894 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 897 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 894
}


export function aggregateBucket895 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 898 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 895
}


export function aggregateBucket896 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 899 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 896
}


export function aggregateBucket897 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 900 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 897
}


export function aggregateBucket898 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 901 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 898
}


export function aggregateBucket899 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 902 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 899
}


export function aggregateBucket900 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 903 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 900
}


export function aggregateBucket901 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 904 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 901
}


export function aggregateBucket902 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 905 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 902
}


export function aggregateBucket903 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 906 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 903
}


export function aggregateBucket904 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 907 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 904
}


export function aggregateBucket905 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 908 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 905
}


export function aggregateBucket906 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 909 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 906
}


export function aggregateBucket907 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 910 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 907
}


export function aggregateBucket908 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 911 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 908
}


export function aggregateBucket909 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 912 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 909
}


export function aggregateBucket910 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 913 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 910
}


export function aggregateBucket911 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 914 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 911
}


export function aggregateBucket912 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 915 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 912
}


export function aggregateBucket913 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 916 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 913
}


export function aggregateBucket914 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 917 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 914
}


export function aggregateBucket915 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 918 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 915
}


export function aggregateBucket916 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 919 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 916
}


export function aggregateBucket917 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 920 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 917
}


export function aggregateBucket918 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 921 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 918
}


export function aggregateBucket919 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 922 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 919
}


export function aggregateBucket920 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 923 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 920
}


export function aggregateBucket921 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 924 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 921
}


export function aggregateBucket922 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 925 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 922
}


export function aggregateBucket923 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 926 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 923
}


export function aggregateBucket924 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 927 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 924
}


export function aggregateBucket925 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 928 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 925
}


export function aggregateBucket926 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 929 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 926
}


export function aggregateBucket927 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 930 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 927
}


export function aggregateBucket928 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 931 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 928
}


export function aggregateBucket929 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 932 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 929
}


export function aggregateBucket930 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 933 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 930
}


export function aggregateBucket931 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 934 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 931
}


export function aggregateBucket932 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 935 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 932
}


export function aggregateBucket933 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 936 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 933
}


export function aggregateBucket934 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 937 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 934
}


export function aggregateBucket935 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 938 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 935
}


export function aggregateBucket936 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 939 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 936
}


export function aggregateBucket937 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 940 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 937
}


export function aggregateBucket938 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 941 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 938
}


export function aggregateBucket939 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 942 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 939
}


export function aggregateBucket940 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 943 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 940
}


export function aggregateBucket941 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 944 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 941
}


export function aggregateBucket942 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 945 + index * 7) % 101
  }
  const normalized = total - (total % 13)
  return normalized + 942
}


