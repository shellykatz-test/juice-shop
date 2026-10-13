/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// AppSec test fixture for AI-autofix RAGGED windowing: the SQL-injection sink is buried in the
// middle of a single >180KB handler, so a 180KB window centered on it includes the opening braces
// but NOT the closing braces (the window ends with unclosed `{`). The fix is still localized to the
// centered sink, ~90KB from either ragged edge.

import { type Request, type Response } from 'express'
import * as models from '../models/index'


export function topBucket0 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 3 + index) % 97
  }
  return total
}


export function topBucket1 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 4 + index) % 97
  }
  return total
}


export function topBucket2 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 5 + index) % 97
  }
  return total
}


export function topBucket3 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 6 + index) % 97
  }
  return total
}


export function topBucket4 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 7 + index) % 97
  }
  return total
}


export function topBucket5 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 8 + index) % 97
  }
  return total
}


export function topBucket6 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 9 + index) % 97
  }
  return total
}


export function topBucket7 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 10 + index) % 97
  }
  return total
}


export function topBucket8 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 11 + index) % 97
  }
  return total
}


export function topBucket9 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 12 + index) % 97
  }
  return total
}


export function topBucket10 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 13 + index) % 97
  }
  return total
}


export function topBucket11 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 14 + index) % 97
  }
  return total
}


export function topBucket12 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 15 + index) % 97
  }
  return total
}


export function topBucket13 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 16 + index) % 97
  }
  return total
}


export function topBucket14 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 17 + index) % 97
  }
  return total
}


export function topBucket15 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 18 + index) % 97
  }
  return total
}


export function topBucket16 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 19 + index) % 97
  }
  return total
}


export function topBucket17 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 20 + index) % 97
  }
  return total
}


export function topBucket18 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 21 + index) % 97
  }
  return total
}


export function topBucket19 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 22 + index) % 97
  }
  return total
}


export function topBucket20 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 23 + index) % 97
  }
  return total
}


export function topBucket21 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 24 + index) % 97
  }
  return total
}


export function topBucket22 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 25 + index) % 97
  }
  return total
}


export function topBucket23 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 26 + index) % 97
  }
  return total
}


export function topBucket24 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 27 + index) % 97
  }
  return total
}


export function topBucket25 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 28 + index) % 97
  }
  return total
}


export function topBucket26 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 29 + index) % 97
  }
  return total
}


export function topBucket27 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 30 + index) % 97
  }
  return total
}


export function topBucket28 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 31 + index) % 97
  }
  return total
}


export function topBucket29 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 32 + index) % 97
  }
  return total
}


export function topBucket30 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 33 + index) % 97
  }
  return total
}


export function topBucket31 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 34 + index) % 97
  }
  return total
}


export function topBucket32 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 35 + index) % 97
  }
  return total
}


export function topBucket33 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 36 + index) % 97
  }
  return total
}


export function topBucket34 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 37 + index) % 97
  }
  return total
}


export function topBucket35 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 38 + index) % 97
  }
  return total
}


export function topBucket36 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 39 + index) % 97
  }
  return total
}


export function topBucket37 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 40 + index) % 97
  }
  return total
}


export function topBucket38 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 41 + index) % 97
  }
  return total
}


export function topBucket39 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 42 + index) % 97
  }
  return total
}


export function topBucket40 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 43 + index) % 97
  }
  return total
}


export function topBucket41 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 44 + index) % 97
  }
  return total
}


export function topBucket42 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 45 + index) % 97
  }
  return total
}


export function topBucket43 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 46 + index) % 97
  }
  return total
}


export function topBucket44 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 47 + index) % 97
  }
  return total
}


export function topBucket45 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 48 + index) % 97
  }
  return total
}


export function topBucket46 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 49 + index) % 97
  }
  return total
}


export function topBucket47 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 50 + index) % 97
  }
  return total
}


export function topBucket48 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 51 + index) % 97
  }
  return total
}


export function topBucket49 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 52 + index) % 97
  }
  return total
}


export function topBucket50 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 53 + index) % 97
  }
  return total
}


export function topBucket51 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 54 + index) % 97
  }
  return total
}


export function topBucket52 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 55 + index) % 97
  }
  return total
}


export function topBucket53 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 56 + index) % 97
  }
  return total
}


export function topBucket54 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 57 + index) % 97
  }
  return total
}


export function topBucket55 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 58 + index) % 97
  }
  return total
}


export function topBucket56 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 59 + index) % 97
  }
  return total
}


export function topBucket57 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 60 + index) % 97
  }
  return total
}


export function topBucket58 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 61 + index) % 97
  }
  return total
}


export function topBucket59 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 62 + index) % 97
  }
  return total
}


export function topBucket60 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 63 + index) % 97
  }
  return total
}


export function topBucket61 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 64 + index) % 97
  }
  return total
}


export function topBucket62 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 65 + index) % 97
  }
  return total
}


export function topBucket63 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 66 + index) % 97
  }
  return total
}


export function topBucket64 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 67 + index) % 97
  }
  return total
}


export function topBucket65 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 68 + index) % 97
  }
  return total
}


export function topBucket66 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 69 + index) % 97
  }
  return total
}


export function topBucket67 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 70 + index) % 97
  }
  return total
}


export function topBucket68 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 71 + index) % 97
  }
  return total
}


export function topBucket69 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 72 + index) % 97
  }
  return total
}


export function topBucket70 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 73 + index) % 97
  }
  return total
}


export function topBucket71 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 74 + index) % 97
  }
  return total
}


export function topBucket72 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 75 + index) % 97
  }
  return total
}


export function topBucket73 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 76 + index) % 97
  }
  return total
}


export function topBucket74 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 77 + index) % 97
  }
  return total
}


export function topBucket75 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 78 + index) % 97
  }
  return total
}


export function topBucket76 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 79 + index) % 97
  }
  return total
}


export function topBucket77 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 80 + index) % 97
  }
  return total
}


export function topBucket78 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 81 + index) % 97
  }
  return total
}


export function topBucket79 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 82 + index) % 97
  }
  return total
}


export function topBucket80 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 83 + index) % 97
  }
  return total
}


export function topBucket81 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 84 + index) % 97
  }
  return total
}


export function topBucket82 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 85 + index) % 97
  }
  return total
}


export function topBucket83 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 86 + index) % 97
  }
  return total
}


export function topBucket84 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 87 + index) % 97
  }
  return total
}


export function topBucket85 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 88 + index) % 97
  }
  return total
}


export function topBucket86 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 89 + index) % 97
  }
  return total
}


export function topBucket87 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 90 + index) % 97
  }
  return total
}


export function topBucket88 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 91 + index) % 97
  }
  return total
}


export function topBucket89 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 92 + index) % 97
  }
  return total
}


export function topBucket90 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 93 + index) % 97
  }
  return total
}


export function topBucket91 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 94 + index) % 97
  }
  return total
}


export function topBucket92 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 95 + index) % 97
  }
  return total
}


export function topBucket93 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 96 + index) % 97
  }
  return total
}


export function topBucket94 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 97 + index) % 97
  }
  return total
}


export function topBucket95 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 98 + index) % 97
  }
  return total
}


export function topBucket96 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 99 + index) % 97
  }
  return total
}


export function topBucket97 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 100 + index) % 97
  }
  return total
}


export function topBucket98 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 101 + index) % 97
  }
  return total
}


export function topBucket99 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 102 + index) % 97
  }
  return total
}


export function topBucket100 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 103 + index) % 97
  }
  return total
}


export function topBucket101 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 104 + index) % 97
  }
  return total
}


export function topBucket102 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 105 + index) % 97
  }
  return total
}


export function topBucket103 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 106 + index) % 97
  }
  return total
}


export function topBucket104 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 107 + index) % 97
  }
  return total
}


export function topBucket105 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 108 + index) % 97
  }
  return total
}


export function topBucket106 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 109 + index) % 97
  }
  return total
}


export function topBucket107 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 110 + index) % 97
  }
  return total
}


export function topBucket108 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 111 + index) % 97
  }
  return total
}


export function topBucket109 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 112 + index) % 97
  }
  return total
}


export function topBucket110 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 113 + index) % 97
  }
  return total
}


export function topBucket111 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 114 + index) % 97
  }
  return total
}


export function topBucket112 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 115 + index) % 97
  }
  return total
}


export function topBucket113 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 116 + index) % 97
  }
  return total
}


export function topBucket114 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 117 + index) % 97
  }
  return total
}


export function topBucket115 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 118 + index) % 97
  }
  return total
}


export function topBucket116 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 119 + index) % 97
  }
  return total
}


export function topBucket117 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 120 + index) % 97
  }
  return total
}


export function topBucket118 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 121 + index) % 97
  }
  return total
}


export function topBucket119 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 122 + index) % 97
  }
  return total
}


export function topBucket120 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 123 + index) % 97
  }
  return total
}


export function topBucket121 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 124 + index) % 97
  }
  return total
}


export function topBucket122 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 125 + index) % 97
  }
  return total
}


export function topBucket123 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 126 + index) % 97
  }
  return total
}


export function topBucket124 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 127 + index) % 97
  }
  return total
}


export function topBucket125 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 128 + index) % 97
  }
  return total
}


export function topBucket126 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 129 + index) % 97
  }
  return total
}


export function topBucket127 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 130 + index) % 97
  }
  return total
}


export function topBucket128 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 131 + index) % 97
  }
  return total
}


export function topBucket129 (rows: number[]): number {
  let total = 0
  for (let index = 0; index < rows.length; index++) {
    total += (rows[index] * 132 + index) % 97
  }
  return total
}


export function customerReportGiant () {
  return (req: Request, res: Response) => {
    let acc = 0
    acc += (0 * 3 + 7) % 101
    acc += (1 * 3 + 7) % 101
    acc += (2 * 3 + 7) % 101
    acc += (3 * 3 + 7) % 101
    acc += (4 * 3 + 7) % 101
    acc += (5 * 3 + 7) % 101
    acc += (6 * 3 + 7) % 101
    acc += (7 * 3 + 7) % 101
    acc += (8 * 3 + 7) % 101
    acc += (9 * 3 + 7) % 101
    acc += (10 * 3 + 7) % 101
    acc += (11 * 3 + 7) % 101
    acc += (12 * 3 + 7) % 101
    acc += (13 * 3 + 7) % 101
    acc += (14 * 3 + 7) % 101
    acc += (15 * 3 + 7) % 101
    acc += (16 * 3 + 7) % 101
    acc += (17 * 3 + 7) % 101
    acc += (18 * 3 + 7) % 101
    acc += (19 * 3 + 7) % 101
    acc += (20 * 3 + 7) % 101
    acc += (21 * 3 + 7) % 101
    acc += (22 * 3 + 7) % 101
    acc += (23 * 3 + 7) % 101
    acc += (24 * 3 + 7) % 101
    acc += (25 * 3 + 7) % 101
    acc += (26 * 3 + 7) % 101
    acc += (27 * 3 + 7) % 101
    acc += (28 * 3 + 7) % 101
    acc += (29 * 3 + 7) % 101
    acc += (30 * 3 + 7) % 101
    acc += (31 * 3 + 7) % 101
    acc += (32 * 3 + 7) % 101
    acc += (33 * 3 + 7) % 101
    acc += (34 * 3 + 7) % 101
    acc += (35 * 3 + 7) % 101
    acc += (36 * 3 + 7) % 101
    acc += (37 * 3 + 7) % 101
    acc += (38 * 3 + 7) % 101
    acc += (39 * 3 + 7) % 101
    acc += (40 * 3 + 7) % 101
    acc += (41 * 3 + 7) % 101
    acc += (42 * 3 + 7) % 101
    acc += (43 * 3 + 7) % 101
    acc += (44 * 3 + 7) % 101
    acc += (45 * 3 + 7) % 101
    acc += (46 * 3 + 7) % 101
    acc += (47 * 3 + 7) % 101
    acc += (48 * 3 + 7) % 101
    acc += (49 * 3 + 7) % 101
    acc += (50 * 3 + 7) % 101
    acc += (51 * 3 + 7) % 101
    acc += (52 * 3 + 7) % 101
    acc += (53 * 3 + 7) % 101
    acc += (54 * 3 + 7) % 101
    acc += (55 * 3 + 7) % 101
    acc += (56 * 3 + 7) % 101
    acc += (57 * 3 + 7) % 101
    acc += (58 * 3 + 7) % 101
    acc += (59 * 3 + 7) % 101
    acc += (60 * 3 + 7) % 101
    acc += (61 * 3 + 7) % 101
    acc += (62 * 3 + 7) % 101
    acc += (63 * 3 + 7) % 101
    acc += (64 * 3 + 7) % 101
    acc += (65 * 3 + 7) % 101
    acc += (66 * 3 + 7) % 101
    acc += (67 * 3 + 7) % 101
    acc += (68 * 3 + 7) % 101
    acc += (69 * 3 + 7) % 101
    acc += (70 * 3 + 7) % 101
    acc += (71 * 3 + 7) % 101
    acc += (72 * 3 + 7) % 101
    acc += (73 * 3 + 7) % 101
    acc += (74 * 3 + 7) % 101
    acc += (75 * 3 + 7) % 101
    acc += (76 * 3 + 7) % 101
    acc += (77 * 3 + 7) % 101
    acc += (78 * 3 + 7) % 101
    acc += (79 * 3 + 7) % 101
    acc += (80 * 3 + 7) % 101
    acc += (81 * 3 + 7) % 101
    acc += (82 * 3 + 7) % 101
    acc += (83 * 3 + 7) % 101
    acc += (84 * 3 + 7) % 101
    acc += (85 * 3 + 7) % 101
    acc += (86 * 3 + 7) % 101
    acc += (87 * 3 + 7) % 101
    acc += (88 * 3 + 7) % 101
    acc += (89 * 3 + 7) % 101
    acc += (90 * 3 + 7) % 101
    acc += (91 * 3 + 7) % 101
    acc += (92 * 3 + 7) % 101
    acc += (93 * 3 + 7) % 101
    acc += (94 * 3 + 7) % 101
    acc += (95 * 3 + 7) % 101
    acc += (96 * 3 + 7) % 101
    acc += (97 * 3 + 7) % 101
    acc += (98 * 3 + 7) % 101
    acc += (99 * 3 + 7) % 101
    acc += (100 * 3 + 7) % 101
    acc += (101 * 3 + 7) % 101
    acc += (102 * 3 + 7) % 101
    acc += (103 * 3 + 7) % 101
    acc += (104 * 3 + 7) % 101
    acc += (105 * 3 + 7) % 101
    acc += (106 * 3 + 7) % 101
    acc += (107 * 3 + 7) % 101
    acc += (108 * 3 + 7) % 101
    acc += (109 * 3 + 7) % 101
    acc += (110 * 3 + 7) % 101
    acc += (111 * 3 + 7) % 101
    acc += (112 * 3 + 7) % 101
    acc += (113 * 3 + 7) % 101
    acc += (114 * 3 + 7) % 101
    acc += (115 * 3 + 7) % 101
    acc += (116 * 3 + 7) % 101
    acc += (117 * 3 + 7) % 101
    acc += (118 * 3 + 7) % 101
    acc += (119 * 3 + 7) % 101
    acc += (120 * 3 + 7) % 101
    acc += (121 * 3 + 7) % 101
    acc += (122 * 3 + 7) % 101
    acc += (123 * 3 + 7) % 101
    acc += (124 * 3 + 7) % 101
    acc += (125 * 3 + 7) % 101
    acc += (126 * 3 + 7) % 101
    acc += (127 * 3 + 7) % 101
    acc += (128 * 3 + 7) % 101
    acc += (129 * 3 + 7) % 101
    acc += (130 * 3 + 7) % 101
    acc += (131 * 3 + 7) % 101
    acc += (132 * 3 + 7) % 101
    acc += (133 * 3 + 7) % 101
    acc += (134 * 3 + 7) % 101
    acc += (135 * 3 + 7) % 101
    acc += (136 * 3 + 7) % 101
    acc += (137 * 3 + 7) % 101
    acc += (138 * 3 + 7) % 101
    acc += (139 * 3 + 7) % 101
    acc += (140 * 3 + 7) % 101
    acc += (141 * 3 + 7) % 101
    acc += (142 * 3 + 7) % 101
    acc += (143 * 3 + 7) % 101
    acc += (144 * 3 + 7) % 101
    acc += (145 * 3 + 7) % 101
    acc += (146 * 3 + 7) % 101
    acc += (147 * 3 + 7) % 101
    acc += (148 * 3 + 7) % 101
    acc += (149 * 3 + 7) % 101
    acc += (150 * 3 + 7) % 101
    acc += (151 * 3 + 7) % 101
    acc += (152 * 3 + 7) % 101
    acc += (153 * 3 + 7) % 101
    acc += (154 * 3 + 7) % 101
    acc += (155 * 3 + 7) % 101
    acc += (156 * 3 + 7) % 101
    acc += (157 * 3 + 7) % 101
    acc += (158 * 3 + 7) % 101
    acc += (159 * 3 + 7) % 101
    acc += (160 * 3 + 7) % 101
    acc += (161 * 3 + 7) % 101
    acc += (162 * 3 + 7) % 101
    acc += (163 * 3 + 7) % 101
    acc += (164 * 3 + 7) % 101
    acc += (165 * 3 + 7) % 101
    acc += (166 * 3 + 7) % 101
    acc += (167 * 3 + 7) % 101
    acc += (168 * 3 + 7) % 101
    acc += (169 * 3 + 7) % 101
    acc += (170 * 3 + 7) % 101
    acc += (171 * 3 + 7) % 101
    acc += (172 * 3 + 7) % 101
    acc += (173 * 3 + 7) % 101
    acc += (174 * 3 + 7) % 101
    acc += (175 * 3 + 7) % 101
    acc += (176 * 3 + 7) % 101
    acc += (177 * 3 + 7) % 101
    acc += (178 * 3 + 7) % 101
    acc += (179 * 3 + 7) % 101
    acc += (180 * 3 + 7) % 101
    acc += (181 * 3 + 7) % 101
    acc += (182 * 3 + 7) % 101
    acc += (183 * 3 + 7) % 101
    acc += (184 * 3 + 7) % 101
    acc += (185 * 3 + 7) % 101
    acc += (186 * 3 + 7) % 101
    acc += (187 * 3 + 7) % 101
    acc += (188 * 3 + 7) % 101
    acc += (189 * 3 + 7) % 101
    acc += (190 * 3 + 7) % 101
    acc += (191 * 3 + 7) % 101
    acc += (192 * 3 + 7) % 101
    acc += (193 * 3 + 7) % 101
    acc += (194 * 3 + 7) % 101
    acc += (195 * 3 + 7) % 101
    acc += (196 * 3 + 7) % 101
    acc += (197 * 3 + 7) % 101
    acc += (198 * 3 + 7) % 101
    acc += (199 * 3 + 7) % 101
    acc += (200 * 3 + 7) % 101
    acc += (201 * 3 + 7) % 101
    acc += (202 * 3 + 7) % 101
    acc += (203 * 3 + 7) % 101
    acc += (204 * 3 + 7) % 101
    acc += (205 * 3 + 7) % 101
    acc += (206 * 3 + 7) % 101
    acc += (207 * 3 + 7) % 101
    acc += (208 * 3 + 7) % 101
    acc += (209 * 3 + 7) % 101
    acc += (210 * 3 + 7) % 101
    acc += (211 * 3 + 7) % 101
    acc += (212 * 3 + 7) % 101
    acc += (213 * 3 + 7) % 101
    acc += (214 * 3 + 7) % 101
    acc += (215 * 3 + 7) % 101
    acc += (216 * 3 + 7) % 101
    acc += (217 * 3 + 7) % 101
    acc += (218 * 3 + 7) % 101
    acc += (219 * 3 + 7) % 101
    acc += (220 * 3 + 7) % 101
    acc += (221 * 3 + 7) % 101
    acc += (222 * 3 + 7) % 101
    acc += (223 * 3 + 7) % 101
    acc += (224 * 3 + 7) % 101
    acc += (225 * 3 + 7) % 101
    acc += (226 * 3 + 7) % 101
    acc += (227 * 3 + 7) % 101
    acc += (228 * 3 + 7) % 101
    acc += (229 * 3 + 7) % 101
    acc += (230 * 3 + 7) % 101
    acc += (231 * 3 + 7) % 101
    acc += (232 * 3 + 7) % 101
    acc += (233 * 3 + 7) % 101
    acc += (234 * 3 + 7) % 101
    acc += (235 * 3 + 7) % 101
    acc += (236 * 3 + 7) % 101
    acc += (237 * 3 + 7) % 101
    acc += (238 * 3 + 7) % 101
    acc += (239 * 3 + 7) % 101
    acc += (240 * 3 + 7) % 101
    acc += (241 * 3 + 7) % 101
    acc += (242 * 3 + 7) % 101
    acc += (243 * 3 + 7) % 101
    acc += (244 * 3 + 7) % 101
    acc += (245 * 3 + 7) % 101
    acc += (246 * 3 + 7) % 101
    acc += (247 * 3 + 7) % 101
    acc += (248 * 3 + 7) % 101
    acc += (249 * 3 + 7) % 101
    acc += (250 * 3 + 7) % 101
    acc += (251 * 3 + 7) % 101
    acc += (252 * 3 + 7) % 101
    acc += (253 * 3 + 7) % 101
    acc += (254 * 3 + 7) % 101
    acc += (255 * 3 + 7) % 101
    acc += (256 * 3 + 7) % 101
    acc += (257 * 3 + 7) % 101
    acc += (258 * 3 + 7) % 101
    acc += (259 * 3 + 7) % 101
    acc += (260 * 3 + 7) % 101
    acc += (261 * 3 + 7) % 101
    acc += (262 * 3 + 7) % 101
    acc += (263 * 3 + 7) % 101
    acc += (264 * 3 + 7) % 101
    acc += (265 * 3 + 7) % 101
    acc += (266 * 3 + 7) % 101
    acc += (267 * 3 + 7) % 101
    acc += (268 * 3 + 7) % 101
    acc += (269 * 3 + 7) % 101
    acc += (270 * 3 + 7) % 101
    acc += (271 * 3 + 7) % 101
    acc += (272 * 3 + 7) % 101
    acc += (273 * 3 + 7) % 101
    acc += (274 * 3 + 7) % 101
    acc += (275 * 3 + 7) % 101
    acc += (276 * 3 + 7) % 101
    acc += (277 * 3 + 7) % 101
    acc += (278 * 3 + 7) % 101
    acc += (279 * 3 + 7) % 101
    acc += (280 * 3 + 7) % 101
    acc += (281 * 3 + 7) % 101
    acc += (282 * 3 + 7) % 101
    acc += (283 * 3 + 7) % 101
    acc += (284 * 3 + 7) % 101
    acc += (285 * 3 + 7) % 101
    acc += (286 * 3 + 7) % 101
    acc += (287 * 3 + 7) % 101
    acc += (288 * 3 + 7) % 101
    acc += (289 * 3 + 7) % 101
    acc += (290 * 3 + 7) % 101
    acc += (291 * 3 + 7) % 101
    acc += (292 * 3 + 7) % 101
    acc += (293 * 3 + 7) % 101
    acc += (294 * 3 + 7) % 101
    acc += (295 * 3 + 7) % 101
    acc += (296 * 3 + 7) % 101
    acc += (297 * 3 + 7) % 101
    acc += (298 * 3 + 7) % 101
    acc += (299 * 3 + 7) % 101
    acc += (300 * 3 + 7) % 101
    acc += (301 * 3 + 7) % 101
    acc += (302 * 3 + 7) % 101
    acc += (303 * 3 + 7) % 101
    acc += (304 * 3 + 7) % 101
    acc += (305 * 3 + 7) % 101
    acc += (306 * 3 + 7) % 101
    acc += (307 * 3 + 7) % 101
    acc += (308 * 3 + 7) % 101
    acc += (309 * 3 + 7) % 101
    acc += (310 * 3 + 7) % 101
    acc += (311 * 3 + 7) % 101
    acc += (312 * 3 + 7) % 101
    acc += (313 * 3 + 7) % 101
    acc += (314 * 3 + 7) % 101
    acc += (315 * 3 + 7) % 101
    acc += (316 * 3 + 7) % 101
    acc += (317 * 3 + 7) % 101
    acc += (318 * 3 + 7) % 101
    acc += (319 * 3 + 7) % 101
    acc += (320 * 3 + 7) % 101
    acc += (321 * 3 + 7) % 101
    acc += (322 * 3 + 7) % 101
    acc += (323 * 3 + 7) % 101
    acc += (324 * 3 + 7) % 101
    acc += (325 * 3 + 7) % 101
    acc += (326 * 3 + 7) % 101
    acc += (327 * 3 + 7) % 101
    acc += (328 * 3 + 7) % 101
    acc += (329 * 3 + 7) % 101
    acc += (330 * 3 + 7) % 101
    acc += (331 * 3 + 7) % 101
    acc += (332 * 3 + 7) % 101
    acc += (333 * 3 + 7) % 101
    acc += (334 * 3 + 7) % 101
    acc += (335 * 3 + 7) % 101
    acc += (336 * 3 + 7) % 101
    acc += (337 * 3 + 7) % 101
    acc += (338 * 3 + 7) % 101
    acc += (339 * 3 + 7) % 101
    acc += (340 * 3 + 7) % 101
    acc += (341 * 3 + 7) % 101
    acc += (342 * 3 + 7) % 101
    acc += (343 * 3 + 7) % 101
    acc += (344 * 3 + 7) % 101
    acc += (345 * 3 + 7) % 101
    acc += (346 * 3 + 7) % 101
    acc += (347 * 3 + 7) % 101
    acc += (348 * 3 + 7) % 101
    acc += (349 * 3 + 7) % 101
    acc += (350 * 3 + 7) % 101
    acc += (351 * 3 + 7) % 101
    acc += (352 * 3 + 7) % 101
    acc += (353 * 3 + 7) % 101
    acc += (354 * 3 + 7) % 101
    acc += (355 * 3 + 7) % 101
    acc += (356 * 3 + 7) % 101
    acc += (357 * 3 + 7) % 101
    acc += (358 * 3 + 7) % 101
    acc += (359 * 3 + 7) % 101
    acc += (360 * 3 + 7) % 101
    acc += (361 * 3 + 7) % 101
    acc += (362 * 3 + 7) % 101
    acc += (363 * 3 + 7) % 101
    acc += (364 * 3 + 7) % 101
    acc += (365 * 3 + 7) % 101
    acc += (366 * 3 + 7) % 101
    acc += (367 * 3 + 7) % 101
    acc += (368 * 3 + 7) % 101
    acc += (369 * 3 + 7) % 101
    acc += (370 * 3 + 7) % 101
    acc += (371 * 3 + 7) % 101
    acc += (372 * 3 + 7) % 101
    acc += (373 * 3 + 7) % 101
    acc += (374 * 3 + 7) % 101
    acc += (375 * 3 + 7) % 101
    acc += (376 * 3 + 7) % 101
    acc += (377 * 3 + 7) % 101
    acc += (378 * 3 + 7) % 101
    acc += (379 * 3 + 7) % 101
    acc += (380 * 3 + 7) % 101
    acc += (381 * 3 + 7) % 101
    acc += (382 * 3 + 7) % 101
    acc += (383 * 3 + 7) % 101
    acc += (384 * 3 + 7) % 101
    acc += (385 * 3 + 7) % 101
    acc += (386 * 3 + 7) % 101
    acc += (387 * 3 + 7) % 101
    acc += (388 * 3 + 7) % 101
    acc += (389 * 3 + 7) % 101
    acc += (390 * 3 + 7) % 101
    acc += (391 * 3 + 7) % 101
    acc += (392 * 3 + 7) % 101
    acc += (393 * 3 + 7) % 101
    acc += (394 * 3 + 7) % 101
    acc += (395 * 3 + 7) % 101
    acc += (396 * 3 + 7) % 101
    acc += (397 * 3 + 7) % 101
    acc += (398 * 3 + 7) % 101
    acc += (399 * 3 + 7) % 101
    acc += (400 * 3 + 7) % 101
    acc += (401 * 3 + 7) % 101
    acc += (402 * 3 + 7) % 101
    acc += (403 * 3 + 7) % 101
    acc += (404 * 3 + 7) % 101
    acc += (405 * 3 + 7) % 101
    acc += (406 * 3 + 7) % 101
    acc += (407 * 3 + 7) % 101
    acc += (408 * 3 + 7) % 101
    acc += (409 * 3 + 7) % 101
    acc += (410 * 3 + 7) % 101
    acc += (411 * 3 + 7) % 101
    acc += (412 * 3 + 7) % 101
    acc += (413 * 3 + 7) % 101
    acc += (414 * 3 + 7) % 101
    acc += (415 * 3 + 7) % 101
    acc += (416 * 3 + 7) % 101
    acc += (417 * 3 + 7) % 101
    acc += (418 * 3 + 7) % 101
    acc += (419 * 3 + 7) % 101
    acc += (420 * 3 + 7) % 101
    acc += (421 * 3 + 7) % 101
    acc += (422 * 3 + 7) % 101
    acc += (423 * 3 + 7) % 101
    acc += (424 * 3 + 7) % 101
    acc += (425 * 3 + 7) % 101
    acc += (426 * 3 + 7) % 101
    acc += (427 * 3 + 7) % 101
    acc += (428 * 3 + 7) % 101
    acc += (429 * 3 + 7) % 101
    acc += (430 * 3 + 7) % 101
    acc += (431 * 3 + 7) % 101
    acc += (432 * 3 + 7) % 101
    acc += (433 * 3 + 7) % 101
    acc += (434 * 3 + 7) % 101
    acc += (435 * 3 + 7) % 101
    acc += (436 * 3 + 7) % 101
    acc += (437 * 3 + 7) % 101
    acc += (438 * 3 + 7) % 101
    acc += (439 * 3 + 7) % 101
    acc += (440 * 3 + 7) % 101
    acc += (441 * 3 + 7) % 101
    acc += (442 * 3 + 7) % 101
    acc += (443 * 3 + 7) % 101
    acc += (444 * 3 + 7) % 101
    acc += (445 * 3 + 7) % 101
    acc += (446 * 3 + 7) % 101
    acc += (447 * 3 + 7) % 101
    acc += (448 * 3 + 7) % 101
    acc += (449 * 3 + 7) % 101
    acc += (450 * 3 + 7) % 101
    acc += (451 * 3 + 7) % 101
    acc += (452 * 3 + 7) % 101
    acc += (453 * 3 + 7) % 101
    acc += (454 * 3 + 7) % 101
    acc += (455 * 3 + 7) % 101
    acc += (456 * 3 + 7) % 101
    acc += (457 * 3 + 7) % 101
    acc += (458 * 3 + 7) % 101
    acc += (459 * 3 + 7) % 101
    acc += (460 * 3 + 7) % 101
    acc += (461 * 3 + 7) % 101
    acc += (462 * 3 + 7) % 101
    acc += (463 * 3 + 7) % 101
    acc += (464 * 3 + 7) % 101
    acc += (465 * 3 + 7) % 101
    acc += (466 * 3 + 7) % 101
    acc += (467 * 3 + 7) % 101
    acc += (468 * 3 + 7) % 101
    acc += (469 * 3 + 7) % 101
    acc += (470 * 3 + 7) % 101
    acc += (471 * 3 + 7) % 101
    acc += (472 * 3 + 7) % 101
    acc += (473 * 3 + 7) % 101
    acc += (474 * 3 + 7) % 101
    acc += (475 * 3 + 7) % 101
    acc += (476 * 3 + 7) % 101
    acc += (477 * 3 + 7) % 101
    acc += (478 * 3 + 7) % 101
    acc += (479 * 3 + 7) % 101
    acc += (480 * 3 + 7) % 101
    acc += (481 * 3 + 7) % 101
    acc += (482 * 3 + 7) % 101
    acc += (483 * 3 + 7) % 101
    acc += (484 * 3 + 7) % 101
    acc += (485 * 3 + 7) % 101
    acc += (486 * 3 + 7) % 101
    acc += (487 * 3 + 7) % 101
    acc += (488 * 3 + 7) % 101
    acc += (489 * 3 + 7) % 101
    acc += (490 * 3 + 7) % 101
    acc += (491 * 3 + 7) % 101
    acc += (492 * 3 + 7) % 101
    acc += (493 * 3 + 7) % 101
    acc += (494 * 3 + 7) % 101
    acc += (495 * 3 + 7) % 101
    acc += (496 * 3 + 7) % 101
    acc += (497 * 3 + 7) % 101
    acc += (498 * 3 + 7) % 101
    acc += (499 * 3 + 7) % 101
    acc += (500 * 3 + 7) % 101
    acc += (501 * 3 + 7) % 101
    acc += (502 * 3 + 7) % 101
    acc += (503 * 3 + 7) % 101
    acc += (504 * 3 + 7) % 101
    acc += (505 * 3 + 7) % 101
    acc += (506 * 3 + 7) % 101
    acc += (507 * 3 + 7) % 101
    acc += (508 * 3 + 7) % 101
    acc += (509 * 3 + 7) % 101
    acc += (510 * 3 + 7) % 101
    acc += (511 * 3 + 7) % 101
    acc += (512 * 3 + 7) % 101
    acc += (513 * 3 + 7) % 101
    acc += (514 * 3 + 7) % 101
    acc += (515 * 3 + 7) % 101
    acc += (516 * 3 + 7) % 101
    acc += (517 * 3 + 7) % 101
    acc += (518 * 3 + 7) % 101
    acc += (519 * 3 + 7) % 101
    acc += (520 * 3 + 7) % 101
    acc += (521 * 3 + 7) % 101
    acc += (522 * 3 + 7) % 101
    acc += (523 * 3 + 7) % 101
    acc += (524 * 3 + 7) % 101
    acc += (525 * 3 + 7) % 101
    acc += (526 * 3 + 7) % 101
    acc += (527 * 3 + 7) % 101
    acc += (528 * 3 + 7) % 101
    acc += (529 * 3 + 7) % 101
    acc += (530 * 3 + 7) % 101
    acc += (531 * 3 + 7) % 101
    acc += (532 * 3 + 7) % 101
    acc += (533 * 3 + 7) % 101
    acc += (534 * 3 + 7) % 101
    acc += (535 * 3 + 7) % 101
    acc += (536 * 3 + 7) % 101
    acc += (537 * 3 + 7) % 101
    acc += (538 * 3 + 7) % 101
    acc += (539 * 3 + 7) % 101
    acc += (540 * 3 + 7) % 101
    acc += (541 * 3 + 7) % 101
    acc += (542 * 3 + 7) % 101
    acc += (543 * 3 + 7) % 101
    acc += (544 * 3 + 7) % 101
    acc += (545 * 3 + 7) % 101
    acc += (546 * 3 + 7) % 101
    acc += (547 * 3 + 7) % 101
    acc += (548 * 3 + 7) % 101
    acc += (549 * 3 + 7) % 101
    acc += (550 * 3 + 7) % 101
    acc += (551 * 3 + 7) % 101
    acc += (552 * 3 + 7) % 101
    acc += (553 * 3 + 7) % 101
    acc += (554 * 3 + 7) % 101
    acc += (555 * 3 + 7) % 101
    acc += (556 * 3 + 7) % 101
    acc += (557 * 3 + 7) % 101
    acc += (558 * 3 + 7) % 101
    acc += (559 * 3 + 7) % 101
    acc += (560 * 3 + 7) % 101
    acc += (561 * 3 + 7) % 101
    acc += (562 * 3 + 7) % 101
    acc += (563 * 3 + 7) % 101
    acc += (564 * 3 + 7) % 101
    acc += (565 * 3 + 7) % 101
    acc += (566 * 3 + 7) % 101
    acc += (567 * 3 + 7) % 101
    acc += (568 * 3 + 7) % 101
    acc += (569 * 3 + 7) % 101
    acc += (570 * 3 + 7) % 101
    acc += (571 * 3 + 7) % 101
    acc += (572 * 3 + 7) % 101
    acc += (573 * 3 + 7) % 101
    acc += (574 * 3 + 7) % 101
    acc += (575 * 3 + 7) % 101
    acc += (576 * 3 + 7) % 101
    acc += (577 * 3 + 7) % 101
    acc += (578 * 3 + 7) % 101
    acc += (579 * 3 + 7) % 101
    acc += (580 * 3 + 7) % 101
    acc += (581 * 3 + 7) % 101
    acc += (582 * 3 + 7) % 101
    acc += (583 * 3 + 7) % 101
    acc += (584 * 3 + 7) % 101
    acc += (585 * 3 + 7) % 101
    acc += (586 * 3 + 7) % 101
    acc += (587 * 3 + 7) % 101
    acc += (588 * 3 + 7) % 101
    acc += (589 * 3 + 7) % 101
    acc += (590 * 3 + 7) % 101
    acc += (591 * 3 + 7) % 101
    acc += (592 * 3 + 7) % 101
    acc += (593 * 3 + 7) % 101
    acc += (594 * 3 + 7) % 101
    acc += (595 * 3 + 7) % 101
    acc += (596 * 3 + 7) % 101
    acc += (597 * 3 + 7) % 101
    acc += (598 * 3 + 7) % 101
    acc += (599 * 3 + 7) % 101
    acc += (600 * 3 + 7) % 101
    acc += (601 * 3 + 7) % 101
    acc += (602 * 3 + 7) % 101
    acc += (603 * 3 + 7) % 101
    acc += (604 * 3 + 7) % 101
    acc += (605 * 3 + 7) % 101
    acc += (606 * 3 + 7) % 101
    acc += (607 * 3 + 7) % 101
    acc += (608 * 3 + 7) % 101
    acc += (609 * 3 + 7) % 101
    acc += (610 * 3 + 7) % 101
    acc += (611 * 3 + 7) % 101
    acc += (612 * 3 + 7) % 101
    acc += (613 * 3 + 7) % 101
    acc += (614 * 3 + 7) % 101
    acc += (615 * 3 + 7) % 101
    acc += (616 * 3 + 7) % 101
    acc += (617 * 3 + 7) % 101
    acc += (618 * 3 + 7) % 101
    acc += (619 * 3 + 7) % 101
    acc += (620 * 3 + 7) % 101
    acc += (621 * 3 + 7) % 101
    acc += (622 * 3 + 7) % 101
    acc += (623 * 3 + 7) % 101
    acc += (624 * 3 + 7) % 101
    acc += (625 * 3 + 7) % 101
    acc += (626 * 3 + 7) % 101
    acc += (627 * 3 + 7) % 101
    acc += (628 * 3 + 7) % 101
    acc += (629 * 3 + 7) % 101
    acc += (630 * 3 + 7) % 101
    acc += (631 * 3 + 7) % 101
    acc += (632 * 3 + 7) % 101
    acc += (633 * 3 + 7) % 101
    acc += (634 * 3 + 7) % 101
    acc += (635 * 3 + 7) % 101
    acc += (636 * 3 + 7) % 101
    acc += (637 * 3 + 7) % 101
    acc += (638 * 3 + 7) % 101
    acc += (639 * 3 + 7) % 101
    acc += (640 * 3 + 7) % 101
    acc += (641 * 3 + 7) % 101
    acc += (642 * 3 + 7) % 101
    acc += (643 * 3 + 7) % 101
    acc += (644 * 3 + 7) % 101
    acc += (645 * 3 + 7) % 101
    acc += (646 * 3 + 7) % 101
    acc += (647 * 3 + 7) % 101
    acc += (648 * 3 + 7) % 101
    acc += (649 * 3 + 7) % 101
    acc += (650 * 3 + 7) % 101
    acc += (651 * 3 + 7) % 101
    acc += (652 * 3 + 7) % 101
    acc += (653 * 3 + 7) % 101
    acc += (654 * 3 + 7) % 101
    acc += (655 * 3 + 7) % 101
    acc += (656 * 3 + 7) % 101
    acc += (657 * 3 + 7) % 101
    acc += (658 * 3 + 7) % 101
    acc += (659 * 3 + 7) % 101
    acc += (660 * 3 + 7) % 101
    acc += (661 * 3 + 7) % 101
    acc += (662 * 3 + 7) % 101
    acc += (663 * 3 + 7) % 101
    acc += (664 * 3 + 7) % 101
    acc += (665 * 3 + 7) % 101
    acc += (666 * 3 + 7) % 101
    acc += (667 * 3 + 7) % 101
    acc += (668 * 3 + 7) % 101
    acc += (669 * 3 + 7) % 101
    acc += (670 * 3 + 7) % 101
    acc += (671 * 3 + 7) % 101
    acc += (672 * 3 + 7) % 101
    acc += (673 * 3 + 7) % 101
    acc += (674 * 3 + 7) % 101
    acc += (675 * 3 + 7) % 101
    acc += (676 * 3 + 7) % 101
    acc += (677 * 3 + 7) % 101
    acc += (678 * 3 + 7) % 101
    acc += (679 * 3 + 7) % 101
    acc += (680 * 3 + 7) % 101
    acc += (681 * 3 + 7) % 101
    acc += (682 * 3 + 7) % 101
    acc += (683 * 3 + 7) % 101
    acc += (684 * 3 + 7) % 101
    acc += (685 * 3 + 7) % 101
    acc += (686 * 3 + 7) % 101
    acc += (687 * 3 + 7) % 101
    acc += (688 * 3 + 7) % 101
    acc += (689 * 3 + 7) % 101
    acc += (690 * 3 + 7) % 101
    acc += (691 * 3 + 7) % 101
    acc += (692 * 3 + 7) % 101
    acc += (693 * 3 + 7) % 101
    acc += (694 * 3 + 7) % 101
    acc += (695 * 3 + 7) % 101
    acc += (696 * 3 + 7) % 101
    acc += (697 * 3 + 7) % 101
    acc += (698 * 3 + 7) % 101
    acc += (699 * 3 + 7) % 101
    acc += (700 * 3 + 7) % 101
    acc += (701 * 3 + 7) % 101
    acc += (702 * 3 + 7) % 101
    acc += (703 * 3 + 7) % 101
    acc += (704 * 3 + 7) % 101
    acc += (705 * 3 + 7) % 101
    acc += (706 * 3 + 7) % 101
    acc += (707 * 3 + 7) % 101
    acc += (708 * 3 + 7) % 101
    acc += (709 * 3 + 7) % 101
    acc += (710 * 3 + 7) % 101
    acc += (711 * 3 + 7) % 101
    acc += (712 * 3 + 7) % 101
    acc += (713 * 3 + 7) % 101
    acc += (714 * 3 + 7) % 101
    acc += (715 * 3 + 7) % 101
    acc += (716 * 3 + 7) % 101
    acc += (717 * 3 + 7) % 101
    acc += (718 * 3 + 7) % 101
    acc += (719 * 3 + 7) % 101
    acc += (720 * 3 + 7) % 101
    acc += (721 * 3 + 7) % 101
    acc += (722 * 3 + 7) % 101
    acc += (723 * 3 + 7) % 101
    acc += (724 * 3 + 7) % 101
    acc += (725 * 3 + 7) % 101
    acc += (726 * 3 + 7) % 101
    acc += (727 * 3 + 7) % 101
    acc += (728 * 3 + 7) % 101
    acc += (729 * 3 + 7) % 101
    acc += (730 * 3 + 7) % 101
    acc += (731 * 3 + 7) % 101
    acc += (732 * 3 + 7) % 101
    acc += (733 * 3 + 7) % 101
    acc += (734 * 3 + 7) % 101
    acc += (735 * 3 + 7) % 101
    acc += (736 * 3 + 7) % 101
    acc += (737 * 3 + 7) % 101
    acc += (738 * 3 + 7) % 101
    acc += (739 * 3 + 7) % 101
    acc += (740 * 3 + 7) % 101
    acc += (741 * 3 + 7) % 101
    acc += (742 * 3 + 7) % 101
    acc += (743 * 3 + 7) % 101
    acc += (744 * 3 + 7) % 101
    acc += (745 * 3 + 7) % 101
    acc += (746 * 3 + 7) % 101
    acc += (747 * 3 + 7) % 101
    acc += (748 * 3 + 7) % 101
    acc += (749 * 3 + 7) % 101
    acc += (750 * 3 + 7) % 101
    acc += (751 * 3 + 7) % 101
    acc += (752 * 3 + 7) % 101
    acc += (753 * 3 + 7) % 101
    acc += (754 * 3 + 7) % 101
    acc += (755 * 3 + 7) % 101
    acc += (756 * 3 + 7) % 101
    acc += (757 * 3 + 7) % 101
    acc += (758 * 3 + 7) % 101
    acc += (759 * 3 + 7) % 101
    acc += (760 * 3 + 7) % 101
    acc += (761 * 3 + 7) % 101
    acc += (762 * 3 + 7) % 101
    acc += (763 * 3 + 7) % 101
    acc += (764 * 3 + 7) % 101
    acc += (765 * 3 + 7) % 101
    acc += (766 * 3 + 7) % 101
    acc += (767 * 3 + 7) % 101
    acc += (768 * 3 + 7) % 101
    acc += (769 * 3 + 7) % 101
    acc += (770 * 3 + 7) % 101
    acc += (771 * 3 + 7) % 101
    acc += (772 * 3 + 7) % 101
    acc += (773 * 3 + 7) % 101
    acc += (774 * 3 + 7) % 101
    acc += (775 * 3 + 7) % 101
    acc += (776 * 3 + 7) % 101
    acc += (777 * 3 + 7) % 101
    acc += (778 * 3 + 7) % 101
    acc += (779 * 3 + 7) % 101
    acc += (780 * 3 + 7) % 101
    acc += (781 * 3 + 7) % 101
    acc += (782 * 3 + 7) % 101
    acc += (783 * 3 + 7) % 101
    acc += (784 * 3 + 7) % 101
    acc += (785 * 3 + 7) % 101
    acc += (786 * 3 + 7) % 101
    acc += (787 * 3 + 7) % 101
    acc += (788 * 3 + 7) % 101
    acc += (789 * 3 + 7) % 101
    acc += (790 * 3 + 7) % 101
    acc += (791 * 3 + 7) % 101
    acc += (792 * 3 + 7) % 101
    acc += (793 * 3 + 7) % 101
    acc += (794 * 3 + 7) % 101
    acc += (795 * 3 + 7) % 101
    acc += (796 * 3 + 7) % 101
    acc += (797 * 3 + 7) % 101
    acc += (798 * 3 + 7) % 101
    acc += (799 * 3 + 7) % 101
    acc += (800 * 3 + 7) % 101
    acc += (801 * 3 + 7) % 101
    acc += (802 * 3 + 7) % 101
    acc += (803 * 3 + 7) % 101
    acc += (804 * 3 + 7) % 101
    acc += (805 * 3 + 7) % 101
    acc += (806 * 3 + 7) % 101
    acc += (807 * 3 + 7) % 101
    acc += (808 * 3 + 7) % 101
    acc += (809 * 3 + 7) % 101
    acc += (810 * 3 + 7) % 101
    acc += (811 * 3 + 7) % 101
    acc += (812 * 3 + 7) % 101
    acc += (813 * 3 + 7) % 101
    acc += (814 * 3 + 7) % 101
    acc += (815 * 3 + 7) % 101
    acc += (816 * 3 + 7) % 101
    acc += (817 * 3 + 7) % 101
    acc += (818 * 3 + 7) % 101
    acc += (819 * 3 + 7) % 101
    acc += (820 * 3 + 7) % 101
    acc += (821 * 3 + 7) % 101
    acc += (822 * 3 + 7) % 101
    acc += (823 * 3 + 7) % 101
    acc += (824 * 3 + 7) % 101
    acc += (825 * 3 + 7) % 101
    acc += (826 * 3 + 7) % 101
    acc += (827 * 3 + 7) % 101
    acc += (828 * 3 + 7) % 101
    acc += (829 * 3 + 7) % 101
    acc += (830 * 3 + 7) % 101
    acc += (831 * 3 + 7) % 101
    acc += (832 * 3 + 7) % 101
    acc += (833 * 3 + 7) % 101
    acc += (834 * 3 + 7) % 101
    acc += (835 * 3 + 7) % 101
    acc += (836 * 3 + 7) % 101
    acc += (837 * 3 + 7) % 101
    acc += (838 * 3 + 7) % 101
    acc += (839 * 3 + 7) % 101
    acc += (840 * 3 + 7) % 101
    acc += (841 * 3 + 7) % 101
    acc += (842 * 3 + 7) % 101
    acc += (843 * 3 + 7) % 101
    acc += (844 * 3 + 7) % 101
    acc += (845 * 3 + 7) % 101
    acc += (846 * 3 + 7) % 101
    acc += (847 * 3 + 7) % 101
    acc += (848 * 3 + 7) % 101
    acc += (849 * 3 + 7) % 101
    acc += (850 * 3 + 7) % 101
    acc += (851 * 3 + 7) % 101
    acc += (852 * 3 + 7) % 101
    acc += (853 * 3 + 7) % 101
    acc += (854 * 3 + 7) % 101
    acc += (855 * 3 + 7) % 101
    acc += (856 * 3 + 7) % 101
    acc += (857 * 3 + 7) % 101
    acc += (858 * 3 + 7) % 101
    acc += (859 * 3 + 7) % 101
    acc += (860 * 3 + 7) % 101
    acc += (861 * 3 + 7) % 101
    acc += (862 * 3 + 7) % 101
    acc += (863 * 3 + 7) % 101
    acc += (864 * 3 + 7) % 101
    acc += (865 * 3 + 7) % 101
    acc += (866 * 3 + 7) % 101
    acc += (867 * 3 + 7) % 101
    acc += (868 * 3 + 7) % 101
    acc += (869 * 3 + 7) % 101
    acc += (870 * 3 + 7) % 101
    acc += (871 * 3 + 7) % 101
    acc += (872 * 3 + 7) % 101
    acc += (873 * 3 + 7) % 101
    acc += (874 * 3 + 7) % 101
    acc += (875 * 3 + 7) % 101
    acc += (876 * 3 + 7) % 101
    acc += (877 * 3 + 7) % 101
    acc += (878 * 3 + 7) % 101
    acc += (879 * 3 + 7) % 101
    acc += (880 * 3 + 7) % 101
    acc += (881 * 3 + 7) % 101
    acc += (882 * 3 + 7) % 101
    acc += (883 * 3 + 7) % 101
    acc += (884 * 3 + 7) % 101
    acc += (885 * 3 + 7) % 101
    acc += (886 * 3 + 7) % 101
    acc += (887 * 3 + 7) % 101
    acc += (888 * 3 + 7) % 101
    acc += (889 * 3 + 7) % 101
    acc += (890 * 3 + 7) % 101
    acc += (891 * 3 + 7) % 101
    acc += (892 * 3 + 7) % 101
    acc += (893 * 3 + 7) % 101
    acc += (894 * 3 + 7) % 101
    acc += (895 * 3 + 7) % 101
    acc += (896 * 3 + 7) % 101
    acc += (897 * 3 + 7) % 101
    acc += (898 * 3 + 7) % 101
    acc += (899 * 3 + 7) % 101
    acc += (900 * 3 + 7) % 101
    acc += (901 * 3 + 7) % 101
    acc += (902 * 3 + 7) % 101
    acc += (903 * 3 + 7) % 101
    acc += (904 * 3 + 7) % 101
    acc += (905 * 3 + 7) % 101
    acc += (906 * 3 + 7) % 101
    acc += (907 * 3 + 7) % 101
    acc += (908 * 3 + 7) % 101
    acc += (909 * 3 + 7) % 101
    acc += (910 * 3 + 7) % 101
    acc += (911 * 3 + 7) % 101
    acc += (912 * 3 + 7) % 101
    acc += (913 * 3 + 7) % 101
    acc += (914 * 3 + 7) % 101
    acc += (915 * 3 + 7) % 101
    acc += (916 * 3 + 7) % 101
    acc += (917 * 3 + 7) % 101
    acc += (918 * 3 + 7) % 101
    acc += (919 * 3 + 7) % 101
    acc += (920 * 3 + 7) % 101
    acc += (921 * 3 + 7) % 101
    acc += (922 * 3 + 7) % 101
    acc += (923 * 3 + 7) % 101
    acc += (924 * 3 + 7) % 101
    acc += (925 * 3 + 7) % 101
    acc += (926 * 3 + 7) % 101
    acc += (927 * 3 + 7) % 101
    acc += (928 * 3 + 7) % 101
    acc += (929 * 3 + 7) % 101
    acc += (930 * 3 + 7) % 101
    acc += (931 * 3 + 7) % 101
    acc += (932 * 3 + 7) % 101
    acc += (933 * 3 + 7) % 101
    acc += (934 * 3 + 7) % 101
    acc += (935 * 3 + 7) % 101
    acc += (936 * 3 + 7) % 101
    acc += (937 * 3 + 7) % 101
    acc += (938 * 3 + 7) % 101
    acc += (939 * 3 + 7) % 101
    acc += (940 * 3 + 7) % 101
    acc += (941 * 3 + 7) % 101
    acc += (942 * 3 + 7) % 101
    acc += (943 * 3 + 7) % 101
    acc += (944 * 3 + 7) % 101
    acc += (945 * 3 + 7) % 101
    acc += (946 * 3 + 7) % 101
    acc += (947 * 3 + 7) % 101
    acc += (948 * 3 + 7) % 101
    acc += (949 * 3 + 7) % 101
    acc += (950 * 3 + 7) % 101
    acc += (951 * 3 + 7) % 101
    acc += (952 * 3 + 7) % 101
    acc += (953 * 3 + 7) % 101
    acc += (954 * 3 + 7) % 101
    acc += (955 * 3 + 7) % 101
    acc += (956 * 3 + 7) % 101
    acc += (957 * 3 + 7) % 101
    acc += (958 * 3 + 7) % 101
    acc += (959 * 3 + 7) % 101
    acc += (960 * 3 + 7) % 101
    acc += (961 * 3 + 7) % 101
    acc += (962 * 3 + 7) % 101
    acc += (963 * 3 + 7) % 101
    acc += (964 * 3 + 7) % 101
    acc += (965 * 3 + 7) % 101
    acc += (966 * 3 + 7) % 101
    acc += (967 * 3 + 7) % 101
    acc += (968 * 3 + 7) % 101
    acc += (969 * 3 + 7) % 101
    acc += (970 * 3 + 7) % 101
    acc += (971 * 3 + 7) % 101
    acc += (972 * 3 + 7) % 101
    acc += (973 * 3 + 7) % 101
    acc += (974 * 3 + 7) % 101
    acc += (975 * 3 + 7) % 101
    acc += (976 * 3 + 7) % 101
    acc += (977 * 3 + 7) % 101
    acc += (978 * 3 + 7) % 101
    acc += (979 * 3 + 7) % 101
    acc += (980 * 3 + 7) % 101
    acc += (981 * 3 + 7) % 101
    acc += (982 * 3 + 7) % 101
    acc += (983 * 3 + 7) % 101
    acc += (984 * 3 + 7) % 101
    acc += (985 * 3 + 7) % 101
    acc += (986 * 3 + 7) % 101
    acc += (987 * 3 + 7) % 101
    acc += (988 * 3 + 7) % 101
    acc += (989 * 3 + 7) % 101
    acc += (990 * 3 + 7) % 101
    acc += (991 * 3 + 7) % 101
    acc += (992 * 3 + 7) % 101
    acc += (993 * 3 + 7) % 101
    acc += (994 * 3 + 7) % 101
    acc += (995 * 3 + 7) % 101
    acc += (996 * 3 + 7) % 101
    acc += (997 * 3 + 7) % 101
    acc += (998 * 3 + 7) % 101
    acc += (999 * 3 + 7) % 101
    acc += (1000 * 3 + 7) % 101
    acc += (1001 * 3 + 7) % 101
    acc += (1002 * 3 + 7) % 101
    acc += (1003 * 3 + 7) % 101
    acc += (1004 * 3 + 7) % 101
    acc += (1005 * 3 + 7) % 101
    acc += (1006 * 3 + 7) % 101
    acc += (1007 * 3 + 7) % 101
    acc += (1008 * 3 + 7) % 101
    acc += (1009 * 3 + 7) % 101
    acc += (1010 * 3 + 7) % 101
    acc += (1011 * 3 + 7) % 101
    acc += (1012 * 3 + 7) % 101
    acc += (1013 * 3 + 7) % 101
    acc += (1014 * 3 + 7) % 101
    acc += (1015 * 3 + 7) % 101
    acc += (1016 * 3 + 7) % 101
    acc += (1017 * 3 + 7) % 101
    acc += (1018 * 3 + 7) % 101
    acc += (1019 * 3 + 7) % 101
    acc += (1020 * 3 + 7) % 101
    acc += (1021 * 3 + 7) % 101
    acc += (1022 * 3 + 7) % 101
    acc += (1023 * 3 + 7) % 101
    acc += (1024 * 3 + 7) % 101
    acc += (1025 * 3 + 7) % 101
    acc += (1026 * 3 + 7) % 101
    acc += (1027 * 3 + 7) % 101
    acc += (1028 * 3 + 7) % 101
    acc += (1029 * 3 + 7) % 101
    acc += (1030 * 3 + 7) % 101
    acc += (1031 * 3 + 7) % 101
    acc += (1032 * 3 + 7) % 101
    acc += (1033 * 3 + 7) % 101
    acc += (1034 * 3 + 7) % 101
    acc += (1035 * 3 + 7) % 101
    acc += (1036 * 3 + 7) % 101
    acc += (1037 * 3 + 7) % 101
    acc += (1038 * 3 + 7) % 101
    acc += (1039 * 3 + 7) % 101
    acc += (1040 * 3 + 7) % 101
    acc += (1041 * 3 + 7) % 101
    acc += (1042 * 3 + 7) % 101
    acc += (1043 * 3 + 7) % 101
    acc += (1044 * 3 + 7) % 101
    acc += (1045 * 3 + 7) % 101
    acc += (1046 * 3 + 7) % 101
    acc += (1047 * 3 + 7) % 101
    acc += (1048 * 3 + 7) % 101
    acc += (1049 * 3 + 7) % 101
    acc += (1050 * 3 + 7) % 101
    acc += (1051 * 3 + 7) % 101
    acc += (1052 * 3 + 7) % 101
    acc += (1053 * 3 + 7) % 101
    acc += (1054 * 3 + 7) % 101
    acc += (1055 * 3 + 7) % 101
    acc += (1056 * 3 + 7) % 101
    acc += (1057 * 3 + 7) % 101
    acc += (1058 * 3 + 7) % 101
    acc += (1059 * 3 + 7) % 101
    acc += (1060 * 3 + 7) % 101
    acc += (1061 * 3 + 7) % 101
    acc += (1062 * 3 + 7) % 101
    acc += (1063 * 3 + 7) % 101
    acc += (1064 * 3 + 7) % 101
    acc += (1065 * 3 + 7) % 101
    acc += (1066 * 3 + 7) % 101
    acc += (1067 * 3 + 7) % 101
    acc += (1068 * 3 + 7) % 101
    acc += (1069 * 3 + 7) % 101
    acc += (1070 * 3 + 7) % 101
    acc += (1071 * 3 + 7) % 101
    acc += (1072 * 3 + 7) % 101
    acc += (1073 * 3 + 7) % 101
    acc += (1074 * 3 + 7) % 101
    acc += (1075 * 3 + 7) % 101
    acc += (1076 * 3 + 7) % 101
    acc += (1077 * 3 + 7) % 101
    acc += (1078 * 3 + 7) % 101
    acc += (1079 * 3 + 7) % 101
    acc += (1080 * 3 + 7) % 101
    acc += (1081 * 3 + 7) % 101
    acc += (1082 * 3 + 7) % 101
    acc += (1083 * 3 + 7) % 101
    acc += (1084 * 3 + 7) % 101
    acc += (1085 * 3 + 7) % 101
    acc += (1086 * 3 + 7) % 101
    acc += (1087 * 3 + 7) % 101
    acc += (1088 * 3 + 7) % 101
    acc += (1089 * 3 + 7) % 101
    acc += (1090 * 3 + 7) % 101
    acc += (1091 * 3 + 7) % 101
    acc += (1092 * 3 + 7) % 101
    acc += (1093 * 3 + 7) % 101
    acc += (1094 * 3 + 7) % 101
    acc += (1095 * 3 + 7) % 101
    acc += (1096 * 3 + 7) % 101
    acc += (1097 * 3 + 7) % 101
    acc += (1098 * 3 + 7) % 101
    acc += (1099 * 3 + 7) % 101
    acc += (1100 * 3 + 7) % 101
    acc += (1101 * 3 + 7) % 101
    acc += (1102 * 3 + 7) % 101
    acc += (1103 * 3 + 7) % 101
    acc += (1104 * 3 + 7) % 101
    acc += (1105 * 3 + 7) % 101
    acc += (1106 * 3 + 7) % 101
    acc += (1107 * 3 + 7) % 101
    acc += (1108 * 3 + 7) % 101
    acc += (1109 * 3 + 7) % 101
    acc += (1110 * 3 + 7) % 101
    acc += (1111 * 3 + 7) % 101
    acc += (1112 * 3 + 7) % 101
    acc += (1113 * 3 + 7) % 101
    acc += (1114 * 3 + 7) % 101
    acc += (1115 * 3 + 7) % 101
    acc += (1116 * 3 + 7) % 101
    acc += (1117 * 3 + 7) % 101
    acc += (1118 * 3 + 7) % 101
    acc += (1119 * 3 + 7) % 101
    acc += (1120 * 3 + 7) % 101
    acc += (1121 * 3 + 7) % 101
    acc += (1122 * 3 + 7) % 101
    acc += (1123 * 3 + 7) % 101
    acc += (1124 * 3 + 7) % 101
    acc += (1125 * 3 + 7) % 101
    acc += (1126 * 3 + 7) % 101
    acc += (1127 * 3 + 7) % 101
    acc += (1128 * 3 + 7) % 101
    acc += (1129 * 3 + 7) % 101
    acc += (1130 * 3 + 7) % 101
    acc += (1131 * 3 + 7) % 101
    acc += (1132 * 3 + 7) % 101
    acc += (1133 * 3 + 7) % 101
    acc += (1134 * 3 + 7) % 101
    acc += (1135 * 3 + 7) % 101
    acc += (1136 * 3 + 7) % 101
    acc += (1137 * 3 + 7) % 101
    acc += (1138 * 3 + 7) % 101
    acc += (1139 * 3 + 7) % 101
    acc += (1140 * 3 + 7) % 101
    acc += (1141 * 3 + 7) % 101
    acc += (1142 * 3 + 7) % 101
    acc += (1143 * 3 + 7) % 101
    acc += (1144 * 3 + 7) % 101
    acc += (1145 * 3 + 7) % 101
    acc += (1146 * 3 + 7) % 101
    acc += (1147 * 3 + 7) % 101
    acc += (1148 * 3 + 7) % 101
    acc += (1149 * 3 + 7) % 101
    acc += (1150 * 3 + 7) % 101
    acc += (1151 * 3 + 7) % 101
    acc += (1152 * 3 + 7) % 101
    acc += (1153 * 3 + 7) % 101
    acc += (1154 * 3 + 7) % 101
    acc += (1155 * 3 + 7) % 101
    acc += (1156 * 3 + 7) % 101
    acc += (1157 * 3 + 7) % 101
    acc += (1158 * 3 + 7) % 101
    acc += (1159 * 3 + 7) % 101
    acc += (1160 * 3 + 7) % 101
    acc += (1161 * 3 + 7) % 101
    acc += (1162 * 3 + 7) % 101
    acc += (1163 * 3 + 7) % 101
    acc += (1164 * 3 + 7) % 101
    acc += (1165 * 3 + 7) % 101
    acc += (1166 * 3 + 7) % 101
    acc += (1167 * 3 + 7) % 101
    acc += (1168 * 3 + 7) % 101
    acc += (1169 * 3 + 7) % 101
    acc += (1170 * 3 + 7) % 101
    acc += (1171 * 3 + 7) % 101
    acc += (1172 * 3 + 7) % 101
    acc += (1173 * 3 + 7) % 101
    acc += (1174 * 3 + 7) % 101
    acc += (1175 * 3 + 7) % 101
    acc += (1176 * 3 + 7) % 101
    acc += (1177 * 3 + 7) % 101
    acc += (1178 * 3 + 7) % 101
    acc += (1179 * 3 + 7) % 101
    acc += (1180 * 3 + 7) % 101
    acc += (1181 * 3 + 7) % 101
    acc += (1182 * 3 + 7) % 101
    acc += (1183 * 3 + 7) % 101
    acc += (1184 * 3 + 7) % 101
    acc += (1185 * 3 + 7) % 101
    acc += (1186 * 3 + 7) % 101
    acc += (1187 * 3 + 7) % 101
    acc += (1188 * 3 + 7) % 101
    acc += (1189 * 3 + 7) % 101
    acc += (1190 * 3 + 7) % 101
    acc += (1191 * 3 + 7) % 101
    acc += (1192 * 3 + 7) % 101
    acc += (1193 * 3 + 7) % 101
    acc += (1194 * 3 + 7) % 101
    acc += (1195 * 3 + 7) % 101
    acc += (1196 * 3 + 7) % 101
    acc += (1197 * 3 + 7) % 101
    acc += (1198 * 3 + 7) % 101
    acc += (1199 * 3 + 7) % 101
    acc += (1200 * 3 + 7) % 101
    acc += (1201 * 3 + 7) % 101
    acc += (1202 * 3 + 7) % 101
    acc += (1203 * 3 + 7) % 101
    acc += (1204 * 3 + 7) % 101
    acc += (1205 * 3 + 7) % 101
    acc += (1206 * 3 + 7) % 101
    acc += (1207 * 3 + 7) % 101
    acc += (1208 * 3 + 7) % 101
    acc += (1209 * 3 + 7) % 101
    acc += (1210 * 3 + 7) % 101
    acc += (1211 * 3 + 7) % 101
    acc += (1212 * 3 + 7) % 101
    acc += (1213 * 3 + 7) % 101
    acc += (1214 * 3 + 7) % 101
    acc += (1215 * 3 + 7) % 101
    acc += (1216 * 3 + 7) % 101
    acc += (1217 * 3 + 7) % 101
    acc += (1218 * 3 + 7) % 101
    acc += (1219 * 3 + 7) % 101
    acc += (1220 * 3 + 7) % 101
    acc += (1221 * 3 + 7) % 101
    acc += (1222 * 3 + 7) % 101
    acc += (1223 * 3 + 7) % 101
    acc += (1224 * 3 + 7) % 101
    acc += (1225 * 3 + 7) % 101
    acc += (1226 * 3 + 7) % 101
    acc += (1227 * 3 + 7) % 101
    acc += (1228 * 3 + 7) % 101
    acc += (1229 * 3 + 7) % 101
    acc += (1230 * 3 + 7) % 101
    acc += (1231 * 3 + 7) % 101
    acc += (1232 * 3 + 7) % 101
    acc += (1233 * 3 + 7) % 101
    acc += (1234 * 3 + 7) % 101
    acc += (1235 * 3 + 7) % 101
    acc += (1236 * 3 + 7) % 101
    acc += (1237 * 3 + 7) % 101
    acc += (1238 * 3 + 7) % 101
    acc += (1239 * 3 + 7) % 101
    acc += (1240 * 3 + 7) % 101
    acc += (1241 * 3 + 7) % 101
    acc += (1242 * 3 + 7) % 101
    acc += (1243 * 3 + 7) % 101
    acc += (1244 * 3 + 7) % 101
    acc += (1245 * 3 + 7) % 101
    acc += (1246 * 3 + 7) % 101
    acc += (1247 * 3 + 7) % 101
    acc += (1248 * 3 + 7) % 101
    acc += (1249 * 3 + 7) % 101
    acc += (1250 * 3 + 7) % 101
    acc += (1251 * 3 + 7) % 101
    acc += (1252 * 3 + 7) % 101
    acc += (1253 * 3 + 7) % 101
    acc += (1254 * 3 + 7) % 101
    acc += (1255 * 3 + 7) % 101
    acc += (1256 * 3 + 7) % 101
    acc += (1257 * 3 + 7) % 101
    acc += (1258 * 3 + 7) % 101
    acc += (1259 * 3 + 7) % 101
    acc += (1260 * 3 + 7) % 101
    acc += (1261 * 3 + 7) % 101
    acc += (1262 * 3 + 7) % 101
    acc += (1263 * 3 + 7) % 101
    acc += (1264 * 3 + 7) % 101
    acc += (1265 * 3 + 7) % 101
    acc += (1266 * 3 + 7) % 101
    acc += (1267 * 3 + 7) % 101
    acc += (1268 * 3 + 7) % 101
    acc += (1269 * 3 + 7) % 101
    acc += (1270 * 3 + 7) % 101
    acc += (1271 * 3 + 7) % 101
    acc += (1272 * 3 + 7) % 101
    acc += (1273 * 3 + 7) % 101
    acc += (1274 * 3 + 7) % 101
    acc += (1275 * 3 + 7) % 101
    acc += (1276 * 3 + 7) % 101
    acc += (1277 * 3 + 7) % 101
    acc += (1278 * 3 + 7) % 101
    acc += (1279 * 3 + 7) % 101
    acc += (1280 * 3 + 7) % 101
    acc += (1281 * 3 + 7) % 101
    acc += (1282 * 3 + 7) % 101
    acc += (1283 * 3 + 7) % 101
    acc += (1284 * 3 + 7) % 101
    acc += (1285 * 3 + 7) % 101
    acc += (1286 * 3 + 7) % 101
    acc += (1287 * 3 + 7) % 101
    acc += (1288 * 3 + 7) % 101
    acc += (1289 * 3 + 7) % 101
    acc += (1290 * 3 + 7) % 101
    acc += (1291 * 3 + 7) % 101
    acc += (1292 * 3 + 7) % 101
    acc += (1293 * 3 + 7) % 101
    acc += (1294 * 3 + 7) % 101
    acc += (1295 * 3 + 7) % 101
    acc += (1296 * 3 + 7) % 101
    acc += (1297 * 3 + 7) % 101
    acc += (1298 * 3 + 7) % 101
    acc += (1299 * 3 + 7) % 101
    acc += (1300 * 3 + 7) % 101
    acc += (1301 * 3 + 7) % 101
    acc += (1302 * 3 + 7) % 101
    acc += (1303 * 3 + 7) % 101
    acc += (1304 * 3 + 7) % 101
    acc += (1305 * 3 + 7) % 101
    acc += (1306 * 3 + 7) % 101
    acc += (1307 * 3 + 7) % 101
    acc += (1308 * 3 + 7) % 101
    acc += (1309 * 3 + 7) % 101
    acc += (1310 * 3 + 7) % 101
    acc += (1311 * 3 + 7) % 101
    acc += (1312 * 3 + 7) % 101
    acc += (1313 * 3 + 7) % 101
    acc += (1314 * 3 + 7) % 101
    acc += (1315 * 3 + 7) % 101
    acc += (1316 * 3 + 7) % 101
    acc += (1317 * 3 + 7) % 101
    acc += (1318 * 3 + 7) % 101
    acc += (1319 * 3 + 7) % 101
    acc += (1320 * 3 + 7) % 101
    acc += (1321 * 3 + 7) % 101
    acc += (1322 * 3 + 7) % 101
    acc += (1323 * 3 + 7) % 101
    acc += (1324 * 3 + 7) % 101
    acc += (1325 * 3 + 7) % 101
    acc += (1326 * 3 + 7) % 101
    acc += (1327 * 3 + 7) % 101
    acc += (1328 * 3 + 7) % 101
    acc += (1329 * 3 + 7) % 101
    acc += (1330 * 3 + 7) % 101
    acc += (1331 * 3 + 7) % 101
    acc += (1332 * 3 + 7) % 101
    acc += (1333 * 3 + 7) % 101
    acc += (1334 * 3 + 7) % 101
    acc += (1335 * 3 + 7) % 101
    acc += (1336 * 3 + 7) % 101
    acc += (1337 * 3 + 7) % 101
    acc += (1338 * 3 + 7) % 101
    acc += (1339 * 3 + 7) % 101
    acc += (1340 * 3 + 7) % 101
    acc += (1341 * 3 + 7) % 101
    acc += (1342 * 3 + 7) % 101
    acc += (1343 * 3 + 7) % 101
    acc += (1344 * 3 + 7) % 101
    acc += (1345 * 3 + 7) % 101
    acc += (1346 * 3 + 7) % 101
    acc += (1347 * 3 + 7) % 101
    acc += (1348 * 3 + 7) % 101
    acc += (1349 * 3 + 7) % 101
    acc += (1350 * 3 + 7) % 101
    acc += (1351 * 3 + 7) % 101
    acc += (1352 * 3 + 7) % 101
    acc += (1353 * 3 + 7) % 101
    acc += (1354 * 3 + 7) % 101
    acc += (1355 * 3 + 7) % 101
    acc += (1356 * 3 + 7) % 101
    acc += (1357 * 3 + 7) % 101
    acc += (1358 * 3 + 7) % 101
    acc += (1359 * 3 + 7) % 101
    acc += (1360 * 3 + 7) % 101
    acc += (1361 * 3 + 7) % 101
    acc += (1362 * 3 + 7) % 101
    acc += (1363 * 3 + 7) % 101
    acc += (1364 * 3 + 7) % 101
    acc += (1365 * 3 + 7) % 101
    acc += (1366 * 3 + 7) % 101
    acc += (1367 * 3 + 7) % 101
    acc += (1368 * 3 + 7) % 101
    acc += (1369 * 3 + 7) % 101
    acc += (1370 * 3 + 7) % 101
    acc += (1371 * 3 + 7) % 101
    acc += (1372 * 3 + 7) % 101
    acc += (1373 * 3 + 7) % 101
    acc += (1374 * 3 + 7) % 101
    acc += (1375 * 3 + 7) % 101
    acc += (1376 * 3 + 7) % 101
    acc += (1377 * 3 + 7) % 101
    acc += (1378 * 3 + 7) % 101
    acc += (1379 * 3 + 7) % 101
    acc += (1380 * 3 + 7) % 101
    acc += (1381 * 3 + 7) % 101
    acc += (1382 * 3 + 7) % 101
    acc += (1383 * 3 + 7) % 101
    acc += (1384 * 3 + 7) % 101
    acc += (1385 * 3 + 7) % 101
    acc += (1386 * 3 + 7) % 101
    acc += (1387 * 3 + 7) % 101
    acc += (1388 * 3 + 7) % 101
    acc += (1389 * 3 + 7) % 101
    acc += (1390 * 3 + 7) % 101
    acc += (1391 * 3 + 7) % 101
    acc += (1392 * 3 + 7) % 101
    acc += (1393 * 3 + 7) % 101
    acc += (1394 * 3 + 7) % 101
    acc += (1395 * 3 + 7) % 101
    acc += (1396 * 3 + 7) % 101
    acc += (1397 * 3 + 7) % 101
    acc += (1398 * 3 + 7) % 101
    acc += (1399 * 3 + 7) % 101
    acc += (1400 * 3 + 7) % 101
    acc += (1401 * 3 + 7) % 101
    acc += (1402 * 3 + 7) % 101
    acc += (1403 * 3 + 7) % 101
    acc += (1404 * 3 + 7) % 101
    acc += (1405 * 3 + 7) % 101
    acc += (1406 * 3 + 7) % 101
    acc += (1407 * 3 + 7) % 101
    acc += (1408 * 3 + 7) % 101
    acc += (1409 * 3 + 7) % 101
    acc += (1410 * 3 + 7) % 101
    acc += (1411 * 3 + 7) % 101
    acc += (1412 * 3 + 7) % 101
    acc += (1413 * 3 + 7) % 101
    acc += (1414 * 3 + 7) % 101
    acc += (1415 * 3 + 7) % 101
    acc += (1416 * 3 + 7) % 101
    acc += (1417 * 3 + 7) % 101
    acc += (1418 * 3 + 7) % 101
    acc += (1419 * 3 + 7) % 101
    acc += (1420 * 3 + 7) % 101
    acc += (1421 * 3 + 7) % 101
    acc += (1422 * 3 + 7) % 101
    acc += (1423 * 3 + 7) % 101
    acc += (1424 * 3 + 7) % 101
    acc += (1425 * 3 + 7) % 101
    acc += (1426 * 3 + 7) % 101
    acc += (1427 * 3 + 7) % 101
    acc += (1428 * 3 + 7) % 101
    acc += (1429 * 3 + 7) % 101
    acc += (1430 * 3 + 7) % 101
    acc += (1431 * 3 + 7) % 101
    acc += (1432 * 3 + 7) % 101
    acc += (1433 * 3 + 7) % 101
    acc += (1434 * 3 + 7) % 101
    acc += (1435 * 3 + 7) % 101
    acc += (1436 * 3 + 7) % 101
    acc += (1437 * 3 + 7) % 101
    acc += (1438 * 3 + 7) % 101
    acc += (1439 * 3 + 7) % 101
    acc += (1440 * 3 + 7) % 101
    acc += (1441 * 3 + 7) % 101
    acc += (1442 * 3 + 7) % 101
    acc += (1443 * 3 + 7) % 101
    acc += (1444 * 3 + 7) % 101
    acc += (1445 * 3 + 7) % 101
    acc += (1446 * 3 + 7) % 101
    acc += (1447 * 3 + 7) % 101
    acc += (1448 * 3 + 7) % 101
    acc += (1449 * 3 + 7) % 101
    acc += (1450 * 3 + 7) % 101
    acc += (1451 * 3 + 7) % 101
    acc += (1452 * 3 + 7) % 101
    acc += (1453 * 3 + 7) % 101
    acc += (1454 * 3 + 7) % 101
    acc += (1455 * 3 + 7) % 101
    acc += (1456 * 3 + 7) % 101
    acc += (1457 * 3 + 7) % 101
    acc += (1458 * 3 + 7) % 101
    acc += (1459 * 3 + 7) % 101
    acc += (1460 * 3 + 7) % 101
    acc += (1461 * 3 + 7) % 101
    acc += (1462 * 3 + 7) % 101
    acc += (1463 * 3 + 7) % 101
    acc += (1464 * 3 + 7) % 101
    acc += (1465 * 3 + 7) % 101
    acc += (1466 * 3 + 7) % 101
    acc += (1467 * 3 + 7) % 101
    acc += (1468 * 3 + 7) % 101
    acc += (1469 * 3 + 7) % 101
    acc += (1470 * 3 + 7) % 101
    acc += (1471 * 3 + 7) % 101
    acc += (1472 * 3 + 7) % 101
    acc += (1473 * 3 + 7) % 101
    acc += (1474 * 3 + 7) % 101
    acc += (1475 * 3 + 7) % 101
    acc += (1476 * 3 + 7) % 101
    acc += (1477 * 3 + 7) % 101
    acc += (1478 * 3 + 7) % 101
    acc += (1479 * 3 + 7) % 101
    acc += (1480 * 3 + 7) % 101
    acc += (1481 * 3 + 7) % 101
    acc += (1482 * 3 + 7) % 101
    acc += (1483 * 3 + 7) % 101
    acc += (1484 * 3 + 7) % 101
    acc += (1485 * 3 + 7) % 101
    acc += (1486 * 3 + 7) % 101
    acc += (1487 * 3 + 7) % 101
    acc += (1488 * 3 + 7) % 101
    acc += (1489 * 3 + 7) % 101
    acc += (1490 * 3 + 7) % 101
    acc += (1491 * 3 + 7) % 101
    acc += (1492 * 3 + 7) % 101
    acc += (1493 * 3 + 7) % 101
    acc += (1494 * 3 + 7) % 101
    acc += (1495 * 3 + 7) % 101
    acc += (1496 * 3 + 7) % 101
    acc += (1497 * 3 + 7) % 101
    acc += (1498 * 3 + 7) % 101
    acc += (1499 * 3 + 7) % 101
    acc += (1500 * 3 + 7) % 101
    acc += (1501 * 3 + 7) % 101
    acc += (1502 * 3 + 7) % 101
    acc += (1503 * 3 + 7) % 101
    acc += (1504 * 3 + 7) % 101
    acc += (1505 * 3 + 7) % 101
    acc += (1506 * 3 + 7) % 101
    acc += (1507 * 3 + 7) % 101
    acc += (1508 * 3 + 7) % 101
    acc += (1509 * 3 + 7) % 101
    acc += (1510 * 3 + 7) % 101
    acc += (1511 * 3 + 7) % 101
    acc += (1512 * 3 + 7) % 101
    acc += (1513 * 3 + 7) % 101
    acc += (1514 * 3 + 7) % 101
    acc += (1515 * 3 + 7) % 101
    acc += (1516 * 3 + 7) % 101
    acc += (1517 * 3 + 7) % 101
    acc += (1518 * 3 + 7) % 101
    acc += (1519 * 3 + 7) % 101
    acc += (1520 * 3 + 7) % 101
    acc += (1521 * 3 + 7) % 101
    acc += (1522 * 3 + 7) % 101
    acc += (1523 * 3 + 7) % 101
    acc += (1524 * 3 + 7) % 101
    acc += (1525 * 3 + 7) % 101
    acc += (1526 * 3 + 7) % 101
    acc += (1527 * 3 + 7) % 101
    acc += (1528 * 3 + 7) % 101
    acc += (1529 * 3 + 7) % 101
    acc += (1530 * 3 + 7) % 101
    acc += (1531 * 3 + 7) % 101
    acc += (1532 * 3 + 7) % 101
    acc += (1533 * 3 + 7) % 101
    acc += (1534 * 3 + 7) % 101
    acc += (1535 * 3 + 7) % 101
    acc += (1536 * 3 + 7) % 101
    acc += (1537 * 3 + 7) % 101
    acc += (1538 * 3 + 7) % 101
    acc += (1539 * 3 + 7) % 101
    acc += (1540 * 3 + 7) % 101
    acc += (1541 * 3 + 7) % 101
    acc += (1542 * 3 + 7) % 101
    acc += (1543 * 3 + 7) % 101
    acc += (1544 * 3 + 7) % 101
    acc += (1545 * 3 + 7) % 101
    acc += (1546 * 3 + 7) % 101
    acc += (1547 * 3 + 7) % 101
    acc += (1548 * 3 + 7) % 101
    acc += (1549 * 3 + 7) % 101
    acc += (1550 * 3 + 7) % 101
    acc += (1551 * 3 + 7) % 101
    acc += (1552 * 3 + 7) % 101
    acc += (1553 * 3 + 7) % 101
    acc += (1554 * 3 + 7) % 101
    acc += (1555 * 3 + 7) % 101
    acc += (1556 * 3 + 7) % 101
    acc += (1557 * 3 + 7) % 101
    acc += (1558 * 3 + 7) % 101
    acc += (1559 * 3 + 7) % 101
    acc += (1560 * 3 + 7) % 101
    acc += (1561 * 3 + 7) % 101
    acc += (1562 * 3 + 7) % 101
    acc += (1563 * 3 + 7) % 101
    acc += (1564 * 3 + 7) % 101
    acc += (1565 * 3 + 7) % 101
    acc += (1566 * 3 + 7) % 101
    acc += (1567 * 3 + 7) % 101
    acc += (1568 * 3 + 7) % 101
    acc += (1569 * 3 + 7) % 101
    acc += (1570 * 3 + 7) % 101
    acc += (1571 * 3 + 7) % 101
    acc += (1572 * 3 + 7) % 101
    acc += (1573 * 3 + 7) % 101
    acc += (1574 * 3 + 7) % 101
    acc += (1575 * 3 + 7) % 101
    acc += (1576 * 3 + 7) % 101
    acc += (1577 * 3 + 7) % 101
    acc += (1578 * 3 + 7) % 101
    acc += (1579 * 3 + 7) % 101
    acc += (1580 * 3 + 7) % 101
    acc += (1581 * 3 + 7) % 101
    acc += (1582 * 3 + 7) % 101
    acc += (1583 * 3 + 7) % 101
    acc += (1584 * 3 + 7) % 101
    acc += (1585 * 3 + 7) % 101
    acc += (1586 * 3 + 7) % 101
    acc += (1587 * 3 + 7) % 101
    acc += (1588 * 3 + 7) % 101
    acc += (1589 * 3 + 7) % 101
    acc += (1590 * 3 + 7) % 101
    acc += (1591 * 3 + 7) % 101
    acc += (1592 * 3 + 7) % 101
    acc += (1593 * 3 + 7) % 101
    acc += (1594 * 3 + 7) % 101
    acc += (1595 * 3 + 7) % 101
    acc += (1596 * 3 + 7) % 101
    acc += (1597 * 3 + 7) % 101
    acc += (1598 * 3 + 7) % 101
    acc += (1599 * 3 + 7) % 101
    acc += (1600 * 3 + 7) % 101
    acc += (1601 * 3 + 7) % 101
    acc += (1602 * 3 + 7) % 101
    acc += (1603 * 3 + 7) % 101
    acc += (1604 * 3 + 7) % 101
    acc += (1605 * 3 + 7) % 101
    acc += (1606 * 3 + 7) % 101
    acc += (1607 * 3 + 7) % 101
    acc += (1608 * 3 + 7) % 101
    acc += (1609 * 3 + 7) % 101
    acc += (1610 * 3 + 7) % 101
    acc += (1611 * 3 + 7) % 101
    acc += (1612 * 3 + 7) % 101
    acc += (1613 * 3 + 7) % 101
    acc += (1614 * 3 + 7) % 101
    acc += (1615 * 3 + 7) % 101
    acc += (1616 * 3 + 7) % 101
    acc += (1617 * 3 + 7) % 101
    acc += (1618 * 3 + 7) % 101
    acc += (1619 * 3 + 7) % 101
    acc += (1620 * 3 + 7) % 101
    acc += (1621 * 3 + 7) % 101
    acc += (1622 * 3 + 7) % 101
    acc += (1623 * 3 + 7) % 101
    acc += (1624 * 3 + 7) % 101
    acc += (1625 * 3 + 7) % 101
    acc += (1626 * 3 + 7) % 101
    acc += (1627 * 3 + 7) % 101
    acc += (1628 * 3 + 7) % 101
    acc += (1629 * 3 + 7) % 101
    acc += (1630 * 3 + 7) % 101
    acc += (1631 * 3 + 7) % 101
    acc += (1632 * 3 + 7) % 101
    acc += (1633 * 3 + 7) % 101
    acc += (1634 * 3 + 7) % 101
    acc += (1635 * 3 + 7) % 101
    acc += (1636 * 3 + 7) % 101
    acc += (1637 * 3 + 7) % 101
    acc += (1638 * 3 + 7) % 101
    acc += (1639 * 3 + 7) % 101
    acc += (1640 * 3 + 7) % 101
    acc += (1641 * 3 + 7) % 101
    acc += (1642 * 3 + 7) % 101
    acc += (1643 * 3 + 7) % 101
    acc += (1644 * 3 + 7) % 101
    acc += (1645 * 3 + 7) % 101
    acc += (1646 * 3 + 7) % 101
    acc += (1647 * 3 + 7) % 101
    acc += (1648 * 3 + 7) % 101
    acc += (1649 * 3 + 7) % 101
    acc += (1650 * 3 + 7) % 101
    acc += (1651 * 3 + 7) % 101
    acc += (1652 * 3 + 7) % 101
    acc += (1653 * 3 + 7) % 101
    acc += (1654 * 3 + 7) % 101
    acc += (1655 * 3 + 7) % 101
    acc += (1656 * 3 + 7) % 101
    acc += (1657 * 3 + 7) % 101
    acc += (1658 * 3 + 7) % 101
    acc += (1659 * 3 + 7) % 101
    acc += (1660 * 3 + 7) % 101
    acc += (1661 * 3 + 7) % 101
    acc += (1662 * 3 + 7) % 101
    acc += (1663 * 3 + 7) % 101
    acc += (1664 * 3 + 7) % 101
    acc += (1665 * 3 + 7) % 101
    acc += (1666 * 3 + 7) % 101
    acc += (1667 * 3 + 7) % 101
    acc += (1668 * 3 + 7) % 101
    acc += (1669 * 3 + 7) % 101
    acc += (1670 * 3 + 7) % 101
    acc += (1671 * 3 + 7) % 101
    acc += (1672 * 3 + 7) % 101
    acc += (1673 * 3 + 7) % 101
    acc += (1674 * 3 + 7) % 101
    acc += (1675 * 3 + 7) % 101
    acc += (1676 * 3 + 7) % 101
    acc += (1677 * 3 + 7) % 101
    acc += (1678 * 3 + 7) % 101
    acc += (1679 * 3 + 7) % 101
    acc += (1680 * 3 + 7) % 101
    acc += (1681 * 3 + 7) % 101
    acc += (1682 * 3 + 7) % 101
    acc += (1683 * 3 + 7) % 101
    acc += (1684 * 3 + 7) % 101
    acc += (1685 * 3 + 7) % 101
    acc += (1686 * 3 + 7) % 101
    acc += (1687 * 3 + 7) % 101
    acc += (1688 * 3 + 7) % 101
    acc += (1689 * 3 + 7) % 101
    acc += (1690 * 3 + 7) % 101
    acc += (1691 * 3 + 7) % 101
    acc += (1692 * 3 + 7) % 101
    acc += (1693 * 3 + 7) % 101
    acc += (1694 * 3 + 7) % 101
    acc += (1695 * 3 + 7) % 101
    acc += (1696 * 3 + 7) % 101
    acc += (1697 * 3 + 7) % 101
    acc += (1698 * 3 + 7) % 101
    acc += (1699 * 3 + 7) % 101
    acc += (1700 * 3 + 7) % 101
    acc += (1701 * 3 + 7) % 101
    acc += (1702 * 3 + 7) % 101
    acc += (1703 * 3 + 7) % 101
    acc += (1704 * 3 + 7) % 101
    acc += (1705 * 3 + 7) % 101
    acc += (1706 * 3 + 7) % 101
    acc += (1707 * 3 + 7) % 101
    acc += (1708 * 3 + 7) % 101
    acc += (1709 * 3 + 7) % 101
    acc += (1710 * 3 + 7) % 101
    acc += (1711 * 3 + 7) % 101
    acc += (1712 * 3 + 7) % 101
    acc += (1713 * 3 + 7) % 101
    acc += (1714 * 3 + 7) % 101
    acc += (1715 * 3 + 7) % 101
    acc += (1716 * 3 + 7) % 101
    acc += (1717 * 3 + 7) % 101
    acc += (1718 * 3 + 7) % 101
    acc += (1719 * 3 + 7) % 101
    acc += (1720 * 3 + 7) % 101
    acc += (1721 * 3 + 7) % 101
    acc += (1722 * 3 + 7) % 101
    acc += (1723 * 3 + 7) % 101
    acc += (1724 * 3 + 7) % 101
    acc += (1725 * 3 + 7) % 101
    acc += (1726 * 3 + 7) % 101
    acc += (1727 * 3 + 7) % 101
    acc += (1728 * 3 + 7) % 101
    acc += (1729 * 3 + 7) % 101
    acc += (1730 * 3 + 7) % 101
    acc += (1731 * 3 + 7) % 101
    acc += (1732 * 3 + 7) % 101
    acc += (1733 * 3 + 7) % 101
    acc += (1734 * 3 + 7) % 101
    acc += (1735 * 3 + 7) % 101
    acc += (1736 * 3 + 7) % 101
    acc += (1737 * 3 + 7) % 101
    acc += (1738 * 3 + 7) % 101
    acc += (1739 * 3 + 7) % 101
    acc += (1740 * 3 + 7) % 101
    acc += (1741 * 3 + 7) % 101
    acc += (1742 * 3 + 7) % 101
    acc += (1743 * 3 + 7) % 101
    acc += (1744 * 3 + 7) % 101
    acc += (1745 * 3 + 7) % 101
    acc += (1746 * 3 + 7) % 101
    acc += (1747 * 3 + 7) % 101
    acc += (1748 * 3 + 7) % 101
    acc += (1749 * 3 + 7) % 101
    acc += (1750 * 3 + 7) % 101
    acc += (1751 * 3 + 7) % 101
    acc += (1752 * 3 + 7) % 101
    acc += (1753 * 3 + 7) % 101
    acc += (1754 * 3 + 7) % 101
    acc += (1755 * 3 + 7) % 101
    acc += (1756 * 3 + 7) % 101
    acc += (1757 * 3 + 7) % 101
    acc += (1758 * 3 + 7) % 101
    acc += (1759 * 3 + 7) % 101
    acc += (1760 * 3 + 7) % 101
    acc += (1761 * 3 + 7) % 101
    acc += (1762 * 3 + 7) % 101
    acc += (1763 * 3 + 7) % 101
    acc += (1764 * 3 + 7) % 101
    acc += (1765 * 3 + 7) % 101
    acc += (1766 * 3 + 7) % 101
    acc += (1767 * 3 + 7) % 101
    acc += (1768 * 3 + 7) % 101
    acc += (1769 * 3 + 7) % 101
    acc += (1770 * 3 + 7) % 101
    acc += (1771 * 3 + 7) % 101
    acc += (1772 * 3 + 7) % 101
    acc += (1773 * 3 + 7) % 101
    acc += (1774 * 3 + 7) % 101
    acc += (1775 * 3 + 7) % 101
    acc += (1776 * 3 + 7) % 101
    acc += (1777 * 3 + 7) % 101
    acc += (1778 * 3 + 7) % 101
    acc += (1779 * 3 + 7) % 101
    acc += (1780 * 3 + 7) % 101
    acc += (1781 * 3 + 7) % 101
    acc += (1782 * 3 + 7) % 101
    acc += (1783 * 3 + 7) % 101
    acc += (1784 * 3 + 7) % 101
    acc += (1785 * 3 + 7) % 101
    acc += (1786 * 3 + 7) % 101
    acc += (1787 * 3 + 7) % 101
    acc += (1788 * 3 + 7) % 101
    acc += (1789 * 3 + 7) % 101
    acc += (1790 * 3 + 7) % 101
    acc += (1791 * 3 + 7) % 101
    acc += (1792 * 3 + 7) % 101
    acc += (1793 * 3 + 7) % 101
    acc += (1794 * 3 + 7) % 101
    acc += (1795 * 3 + 7) % 101
    acc += (1796 * 3 + 7) % 101
    acc += (1797 * 3 + 7) % 101
    acc += (1798 * 3 + 7) % 101
    acc += (1799 * 3 + 7) % 101
    acc += (1800 * 3 + 7) % 101
    acc += (1801 * 3 + 7) % 101
    acc += (1802 * 3 + 7) % 101
    acc += (1803 * 3 + 7) % 101
    acc += (1804 * 3 + 7) % 101
    acc += (1805 * 3 + 7) % 101
    acc += (1806 * 3 + 7) % 101
    acc += (1807 * 3 + 7) % 101
    acc += (1808 * 3 + 7) % 101
    acc += (1809 * 3 + 7) % 101
    acc += (1810 * 3 + 7) % 101
    acc += (1811 * 3 + 7) % 101
    acc += (1812 * 3 + 7) % 101
    acc += (1813 * 3 + 7) % 101
    acc += (1814 * 3 + 7) % 101
    acc += (1815 * 3 + 7) % 101
    acc += (1816 * 3 + 7) % 101
    acc += (1817 * 3 + 7) % 101
    acc += (1818 * 3 + 7) % 101
    acc += (1819 * 3 + 7) % 101
    acc += (1820 * 3 + 7) % 101
    acc += (1821 * 3 + 7) % 101
    acc += (1822 * 3 + 7) % 101
    acc += (1823 * 3 + 7) % 101
    acc += (1824 * 3 + 7) % 101
    acc += (1825 * 3 + 7) % 101
    acc += (1826 * 3 + 7) % 101
    acc += (1827 * 3 + 7) % 101
    acc += (1828 * 3 + 7) % 101
    acc += (1829 * 3 + 7) % 101
    acc += (1830 * 3 + 7) % 101
    acc += (1831 * 3 + 7) % 101
    acc += (1832 * 3 + 7) % 101
    acc += (1833 * 3 + 7) % 101
    acc += (1834 * 3 + 7) % 101
    acc += (1835 * 3 + 7) % 101
    acc += (1836 * 3 + 7) % 101
    acc += (1837 * 3 + 7) % 101
    acc += (1838 * 3 + 7) % 101
    acc += (1839 * 3 + 7) % 101
    acc += (1840 * 3 + 7) % 101
    acc += (1841 * 3 + 7) % 101
    acc += (1842 * 3 + 7) % 101
    acc += (1843 * 3 + 7) % 101
    acc += (1844 * 3 + 7) % 101
    acc += (1845 * 3 + 7) % 101
    acc += (1846 * 3 + 7) % 101
    acc += (1847 * 3 + 7) % 101
    acc += (1848 * 3 + 7) % 101
    acc += (1849 * 3 + 7) % 101
    acc += (1850 * 3 + 7) % 101
    acc += (1851 * 3 + 7) % 101
    acc += (1852 * 3 + 7) % 101
    acc += (1853 * 3 + 7) % 101
    acc += (1854 * 3 + 7) % 101
    acc += (1855 * 3 + 7) % 101
    acc += (1856 * 3 + 7) % 101
    acc += (1857 * 3 + 7) % 101
    acc += (1858 * 3 + 7) % 101
    acc += (1859 * 3 + 7) % 101
    acc += (1860 * 3 + 7) % 101
    acc += (1861 * 3 + 7) % 101
    acc += (1862 * 3 + 7) % 101
    acc += (1863 * 3 + 7) % 101
    acc += (1864 * 3 + 7) % 101
    acc += (1865 * 3 + 7) % 101
    acc += (1866 * 3 + 7) % 101
    acc += (1867 * 3 + 7) % 101
    acc += (1868 * 3 + 7) % 101
    acc += (1869 * 3 + 7) % 101
    acc += (1870 * 3 + 7) % 101
    acc += (1871 * 3 + 7) % 101
    acc += (1872 * 3 + 7) % 101
    acc += (1873 * 3 + 7) % 101
    acc += (1874 * 3 + 7) % 101
    acc += (1875 * 3 + 7) % 101
    acc += (1876 * 3 + 7) % 101
    acc += (1877 * 3 + 7) % 101
    acc += (1878 * 3 + 7) % 101
    acc += (1879 * 3 + 7) % 101
    acc += (1880 * 3 + 7) % 101
    acc += (1881 * 3 + 7) % 101
    acc += (1882 * 3 + 7) % 101
    acc += (1883 * 3 + 7) % 101
    acc += (1884 * 3 + 7) % 101
    acc += (1885 * 3 + 7) % 101
    acc += (1886 * 3 + 7) % 101
    acc += (1887 * 3 + 7) % 101
    acc += (1888 * 3 + 7) % 101
    acc += (1889 * 3 + 7) % 101
    acc += (1890 * 3 + 7) % 101
    acc += (1891 * 3 + 7) % 101
    acc += (1892 * 3 + 7) % 101
    acc += (1893 * 3 + 7) % 101
    acc += (1894 * 3 + 7) % 101
    acc += (1895 * 3 + 7) % 101
    acc += (1896 * 3 + 7) % 101
    acc += (1897 * 3 + 7) % 101
    acc += (1898 * 3 + 7) % 101
    acc += (1899 * 3 + 7) % 101
    acc += (1900 * 3 + 7) % 101
    acc += (1901 * 3 + 7) % 101
    acc += (1902 * 3 + 7) % 101
    acc += (1903 * 3 + 7) % 101
    acc += (1904 * 3 + 7) % 101
    acc += (1905 * 3 + 7) % 101
    acc += (1906 * 3 + 7) % 101
    acc += (1907 * 3 + 7) % 101
    acc += (1908 * 3 + 7) % 101
    acc += (1909 * 3 + 7) % 101
    acc += (1910 * 3 + 7) % 101
    acc += (1911 * 3 + 7) % 101
    acc += (1912 * 3 + 7) % 101
    acc += (1913 * 3 + 7) % 101
    acc += (1914 * 3 + 7) % 101
    acc += (1915 * 3 + 7) % 101
    acc += (1916 * 3 + 7) % 101
    acc += (1917 * 3 + 7) % 101
    acc += (1918 * 3 + 7) % 101
    acc += (1919 * 3 + 7) % 101
    acc += (1920 * 3 + 7) % 101
    acc += (1921 * 3 + 7) % 101
    acc += (1922 * 3 + 7) % 101
    acc += (1923 * 3 + 7) % 101
    acc += (1924 * 3 + 7) % 101
    acc += (1925 * 3 + 7) % 101
    acc += (1926 * 3 + 7) % 101
    acc += (1927 * 3 + 7) % 101
    acc += (1928 * 3 + 7) % 101
    acc += (1929 * 3 + 7) % 101
    acc += (1930 * 3 + 7) % 101
    acc += (1931 * 3 + 7) % 101
    acc += (1932 * 3 + 7) % 101
    acc += (1933 * 3 + 7) % 101
    acc += (1934 * 3 + 7) % 101
    acc += (1935 * 3 + 7) % 101
    acc += (1936 * 3 + 7) % 101
    acc += (1937 * 3 + 7) % 101
    acc += (1938 * 3 + 7) % 101
    acc += (1939 * 3 + 7) % 101
    acc += (1940 * 3 + 7) % 101
    acc += (1941 * 3 + 7) % 101
    acc += (1942 * 3 + 7) % 101
    acc += (1943 * 3 + 7) % 101
    acc += (1944 * 3 + 7) % 101
    acc += (1945 * 3 + 7) % 101
    acc += (1946 * 3 + 7) % 101
    acc += (1947 * 3 + 7) % 101
    acc += (1948 * 3 + 7) % 101
    acc += (1949 * 3 + 7) % 101
    acc += (1950 * 3 + 7) % 101
    acc += (1951 * 3 + 7) % 101
    acc += (1952 * 3 + 7) % 101
    acc += (1953 * 3 + 7) % 101
    acc += (1954 * 3 + 7) % 101
    acc += (1955 * 3 + 7) % 101
    acc += (1956 * 3 + 7) % 101
    acc += (1957 * 3 + 7) % 101
    acc += (1958 * 3 + 7) % 101
    acc += (1959 * 3 + 7) % 101
    acc += (1960 * 3 + 7) % 101
    acc += (1961 * 3 + 7) % 101
    acc += (1962 * 3 + 7) % 101
    acc += (1963 * 3 + 7) % 101
    acc += (1964 * 3 + 7) % 101
    acc += (1965 * 3 + 7) % 101
    acc += (1966 * 3 + 7) % 101
    acc += (1967 * 3 + 7) % 101
    acc += (1968 * 3 + 7) % 101
    acc += (1969 * 3 + 7) % 101
    acc += (1970 * 3 + 7) % 101
    acc += (1971 * 3 + 7) % 101
    acc += (1972 * 3 + 7) % 101
    acc += (1973 * 3 + 7) % 101
    acc += (1974 * 3 + 7) % 101
    acc += (1975 * 3 + 7) % 101
    acc += (1976 * 3 + 7) % 101
    acc += (1977 * 3 + 7) % 101
    acc += (1978 * 3 + 7) % 101
    acc += (1979 * 3 + 7) % 101
    acc += (1980 * 3 + 7) % 101
    acc += (1981 * 3 + 7) % 101
    acc += (1982 * 3 + 7) % 101
    acc += (1983 * 3 + 7) % 101
    acc += (1984 * 3 + 7) % 101
    acc += (1985 * 3 + 7) % 101
    acc += (1986 * 3 + 7) % 101
    acc += (1987 * 3 + 7) % 101
    acc += (1988 * 3 + 7) % 101
    acc += (1989 * 3 + 7) % 101
    acc += (1990 * 3 + 7) % 101
    acc += (1991 * 3 + 7) % 101
    acc += (1992 * 3 + 7) % 101
    acc += (1993 * 3 + 7) % 101
    acc += (1994 * 3 + 7) % 101
    acc += (1995 * 3 + 7) % 101
    acc += (1996 * 3 + 7) % 101
    acc += (1997 * 3 + 7) % 101
    acc += (1998 * 3 + 7) % 101
    acc += (1999 * 3 + 7) % 101
    acc += (2000 * 3 + 7) % 101
    acc += (2001 * 3 + 7) % 101
    acc += (2002 * 3 + 7) % 101
    acc += (2003 * 3 + 7) % 101
    acc += (2004 * 3 + 7) % 101
    acc += (2005 * 3 + 7) % 101
    acc += (2006 * 3 + 7) % 101
    acc += (2007 * 3 + 7) % 101
    acc += (2008 * 3 + 7) % 101
    acc += (2009 * 3 + 7) % 101
    acc += (2010 * 3 + 7) % 101
    acc += (2011 * 3 + 7) % 101
    acc += (2012 * 3 + 7) % 101
    acc += (2013 * 3 + 7) % 101
    acc += (2014 * 3 + 7) % 101
    acc += (2015 * 3 + 7) % 101
    acc += (2016 * 3 + 7) % 101
    acc += (2017 * 3 + 7) % 101
    acc += (2018 * 3 + 7) % 101
    acc += (2019 * 3 + 7) % 101
    acc += (2020 * 3 + 7) % 101
    acc += (2021 * 3 + 7) % 101
    acc += (2022 * 3 + 7) % 101
    acc += (2023 * 3 + 7) % 101
    acc += (2024 * 3 + 7) % 101
    acc += (2025 * 3 + 7) % 101
    acc += (2026 * 3 + 7) % 101
    acc += (2027 * 3 + 7) % 101
    acc += (2028 * 3 + 7) % 101
    acc += (2029 * 3 + 7) % 101
    acc += (2030 * 3 + 7) % 101
    acc += (2031 * 3 + 7) % 101
    acc += (2032 * 3 + 7) % 101
    acc += (2033 * 3 + 7) % 101
    acc += (2034 * 3 + 7) % 101
    acc += (2035 * 3 + 7) % 101
    acc += (2036 * 3 + 7) % 101
    acc += (2037 * 3 + 7) % 101
    acc += (2038 * 3 + 7) % 101
    acc += (2039 * 3 + 7) % 101
    acc += (2040 * 3 + 7) % 101
    acc += (2041 * 3 + 7) % 101
    acc += (2042 * 3 + 7) % 101
    acc += (2043 * 3 + 7) % 101
    acc += (2044 * 3 + 7) % 101
    acc += (2045 * 3 + 7) % 101
    acc += (2046 * 3 + 7) % 101
    acc += (2047 * 3 + 7) % 101
    acc += (2048 * 3 + 7) % 101
    acc += (2049 * 3 + 7) % 101
    acc += (2050 * 3 + 7) % 101
    acc += (2051 * 3 + 7) % 101
    acc += (2052 * 3 + 7) % 101
    acc += (2053 * 3 + 7) % 101
    acc += (2054 * 3 + 7) % 101
    acc += (2055 * 3 + 7) % 101
    acc += (2056 * 3 + 7) % 101
    acc += (2057 * 3 + 7) % 101
    acc += (2058 * 3 + 7) % 101
    acc += (2059 * 3 + 7) % 101
    acc += (2060 * 3 + 7) % 101
    acc += (2061 * 3 + 7) % 101
    acc += (2062 * 3 + 7) % 101
    acc += (2063 * 3 + 7) % 101
    acc += (2064 * 3 + 7) % 101
    acc += (2065 * 3 + 7) % 101
    acc += (2066 * 3 + 7) % 101
    acc += (2067 * 3 + 7) % 101
    acc += (2068 * 3 + 7) % 101
    acc += (2069 * 3 + 7) % 101
    acc += (2070 * 3 + 7) % 101
    acc += (2071 * 3 + 7) % 101
    acc += (2072 * 3 + 7) % 101
    acc += (2073 * 3 + 7) % 101
    acc += (2074 * 3 + 7) % 101
    acc += (2075 * 3 + 7) % 101
    acc += (2076 * 3 + 7) % 101
    acc += (2077 * 3 + 7) % 101
    acc += (2078 * 3 + 7) % 101
    acc += (2079 * 3 + 7) % 101
    acc += (2080 * 3 + 7) % 101
    acc += (2081 * 3 + 7) % 101
    acc += (2082 * 3 + 7) % 101
    acc += (2083 * 3 + 7) % 101
    acc += (2084 * 3 + 7) % 101
    acc += (2085 * 3 + 7) % 101
    acc += (2086 * 3 + 7) % 101
    acc += (2087 * 3 + 7) % 101
    acc += (2088 * 3 + 7) % 101
    acc += (2089 * 3 + 7) % 101
    acc += (2090 * 3 + 7) % 101
    acc += (2091 * 3 + 7) % 101
    acc += (2092 * 3 + 7) % 101
    acc += (2093 * 3 + 7) % 101
    acc += (2094 * 3 + 7) % 101
    acc += (2095 * 3 + 7) % 101
    acc += (2096 * 3 + 7) % 101
    acc += (2097 * 3 + 7) % 101
    acc += (2098 * 3 + 7) % 101
    acc += (2099 * 3 + 7) % 101
    acc += (2100 * 3 + 7) % 101
    acc += (2101 * 3 + 7) % 101
    acc += (2102 * 3 + 7) % 101
    acc += (2103 * 3 + 7) % 101
    acc += (2104 * 3 + 7) % 101
    acc += (2105 * 3 + 7) % 101
    acc += (2106 * 3 + 7) % 101
    acc += (2107 * 3 + 7) % 101
    acc += (2108 * 3 + 7) % 101
    acc += (2109 * 3 + 7) % 101
    acc += (2110 * 3 + 7) % 101
    acc += (2111 * 3 + 7) % 101
    acc += (2112 * 3 + 7) % 101
    acc += (2113 * 3 + 7) % 101
    acc += (2114 * 3 + 7) % 101
    acc += (2115 * 3 + 7) % 101
    acc += (2116 * 3 + 7) % 101
    acc += (2117 * 3 + 7) % 101
    acc += (2118 * 3 + 7) % 101
    acc += (2119 * 3 + 7) % 101
    acc += (2120 * 3 + 7) % 101
    acc += (2121 * 3 + 7) % 101
    acc += (2122 * 3 + 7) % 101
    acc += (2123 * 3 + 7) % 101
    acc += (2124 * 3 + 7) % 101
    acc += (2125 * 3 + 7) % 101
    acc += (2126 * 3 + 7) % 101
    acc += (2127 * 3 + 7) % 101
    acc += (2128 * 3 + 7) % 101
    acc += (2129 * 3 + 7) % 101
    acc += (2130 * 3 + 7) % 101
    acc += (2131 * 3 + 7) % 101
    acc += (2132 * 3 + 7) % 101
    acc += (2133 * 3 + 7) % 101
    acc += (2134 * 3 + 7) % 101
    acc += (2135 * 3 + 7) % 101
    acc += (2136 * 3 + 7) % 101
    acc += (2137 * 3 + 7) % 101
    acc += (2138 * 3 + 7) % 101
    acc += (2139 * 3 + 7) % 101
    acc += (2140 * 3 + 7) % 101
    acc += (2141 * 3 + 7) % 101
    acc += (2142 * 3 + 7) % 101
    acc += (2143 * 3 + 7) % 101
    acc += (2144 * 3 + 7) % 101
    acc += (2145 * 3 + 7) % 101
    acc += (2146 * 3 + 7) % 101
    acc += (2147 * 3 + 7) % 101
    acc += (2148 * 3 + 7) % 101
    acc += (2149 * 3 + 7) % 101
    acc += (2150 * 3 + 7) % 101
    acc += (2151 * 3 + 7) % 101
    acc += (2152 * 3 + 7) % 101
    acc += (2153 * 3 + 7) % 101
    acc += (2154 * 3 + 7) % 101
    acc += (2155 * 3 + 7) % 101
    acc += (2156 * 3 + 7) % 101
    acc += (2157 * 3 + 7) % 101
    acc += (2158 * 3 + 7) % 101
    acc += (2159 * 3 + 7) % 101
    acc += (2160 * 3 + 7) % 101
    acc += (2161 * 3 + 7) % 101
    acc += (2162 * 3 + 7) % 101
    acc += (2163 * 3 + 7) % 101
    acc += (2164 * 3 + 7) % 101
    acc += (2165 * 3 + 7) % 101
    acc += (2166 * 3 + 7) % 101
    acc += (2167 * 3 + 7) % 101
    acc += (2168 * 3 + 7) % 101
    acc += (2169 * 3 + 7) % 101
    acc += (2170 * 3 + 7) % 101
    acc += (2171 * 3 + 7) % 101
    acc += (2172 * 3 + 7) % 101
    acc += (2173 * 3 + 7) % 101
    acc += (2174 * 3 + 7) % 101
    acc += (2175 * 3 + 7) % 101
    acc += (2176 * 3 + 7) % 101
    acc += (2177 * 3 + 7) % 101
    acc += (2178 * 3 + 7) % 101
    acc += (2179 * 3 + 7) % 101
    acc += (2180 * 3 + 7) % 101
    acc += (2181 * 3 + 7) % 101
    acc += (2182 * 3 + 7) % 101
    acc += (2183 * 3 + 7) % 101
    acc += (2184 * 3 + 7) % 101
    acc += (2185 * 3 + 7) % 101
    acc += (2186 * 3 + 7) % 101
    acc += (2187 * 3 + 7) % 101
    acc += (2188 * 3 + 7) % 101
    acc += (2189 * 3 + 7) % 101
    acc += (2190 * 3 + 7) % 101
    acc += (2191 * 3 + 7) % 101
    acc += (2192 * 3 + 7) % 101
    acc += (2193 * 3 + 7) % 101
    acc += (2194 * 3 + 7) % 101
    acc += (2195 * 3 + 7) % 101
    acc += (2196 * 3 + 7) % 101
    acc += (2197 * 3 + 7) % 101
    acc += (2198 * 3 + 7) % 101
    acc += (2199 * 3 + 7) % 101
    acc += (2200 * 3 + 7) % 101
    acc += (2201 * 3 + 7) % 101
    acc += (2202 * 3 + 7) % 101
    acc += (2203 * 3 + 7) % 101
    acc += (2204 * 3 + 7) % 101
    acc += (2205 * 3 + 7) % 101
    acc += (2206 * 3 + 7) % 101
    acc += (2207 * 3 + 7) % 101
    acc += (2208 * 3 + 7) % 101
    acc += (2209 * 3 + 7) % 101
    acc += (2210 * 3 + 7) % 101
    acc += (2211 * 3 + 7) % 101
    acc += (2212 * 3 + 7) % 101
    acc += (2213 * 3 + 7) % 101
    acc += (2214 * 3 + 7) % 101
    acc += (2215 * 3 + 7) % 101
    acc += (2216 * 3 + 7) % 101
    acc += (2217 * 3 + 7) % 101
    acc += (2218 * 3 + 7) % 101
    acc += (2219 * 3 + 7) % 101
    acc += (2220 * 3 + 7) % 101
    acc += (2221 * 3 + 7) % 101
    acc += (2222 * 3 + 7) % 101
    acc += (2223 * 3 + 7) % 101
    acc += (2224 * 3 + 7) % 101
    acc += (2225 * 3 + 7) % 101
    acc += (2226 * 3 + 7) % 101
    acc += (2227 * 3 + 7) % 101
    acc += (2228 * 3 + 7) % 101
    acc += (2229 * 3 + 7) % 101
    acc += (2230 * 3 + 7) % 101
    acc += (2231 * 3 + 7) % 101
    acc += (2232 * 3 + 7) % 101
    acc += (2233 * 3 + 7) % 101
    acc += (2234 * 3 + 7) % 101
    acc += (2235 * 3 + 7) % 101
    acc += (2236 * 3 + 7) % 101
    acc += (2237 * 3 + 7) % 101
    acc += (2238 * 3 + 7) % 101
    acc += (2239 * 3 + 7) % 101
    acc += (2240 * 3 + 7) % 101
    acc += (2241 * 3 + 7) % 101
    acc += (2242 * 3 + 7) % 101
    acc += (2243 * 3 + 7) % 101
    acc += (2244 * 3 + 7) % 101
    acc += (2245 * 3 + 7) % 101
    acc += (2246 * 3 + 7) % 101
    acc += (2247 * 3 + 7) % 101
    acc += (2248 * 3 + 7) % 101
    acc += (2249 * 3 + 7) % 101
    acc += (2250 * 3 + 7) % 101
    acc += (2251 * 3 + 7) % 101
    acc += (2252 * 3 + 7) % 101
    acc += (2253 * 3 + 7) % 101
    acc += (2254 * 3 + 7) % 101
    acc += (2255 * 3 + 7) % 101
    acc += (2256 * 3 + 7) % 101
    acc += (2257 * 3 + 7) % 101
    acc += (2258 * 3 + 7) % 101
    acc += (2259 * 3 + 7) % 101
    acc += (2260 * 3 + 7) % 101
    acc += (2261 * 3 + 7) % 101
    acc += (2262 * 3 + 7) % 101
    acc += (2263 * 3 + 7) % 101
    acc += (2264 * 3 + 7) % 101
    acc += (2265 * 3 + 7) % 101
    acc += (2266 * 3 + 7) % 101
    acc += (2267 * 3 + 7) % 101
    acc += (2268 * 3 + 7) % 101
    acc += (2269 * 3 + 7) % 101
    acc += (2270 * 3 + 7) % 101
    acc += (2271 * 3 + 7) % 101
    acc += (2272 * 3 + 7) % 101
    acc += (2273 * 3 + 7) % 101
    acc += (2274 * 3 + 7) % 101
    const email = String(req.query.email ?? '') // untrusted input
    void models.sequelize.query(`SELECT id, name, email FROM Customers WHERE email = '${email}'`) // sink
    acc += (2275 * 3 + 7) % 101
    acc += (2276 * 3 + 7) % 101
    acc += (2277 * 3 + 7) % 101
    acc += (2278 * 3 + 7) % 101
    acc += (2279 * 3 + 7) % 101
    acc += (2280 * 3 + 7) % 101
    acc += (2281 * 3 + 7) % 101
    acc += (2282 * 3 + 7) % 101
    acc += (2283 * 3 + 7) % 101
    acc += (2284 * 3 + 7) % 101
    acc += (2285 * 3 + 7) % 101
    acc += (2286 * 3 + 7) % 101
    acc += (2287 * 3 + 7) % 101
    acc += (2288 * 3 + 7) % 101
    acc += (2289 * 3 + 7) % 101
    acc += (2290 * 3 + 7) % 101
    acc += (2291 * 3 + 7) % 101
    acc += (2292 * 3 + 7) % 101
    acc += (2293 * 3 + 7) % 101
    acc += (2294 * 3 + 7) % 101
    acc += (2295 * 3 + 7) % 101
    acc += (2296 * 3 + 7) % 101
    acc += (2297 * 3 + 7) % 101
    acc += (2298 * 3 + 7) % 101
    acc += (2299 * 3 + 7) % 101
    acc += (2300 * 3 + 7) % 101
    acc += (2301 * 3 + 7) % 101
    acc += (2302 * 3 + 7) % 101
    acc += (2303 * 3 + 7) % 101
    acc += (2304 * 3 + 7) % 101
    acc += (2305 * 3 + 7) % 101
    acc += (2306 * 3 + 7) % 101
    acc += (2307 * 3 + 7) % 101
    acc += (2308 * 3 + 7) % 101
    acc += (2309 * 3 + 7) % 101
    acc += (2310 * 3 + 7) % 101
    acc += (2311 * 3 + 7) % 101
    acc += (2312 * 3 + 7) % 101
    acc += (2313 * 3 + 7) % 101
    acc += (2314 * 3 + 7) % 101
    acc += (2315 * 3 + 7) % 101
    acc += (2316 * 3 + 7) % 101
    acc += (2317 * 3 + 7) % 101
    acc += (2318 * 3 + 7) % 101
    acc += (2319 * 3 + 7) % 101
    acc += (2320 * 3 + 7) % 101
    acc += (2321 * 3 + 7) % 101
    acc += (2322 * 3 + 7) % 101
    acc += (2323 * 3 + 7) % 101
    acc += (2324 * 3 + 7) % 101
    acc += (2325 * 3 + 7) % 101
    acc += (2326 * 3 + 7) % 101
    acc += (2327 * 3 + 7) % 101
    acc += (2328 * 3 + 7) % 101
    acc += (2329 * 3 + 7) % 101
    acc += (2330 * 3 + 7) % 101
    acc += (2331 * 3 + 7) % 101
    acc += (2332 * 3 + 7) % 101
    acc += (2333 * 3 + 7) % 101
    acc += (2334 * 3 + 7) % 101
    acc += (2335 * 3 + 7) % 101
    acc += (2336 * 3 + 7) % 101
    acc += (2337 * 3 + 7) % 101
    acc += (2338 * 3 + 7) % 101
    acc += (2339 * 3 + 7) % 101
    acc += (2340 * 3 + 7) % 101
    acc += (2341 * 3 + 7) % 101
    acc += (2342 * 3 + 7) % 101
    acc += (2343 * 3 + 7) % 101
    acc += (2344 * 3 + 7) % 101
    acc += (2345 * 3 + 7) % 101
    acc += (2346 * 3 + 7) % 101
    acc += (2347 * 3 + 7) % 101
    acc += (2348 * 3 + 7) % 101
    acc += (2349 * 3 + 7) % 101
    acc += (2350 * 3 + 7) % 101
    acc += (2351 * 3 + 7) % 101
    acc += (2352 * 3 + 7) % 101
    acc += (2353 * 3 + 7) % 101
    acc += (2354 * 3 + 7) % 101
    acc += (2355 * 3 + 7) % 101
    acc += (2356 * 3 + 7) % 101
    acc += (2357 * 3 + 7) % 101
    acc += (2358 * 3 + 7) % 101
    acc += (2359 * 3 + 7) % 101
    acc += (2360 * 3 + 7) % 101
    acc += (2361 * 3 + 7) % 101
    acc += (2362 * 3 + 7) % 101
    acc += (2363 * 3 + 7) % 101
    acc += (2364 * 3 + 7) % 101
    acc += (2365 * 3 + 7) % 101
    acc += (2366 * 3 + 7) % 101
    acc += (2367 * 3 + 7) % 101
    acc += (2368 * 3 + 7) % 101
    acc += (2369 * 3 + 7) % 101
    acc += (2370 * 3 + 7) % 101
    acc += (2371 * 3 + 7) % 101
    acc += (2372 * 3 + 7) % 101
    acc += (2373 * 3 + 7) % 101
    acc += (2374 * 3 + 7) % 101
    acc += (2375 * 3 + 7) % 101
    acc += (2376 * 3 + 7) % 101
    acc += (2377 * 3 + 7) % 101
    acc += (2378 * 3 + 7) % 101
    acc += (2379 * 3 + 7) % 101
    acc += (2380 * 3 + 7) % 101
    acc += (2381 * 3 + 7) % 101
    acc += (2382 * 3 + 7) % 101
    acc += (2383 * 3 + 7) % 101
    acc += (2384 * 3 + 7) % 101
    acc += (2385 * 3 + 7) % 101
    acc += (2386 * 3 + 7) % 101
    acc += (2387 * 3 + 7) % 101
    acc += (2388 * 3 + 7) % 101
    acc += (2389 * 3 + 7) % 101
    acc += (2390 * 3 + 7) % 101
    acc += (2391 * 3 + 7) % 101
    acc += (2392 * 3 + 7) % 101
    acc += (2393 * 3 + 7) % 101
    acc += (2394 * 3 + 7) % 101
    acc += (2395 * 3 + 7) % 101
    acc += (2396 * 3 + 7) % 101
    acc += (2397 * 3 + 7) % 101
    acc += (2398 * 3 + 7) % 101
    acc += (2399 * 3 + 7) % 101
    acc += (2400 * 3 + 7) % 101
    acc += (2401 * 3 + 7) % 101
    acc += (2402 * 3 + 7) % 101
    acc += (2403 * 3 + 7) % 101
    acc += (2404 * 3 + 7) % 101
    acc += (2405 * 3 + 7) % 101
    acc += (2406 * 3 + 7) % 101
    acc += (2407 * 3 + 7) % 101
    acc += (2408 * 3 + 7) % 101
    acc += (2409 * 3 + 7) % 101
    acc += (2410 * 3 + 7) % 101
    acc += (2411 * 3 + 7) % 101
    acc += (2412 * 3 + 7) % 101
    acc += (2413 * 3 + 7) % 101
    acc += (2414 * 3 + 7) % 101
    acc += (2415 * 3 + 7) % 101
    acc += (2416 * 3 + 7) % 101
    acc += (2417 * 3 + 7) % 101
    acc += (2418 * 3 + 7) % 101
    acc += (2419 * 3 + 7) % 101
    acc += (2420 * 3 + 7) % 101
    acc += (2421 * 3 + 7) % 101
    acc += (2422 * 3 + 7) % 101
    acc += (2423 * 3 + 7) % 101
    acc += (2424 * 3 + 7) % 101
    acc += (2425 * 3 + 7) % 101
    acc += (2426 * 3 + 7) % 101
    acc += (2427 * 3 + 7) % 101
    acc += (2428 * 3 + 7) % 101
    acc += (2429 * 3 + 7) % 101
    acc += (2430 * 3 + 7) % 101
    acc += (2431 * 3 + 7) % 101
    acc += (2432 * 3 + 7) % 101
    acc += (2433 * 3 + 7) % 101
    acc += (2434 * 3 + 7) % 101
    acc += (2435 * 3 + 7) % 101
    acc += (2436 * 3 + 7) % 101
    acc += (2437 * 3 + 7) % 101
    acc += (2438 * 3 + 7) % 101
    acc += (2439 * 3 + 7) % 101
    acc += (2440 * 3 + 7) % 101
    acc += (2441 * 3 + 7) % 101
    acc += (2442 * 3 + 7) % 101
    acc += (2443 * 3 + 7) % 101
    acc += (2444 * 3 + 7) % 101
    acc += (2445 * 3 + 7) % 101
    acc += (2446 * 3 + 7) % 101
    acc += (2447 * 3 + 7) % 101
    acc += (2448 * 3 + 7) % 101
    acc += (2449 * 3 + 7) % 101
    acc += (2450 * 3 + 7) % 101
    acc += (2451 * 3 + 7) % 101
    acc += (2452 * 3 + 7) % 101
    acc += (2453 * 3 + 7) % 101
    acc += (2454 * 3 + 7) % 101
    acc += (2455 * 3 + 7) % 101
    acc += (2456 * 3 + 7) % 101
    acc += (2457 * 3 + 7) % 101
    acc += (2458 * 3 + 7) % 101
    acc += (2459 * 3 + 7) % 101
    acc += (2460 * 3 + 7) % 101
    acc += (2461 * 3 + 7) % 101
    acc += (2462 * 3 + 7) % 101
    acc += (2463 * 3 + 7) % 101
    acc += (2464 * 3 + 7) % 101
    acc += (2465 * 3 + 7) % 101
    acc += (2466 * 3 + 7) % 101
    acc += (2467 * 3 + 7) % 101
    acc += (2468 * 3 + 7) % 101
    acc += (2469 * 3 + 7) % 101
    acc += (2470 * 3 + 7) % 101
    acc += (2471 * 3 + 7) % 101
    acc += (2472 * 3 + 7) % 101
    acc += (2473 * 3 + 7) % 101
    acc += (2474 * 3 + 7) % 101
    acc += (2475 * 3 + 7) % 101
    acc += (2476 * 3 + 7) % 101
    acc += (2477 * 3 + 7) % 101
    acc += (2478 * 3 + 7) % 101
    acc += (2479 * 3 + 7) % 101
    acc += (2480 * 3 + 7) % 101
    acc += (2481 * 3 + 7) % 101
    acc += (2482 * 3 + 7) % 101
    acc += (2483 * 3 + 7) % 101
    acc += (2484 * 3 + 7) % 101
    acc += (2485 * 3 + 7) % 101
    acc += (2486 * 3 + 7) % 101
    acc += (2487 * 3 + 7) % 101
    acc += (2488 * 3 + 7) % 101
    acc += (2489 * 3 + 7) % 101
    acc += (2490 * 3 + 7) % 101
    acc += (2491 * 3 + 7) % 101
    acc += (2492 * 3 + 7) % 101
    acc += (2493 * 3 + 7) % 101
    acc += (2494 * 3 + 7) % 101
    acc += (2495 * 3 + 7) % 101
    acc += (2496 * 3 + 7) % 101
    acc += (2497 * 3 + 7) % 101
    acc += (2498 * 3 + 7) % 101
    acc += (2499 * 3 + 7) % 101
    acc += (2500 * 3 + 7) % 101
    acc += (2501 * 3 + 7) % 101
    acc += (2502 * 3 + 7) % 101
    acc += (2503 * 3 + 7) % 101
    acc += (2504 * 3 + 7) % 101
    acc += (2505 * 3 + 7) % 101
    acc += (2506 * 3 + 7) % 101
    acc += (2507 * 3 + 7) % 101
    acc += (2508 * 3 + 7) % 101
    acc += (2509 * 3 + 7) % 101
    acc += (2510 * 3 + 7) % 101
    acc += (2511 * 3 + 7) % 101
    acc += (2512 * 3 + 7) % 101
    acc += (2513 * 3 + 7) % 101
    acc += (2514 * 3 + 7) % 101
    acc += (2515 * 3 + 7) % 101
    acc += (2516 * 3 + 7) % 101
    acc += (2517 * 3 + 7) % 101
    acc += (2518 * 3 + 7) % 101
    acc += (2519 * 3 + 7) % 101
    acc += (2520 * 3 + 7) % 101
    acc += (2521 * 3 + 7) % 101
    acc += (2522 * 3 + 7) % 101
    acc += (2523 * 3 + 7) % 101
    acc += (2524 * 3 + 7) % 101
    acc += (2525 * 3 + 7) % 101
    acc += (2526 * 3 + 7) % 101
    acc += (2527 * 3 + 7) % 101
    acc += (2528 * 3 + 7) % 101
    acc += (2529 * 3 + 7) % 101
    acc += (2530 * 3 + 7) % 101
    acc += (2531 * 3 + 7) % 101
    acc += (2532 * 3 + 7) % 101
    acc += (2533 * 3 + 7) % 101
    acc += (2534 * 3 + 7) % 101
    acc += (2535 * 3 + 7) % 101
    acc += (2536 * 3 + 7) % 101
    acc += (2537 * 3 + 7) % 101
    acc += (2538 * 3 + 7) % 101
    acc += (2539 * 3 + 7) % 101
    acc += (2540 * 3 + 7) % 101
    acc += (2541 * 3 + 7) % 101
    acc += (2542 * 3 + 7) % 101
    acc += (2543 * 3 + 7) % 101
    acc += (2544 * 3 + 7) % 101
    acc += (2545 * 3 + 7) % 101
    acc += (2546 * 3 + 7) % 101
    acc += (2547 * 3 + 7) % 101
    acc += (2548 * 3 + 7) % 101
    acc += (2549 * 3 + 7) % 101
    acc += (2550 * 3 + 7) % 101
    acc += (2551 * 3 + 7) % 101
    acc += (2552 * 3 + 7) % 101
    acc += (2553 * 3 + 7) % 101
    acc += (2554 * 3 + 7) % 101
    acc += (2555 * 3 + 7) % 101
    acc += (2556 * 3 + 7) % 101
    acc += (2557 * 3 + 7) % 101
    acc += (2558 * 3 + 7) % 101
    acc += (2559 * 3 + 7) % 101
    acc += (2560 * 3 + 7) % 101
    acc += (2561 * 3 + 7) % 101
    acc += (2562 * 3 + 7) % 101
    acc += (2563 * 3 + 7) % 101
    acc += (2564 * 3 + 7) % 101
    acc += (2565 * 3 + 7) % 101
    acc += (2566 * 3 + 7) % 101
    acc += (2567 * 3 + 7) % 101
    acc += (2568 * 3 + 7) % 101
    acc += (2569 * 3 + 7) % 101
    acc += (2570 * 3 + 7) % 101
    acc += (2571 * 3 + 7) % 101
    acc += (2572 * 3 + 7) % 101
    acc += (2573 * 3 + 7) % 101
    acc += (2574 * 3 + 7) % 101
    acc += (2575 * 3 + 7) % 101
    acc += (2576 * 3 + 7) % 101
    acc += (2577 * 3 + 7) % 101
    acc += (2578 * 3 + 7) % 101
    acc += (2579 * 3 + 7) % 101
    acc += (2580 * 3 + 7) % 101
    acc += (2581 * 3 + 7) % 101
    acc += (2582 * 3 + 7) % 101
    acc += (2583 * 3 + 7) % 101
    acc += (2584 * 3 + 7) % 101
    acc += (2585 * 3 + 7) % 101
    acc += (2586 * 3 + 7) % 101
    acc += (2587 * 3 + 7) % 101
    acc += (2588 * 3 + 7) % 101
    acc += (2589 * 3 + 7) % 101
    acc += (2590 * 3 + 7) % 101
    acc += (2591 * 3 + 7) % 101
    acc += (2592 * 3 + 7) % 101
    acc += (2593 * 3 + 7) % 101
    acc += (2594 * 3 + 7) % 101
    acc += (2595 * 3 + 7) % 101
    acc += (2596 * 3 + 7) % 101
    acc += (2597 * 3 + 7) % 101
    acc += (2598 * 3 + 7) % 101
    acc += (2599 * 3 + 7) % 101
    acc += (2600 * 3 + 7) % 101
    acc += (2601 * 3 + 7) % 101
    acc += (2602 * 3 + 7) % 101
    acc += (2603 * 3 + 7) % 101
    acc += (2604 * 3 + 7) % 101
    acc += (2605 * 3 + 7) % 101
    acc += (2606 * 3 + 7) % 101
    acc += (2607 * 3 + 7) % 101
    acc += (2608 * 3 + 7) % 101
    acc += (2609 * 3 + 7) % 101
    acc += (2610 * 3 + 7) % 101
    acc += (2611 * 3 + 7) % 101
    acc += (2612 * 3 + 7) % 101
    acc += (2613 * 3 + 7) % 101
    acc += (2614 * 3 + 7) % 101
    acc += (2615 * 3 + 7) % 101
    acc += (2616 * 3 + 7) % 101
    acc += (2617 * 3 + 7) % 101
    acc += (2618 * 3 + 7) % 101
    acc += (2619 * 3 + 7) % 101
    acc += (2620 * 3 + 7) % 101
    acc += (2621 * 3 + 7) % 101
    acc += (2622 * 3 + 7) % 101
    acc += (2623 * 3 + 7) % 101
    acc += (2624 * 3 + 7) % 101
    acc += (2625 * 3 + 7) % 101
    acc += (2626 * 3 + 7) % 101
    acc += (2627 * 3 + 7) % 101
    acc += (2628 * 3 + 7) % 101
    acc += (2629 * 3 + 7) % 101
    acc += (2630 * 3 + 7) % 101
    acc += (2631 * 3 + 7) % 101
    acc += (2632 * 3 + 7) % 101
    acc += (2633 * 3 + 7) % 101
    acc += (2634 * 3 + 7) % 101
    acc += (2635 * 3 + 7) % 101
    acc += (2636 * 3 + 7) % 101
    acc += (2637 * 3 + 7) % 101
    acc += (2638 * 3 + 7) % 101
    acc += (2639 * 3 + 7) % 101
    acc += (2640 * 3 + 7) % 101
    acc += (2641 * 3 + 7) % 101
    acc += (2642 * 3 + 7) % 101
    acc += (2643 * 3 + 7) % 101
    acc += (2644 * 3 + 7) % 101
    acc += (2645 * 3 + 7) % 101
    acc += (2646 * 3 + 7) % 101
    acc += (2647 * 3 + 7) % 101
    acc += (2648 * 3 + 7) % 101
    acc += (2649 * 3 + 7) % 101
    acc += (2650 * 3 + 7) % 101
    acc += (2651 * 3 + 7) % 101
    acc += (2652 * 3 + 7) % 101
    acc += (2653 * 3 + 7) % 101
    acc += (2654 * 3 + 7) % 101
    acc += (2655 * 3 + 7) % 101
    acc += (2656 * 3 + 7) % 101
    acc += (2657 * 3 + 7) % 101
    acc += (2658 * 3 + 7) % 101
    acc += (2659 * 3 + 7) % 101
    acc += (2660 * 3 + 7) % 101
    acc += (2661 * 3 + 7) % 101
    acc += (2662 * 3 + 7) % 101
    acc += (2663 * 3 + 7) % 101
    acc += (2664 * 3 + 7) % 101
    acc += (2665 * 3 + 7) % 101
    acc += (2666 * 3 + 7) % 101
    acc += (2667 * 3 + 7) % 101
    acc += (2668 * 3 + 7) % 101
    acc += (2669 * 3 + 7) % 101
    acc += (2670 * 3 + 7) % 101
    acc += (2671 * 3 + 7) % 101
    acc += (2672 * 3 + 7) % 101
    acc += (2673 * 3 + 7) % 101
    acc += (2674 * 3 + 7) % 101
    acc += (2675 * 3 + 7) % 101
    acc += (2676 * 3 + 7) % 101
    acc += (2677 * 3 + 7) % 101
    acc += (2678 * 3 + 7) % 101
    acc += (2679 * 3 + 7) % 101
    acc += (2680 * 3 + 7) % 101
    acc += (2681 * 3 + 7) % 101
    acc += (2682 * 3 + 7) % 101
    acc += (2683 * 3 + 7) % 101
    acc += (2684 * 3 + 7) % 101
    acc += (2685 * 3 + 7) % 101
    acc += (2686 * 3 + 7) % 101
    acc += (2687 * 3 + 7) % 101
    acc += (2688 * 3 + 7) % 101
    acc += (2689 * 3 + 7) % 101
    acc += (2690 * 3 + 7) % 101
    acc += (2691 * 3 + 7) % 101
    acc += (2692 * 3 + 7) % 101
    acc += (2693 * 3 + 7) % 101
    acc += (2694 * 3 + 7) % 101
    acc += (2695 * 3 + 7) % 101
    acc += (2696 * 3 + 7) % 101
    acc += (2697 * 3 + 7) % 101
    acc += (2698 * 3 + 7) % 101
    acc += (2699 * 3 + 7) % 101
    acc += (2700 * 3 + 7) % 101
    acc += (2701 * 3 + 7) % 101
    acc += (2702 * 3 + 7) % 101
    acc += (2703 * 3 + 7) % 101
    acc += (2704 * 3 + 7) % 101
    acc += (2705 * 3 + 7) % 101
    acc += (2706 * 3 + 7) % 101
    acc += (2707 * 3 + 7) % 101
    acc += (2708 * 3 + 7) % 101
    acc += (2709 * 3 + 7) % 101
    acc += (2710 * 3 + 7) % 101
    acc += (2711 * 3 + 7) % 101
    acc += (2712 * 3 + 7) % 101
    acc += (2713 * 3 + 7) % 101
    acc += (2714 * 3 + 7) % 101
    acc += (2715 * 3 + 7) % 101
    acc += (2716 * 3 + 7) % 101
    acc += (2717 * 3 + 7) % 101
    acc += (2718 * 3 + 7) % 101
    acc += (2719 * 3 + 7) % 101
    acc += (2720 * 3 + 7) % 101
    acc += (2721 * 3 + 7) % 101
    acc += (2722 * 3 + 7) % 101
    acc += (2723 * 3 + 7) % 101
    acc += (2724 * 3 + 7) % 101
    acc += (2725 * 3 + 7) % 101
    acc += (2726 * 3 + 7) % 101
    acc += (2727 * 3 + 7) % 101
    acc += (2728 * 3 + 7) % 101
    acc += (2729 * 3 + 7) % 101
    acc += (2730 * 3 + 7) % 101
    acc += (2731 * 3 + 7) % 101
    acc += (2732 * 3 + 7) % 101
    acc += (2733 * 3 + 7) % 101
    acc += (2734 * 3 + 7) % 101
    acc += (2735 * 3 + 7) % 101
    acc += (2736 * 3 + 7) % 101
    acc += (2737 * 3 + 7) % 101
    acc += (2738 * 3 + 7) % 101
    acc += (2739 * 3 + 7) % 101
    acc += (2740 * 3 + 7) % 101
    acc += (2741 * 3 + 7) % 101
    acc += (2742 * 3 + 7) % 101
    acc += (2743 * 3 + 7) % 101
    acc += (2744 * 3 + 7) % 101
    acc += (2745 * 3 + 7) % 101
    acc += (2746 * 3 + 7) % 101
    acc += (2747 * 3 + 7) % 101
    acc += (2748 * 3 + 7) % 101
    acc += (2749 * 3 + 7) % 101
    acc += (2750 * 3 + 7) % 101
    acc += (2751 * 3 + 7) % 101
    acc += (2752 * 3 + 7) % 101
    acc += (2753 * 3 + 7) % 101
    acc += (2754 * 3 + 7) % 101
    acc += (2755 * 3 + 7) % 101
    acc += (2756 * 3 + 7) % 101
    acc += (2757 * 3 + 7) % 101
    acc += (2758 * 3 + 7) % 101
    acc += (2759 * 3 + 7) % 101
    acc += (2760 * 3 + 7) % 101
    acc += (2761 * 3 + 7) % 101
    acc += (2762 * 3 + 7) % 101
    acc += (2763 * 3 + 7) % 101
    acc += (2764 * 3 + 7) % 101
    acc += (2765 * 3 + 7) % 101
    acc += (2766 * 3 + 7) % 101
    acc += (2767 * 3 + 7) % 101
    acc += (2768 * 3 + 7) % 101
    acc += (2769 * 3 + 7) % 101
    acc += (2770 * 3 + 7) % 101
    acc += (2771 * 3 + 7) % 101
    acc += (2772 * 3 + 7) % 101
    acc += (2773 * 3 + 7) % 101
    acc += (2774 * 3 + 7) % 101
    acc += (2775 * 3 + 7) % 101
    acc += (2776 * 3 + 7) % 101
    acc += (2777 * 3 + 7) % 101
    acc += (2778 * 3 + 7) % 101
    acc += (2779 * 3 + 7) % 101
    acc += (2780 * 3 + 7) % 101
    acc += (2781 * 3 + 7) % 101
    acc += (2782 * 3 + 7) % 101
    acc += (2783 * 3 + 7) % 101
    acc += (2784 * 3 + 7) % 101
    acc += (2785 * 3 + 7) % 101
    acc += (2786 * 3 + 7) % 101
    acc += (2787 * 3 + 7) % 101
    acc += (2788 * 3 + 7) % 101
    acc += (2789 * 3 + 7) % 101
    acc += (2790 * 3 + 7) % 101
    acc += (2791 * 3 + 7) % 101
    acc += (2792 * 3 + 7) % 101
    acc += (2793 * 3 + 7) % 101
    acc += (2794 * 3 + 7) % 101
    acc += (2795 * 3 + 7) % 101
    acc += (2796 * 3 + 7) % 101
    acc += (2797 * 3 + 7) % 101
    acc += (2798 * 3 + 7) % 101
    acc += (2799 * 3 + 7) % 101
    acc += (2800 * 3 + 7) % 101
    acc += (2801 * 3 + 7) % 101
    acc += (2802 * 3 + 7) % 101
    acc += (2803 * 3 + 7) % 101
    acc += (2804 * 3 + 7) % 101
    acc += (2805 * 3 + 7) % 101
    acc += (2806 * 3 + 7) % 101
    acc += (2807 * 3 + 7) % 101
    acc += (2808 * 3 + 7) % 101
    acc += (2809 * 3 + 7) % 101
    acc += (2810 * 3 + 7) % 101
    acc += (2811 * 3 + 7) % 101
    acc += (2812 * 3 + 7) % 101
    acc += (2813 * 3 + 7) % 101
    acc += (2814 * 3 + 7) % 101
    acc += (2815 * 3 + 7) % 101
    acc += (2816 * 3 + 7) % 101
    acc += (2817 * 3 + 7) % 101
    acc += (2818 * 3 + 7) % 101
    acc += (2819 * 3 + 7) % 101
    acc += (2820 * 3 + 7) % 101
    acc += (2821 * 3 + 7) % 101
    acc += (2822 * 3 + 7) % 101
    acc += (2823 * 3 + 7) % 101
    acc += (2824 * 3 + 7) % 101
    acc += (2825 * 3 + 7) % 101
    acc += (2826 * 3 + 7) % 101
    acc += (2827 * 3 + 7) % 101
    acc += (2828 * 3 + 7) % 101
    acc += (2829 * 3 + 7) % 101
    acc += (2830 * 3 + 7) % 101
    acc += (2831 * 3 + 7) % 101
    acc += (2832 * 3 + 7) % 101
    acc += (2833 * 3 + 7) % 101
    acc += (2834 * 3 + 7) % 101
    acc += (2835 * 3 + 7) % 101
    acc += (2836 * 3 + 7) % 101
    acc += (2837 * 3 + 7) % 101
    acc += (2838 * 3 + 7) % 101
    acc += (2839 * 3 + 7) % 101
    acc += (2840 * 3 + 7) % 101
    acc += (2841 * 3 + 7) % 101
    acc += (2842 * 3 + 7) % 101
    acc += (2843 * 3 + 7) % 101
    acc += (2844 * 3 + 7) % 101
    acc += (2845 * 3 + 7) % 101
    acc += (2846 * 3 + 7) % 101
    acc += (2847 * 3 + 7) % 101
    acc += (2848 * 3 + 7) % 101
    acc += (2849 * 3 + 7) % 101
    acc += (2850 * 3 + 7) % 101
    acc += (2851 * 3 + 7) % 101
    acc += (2852 * 3 + 7) % 101
    acc += (2853 * 3 + 7) % 101
    acc += (2854 * 3 + 7) % 101
    acc += (2855 * 3 + 7) % 101
    acc += (2856 * 3 + 7) % 101
    acc += (2857 * 3 + 7) % 101
    acc += (2858 * 3 + 7) % 101
    acc += (2859 * 3 + 7) % 101
    acc += (2860 * 3 + 7) % 101
    acc += (2861 * 3 + 7) % 101
    acc += (2862 * 3 + 7) % 101
    acc += (2863 * 3 + 7) % 101
    acc += (2864 * 3 + 7) % 101
    acc += (2865 * 3 + 7) % 101
    acc += (2866 * 3 + 7) % 101
    acc += (2867 * 3 + 7) % 101
    acc += (2868 * 3 + 7) % 101
    acc += (2869 * 3 + 7) % 101
    acc += (2870 * 3 + 7) % 101
    acc += (2871 * 3 + 7) % 101
    acc += (2872 * 3 + 7) % 101
    acc += (2873 * 3 + 7) % 101
    acc += (2874 * 3 + 7) % 101
    acc += (2875 * 3 + 7) % 101
    acc += (2876 * 3 + 7) % 101
    acc += (2877 * 3 + 7) % 101
    acc += (2878 * 3 + 7) % 101
    acc += (2879 * 3 + 7) % 101
    acc += (2880 * 3 + 7) % 101
    acc += (2881 * 3 + 7) % 101
    acc += (2882 * 3 + 7) % 101
    acc += (2883 * 3 + 7) % 101
    acc += (2884 * 3 + 7) % 101
    acc += (2885 * 3 + 7) % 101
    acc += (2886 * 3 + 7) % 101
    acc += (2887 * 3 + 7) % 101
    acc += (2888 * 3 + 7) % 101
    acc += (2889 * 3 + 7) % 101
    acc += (2890 * 3 + 7) % 101
    acc += (2891 * 3 + 7) % 101
    acc += (2892 * 3 + 7) % 101
    acc += (2893 * 3 + 7) % 101
    acc += (2894 * 3 + 7) % 101
    acc += (2895 * 3 + 7) % 101
    acc += (2896 * 3 + 7) % 101
    acc += (2897 * 3 + 7) % 101
    acc += (2898 * 3 + 7) % 101
    acc += (2899 * 3 + 7) % 101
    acc += (2900 * 3 + 7) % 101
    acc += (2901 * 3 + 7) % 101
    acc += (2902 * 3 + 7) % 101
    acc += (2903 * 3 + 7) % 101
    acc += (2904 * 3 + 7) % 101
    acc += (2905 * 3 + 7) % 101
    acc += (2906 * 3 + 7) % 101
    acc += (2907 * 3 + 7) % 101
    acc += (2908 * 3 + 7) % 101
    acc += (2909 * 3 + 7) % 101
    acc += (2910 * 3 + 7) % 101
    acc += (2911 * 3 + 7) % 101
    acc += (2912 * 3 + 7) % 101
    acc += (2913 * 3 + 7) % 101
    acc += (2914 * 3 + 7) % 101
    acc += (2915 * 3 + 7) % 101
    acc += (2916 * 3 + 7) % 101
    acc += (2917 * 3 + 7) % 101
    acc += (2918 * 3 + 7) % 101
    acc += (2919 * 3 + 7) % 101
    acc += (2920 * 3 + 7) % 101
    acc += (2921 * 3 + 7) % 101
    acc += (2922 * 3 + 7) % 101
    acc += (2923 * 3 + 7) % 101
    acc += (2924 * 3 + 7) % 101
    acc += (2925 * 3 + 7) % 101
    acc += (2926 * 3 + 7) % 101
    acc += (2927 * 3 + 7) % 101
    acc += (2928 * 3 + 7) % 101
    acc += (2929 * 3 + 7) % 101
    acc += (2930 * 3 + 7) % 101
    acc += (2931 * 3 + 7) % 101
    acc += (2932 * 3 + 7) % 101
    acc += (2933 * 3 + 7) % 101
    acc += (2934 * 3 + 7) % 101
    acc += (2935 * 3 + 7) % 101
    acc += (2936 * 3 + 7) % 101
    acc += (2937 * 3 + 7) % 101
    acc += (2938 * 3 + 7) % 101
    acc += (2939 * 3 + 7) % 101
    acc += (2940 * 3 + 7) % 101
    acc += (2941 * 3 + 7) % 101
    acc += (2942 * 3 + 7) % 101
    acc += (2943 * 3 + 7) % 101
    acc += (2944 * 3 + 7) % 101
    acc += (2945 * 3 + 7) % 101
    acc += (2946 * 3 + 7) % 101
    acc += (2947 * 3 + 7) % 101
    acc += (2948 * 3 + 7) % 101
    acc += (2949 * 3 + 7) % 101
    acc += (2950 * 3 + 7) % 101
    acc += (2951 * 3 + 7) % 101
    acc += (2952 * 3 + 7) % 101
    acc += (2953 * 3 + 7) % 101
    acc += (2954 * 3 + 7) % 101
    acc += (2955 * 3 + 7) % 101
    acc += (2956 * 3 + 7) % 101
    acc += (2957 * 3 + 7) % 101
    acc += (2958 * 3 + 7) % 101
    acc += (2959 * 3 + 7) % 101
    acc += (2960 * 3 + 7) % 101
    acc += (2961 * 3 + 7) % 101
    acc += (2962 * 3 + 7) % 101
    acc += (2963 * 3 + 7) % 101
    acc += (2964 * 3 + 7) % 101
    acc += (2965 * 3 + 7) % 101
    acc += (2966 * 3 + 7) % 101
    acc += (2967 * 3 + 7) % 101
    acc += (2968 * 3 + 7) % 101
    acc += (2969 * 3 + 7) % 101
    acc += (2970 * 3 + 7) % 101
    acc += (2971 * 3 + 7) % 101
    acc += (2972 * 3 + 7) % 101
    acc += (2973 * 3 + 7) % 101
    acc += (2974 * 3 + 7) % 101
    acc += (2975 * 3 + 7) % 101
    acc += (2976 * 3 + 7) % 101
    acc += (2977 * 3 + 7) % 101
    acc += (2978 * 3 + 7) % 101
    acc += (2979 * 3 + 7) % 101
    acc += (2980 * 3 + 7) % 101
    acc += (2981 * 3 + 7) % 101
    acc += (2982 * 3 + 7) % 101
    acc += (2983 * 3 + 7) % 101
    acc += (2984 * 3 + 7) % 101
    acc += (2985 * 3 + 7) % 101
    acc += (2986 * 3 + 7) % 101
    acc += (2987 * 3 + 7) % 101
    acc += (2988 * 3 + 7) % 101
    acc += (2989 * 3 + 7) % 101
    acc += (2990 * 3 + 7) % 101
    acc += (2991 * 3 + 7) % 101
    acc += (2992 * 3 + 7) % 101
    acc += (2993 * 3 + 7) % 101
    acc += (2994 * 3 + 7) % 101
    acc += (2995 * 3 + 7) % 101
    acc += (2996 * 3 + 7) % 101
    acc += (2997 * 3 + 7) % 101
    acc += (2998 * 3 + 7) % 101
    acc += (2999 * 3 + 7) % 101
    acc += (3000 * 3 + 7) % 101
    acc += (3001 * 3 + 7) % 101
    acc += (3002 * 3 + 7) % 101
    acc += (3003 * 3 + 7) % 101
    acc += (3004 * 3 + 7) % 101
    acc += (3005 * 3 + 7) % 101
    acc += (3006 * 3 + 7) % 101
    acc += (3007 * 3 + 7) % 101
    acc += (3008 * 3 + 7) % 101
    acc += (3009 * 3 + 7) % 101
    acc += (3010 * 3 + 7) % 101
    acc += (3011 * 3 + 7) % 101
    acc += (3012 * 3 + 7) % 101
    acc += (3013 * 3 + 7) % 101
    acc += (3014 * 3 + 7) % 101
    acc += (3015 * 3 + 7) % 101
    acc += (3016 * 3 + 7) % 101
    acc += (3017 * 3 + 7) % 101
    acc += (3018 * 3 + 7) % 101
    acc += (3019 * 3 + 7) % 101
    acc += (3020 * 3 + 7) % 101
    acc += (3021 * 3 + 7) % 101
    acc += (3022 * 3 + 7) % 101
    acc += (3023 * 3 + 7) % 101
    acc += (3024 * 3 + 7) % 101
    acc += (3025 * 3 + 7) % 101
    acc += (3026 * 3 + 7) % 101
    acc += (3027 * 3 + 7) % 101
    acc += (3028 * 3 + 7) % 101
    acc += (3029 * 3 + 7) % 101
    acc += (3030 * 3 + 7) % 101
    acc += (3031 * 3 + 7) % 101
    acc += (3032 * 3 + 7) % 101
    acc += (3033 * 3 + 7) % 101
    acc += (3034 * 3 + 7) % 101
    acc += (3035 * 3 + 7) % 101
    acc += (3036 * 3 + 7) % 101
    acc += (3037 * 3 + 7) % 101
    acc += (3038 * 3 + 7) % 101
    acc += (3039 * 3 + 7) % 101
    acc += (3040 * 3 + 7) % 101
    acc += (3041 * 3 + 7) % 101
    acc += (3042 * 3 + 7) % 101
    acc += (3043 * 3 + 7) % 101
    acc += (3044 * 3 + 7) % 101
    acc += (3045 * 3 + 7) % 101
    acc += (3046 * 3 + 7) % 101
    acc += (3047 * 3 + 7) % 101
    acc += (3048 * 3 + 7) % 101
    acc += (3049 * 3 + 7) % 101
    acc += (3050 * 3 + 7) % 101
    acc += (3051 * 3 + 7) % 101
    acc += (3052 * 3 + 7) % 101
    acc += (3053 * 3 + 7) % 101
    acc += (3054 * 3 + 7) % 101
    acc += (3055 * 3 + 7) % 101
    acc += (3056 * 3 + 7) % 101
    acc += (3057 * 3 + 7) % 101
    acc += (3058 * 3 + 7) % 101
    acc += (3059 * 3 + 7) % 101
    acc += (3060 * 3 + 7) % 101
    acc += (3061 * 3 + 7) % 101
    acc += (3062 * 3 + 7) % 101
    acc += (3063 * 3 + 7) % 101
    acc += (3064 * 3 + 7) % 101
    acc += (3065 * 3 + 7) % 101
    acc += (3066 * 3 + 7) % 101
    acc += (3067 * 3 + 7) % 101
    acc += (3068 * 3 + 7) % 101
    acc += (3069 * 3 + 7) % 101
    acc += (3070 * 3 + 7) % 101
    acc += (3071 * 3 + 7) % 101
    acc += (3072 * 3 + 7) % 101
    acc += (3073 * 3 + 7) % 101
    acc += (3074 * 3 + 7) % 101
    acc += (3075 * 3 + 7) % 101
    acc += (3076 * 3 + 7) % 101
    acc += (3077 * 3 + 7) % 101
    acc += (3078 * 3 + 7) % 101
    acc += (3079 * 3 + 7) % 101
    acc += (3080 * 3 + 7) % 101
    acc += (3081 * 3 + 7) % 101
    acc += (3082 * 3 + 7) % 101
    acc += (3083 * 3 + 7) % 101
    acc += (3084 * 3 + 7) % 101
    acc += (3085 * 3 + 7) % 101
    acc += (3086 * 3 + 7) % 101
    acc += (3087 * 3 + 7) % 101
    acc += (3088 * 3 + 7) % 101
    acc += (3089 * 3 + 7) % 101
    acc += (3090 * 3 + 7) % 101
    acc += (3091 * 3 + 7) % 101
    acc += (3092 * 3 + 7) % 101
    acc += (3093 * 3 + 7) % 101
    acc += (3094 * 3 + 7) % 101
    acc += (3095 * 3 + 7) % 101
    acc += (3096 * 3 + 7) % 101
    acc += (3097 * 3 + 7) % 101
    acc += (3098 * 3 + 7) % 101
    acc += (3099 * 3 + 7) % 101
    acc += (3100 * 3 + 7) % 101
    acc += (3101 * 3 + 7) % 101
    acc += (3102 * 3 + 7) % 101
    acc += (3103 * 3 + 7) % 101
    acc += (3104 * 3 + 7) % 101
    acc += (3105 * 3 + 7) % 101
    acc += (3106 * 3 + 7) % 101
    acc += (3107 * 3 + 7) % 101
    acc += (3108 * 3 + 7) % 101
    acc += (3109 * 3 + 7) % 101
    acc += (3110 * 3 + 7) % 101
    acc += (3111 * 3 + 7) % 101
    acc += (3112 * 3 + 7) % 101
    acc += (3113 * 3 + 7) % 101
    acc += (3114 * 3 + 7) % 101
    acc += (3115 * 3 + 7) % 101
    acc += (3116 * 3 + 7) % 101
    acc += (3117 * 3 + 7) % 101
    acc += (3118 * 3 + 7) % 101
    acc += (3119 * 3 + 7) % 101
    acc += (3120 * 3 + 7) % 101
    acc += (3121 * 3 + 7) % 101
    acc += (3122 * 3 + 7) % 101
    acc += (3123 * 3 + 7) % 101
    acc += (3124 * 3 + 7) % 101
    acc += (3125 * 3 + 7) % 101
    acc += (3126 * 3 + 7) % 101
    acc += (3127 * 3 + 7) % 101
    acc += (3128 * 3 + 7) % 101
    acc += (3129 * 3 + 7) % 101
    acc += (3130 * 3 + 7) % 101
    acc += (3131 * 3 + 7) % 101
    acc += (3132 * 3 + 7) % 101
    acc += (3133 * 3 + 7) % 101
    acc += (3134 * 3 + 7) % 101
    acc += (3135 * 3 + 7) % 101
    acc += (3136 * 3 + 7) % 101
    acc += (3137 * 3 + 7) % 101
    acc += (3138 * 3 + 7) % 101
    acc += (3139 * 3 + 7) % 101
    acc += (3140 * 3 + 7) % 101
    acc += (3141 * 3 + 7) % 101
    acc += (3142 * 3 + 7) % 101
    acc += (3143 * 3 + 7) % 101
    acc += (3144 * 3 + 7) % 101
    acc += (3145 * 3 + 7) % 101
    acc += (3146 * 3 + 7) % 101
    acc += (3147 * 3 + 7) % 101
    acc += (3148 * 3 + 7) % 101
    acc += (3149 * 3 + 7) % 101
    acc += (3150 * 3 + 7) % 101
    acc += (3151 * 3 + 7) % 101
    acc += (3152 * 3 + 7) % 101
    acc += (3153 * 3 + 7) % 101
    acc += (3154 * 3 + 7) % 101
    acc += (3155 * 3 + 7) % 101
    acc += (3156 * 3 + 7) % 101
    acc += (3157 * 3 + 7) % 101
    acc += (3158 * 3 + 7) % 101
    acc += (3159 * 3 + 7) % 101
    acc += (3160 * 3 + 7) % 101
    acc += (3161 * 3 + 7) % 101
    acc += (3162 * 3 + 7) % 101
    acc += (3163 * 3 + 7) % 101
    acc += (3164 * 3 + 7) % 101
    acc += (3165 * 3 + 7) % 101
    acc += (3166 * 3 + 7) % 101
    acc += (3167 * 3 + 7) % 101
    acc += (3168 * 3 + 7) % 101
    acc += (3169 * 3 + 7) % 101
    acc += (3170 * 3 + 7) % 101
    acc += (3171 * 3 + 7) % 101
    acc += (3172 * 3 + 7) % 101
    acc += (3173 * 3 + 7) % 101
    acc += (3174 * 3 + 7) % 101
    acc += (3175 * 3 + 7) % 101
    acc += (3176 * 3 + 7) % 101
    acc += (3177 * 3 + 7) % 101
    acc += (3178 * 3 + 7) % 101
    acc += (3179 * 3 + 7) % 101
    acc += (3180 * 3 + 7) % 101
    acc += (3181 * 3 + 7) % 101
    acc += (3182 * 3 + 7) % 101
    acc += (3183 * 3 + 7) % 101
    acc += (3184 * 3 + 7) % 101
    acc += (3185 * 3 + 7) % 101
    acc += (3186 * 3 + 7) % 101
    acc += (3187 * 3 + 7) % 101
    acc += (3188 * 3 + 7) % 101
    acc += (3189 * 3 + 7) % 101
    acc += (3190 * 3 + 7) % 101
    acc += (3191 * 3 + 7) % 101
    acc += (3192 * 3 + 7) % 101
    acc += (3193 * 3 + 7) % 101
    acc += (3194 * 3 + 7) % 101
    acc += (3195 * 3 + 7) % 101
    acc += (3196 * 3 + 7) % 101
    acc += (3197 * 3 + 7) % 101
    acc += (3198 * 3 + 7) % 101
    acc += (3199 * 3 + 7) % 101
    acc += (3200 * 3 + 7) % 101
    acc += (3201 * 3 + 7) % 101
    acc += (3202 * 3 + 7) % 101
    acc += (3203 * 3 + 7) % 101
    acc += (3204 * 3 + 7) % 101
    acc += (3205 * 3 + 7) % 101
    acc += (3206 * 3 + 7) % 101
    acc += (3207 * 3 + 7) % 101
    acc += (3208 * 3 + 7) % 101
    acc += (3209 * 3 + 7) % 101
    acc += (3210 * 3 + 7) % 101
    acc += (3211 * 3 + 7) % 101
    acc += (3212 * 3 + 7) % 101
    acc += (3213 * 3 + 7) % 101
    acc += (3214 * 3 + 7) % 101
    acc += (3215 * 3 + 7) % 101
    acc += (3216 * 3 + 7) % 101
    acc += (3217 * 3 + 7) % 101
    acc += (3218 * 3 + 7) % 101
    acc += (3219 * 3 + 7) % 101
    acc += (3220 * 3 + 7) % 101
    acc += (3221 * 3 + 7) % 101
    acc += (3222 * 3 + 7) % 101
    acc += (3223 * 3 + 7) % 101
    acc += (3224 * 3 + 7) % 101
    acc += (3225 * 3 + 7) % 101
    acc += (3226 * 3 + 7) % 101
    acc += (3227 * 3 + 7) % 101
    acc += (3228 * 3 + 7) % 101
    acc += (3229 * 3 + 7) % 101
    acc += (3230 * 3 + 7) % 101
    acc += (3231 * 3 + 7) % 101
    acc += (3232 * 3 + 7) % 101
    acc += (3233 * 3 + 7) % 101
    acc += (3234 * 3 + 7) % 101
    acc += (3235 * 3 + 7) % 101
    acc += (3236 * 3 + 7) % 101
    acc += (3237 * 3 + 7) % 101
    acc += (3238 * 3 + 7) % 101
    acc += (3239 * 3 + 7) % 101
    acc += (3240 * 3 + 7) % 101
    acc += (3241 * 3 + 7) % 101
    acc += (3242 * 3 + 7) % 101
    acc += (3243 * 3 + 7) % 101
    acc += (3244 * 3 + 7) % 101
    acc += (3245 * 3 + 7) % 101
    acc += (3246 * 3 + 7) % 101
    acc += (3247 * 3 + 7) % 101
    acc += (3248 * 3 + 7) % 101
    acc += (3249 * 3 + 7) % 101
    acc += (3250 * 3 + 7) % 101
    acc += (3251 * 3 + 7) % 101
    acc += (3252 * 3 + 7) % 101
    acc += (3253 * 3 + 7) % 101
    acc += (3254 * 3 + 7) % 101
    acc += (3255 * 3 + 7) % 101
    acc += (3256 * 3 + 7) % 101
    acc += (3257 * 3 + 7) % 101
    acc += (3258 * 3 + 7) % 101
    acc += (3259 * 3 + 7) % 101
    acc += (3260 * 3 + 7) % 101
    acc += (3261 * 3 + 7) % 101
    acc += (3262 * 3 + 7) % 101
    acc += (3263 * 3 + 7) % 101
    acc += (3264 * 3 + 7) % 101
    acc += (3265 * 3 + 7) % 101
    acc += (3266 * 3 + 7) % 101
    acc += (3267 * 3 + 7) % 101
    acc += (3268 * 3 + 7) % 101
    acc += (3269 * 3 + 7) % 101
    acc += (3270 * 3 + 7) % 101
    acc += (3271 * 3 + 7) % 101
    acc += (3272 * 3 + 7) % 101
    acc += (3273 * 3 + 7) % 101
    acc += (3274 * 3 + 7) % 101
    acc += (3275 * 3 + 7) % 101
    acc += (3276 * 3 + 7) % 101
    acc += (3277 * 3 + 7) % 101
    acc += (3278 * 3 + 7) % 101
    acc += (3279 * 3 + 7) % 101
    acc += (3280 * 3 + 7) % 101
    acc += (3281 * 3 + 7) % 101
    acc += (3282 * 3 + 7) % 101
    acc += (3283 * 3 + 7) % 101
    acc += (3284 * 3 + 7) % 101
    acc += (3285 * 3 + 7) % 101
    acc += (3286 * 3 + 7) % 101
    acc += (3287 * 3 + 7) % 101
    acc += (3288 * 3 + 7) % 101
    acc += (3289 * 3 + 7) % 101
    acc += (3290 * 3 + 7) % 101
    acc += (3291 * 3 + 7) % 101
    acc += (3292 * 3 + 7) % 101
    acc += (3293 * 3 + 7) % 101
    acc += (3294 * 3 + 7) % 101
    acc += (3295 * 3 + 7) % 101
    acc += (3296 * 3 + 7) % 101
    acc += (3297 * 3 + 7) % 101
    acc += (3298 * 3 + 7) % 101
    acc += (3299 * 3 + 7) % 101
    acc += (3300 * 3 + 7) % 101
    acc += (3301 * 3 + 7) % 101
    acc += (3302 * 3 + 7) % 101
    acc += (3303 * 3 + 7) % 101
    acc += (3304 * 3 + 7) % 101
    acc += (3305 * 3 + 7) % 101
    acc += (3306 * 3 + 7) % 101
    acc += (3307 * 3 + 7) % 101
    acc += (3308 * 3 + 7) % 101
    acc += (3309 * 3 + 7) % 101
    acc += (3310 * 3 + 7) % 101
    acc += (3311 * 3 + 7) % 101
    acc += (3312 * 3 + 7) % 101
    acc += (3313 * 3 + 7) % 101
    acc += (3314 * 3 + 7) % 101
    acc += (3315 * 3 + 7) % 101
    acc += (3316 * 3 + 7) % 101
    acc += (3317 * 3 + 7) % 101
    acc += (3318 * 3 + 7) % 101
    acc += (3319 * 3 + 7) % 101
    acc += (3320 * 3 + 7) % 101
    acc += (3321 * 3 + 7) % 101
    acc += (3322 * 3 + 7) % 101
    acc += (3323 * 3 + 7) % 101
    acc += (3324 * 3 + 7) % 101
    acc += (3325 * 3 + 7) % 101
    acc += (3326 * 3 + 7) % 101
    acc += (3327 * 3 + 7) % 101
    acc += (3328 * 3 + 7) % 101
    acc += (3329 * 3 + 7) % 101
    acc += (3330 * 3 + 7) % 101
    acc += (3331 * 3 + 7) % 101
    acc += (3332 * 3 + 7) % 101
    acc += (3333 * 3 + 7) % 101
    acc += (3334 * 3 + 7) % 101
    acc += (3335 * 3 + 7) % 101
    acc += (3336 * 3 + 7) % 101
    acc += (3337 * 3 + 7) % 101
    acc += (3338 * 3 + 7) % 101
    acc += (3339 * 3 + 7) % 101
    acc += (3340 * 3 + 7) % 101
    acc += (3341 * 3 + 7) % 101
    acc += (3342 * 3 + 7) % 101
    acc += (3343 * 3 + 7) % 101
    acc += (3344 * 3 + 7) % 101
    acc += (3345 * 3 + 7) % 101
    acc += (3346 * 3 + 7) % 101
    acc += (3347 * 3 + 7) % 101
    acc += (3348 * 3 + 7) % 101
    acc += (3349 * 3 + 7) % 101
    acc += (3350 * 3 + 7) % 101
    acc += (3351 * 3 + 7) % 101
    acc += (3352 * 3 + 7) % 101
    acc += (3353 * 3 + 7) % 101
    acc += (3354 * 3 + 7) % 101
    acc += (3355 * 3 + 7) % 101
    acc += (3356 * 3 + 7) % 101
    acc += (3357 * 3 + 7) % 101
    acc += (3358 * 3 + 7) % 101
    acc += (3359 * 3 + 7) % 101
    acc += (3360 * 3 + 7) % 101
    acc += (3361 * 3 + 7) % 101
    acc += (3362 * 3 + 7) % 101
    acc += (3363 * 3 + 7) % 101
    acc += (3364 * 3 + 7) % 101
    acc += (3365 * 3 + 7) % 101
    acc += (3366 * 3 + 7) % 101
    acc += (3367 * 3 + 7) % 101
    acc += (3368 * 3 + 7) % 101
    acc += (3369 * 3 + 7) % 101
    acc += (3370 * 3 + 7) % 101
    acc += (3371 * 3 + 7) % 101
    acc += (3372 * 3 + 7) % 101
    acc += (3373 * 3 + 7) % 101
    acc += (3374 * 3 + 7) % 101
    acc += (3375 * 3 + 7) % 101
    acc += (3376 * 3 + 7) % 101
    acc += (3377 * 3 + 7) % 101
    acc += (3378 * 3 + 7) % 101
    acc += (3379 * 3 + 7) % 101
    acc += (3380 * 3 + 7) % 101
    acc += (3381 * 3 + 7) % 101
    acc += (3382 * 3 + 7) % 101
    acc += (3383 * 3 + 7) % 101
    acc += (3384 * 3 + 7) % 101
    acc += (3385 * 3 + 7) % 101
    acc += (3386 * 3 + 7) % 101
    acc += (3387 * 3 + 7) % 101
    acc += (3388 * 3 + 7) % 101
    acc += (3389 * 3 + 7) % 101
    acc += (3390 * 3 + 7) % 101
    acc += (3391 * 3 + 7) % 101
    acc += (3392 * 3 + 7) % 101
    acc += (3393 * 3 + 7) % 101
    acc += (3394 * 3 + 7) % 101
    acc += (3395 * 3 + 7) % 101
    acc += (3396 * 3 + 7) % 101
    acc += (3397 * 3 + 7) % 101
    acc += (3398 * 3 + 7) % 101
    acc += (3399 * 3 + 7) % 101
    acc += (3400 * 3 + 7) % 101
    acc += (3401 * 3 + 7) % 101
    acc += (3402 * 3 + 7) % 101
    acc += (3403 * 3 + 7) % 101
    acc += (3404 * 3 + 7) % 101
    acc += (3405 * 3 + 7) % 101
    acc += (3406 * 3 + 7) % 101
    acc += (3407 * 3 + 7) % 101
    acc += (3408 * 3 + 7) % 101
    acc += (3409 * 3 + 7) % 101
    acc += (3410 * 3 + 7) % 101
    acc += (3411 * 3 + 7) % 101
    acc += (3412 * 3 + 7) % 101
    acc += (3413 * 3 + 7) % 101
    acc += (3414 * 3 + 7) % 101
    acc += (3415 * 3 + 7) % 101
    acc += (3416 * 3 + 7) % 101
    acc += (3417 * 3 + 7) % 101
    acc += (3418 * 3 + 7) % 101
    acc += (3419 * 3 + 7) % 101
    acc += (3420 * 3 + 7) % 101
    acc += (3421 * 3 + 7) % 101
    acc += (3422 * 3 + 7) % 101
    acc += (3423 * 3 + 7) % 101
    acc += (3424 * 3 + 7) % 101
    acc += (3425 * 3 + 7) % 101
    acc += (3426 * 3 + 7) % 101
    acc += (3427 * 3 + 7) % 101
    acc += (3428 * 3 + 7) % 101
    acc += (3429 * 3 + 7) % 101
    acc += (3430 * 3 + 7) % 101
    acc += (3431 * 3 + 7) % 101
    acc += (3432 * 3 + 7) % 101
    acc += (3433 * 3 + 7) % 101
    acc += (3434 * 3 + 7) % 101
    acc += (3435 * 3 + 7) % 101
    acc += (3436 * 3 + 7) % 101
    acc += (3437 * 3 + 7) % 101
    acc += (3438 * 3 + 7) % 101
    acc += (3439 * 3 + 7) % 101
    acc += (3440 * 3 + 7) % 101
    acc += (3441 * 3 + 7) % 101
    acc += (3442 * 3 + 7) % 101
    acc += (3443 * 3 + 7) % 101
    acc += (3444 * 3 + 7) % 101
    acc += (3445 * 3 + 7) % 101
    acc += (3446 * 3 + 7) % 101
    acc += (3447 * 3 + 7) % 101
    acc += (3448 * 3 + 7) % 101
    acc += (3449 * 3 + 7) % 101
    acc += (3450 * 3 + 7) % 101
    acc += (3451 * 3 + 7) % 101
    acc += (3452 * 3 + 7) % 101
    acc += (3453 * 3 + 7) % 101
    acc += (3454 * 3 + 7) % 101
    acc += (3455 * 3 + 7) % 101
    acc += (3456 * 3 + 7) % 101
    acc += (3457 * 3 + 7) % 101
    acc += (3458 * 3 + 7) % 101
    acc += (3459 * 3 + 7) % 101
    acc += (3460 * 3 + 7) % 101
    acc += (3461 * 3 + 7) % 101
    acc += (3462 * 3 + 7) % 101
    acc += (3463 * 3 + 7) % 101
    acc += (3464 * 3 + 7) % 101
    acc += (3465 * 3 + 7) % 101
    acc += (3466 * 3 + 7) % 101
    acc += (3467 * 3 + 7) % 101
    acc += (3468 * 3 + 7) % 101
    acc += (3469 * 3 + 7) % 101
    acc += (3470 * 3 + 7) % 101
    acc += (3471 * 3 + 7) % 101
    acc += (3472 * 3 + 7) % 101
    acc += (3473 * 3 + 7) % 101
    acc += (3474 * 3 + 7) % 101
    acc += (3475 * 3 + 7) % 101
    acc += (3476 * 3 + 7) % 101
    acc += (3477 * 3 + 7) % 101
    acc += (3478 * 3 + 7) % 101
    acc += (3479 * 3 + 7) % 101
    acc += (3480 * 3 + 7) % 101
    acc += (3481 * 3 + 7) % 101
    acc += (3482 * 3 + 7) % 101
    acc += (3483 * 3 + 7) % 101
    acc += (3484 * 3 + 7) % 101
    acc += (3485 * 3 + 7) % 101
    acc += (3486 * 3 + 7) % 101
    acc += (3487 * 3 + 7) % 101
    acc += (3488 * 3 + 7) % 101
    acc += (3489 * 3 + 7) % 101
    acc += (3490 * 3 + 7) % 101
    acc += (3491 * 3 + 7) % 101
    acc += (3492 * 3 + 7) % 101
    acc += (3493 * 3 + 7) % 101
    acc += (3494 * 3 + 7) % 101
    acc += (3495 * 3 + 7) % 101
    acc += (3496 * 3 + 7) % 101
    acc += (3497 * 3 + 7) % 101
    acc += (3498 * 3 + 7) % 101
    acc += (3499 * 3 + 7) % 101
    acc += (3500 * 3 + 7) % 101
    acc += (3501 * 3 + 7) % 101
    acc += (3502 * 3 + 7) % 101
    acc += (3503 * 3 + 7) % 101
    acc += (3504 * 3 + 7) % 101
    acc += (3505 * 3 + 7) % 101
    acc += (3506 * 3 + 7) % 101
    acc += (3507 * 3 + 7) % 101
    acc += (3508 * 3 + 7) % 101
    acc += (3509 * 3 + 7) % 101
    acc += (3510 * 3 + 7) % 101
    acc += (3511 * 3 + 7) % 101
    acc += (3512 * 3 + 7) % 101
    acc += (3513 * 3 + 7) % 101
    acc += (3514 * 3 + 7) % 101
    acc += (3515 * 3 + 7) % 101
    acc += (3516 * 3 + 7) % 101
    acc += (3517 * 3 + 7) % 101
    acc += (3518 * 3 + 7) % 101
    acc += (3519 * 3 + 7) % 101
    acc += (3520 * 3 + 7) % 101
    acc += (3521 * 3 + 7) % 101
    acc += (3522 * 3 + 7) % 101
    acc += (3523 * 3 + 7) % 101
    acc += (3524 * 3 + 7) % 101
    acc += (3525 * 3 + 7) % 101
    acc += (3526 * 3 + 7) % 101
    acc += (3527 * 3 + 7) % 101
    acc += (3528 * 3 + 7) % 101
    acc += (3529 * 3 + 7) % 101
    acc += (3530 * 3 + 7) % 101
    acc += (3531 * 3 + 7) % 101
    acc += (3532 * 3 + 7) % 101
    acc += (3533 * 3 + 7) % 101
    acc += (3534 * 3 + 7) % 101
    acc += (3535 * 3 + 7) % 101
    acc += (3536 * 3 + 7) % 101
    acc += (3537 * 3 + 7) % 101
    acc += (3538 * 3 + 7) % 101
    acc += (3539 * 3 + 7) % 101
    acc += (3540 * 3 + 7) % 101
    acc += (3541 * 3 + 7) % 101
    acc += (3542 * 3 + 7) % 101
    acc += (3543 * 3 + 7) % 101
    acc += (3544 * 3 + 7) % 101
    acc += (3545 * 3 + 7) % 101
    acc += (3546 * 3 + 7) % 101
    acc += (3547 * 3 + 7) % 101
    acc += (3548 * 3 + 7) % 101
    acc += (3549 * 3 + 7) % 101
    acc += (3550 * 3 + 7) % 101
    acc += (3551 * 3 + 7) % 101
    acc += (3552 * 3 + 7) % 101
    acc += (3553 * 3 + 7) % 101
    acc += (3554 * 3 + 7) % 101
    acc += (3555 * 3 + 7) % 101
    acc += (3556 * 3 + 7) % 101
    acc += (3557 * 3 + 7) % 101
    acc += (3558 * 3 + 7) % 101
    acc += (3559 * 3 + 7) % 101
    acc += (3560 * 3 + 7) % 101
    acc += (3561 * 3 + 7) % 101
    acc += (3562 * 3 + 7) % 101
    acc += (3563 * 3 + 7) % 101
    acc += (3564 * 3 + 7) % 101
    acc += (3565 * 3 + 7) % 101
    acc += (3566 * 3 + 7) % 101
    acc += (3567 * 3 + 7) % 101
    acc += (3568 * 3 + 7) % 101
    acc += (3569 * 3 + 7) % 101
    acc += (3570 * 3 + 7) % 101
    acc += (3571 * 3 + 7) % 101
    acc += (3572 * 3 + 7) % 101
    acc += (3573 * 3 + 7) % 101
    acc += (3574 * 3 + 7) % 101
    acc += (3575 * 3 + 7) % 101
    acc += (3576 * 3 + 7) % 101
    acc += (3577 * 3 + 7) % 101
    acc += (3578 * 3 + 7) % 101
    acc += (3579 * 3 + 7) % 101
    acc += (3580 * 3 + 7) % 101
    acc += (3581 * 3 + 7) % 101
    acc += (3582 * 3 + 7) % 101
    acc += (3583 * 3 + 7) % 101
    acc += (3584 * 3 + 7) % 101
    acc += (3585 * 3 + 7) % 101
    acc += (3586 * 3 + 7) % 101
    acc += (3587 * 3 + 7) % 101
    acc += (3588 * 3 + 7) % 101
    acc += (3589 * 3 + 7) % 101
    acc += (3590 * 3 + 7) % 101
    acc += (3591 * 3 + 7) % 101
    acc += (3592 * 3 + 7) % 101
    acc += (3593 * 3 + 7) % 101
    acc += (3594 * 3 + 7) % 101
    acc += (3595 * 3 + 7) % 101
    acc += (3596 * 3 + 7) % 101
    acc += (3597 * 3 + 7) % 101
    acc += (3598 * 3 + 7) % 101
    acc += (3599 * 3 + 7) % 101
    acc += (3600 * 3 + 7) % 101
    acc += (3601 * 3 + 7) % 101
    acc += (3602 * 3 + 7) % 101
    acc += (3603 * 3 + 7) % 101
    acc += (3604 * 3 + 7) % 101
    acc += (3605 * 3 + 7) % 101
    acc += (3606 * 3 + 7) % 101
    acc += (3607 * 3 + 7) % 101
    acc += (3608 * 3 + 7) % 101
    acc += (3609 * 3 + 7) % 101
    acc += (3610 * 3 + 7) % 101
    acc += (3611 * 3 + 7) % 101
    acc += (3612 * 3 + 7) % 101
    acc += (3613 * 3 + 7) % 101
    acc += (3614 * 3 + 7) % 101
    acc += (3615 * 3 + 7) % 101
    acc += (3616 * 3 + 7) % 101
    acc += (3617 * 3 + 7) % 101
    acc += (3618 * 3 + 7) % 101
    acc += (3619 * 3 + 7) % 101
    acc += (3620 * 3 + 7) % 101
    acc += (3621 * 3 + 7) % 101
    acc += (3622 * 3 + 7) % 101
    acc += (3623 * 3 + 7) % 101
    acc += (3624 * 3 + 7) % 101
    acc += (3625 * 3 + 7) % 101
    acc += (3626 * 3 + 7) % 101
    acc += (3627 * 3 + 7) % 101
    acc += (3628 * 3 + 7) % 101
    acc += (3629 * 3 + 7) % 101
    acc += (3630 * 3 + 7) % 101
    acc += (3631 * 3 + 7) % 101
    acc += (3632 * 3 + 7) % 101
    acc += (3633 * 3 + 7) % 101
    acc += (3634 * 3 + 7) % 101
    acc += (3635 * 3 + 7) % 101
    acc += (3636 * 3 + 7) % 101
    acc += (3637 * 3 + 7) % 101
    acc += (3638 * 3 + 7) % 101
    acc += (3639 * 3 + 7) % 101
    acc += (3640 * 3 + 7) % 101
    acc += (3641 * 3 + 7) % 101
    acc += (3642 * 3 + 7) % 101
    acc += (3643 * 3 + 7) % 101
    acc += (3644 * 3 + 7) % 101
    acc += (3645 * 3 + 7) % 101
    acc += (3646 * 3 + 7) % 101
    acc += (3647 * 3 + 7) % 101
    acc += (3648 * 3 + 7) % 101
    acc += (3649 * 3 + 7) % 101
    acc += (3650 * 3 + 7) % 101
    acc += (3651 * 3 + 7) % 101
    acc += (3652 * 3 + 7) % 101
    acc += (3653 * 3 + 7) % 101
    acc += (3654 * 3 + 7) % 101
    acc += (3655 * 3 + 7) % 101
    acc += (3656 * 3 + 7) % 101
    acc += (3657 * 3 + 7) % 101
    acc += (3658 * 3 + 7) % 101
    acc += (3659 * 3 + 7) % 101
    acc += (3660 * 3 + 7) % 101
    acc += (3661 * 3 + 7) % 101
    acc += (3662 * 3 + 7) % 101
    acc += (3663 * 3 + 7) % 101
    acc += (3664 * 3 + 7) % 101
    acc += (3665 * 3 + 7) % 101
    acc += (3666 * 3 + 7) % 101
    acc += (3667 * 3 + 7) % 101
    acc += (3668 * 3 + 7) % 101
    acc += (3669 * 3 + 7) % 101
    acc += (3670 * 3 + 7) % 101
    acc += (3671 * 3 + 7) % 101
    acc += (3672 * 3 + 7) % 101
    acc += (3673 * 3 + 7) % 101
    acc += (3674 * 3 + 7) % 101
    acc += (3675 * 3 + 7) % 101
    acc += (3676 * 3 + 7) % 101
    acc += (3677 * 3 + 7) % 101
    acc += (3678 * 3 + 7) % 101
    acc += (3679 * 3 + 7) % 101
    acc += (3680 * 3 + 7) % 101
    acc += (3681 * 3 + 7) % 101
    acc += (3682 * 3 + 7) % 101
    acc += (3683 * 3 + 7) % 101
    acc += (3684 * 3 + 7) % 101
    acc += (3685 * 3 + 7) % 101
    acc += (3686 * 3 + 7) % 101
    acc += (3687 * 3 + 7) % 101
    acc += (3688 * 3 + 7) % 101
    acc += (3689 * 3 + 7) % 101
    acc += (3690 * 3 + 7) % 101
    acc += (3691 * 3 + 7) % 101
    acc += (3692 * 3 + 7) % 101
    acc += (3693 * 3 + 7) % 101
    acc += (3694 * 3 + 7) % 101
    acc += (3695 * 3 + 7) % 101
    acc += (3696 * 3 + 7) % 101
    acc += (3697 * 3 + 7) % 101
    acc += (3698 * 3 + 7) % 101
    acc += (3699 * 3 + 7) % 101
    acc += (3700 * 3 + 7) % 101
    acc += (3701 * 3 + 7) % 101
    acc += (3702 * 3 + 7) % 101
    acc += (3703 * 3 + 7) % 101
    acc += (3704 * 3 + 7) % 101
    acc += (3705 * 3 + 7) % 101
    acc += (3706 * 3 + 7) % 101
    acc += (3707 * 3 + 7) % 101
    acc += (3708 * 3 + 7) % 101
    acc += (3709 * 3 + 7) % 101
    acc += (3710 * 3 + 7) % 101
    acc += (3711 * 3 + 7) % 101
    acc += (3712 * 3 + 7) % 101
    acc += (3713 * 3 + 7) % 101
    acc += (3714 * 3 + 7) % 101
    acc += (3715 * 3 + 7) % 101
    acc += (3716 * 3 + 7) % 101
    acc += (3717 * 3 + 7) % 101
    acc += (3718 * 3 + 7) % 101
    acc += (3719 * 3 + 7) % 101
    acc += (3720 * 3 + 7) % 101
    acc += (3721 * 3 + 7) % 101
    acc += (3722 * 3 + 7) % 101
    acc += (3723 * 3 + 7) % 101
    acc += (3724 * 3 + 7) % 101
    acc += (3725 * 3 + 7) % 101
    acc += (3726 * 3 + 7) % 101
    acc += (3727 * 3 + 7) % 101
    acc += (3728 * 3 + 7) % 101
    acc += (3729 * 3 + 7) % 101
    acc += (3730 * 3 + 7) % 101
    acc += (3731 * 3 + 7) % 101
    acc += (3732 * 3 + 7) % 101
    acc += (3733 * 3 + 7) % 101
    acc += (3734 * 3 + 7) % 101
    acc += (3735 * 3 + 7) % 101
    acc += (3736 * 3 + 7) % 101
    acc += (3737 * 3 + 7) % 101
    acc += (3738 * 3 + 7) % 101
    acc += (3739 * 3 + 7) % 101
    acc += (3740 * 3 + 7) % 101
    acc += (3741 * 3 + 7) % 101
    acc += (3742 * 3 + 7) % 101
    acc += (3743 * 3 + 7) % 101
    acc += (3744 * 3 + 7) % 101
    acc += (3745 * 3 + 7) % 101
    acc += (3746 * 3 + 7) % 101
    acc += (3747 * 3 + 7) % 101
    acc += (3748 * 3 + 7) % 101
    acc += (3749 * 3 + 7) % 101
    acc += (3750 * 3 + 7) % 101
    acc += (3751 * 3 + 7) % 101
    acc += (3752 * 3 + 7) % 101
    acc += (3753 * 3 + 7) % 101
    acc += (3754 * 3 + 7) % 101
    acc += (3755 * 3 + 7) % 101
    acc += (3756 * 3 + 7) % 101
    acc += (3757 * 3 + 7) % 101
    acc += (3758 * 3 + 7) % 101
    acc += (3759 * 3 + 7) % 101
    acc += (3760 * 3 + 7) % 101
    acc += (3761 * 3 + 7) % 101
    acc += (3762 * 3 + 7) % 101
    acc += (3763 * 3 + 7) % 101
    acc += (3764 * 3 + 7) % 101
    acc += (3765 * 3 + 7) % 101
    acc += (3766 * 3 + 7) % 101
    acc += (3767 * 3 + 7) % 101
    acc += (3768 * 3 + 7) % 101
    acc += (3769 * 3 + 7) % 101
    acc += (3770 * 3 + 7) % 101
    acc += (3771 * 3 + 7) % 101
    acc += (3772 * 3 + 7) % 101
    acc += (3773 * 3 + 7) % 101
    acc += (3774 * 3 + 7) % 101
    acc += (3775 * 3 + 7) % 101
    acc += (3776 * 3 + 7) % 101
    acc += (3777 * 3 + 7) % 101
    acc += (3778 * 3 + 7) % 101
    acc += (3779 * 3 + 7) % 101
    acc += (3780 * 3 + 7) % 101
    acc += (3781 * 3 + 7) % 101
    acc += (3782 * 3 + 7) % 101
    acc += (3783 * 3 + 7) % 101
    acc += (3784 * 3 + 7) % 101
    acc += (3785 * 3 + 7) % 101
    acc += (3786 * 3 + 7) % 101
    acc += (3787 * 3 + 7) % 101
    acc += (3788 * 3 + 7) % 101
    acc += (3789 * 3 + 7) % 101
    acc += (3790 * 3 + 7) % 101
    acc += (3791 * 3 + 7) % 101
    acc += (3792 * 3 + 7) % 101
    acc += (3793 * 3 + 7) % 101
    acc += (3794 * 3 + 7) % 101
    acc += (3795 * 3 + 7) % 101
    acc += (3796 * 3 + 7) % 101
    acc += (3797 * 3 + 7) % 101
    acc += (3798 * 3 + 7) % 101
    acc += (3799 * 3 + 7) % 101
    acc += (3800 * 3 + 7) % 101
    acc += (3801 * 3 + 7) % 101
    acc += (3802 * 3 + 7) % 101
    acc += (3803 * 3 + 7) % 101
    acc += (3804 * 3 + 7) % 101
    acc += (3805 * 3 + 7) % 101
    acc += (3806 * 3 + 7) % 101
    acc += (3807 * 3 + 7) % 101
    acc += (3808 * 3 + 7) % 101
    acc += (3809 * 3 + 7) % 101
    acc += (3810 * 3 + 7) % 101
    acc += (3811 * 3 + 7) % 101
    acc += (3812 * 3 + 7) % 101
    acc += (3813 * 3 + 7) % 101
    acc += (3814 * 3 + 7) % 101
    acc += (3815 * 3 + 7) % 101
    acc += (3816 * 3 + 7) % 101
    acc += (3817 * 3 + 7) % 101
    acc += (3818 * 3 + 7) % 101
    acc += (3819 * 3 + 7) % 101
    acc += (3820 * 3 + 7) % 101
    acc += (3821 * 3 + 7) % 101
    acc += (3822 * 3 + 7) % 101
    acc += (3823 * 3 + 7) % 101
    acc += (3824 * 3 + 7) % 101
    acc += (3825 * 3 + 7) % 101
    acc += (3826 * 3 + 7) % 101
    acc += (3827 * 3 + 7) % 101
    acc += (3828 * 3 + 7) % 101
    acc += (3829 * 3 + 7) % 101
    acc += (3830 * 3 + 7) % 101
    acc += (3831 * 3 + 7) % 101
    acc += (3832 * 3 + 7) % 101
    acc += (3833 * 3 + 7) % 101
    acc += (3834 * 3 + 7) % 101
    acc += (3835 * 3 + 7) % 101
    acc += (3836 * 3 + 7) % 101
    acc += (3837 * 3 + 7) % 101
    acc += (3838 * 3 + 7) % 101
    acc += (3839 * 3 + 7) % 101
    acc += (3840 * 3 + 7) % 101
    acc += (3841 * 3 + 7) % 101
    acc += (3842 * 3 + 7) % 101
    acc += (3843 * 3 + 7) % 101
    acc += (3844 * 3 + 7) % 101
    acc += (3845 * 3 + 7) % 101
    acc += (3846 * 3 + 7) % 101
    acc += (3847 * 3 + 7) % 101
    acc += (3848 * 3 + 7) % 101
    acc += (3849 * 3 + 7) % 101
    acc += (3850 * 3 + 7) % 101
    acc += (3851 * 3 + 7) % 101
    acc += (3852 * 3 + 7) % 101
    acc += (3853 * 3 + 7) % 101
    acc += (3854 * 3 + 7) % 101
    acc += (3855 * 3 + 7) % 101
    acc += (3856 * 3 + 7) % 101
    acc += (3857 * 3 + 7) % 101
    acc += (3858 * 3 + 7) % 101
    acc += (3859 * 3 + 7) % 101
    acc += (3860 * 3 + 7) % 101
    acc += (3861 * 3 + 7) % 101
    acc += (3862 * 3 + 7) % 101
    acc += (3863 * 3 + 7) % 101
    acc += (3864 * 3 + 7) % 101
    acc += (3865 * 3 + 7) % 101
    acc += (3866 * 3 + 7) % 101
    acc += (3867 * 3 + 7) % 101
    acc += (3868 * 3 + 7) % 101
    acc += (3869 * 3 + 7) % 101
    acc += (3870 * 3 + 7) % 101
    acc += (3871 * 3 + 7) % 101
    acc += (3872 * 3 + 7) % 101
    acc += (3873 * 3 + 7) % 101
    acc += (3874 * 3 + 7) % 101
    acc += (3875 * 3 + 7) % 101
    acc += (3876 * 3 + 7) % 101
    acc += (3877 * 3 + 7) % 101
    acc += (3878 * 3 + 7) % 101
    acc += (3879 * 3 + 7) % 101
    acc += (3880 * 3 + 7) % 101
    acc += (3881 * 3 + 7) % 101
    acc += (3882 * 3 + 7) % 101
    acc += (3883 * 3 + 7) % 101
    acc += (3884 * 3 + 7) % 101
    acc += (3885 * 3 + 7) % 101
    acc += (3886 * 3 + 7) % 101
    acc += (3887 * 3 + 7) % 101
    acc += (3888 * 3 + 7) % 101
    acc += (3889 * 3 + 7) % 101
    acc += (3890 * 3 + 7) % 101
    acc += (3891 * 3 + 7) % 101
    acc += (3892 * 3 + 7) % 101
    acc += (3893 * 3 + 7) % 101
    acc += (3894 * 3 + 7) % 101
    acc += (3895 * 3 + 7) % 101
    acc += (3896 * 3 + 7) % 101
    acc += (3897 * 3 + 7) % 101
    acc += (3898 * 3 + 7) % 101
    acc += (3899 * 3 + 7) % 101
    acc += (3900 * 3 + 7) % 101
    acc += (3901 * 3 + 7) % 101
    acc += (3902 * 3 + 7) % 101
    acc += (3903 * 3 + 7) % 101
    acc += (3904 * 3 + 7) % 101
    acc += (3905 * 3 + 7) % 101
    acc += (3906 * 3 + 7) % 101
    acc += (3907 * 3 + 7) % 101
    acc += (3908 * 3 + 7) % 101
    acc += (3909 * 3 + 7) % 101
    acc += (3910 * 3 + 7) % 101
    acc += (3911 * 3 + 7) % 101
    acc += (3912 * 3 + 7) % 101
    acc += (3913 * 3 + 7) % 101
    acc += (3914 * 3 + 7) % 101
    acc += (3915 * 3 + 7) % 101
    acc += (3916 * 3 + 7) % 101
    acc += (3917 * 3 + 7) % 101
    acc += (3918 * 3 + 7) % 101
    acc += (3919 * 3 + 7) % 101
    acc += (3920 * 3 + 7) % 101
    acc += (3921 * 3 + 7) % 101
    acc += (3922 * 3 + 7) % 101
    acc += (3923 * 3 + 7) % 101
    acc += (3924 * 3 + 7) % 101
    acc += (3925 * 3 + 7) % 101
    acc += (3926 * 3 + 7) % 101
    acc += (3927 * 3 + 7) % 101
    acc += (3928 * 3 + 7) % 101
    acc += (3929 * 3 + 7) % 101
    acc += (3930 * 3 + 7) % 101
    acc += (3931 * 3 + 7) % 101
    acc += (3932 * 3 + 7) % 101
    acc += (3933 * 3 + 7) % 101
    acc += (3934 * 3 + 7) % 101
    acc += (3935 * 3 + 7) % 101
    acc += (3936 * 3 + 7) % 101
    acc += (3937 * 3 + 7) % 101
    acc += (3938 * 3 + 7) % 101
    acc += (3939 * 3 + 7) % 101
    acc += (3940 * 3 + 7) % 101
    acc += (3941 * 3 + 7) % 101
    acc += (3942 * 3 + 7) % 101
    acc += (3943 * 3 + 7) % 101
    acc += (3944 * 3 + 7) % 101
    acc += (3945 * 3 + 7) % 101
    acc += (3946 * 3 + 7) % 101
    acc += (3947 * 3 + 7) % 101
    acc += (3948 * 3 + 7) % 101
    acc += (3949 * 3 + 7) % 101
    acc += (3950 * 3 + 7) % 101
    acc += (3951 * 3 + 7) % 101
    acc += (3952 * 3 + 7) % 101
    acc += (3953 * 3 + 7) % 101
    acc += (3954 * 3 + 7) % 101
    acc += (3955 * 3 + 7) % 101
    acc += (3956 * 3 + 7) % 101
    acc += (3957 * 3 + 7) % 101
    acc += (3958 * 3 + 7) % 101
    acc += (3959 * 3 + 7) % 101
    acc += (3960 * 3 + 7) % 101
    acc += (3961 * 3 + 7) % 101
    acc += (3962 * 3 + 7) % 101
    acc += (3963 * 3 + 7) % 101
    acc += (3964 * 3 + 7) % 101
    acc += (3965 * 3 + 7) % 101
    acc += (3966 * 3 + 7) % 101
    acc += (3967 * 3 + 7) % 101
    acc += (3968 * 3 + 7) % 101
    acc += (3969 * 3 + 7) % 101
    acc += (3970 * 3 + 7) % 101
    acc += (3971 * 3 + 7) % 101
    acc += (3972 * 3 + 7) % 101
    acc += (3973 * 3 + 7) % 101
    acc += (3974 * 3 + 7) % 101
    acc += (3975 * 3 + 7) % 101
    acc += (3976 * 3 + 7) % 101
    acc += (3977 * 3 + 7) % 101
    acc += (3978 * 3 + 7) % 101
    acc += (3979 * 3 + 7) % 101
    acc += (3980 * 3 + 7) % 101
    acc += (3981 * 3 + 7) % 101
    acc += (3982 * 3 + 7) % 101
    acc += (3983 * 3 + 7) % 101
    acc += (3984 * 3 + 7) % 101
    acc += (3985 * 3 + 7) % 101
    acc += (3986 * 3 + 7) % 101
    acc += (3987 * 3 + 7) % 101
    acc += (3988 * 3 + 7) % 101
    acc += (3989 * 3 + 7) % 101
    acc += (3990 * 3 + 7) % 101
    acc += (3991 * 3 + 7) % 101
    acc += (3992 * 3 + 7) % 101
    acc += (3993 * 3 + 7) % 101
    acc += (3994 * 3 + 7) % 101
    acc += (3995 * 3 + 7) % 101
    acc += (3996 * 3 + 7) % 101
    acc += (3997 * 3 + 7) % 101
    acc += (3998 * 3 + 7) % 101
    acc += (3999 * 3 + 7) % 101
    acc += (4000 * 3 + 7) % 101
    acc += (4001 * 3 + 7) % 101
    acc += (4002 * 3 + 7) % 101
    acc += (4003 * 3 + 7) % 101
    acc += (4004 * 3 + 7) % 101
    acc += (4005 * 3 + 7) % 101
    acc += (4006 * 3 + 7) % 101
    acc += (4007 * 3 + 7) % 101
    acc += (4008 * 3 + 7) % 101
    acc += (4009 * 3 + 7) % 101
    acc += (4010 * 3 + 7) % 101
    acc += (4011 * 3 + 7) % 101
    acc += (4012 * 3 + 7) % 101
    acc += (4013 * 3 + 7) % 101
    acc += (4014 * 3 + 7) % 101
    acc += (4015 * 3 + 7) % 101
    acc += (4016 * 3 + 7) % 101
    acc += (4017 * 3 + 7) % 101
    acc += (4018 * 3 + 7) % 101
    acc += (4019 * 3 + 7) % 101
    acc += (4020 * 3 + 7) % 101
    acc += (4021 * 3 + 7) % 101
    acc += (4022 * 3 + 7) % 101
    acc += (4023 * 3 + 7) % 101
    acc += (4024 * 3 + 7) % 101
    acc += (4025 * 3 + 7) % 101
    acc += (4026 * 3 + 7) % 101
    acc += (4027 * 3 + 7) % 101
    acc += (4028 * 3 + 7) % 101
    acc += (4029 * 3 + 7) % 101
    acc += (4030 * 3 + 7) % 101
    acc += (4031 * 3 + 7) % 101
    acc += (4032 * 3 + 7) % 101
    acc += (4033 * 3 + 7) % 101
    acc += (4034 * 3 + 7) % 101
    acc += (4035 * 3 + 7) % 101
    acc += (4036 * 3 + 7) % 101
    acc += (4037 * 3 + 7) % 101
    acc += (4038 * 3 + 7) % 101
    acc += (4039 * 3 + 7) % 101
    acc += (4040 * 3 + 7) % 101
    acc += (4041 * 3 + 7) % 101
    acc += (4042 * 3 + 7) % 101
    acc += (4043 * 3 + 7) % 101
    acc += (4044 * 3 + 7) % 101
    acc += (4045 * 3 + 7) % 101
    acc += (4046 * 3 + 7) % 101
    acc += (4047 * 3 + 7) % 101
    acc += (4048 * 3 + 7) % 101
    acc += (4049 * 3 + 7) % 101
    acc += (4050 * 3 + 7) % 101
    acc += (4051 * 3 + 7) % 101
    acc += (4052 * 3 + 7) % 101
    acc += (4053 * 3 + 7) % 101
    acc += (4054 * 3 + 7) % 101
    acc += (4055 * 3 + 7) % 101
    acc += (4056 * 3 + 7) % 101
    acc += (4057 * 3 + 7) % 101
    acc += (4058 * 3 + 7) % 101
    acc += (4059 * 3 + 7) % 101
    acc += (4060 * 3 + 7) % 101
    acc += (4061 * 3 + 7) % 101
    acc += (4062 * 3 + 7) % 101
    acc += (4063 * 3 + 7) % 101
    acc += (4064 * 3 + 7) % 101
    acc += (4065 * 3 + 7) % 101
    acc += (4066 * 3 + 7) % 101
    acc += (4067 * 3 + 7) % 101
    acc += (4068 * 3 + 7) % 101
    acc += (4069 * 3 + 7) % 101
    acc += (4070 * 3 + 7) % 101
    acc += (4071 * 3 + 7) % 101
    acc += (4072 * 3 + 7) % 101
    acc += (4073 * 3 + 7) % 101
    acc += (4074 * 3 + 7) % 101
    acc += (4075 * 3 + 7) % 101
    acc += (4076 * 3 + 7) % 101
    acc += (4077 * 3 + 7) % 101
    acc += (4078 * 3 + 7) % 101
    acc += (4079 * 3 + 7) % 101
    acc += (4080 * 3 + 7) % 101
    acc += (4081 * 3 + 7) % 101
    acc += (4082 * 3 + 7) % 101
    acc += (4083 * 3 + 7) % 101
    acc += (4084 * 3 + 7) % 101
    acc += (4085 * 3 + 7) % 101
    acc += (4086 * 3 + 7) % 101
    acc += (4087 * 3 + 7) % 101
    acc += (4088 * 3 + 7) % 101
    acc += (4089 * 3 + 7) % 101
    acc += (4090 * 3 + 7) % 101
    acc += (4091 * 3 + 7) % 101
    acc += (4092 * 3 + 7) % 101
    acc += (4093 * 3 + 7) % 101
    acc += (4094 * 3 + 7) % 101
    acc += (4095 * 3 + 7) % 101
    acc += (4096 * 3 + 7) % 101
    acc += (4097 * 3 + 7) % 101
    acc += (4098 * 3 + 7) % 101
    acc += (4099 * 3 + 7) % 101
    acc += (4100 * 3 + 7) % 101
    acc += (4101 * 3 + 7) % 101
    acc += (4102 * 3 + 7) % 101
    acc += (4103 * 3 + 7) % 101
    acc += (4104 * 3 + 7) % 101
    acc += (4105 * 3 + 7) % 101
    acc += (4106 * 3 + 7) % 101
    acc += (4107 * 3 + 7) % 101
    acc += (4108 * 3 + 7) % 101
    acc += (4109 * 3 + 7) % 101
    acc += (4110 * 3 + 7) % 101
    acc += (4111 * 3 + 7) % 101
    acc += (4112 * 3 + 7) % 101
    acc += (4113 * 3 + 7) % 101
    acc += (4114 * 3 + 7) % 101
    acc += (4115 * 3 + 7) % 101
    acc += (4116 * 3 + 7) % 101
    acc += (4117 * 3 + 7) % 101
    acc += (4118 * 3 + 7) % 101
    acc += (4119 * 3 + 7) % 101
    acc += (4120 * 3 + 7) % 101
    acc += (4121 * 3 + 7) % 101
    acc += (4122 * 3 + 7) % 101
    acc += (4123 * 3 + 7) % 101
    acc += (4124 * 3 + 7) % 101
    acc += (4125 * 3 + 7) % 101
    acc += (4126 * 3 + 7) % 101
    acc += (4127 * 3 + 7) % 101
    acc += (4128 * 3 + 7) % 101
    acc += (4129 * 3 + 7) % 101
    acc += (4130 * 3 + 7) % 101
    acc += (4131 * 3 + 7) % 101
    acc += (4132 * 3 + 7) % 101
    acc += (4133 * 3 + 7) % 101
    acc += (4134 * 3 + 7) % 101
    acc += (4135 * 3 + 7) % 101
    acc += (4136 * 3 + 7) % 101
    acc += (4137 * 3 + 7) % 101
    acc += (4138 * 3 + 7) % 101
    acc += (4139 * 3 + 7) % 101
    acc += (4140 * 3 + 7) % 101
    acc += (4141 * 3 + 7) % 101
    acc += (4142 * 3 + 7) % 101
    acc += (4143 * 3 + 7) % 101
    acc += (4144 * 3 + 7) % 101
    acc += (4145 * 3 + 7) % 101
    acc += (4146 * 3 + 7) % 101
    acc += (4147 * 3 + 7) % 101
    acc += (4148 * 3 + 7) % 101
    acc += (4149 * 3 + 7) % 101
    acc += (4150 * 3 + 7) % 101
    acc += (4151 * 3 + 7) % 101
    acc += (4152 * 3 + 7) % 101
    acc += (4153 * 3 + 7) % 101
    acc += (4154 * 3 + 7) % 101
    acc += (4155 * 3 + 7) % 101
    acc += (4156 * 3 + 7) % 101
    acc += (4157 * 3 + 7) % 101
    acc += (4158 * 3 + 7) % 101
    acc += (4159 * 3 + 7) % 101
    acc += (4160 * 3 + 7) % 101
    acc += (4161 * 3 + 7) % 101
    acc += (4162 * 3 + 7) % 101
    acc += (4163 * 3 + 7) % 101
    acc += (4164 * 3 + 7) % 101
    acc += (4165 * 3 + 7) % 101
    acc += (4166 * 3 + 7) % 101
    acc += (4167 * 3 + 7) % 101
    acc += (4168 * 3 + 7) % 101
    acc += (4169 * 3 + 7) % 101
    acc += (4170 * 3 + 7) % 101
    acc += (4171 * 3 + 7) % 101
    acc += (4172 * 3 + 7) % 101
    acc += (4173 * 3 + 7) % 101
    acc += (4174 * 3 + 7) % 101
    acc += (4175 * 3 + 7) % 101
    acc += (4176 * 3 + 7) % 101
    acc += (4177 * 3 + 7) % 101
    acc += (4178 * 3 + 7) % 101
    acc += (4179 * 3 + 7) % 101
    acc += (4180 * 3 + 7) % 101
    acc += (4181 * 3 + 7) % 101
    acc += (4182 * 3 + 7) % 101
    acc += (4183 * 3 + 7) % 101
    acc += (4184 * 3 + 7) % 101
    acc += (4185 * 3 + 7) % 101
    acc += (4186 * 3 + 7) % 101
    acc += (4187 * 3 + 7) % 101
    acc += (4188 * 3 + 7) % 101
    acc += (4189 * 3 + 7) % 101
    acc += (4190 * 3 + 7) % 101
    acc += (4191 * 3 + 7) % 101
    acc += (4192 * 3 + 7) % 101
    acc += (4193 * 3 + 7) % 101
    acc += (4194 * 3 + 7) % 101
    acc += (4195 * 3 + 7) % 101
    acc += (4196 * 3 + 7) % 101
    acc += (4197 * 3 + 7) % 101
    acc += (4198 * 3 + 7) % 101
    acc += (4199 * 3 + 7) % 101
    acc += (4200 * 3 + 7) % 101
    acc += (4201 * 3 + 7) % 101
    acc += (4202 * 3 + 7) % 101
    acc += (4203 * 3 + 7) % 101
    acc += (4204 * 3 + 7) % 101
    acc += (4205 * 3 + 7) % 101
    acc += (4206 * 3 + 7) % 101
    acc += (4207 * 3 + 7) % 101
    acc += (4208 * 3 + 7) % 101
    acc += (4209 * 3 + 7) % 101
    acc += (4210 * 3 + 7) % 101
    acc += (4211 * 3 + 7) % 101
    acc += (4212 * 3 + 7) % 101
    acc += (4213 * 3 + 7) % 101
    acc += (4214 * 3 + 7) % 101
    acc += (4215 * 3 + 7) % 101
    acc += (4216 * 3 + 7) % 101
    acc += (4217 * 3 + 7) % 101
    acc += (4218 * 3 + 7) % 101
    acc += (4219 * 3 + 7) % 101
    acc += (4220 * 3 + 7) % 101
    acc += (4221 * 3 + 7) % 101
    acc += (4222 * 3 + 7) % 101
    acc += (4223 * 3 + 7) % 101
    acc += (4224 * 3 + 7) % 101
    acc += (4225 * 3 + 7) % 101
    acc += (4226 * 3 + 7) % 101
    acc += (4227 * 3 + 7) % 101
    acc += (4228 * 3 + 7) % 101
    acc += (4229 * 3 + 7) % 101
    acc += (4230 * 3 + 7) % 101
    acc += (4231 * 3 + 7) % 101
    acc += (4232 * 3 + 7) % 101
    acc += (4233 * 3 + 7) % 101
    acc += (4234 * 3 + 7) % 101
    acc += (4235 * 3 + 7) % 101
    acc += (4236 * 3 + 7) % 101
    acc += (4237 * 3 + 7) % 101
    acc += (4238 * 3 + 7) % 101
    acc += (4239 * 3 + 7) % 101
    acc += (4240 * 3 + 7) % 101
    acc += (4241 * 3 + 7) % 101
    acc += (4242 * 3 + 7) % 101
    acc += (4243 * 3 + 7) % 101
    acc += (4244 * 3 + 7) % 101
    acc += (4245 * 3 + 7) % 101
    acc += (4246 * 3 + 7) % 101
    acc += (4247 * 3 + 7) % 101
    acc += (4248 * 3 + 7) % 101
    acc += (4249 * 3 + 7) % 101
    acc += (4250 * 3 + 7) % 101
    acc += (4251 * 3 + 7) % 101
    acc += (4252 * 3 + 7) % 101
    acc += (4253 * 3 + 7) % 101
    acc += (4254 * 3 + 7) % 101
    acc += (4255 * 3 + 7) % 101
    acc += (4256 * 3 + 7) % 101
    acc += (4257 * 3 + 7) % 101
    acc += (4258 * 3 + 7) % 101
    acc += (4259 * 3 + 7) % 101
    acc += (4260 * 3 + 7) % 101
    acc += (4261 * 3 + 7) % 101
    acc += (4262 * 3 + 7) % 101
    acc += (4263 * 3 + 7) % 101
    acc += (4264 * 3 + 7) % 101
    acc += (4265 * 3 + 7) % 101
    acc += (4266 * 3 + 7) % 101
    acc += (4267 * 3 + 7) % 101
    acc += (4268 * 3 + 7) % 101
    acc += (4269 * 3 + 7) % 101
    acc += (4270 * 3 + 7) % 101
    acc += (4271 * 3 + 7) % 101
    acc += (4272 * 3 + 7) % 101
    acc += (4273 * 3 + 7) % 101
    acc += (4274 * 3 + 7) % 101
    acc += (4275 * 3 + 7) % 101
    acc += (4276 * 3 + 7) % 101
    acc += (4277 * 3 + 7) % 101
    acc += (4278 * 3 + 7) % 101
    acc += (4279 * 3 + 7) % 101
    acc += (4280 * 3 + 7) % 101
    acc += (4281 * 3 + 7) % 101
    acc += (4282 * 3 + 7) % 101
    acc += (4283 * 3 + 7) % 101
    acc += (4284 * 3 + 7) % 101
    acc += (4285 * 3 + 7) % 101
    acc += (4286 * 3 + 7) % 101
    acc += (4287 * 3 + 7) % 101
    acc += (4288 * 3 + 7) % 101
    acc += (4289 * 3 + 7) % 101
    acc += (4290 * 3 + 7) % 101
    acc += (4291 * 3 + 7) % 101
    acc += (4292 * 3 + 7) % 101
    acc += (4293 * 3 + 7) % 101
    acc += (4294 * 3 + 7) % 101
    acc += (4295 * 3 + 7) % 101
    acc += (4296 * 3 + 7) % 101
    acc += (4297 * 3 + 7) % 101
    acc += (4298 * 3 + 7) % 101
    acc += (4299 * 3 + 7) % 101
    acc += (4300 * 3 + 7) % 101
    acc += (4301 * 3 + 7) % 101
    acc += (4302 * 3 + 7) % 101
    acc += (4303 * 3 + 7) % 101
    acc += (4304 * 3 + 7) % 101
    acc += (4305 * 3 + 7) % 101
    acc += (4306 * 3 + 7) % 101
    acc += (4307 * 3 + 7) % 101
    acc += (4308 * 3 + 7) % 101
    acc += (4309 * 3 + 7) % 101
    acc += (4310 * 3 + 7) % 101
    acc += (4311 * 3 + 7) % 101
    acc += (4312 * 3 + 7) % 101
    acc += (4313 * 3 + 7) % 101
    acc += (4314 * 3 + 7) % 101
    acc += (4315 * 3 + 7) % 101
    acc += (4316 * 3 + 7) % 101
    acc += (4317 * 3 + 7) % 101
    acc += (4318 * 3 + 7) % 101
    acc += (4319 * 3 + 7) % 101
    acc += (4320 * 3 + 7) % 101
    acc += (4321 * 3 + 7) % 101
    acc += (4322 * 3 + 7) % 101
    acc += (4323 * 3 + 7) % 101
    acc += (4324 * 3 + 7) % 101
    acc += (4325 * 3 + 7) % 101
    acc += (4326 * 3 + 7) % 101
    acc += (4327 * 3 + 7) % 101
    acc += (4328 * 3 + 7) % 101
    acc += (4329 * 3 + 7) % 101
    acc += (4330 * 3 + 7) % 101
    acc += (4331 * 3 + 7) % 101
    acc += (4332 * 3 + 7) % 101
    acc += (4333 * 3 + 7) % 101
    acc += (4334 * 3 + 7) % 101
    acc += (4335 * 3 + 7) % 101
    acc += (4336 * 3 + 7) % 101
    acc += (4337 * 3 + 7) % 101
    acc += (4338 * 3 + 7) % 101
    acc += (4339 * 3 + 7) % 101
    acc += (4340 * 3 + 7) % 101
    acc += (4341 * 3 + 7) % 101
    acc += (4342 * 3 + 7) % 101
    acc += (4343 * 3 + 7) % 101
    acc += (4344 * 3 + 7) % 101
    acc += (4345 * 3 + 7) % 101
    acc += (4346 * 3 + 7) % 101
    acc += (4347 * 3 + 7) % 101
    acc += (4348 * 3 + 7) % 101
    acc += (4349 * 3 + 7) % 101
    acc += (4350 * 3 + 7) % 101
    acc += (4351 * 3 + 7) % 101
    acc += (4352 * 3 + 7) % 101
    acc += (4353 * 3 + 7) % 101
    acc += (4354 * 3 + 7) % 101
    acc += (4355 * 3 + 7) % 101
    acc += (4356 * 3 + 7) % 101
    acc += (4357 * 3 + 7) % 101
    acc += (4358 * 3 + 7) % 101
    acc += (4359 * 3 + 7) % 101
    acc += (4360 * 3 + 7) % 101
    acc += (4361 * 3 + 7) % 101
    acc += (4362 * 3 + 7) % 101
    acc += (4363 * 3 + 7) % 101
    acc += (4364 * 3 + 7) % 101
    acc += (4365 * 3 + 7) % 101
    acc += (4366 * 3 + 7) % 101
    acc += (4367 * 3 + 7) % 101
    acc += (4368 * 3 + 7) % 101
    acc += (4369 * 3 + 7) % 101
    acc += (4370 * 3 + 7) % 101
    acc += (4371 * 3 + 7) % 101
    acc += (4372 * 3 + 7) % 101
    acc += (4373 * 3 + 7) % 101
    acc += (4374 * 3 + 7) % 101
    acc += (4375 * 3 + 7) % 101
    acc += (4376 * 3 + 7) % 101
    acc += (4377 * 3 + 7) % 101
    acc += (4378 * 3 + 7) % 101
    acc += (4379 * 3 + 7) % 101
    acc += (4380 * 3 + 7) % 101
    acc += (4381 * 3 + 7) % 101
    acc += (4382 * 3 + 7) % 101
    acc += (4383 * 3 + 7) % 101
    acc += (4384 * 3 + 7) % 101
    acc += (4385 * 3 + 7) % 101
    acc += (4386 * 3 + 7) % 101
    acc += (4387 * 3 + 7) % 101
    acc += (4388 * 3 + 7) % 101
    acc += (4389 * 3 + 7) % 101
    acc += (4390 * 3 + 7) % 101
    acc += (4391 * 3 + 7) % 101
    acc += (4392 * 3 + 7) % 101
    acc += (4393 * 3 + 7) % 101
    acc += (4394 * 3 + 7) % 101
    acc += (4395 * 3 + 7) % 101
    acc += (4396 * 3 + 7) % 101
    acc += (4397 * 3 + 7) % 101
    acc += (4398 * 3 + 7) % 101
    acc += (4399 * 3 + 7) % 101
    acc += (4400 * 3 + 7) % 101
    acc += (4401 * 3 + 7) % 101
    acc += (4402 * 3 + 7) % 101
    acc += (4403 * 3 + 7) % 101
    acc += (4404 * 3 + 7) % 101
    acc += (4405 * 3 + 7) % 101
    acc += (4406 * 3 + 7) % 101
    acc += (4407 * 3 + 7) % 101
    acc += (4408 * 3 + 7) % 101
    acc += (4409 * 3 + 7) % 101
    acc += (4410 * 3 + 7) % 101
    acc += (4411 * 3 + 7) % 101
    acc += (4412 * 3 + 7) % 101
    acc += (4413 * 3 + 7) % 101
    acc += (4414 * 3 + 7) % 101
    acc += (4415 * 3 + 7) % 101
    acc += (4416 * 3 + 7) % 101
    acc += (4417 * 3 + 7) % 101
    acc += (4418 * 3 + 7) % 101
    acc += (4419 * 3 + 7) % 101
    acc += (4420 * 3 + 7) % 101
    acc += (4421 * 3 + 7) % 101
    acc += (4422 * 3 + 7) % 101
    acc += (4423 * 3 + 7) % 101
    acc += (4424 * 3 + 7) % 101
    acc += (4425 * 3 + 7) % 101
    acc += (4426 * 3 + 7) % 101
    acc += (4427 * 3 + 7) % 101
    acc += (4428 * 3 + 7) % 101
    acc += (4429 * 3 + 7) % 101
    acc += (4430 * 3 + 7) % 101
    acc += (4431 * 3 + 7) % 101
    acc += (4432 * 3 + 7) % 101
    acc += (4433 * 3 + 7) % 101
    acc += (4434 * 3 + 7) % 101
    acc += (4435 * 3 + 7) % 101
    acc += (4436 * 3 + 7) % 101
    acc += (4437 * 3 + 7) % 101
    acc += (4438 * 3 + 7) % 101
    acc += (4439 * 3 + 7) % 101
    acc += (4440 * 3 + 7) % 101
    acc += (4441 * 3 + 7) % 101
    acc += (4442 * 3 + 7) % 101
    acc += (4443 * 3 + 7) % 101
    acc += (4444 * 3 + 7) % 101
    acc += (4445 * 3 + 7) % 101
    acc += (4446 * 3 + 7) % 101
    acc += (4447 * 3 + 7) % 101
    acc += (4448 * 3 + 7) % 101
    acc += (4449 * 3 + 7) % 101
    acc += (4450 * 3 + 7) % 101
    acc += (4451 * 3 + 7) % 101
    acc += (4452 * 3 + 7) % 101
    acc += (4453 * 3 + 7) % 101
    acc += (4454 * 3 + 7) % 101
    acc += (4455 * 3 + 7) % 101
    acc += (4456 * 3 + 7) % 101
    acc += (4457 * 3 + 7) % 101
    acc += (4458 * 3 + 7) % 101
    acc += (4459 * 3 + 7) % 101
    acc += (4460 * 3 + 7) % 101
    acc += (4461 * 3 + 7) % 101
    acc += (4462 * 3 + 7) % 101
    acc += (4463 * 3 + 7) % 101
    acc += (4464 * 3 + 7) % 101
    acc += (4465 * 3 + 7) % 101
    acc += (4466 * 3 + 7) % 101
    acc += (4467 * 3 + 7) % 101
    acc += (4468 * 3 + 7) % 101
    acc += (4469 * 3 + 7) % 101
    acc += (4470 * 3 + 7) % 101
    acc += (4471 * 3 + 7) % 101
    acc += (4472 * 3 + 7) % 101
    acc += (4473 * 3 + 7) % 101
    acc += (4474 * 3 + 7) % 101
    acc += (4475 * 3 + 7) % 101
    acc += (4476 * 3 + 7) % 101
    acc += (4477 * 3 + 7) % 101
    acc += (4478 * 3 + 7) % 101
    acc += (4479 * 3 + 7) % 101
    acc += (4480 * 3 + 7) % 101
    acc += (4481 * 3 + 7) % 101
    acc += (4482 * 3 + 7) % 101
    acc += (4483 * 3 + 7) % 101
    acc += (4484 * 3 + 7) % 101
    acc += (4485 * 3 + 7) % 101
    acc += (4486 * 3 + 7) % 101
    acc += (4487 * 3 + 7) % 101
    acc += (4488 * 3 + 7) % 101
    acc += (4489 * 3 + 7) % 101
    acc += (4490 * 3 + 7) % 101
    acc += (4491 * 3 + 7) % 101
    acc += (4492 * 3 + 7) % 101
    acc += (4493 * 3 + 7) % 101
    acc += (4494 * 3 + 7) % 101
    acc += (4495 * 3 + 7) % 101
    acc += (4496 * 3 + 7) % 101
    acc += (4497 * 3 + 7) % 101
    acc += (4498 * 3 + 7) % 101
    acc += (4499 * 3 + 7) % 101
    acc += (4500 * 3 + 7) % 101
    acc += (4501 * 3 + 7) % 101
    acc += (4502 * 3 + 7) % 101
    acc += (4503 * 3 + 7) % 101
    acc += (4504 * 3 + 7) % 101
    acc += (4505 * 3 + 7) % 101
    acc += (4506 * 3 + 7) % 101
    acc += (4507 * 3 + 7) % 101
    acc += (4508 * 3 + 7) % 101
    acc += (4509 * 3 + 7) % 101
    acc += (4510 * 3 + 7) % 101
    acc += (4511 * 3 + 7) % 101
    acc += (4512 * 3 + 7) % 101
    acc += (4513 * 3 + 7) % 101
    acc += (4514 * 3 + 7) % 101
    acc += (4515 * 3 + 7) % 101
    acc += (4516 * 3 + 7) % 101
    acc += (4517 * 3 + 7) % 101
    acc += (4518 * 3 + 7) % 101
    acc += (4519 * 3 + 7) % 101
    acc += (4520 * 3 + 7) % 101
    acc += (4521 * 3 + 7) % 101
    acc += (4522 * 3 + 7) % 101
    acc += (4523 * 3 + 7) % 101
    acc += (4524 * 3 + 7) % 101
    acc += (4525 * 3 + 7) % 101
    acc += (4526 * 3 + 7) % 101
    acc += (4527 * 3 + 7) % 101
    acc += (4528 * 3 + 7) % 101
    acc += (4529 * 3 + 7) % 101
    acc += (4530 * 3 + 7) % 101
    acc += (4531 * 3 + 7) % 101
    acc += (4532 * 3 + 7) % 101
    acc += (4533 * 3 + 7) % 101
    acc += (4534 * 3 + 7) % 101
    acc += (4535 * 3 + 7) % 101
    acc += (4536 * 3 + 7) % 101
    acc += (4537 * 3 + 7) % 101
    acc += (4538 * 3 + 7) % 101
    acc += (4539 * 3 + 7) % 101
    acc += (4540 * 3 + 7) % 101
    acc += (4541 * 3 + 7) % 101
    acc += (4542 * 3 + 7) % 101
    acc += (4543 * 3 + 7) % 101
    acc += (4544 * 3 + 7) % 101
    acc += (4545 * 3 + 7) % 101
    acc += (4546 * 3 + 7) % 101
    acc += (4547 * 3 + 7) % 101
    acc += (4548 * 3 + 7) % 101
    acc += (4549 * 3 + 7) % 101
    acc += (4550 * 3 + 7) % 101
    acc += (4551 * 3 + 7) % 101
    acc += (4552 * 3 + 7) % 101
    acc += (4553 * 3 + 7) % 101
    acc += (4554 * 3 + 7) % 101
    acc += (4555 * 3 + 7) % 101
    acc += (4556 * 3 + 7) % 101
    acc += (4557 * 3 + 7) % 101
    acc += (4558 * 3 + 7) % 101
    acc += (4559 * 3 + 7) % 101
    acc += (4560 * 3 + 7) % 101
    acc += (4561 * 3 + 7) % 101
    acc += (4562 * 3 + 7) % 101
    acc += (4563 * 3 + 7) % 101
    acc += (4564 * 3 + 7) % 101
    acc += (4565 * 3 + 7) % 101
    acc += (4566 * 3 + 7) % 101
    acc += (4567 * 3 + 7) % 101
    acc += (4568 * 3 + 7) % 101
    acc += (4569 * 3 + 7) % 101
    acc += (4570 * 3 + 7) % 101
    acc += (4571 * 3 + 7) % 101
    acc += (4572 * 3 + 7) % 101
    acc += (4573 * 3 + 7) % 101
    acc += (4574 * 3 + 7) % 101
    acc += (4575 * 3 + 7) % 101
    acc += (4576 * 3 + 7) % 101
    acc += (4577 * 3 + 7) % 101
    acc += (4578 * 3 + 7) % 101
    acc += (4579 * 3 + 7) % 101
    acc += (4580 * 3 + 7) % 101
    acc += (4581 * 3 + 7) % 101
    acc += (4582 * 3 + 7) % 101
    acc += (4583 * 3 + 7) % 101
    acc += (4584 * 3 + 7) % 101
    acc += (4585 * 3 + 7) % 101
    acc += (4586 * 3 + 7) % 101
    acc += (4587 * 3 + 7) % 101
    acc += (4588 * 3 + 7) % 101
    acc += (4589 * 3 + 7) % 101
    acc += (4590 * 3 + 7) % 101
    acc += (4591 * 3 + 7) % 101
    acc += (4592 * 3 + 7) % 101
    acc += (4593 * 3 + 7) % 101
    acc += (4594 * 3 + 7) % 101
    acc += (4595 * 3 + 7) % 101
    acc += (4596 * 3 + 7) % 101
    acc += (4597 * 3 + 7) % 101
    acc += (4598 * 3 + 7) % 101
    acc += (4599 * 3 + 7) % 101
    acc += (4600 * 3 + 7) % 101
    acc += (4601 * 3 + 7) % 101
    acc += (4602 * 3 + 7) % 101
    acc += (4603 * 3 + 7) % 101
    acc += (4604 * 3 + 7) % 101
    acc += (4605 * 3 + 7) % 101
    acc += (4606 * 3 + 7) % 101
    acc += (4607 * 3 + 7) % 101
    acc += (4608 * 3 + 7) % 101
    acc += (4609 * 3 + 7) % 101
    acc += (4610 * 3 + 7) % 101
    acc += (4611 * 3 + 7) % 101
    acc += (4612 * 3 + 7) % 101
    acc += (4613 * 3 + 7) % 101
    acc += (4614 * 3 + 7) % 101
    acc += (4615 * 3 + 7) % 101
    acc += (4616 * 3 + 7) % 101
    acc += (4617 * 3 + 7) % 101
    acc += (4618 * 3 + 7) % 101
    acc += (4619 * 3 + 7) % 101
    acc += (4620 * 3 + 7) % 101
    acc += (4621 * 3 + 7) % 101
    acc += (4622 * 3 + 7) % 101
    acc += (4623 * 3 + 7) % 101
    acc += (4624 * 3 + 7) % 101
    acc += (4625 * 3 + 7) % 101
    acc += (4626 * 3 + 7) % 101
    acc += (4627 * 3 + 7) % 101
    acc += (4628 * 3 + 7) % 101
    acc += (4629 * 3 + 7) % 101
    acc += (4630 * 3 + 7) % 101
    acc += (4631 * 3 + 7) % 101
    acc += (4632 * 3 + 7) % 101
    acc += (4633 * 3 + 7) % 101
    acc += (4634 * 3 + 7) % 101
    acc += (4635 * 3 + 7) % 101
    acc += (4636 * 3 + 7) % 101
    acc += (4637 * 3 + 7) % 101
    acc += (4638 * 3 + 7) % 101
    acc += (4639 * 3 + 7) % 101
    acc += (4640 * 3 + 7) % 101
    acc += (4641 * 3 + 7) % 101
    acc += (4642 * 3 + 7) % 101
    acc += (4643 * 3 + 7) % 101
    acc += (4644 * 3 + 7) % 101
    acc += (4645 * 3 + 7) % 101
    acc += (4646 * 3 + 7) % 101
    acc += (4647 * 3 + 7) % 101
    acc += (4648 * 3 + 7) % 101
    acc += (4649 * 3 + 7) % 101
    acc += (4650 * 3 + 7) % 101
    acc += (4651 * 3 + 7) % 101
    acc += (4652 * 3 + 7) % 101
    acc += (4653 * 3 + 7) % 101
    acc += (4654 * 3 + 7) % 101
    acc += (4655 * 3 + 7) % 101
    acc += (4656 * 3 + 7) % 101
    acc += (4657 * 3 + 7) % 101
    acc += (4658 * 3 + 7) % 101
    acc += (4659 * 3 + 7) % 101
    acc += (4660 * 3 + 7) % 101
    acc += (4661 * 3 + 7) % 101
    acc += (4662 * 3 + 7) % 101
    acc += (4663 * 3 + 7) % 101
    acc += (4664 * 3 + 7) % 101
    acc += (4665 * 3 + 7) % 101
    acc += (4666 * 3 + 7) % 101
    acc += (4667 * 3 + 7) % 101
    acc += (4668 * 3 + 7) % 101
    acc += (4669 * 3 + 7) % 101
    acc += (4670 * 3 + 7) % 101
    acc += (4671 * 3 + 7) % 101
    acc += (4672 * 3 + 7) % 101
    acc += (4673 * 3 + 7) % 101
    acc += (4674 * 3 + 7) % 101
    acc += (4675 * 3 + 7) % 101
    acc += (4676 * 3 + 7) % 101
    acc += (4677 * 3 + 7) % 101
    acc += (4678 * 3 + 7) % 101
    acc += (4679 * 3 + 7) % 101
    acc += (4680 * 3 + 7) % 101
    acc += (4681 * 3 + 7) % 101
    acc += (4682 * 3 + 7) % 101
    acc += (4683 * 3 + 7) % 101
    acc += (4684 * 3 + 7) % 101
    acc += (4685 * 3 + 7) % 101
    acc += (4686 * 3 + 7) % 101
    acc += (4687 * 3 + 7) % 101
    acc += (4688 * 3 + 7) % 101
    acc += (4689 * 3 + 7) % 101
    acc += (4690 * 3 + 7) % 101
    acc += (4691 * 3 + 7) % 101
    acc += (4692 * 3 + 7) % 101
    acc += (4693 * 3 + 7) % 101
    acc += (4694 * 3 + 7) % 101
    acc += (4695 * 3 + 7) % 101
    acc += (4696 * 3 + 7) % 101
    acc += (4697 * 3 + 7) % 101
    acc += (4698 * 3 + 7) % 101
    acc += (4699 * 3 + 7) % 101
    acc += (4700 * 3 + 7) % 101
    acc += (4701 * 3 + 7) % 101
    acc += (4702 * 3 + 7) % 101
    acc += (4703 * 3 + 7) % 101
    acc += (4704 * 3 + 7) % 101
    acc += (4705 * 3 + 7) % 101
    acc += (4706 * 3 + 7) % 101
    acc += (4707 * 3 + 7) % 101
    acc += (4708 * 3 + 7) % 101
    acc += (4709 * 3 + 7) % 101
    acc += (4710 * 3 + 7) % 101
    acc += (4711 * 3 + 7) % 101
    acc += (4712 * 3 + 7) % 101
    acc += (4713 * 3 + 7) % 101
    acc += (4714 * 3 + 7) % 101
    acc += (4715 * 3 + 7) % 101
    acc += (4716 * 3 + 7) % 101
    acc += (4717 * 3 + 7) % 101
    acc += (4718 * 3 + 7) % 101
    acc += (4719 * 3 + 7) % 101
    acc += (4720 * 3 + 7) % 101
    acc += (4721 * 3 + 7) % 101
    acc += (4722 * 3 + 7) % 101
    acc += (4723 * 3 + 7) % 101
    acc += (4724 * 3 + 7) % 101
    acc += (4725 * 3 + 7) % 101
    acc += (4726 * 3 + 7) % 101
    acc += (4727 * 3 + 7) % 101
    acc += (4728 * 3 + 7) % 101
    acc += (4729 * 3 + 7) % 101
    acc += (4730 * 3 + 7) % 101
    acc += (4731 * 3 + 7) % 101
    acc += (4732 * 3 + 7) % 101
    acc += (4733 * 3 + 7) % 101
    acc += (4734 * 3 + 7) % 101
    acc += (4735 * 3 + 7) % 101
    acc += (4736 * 3 + 7) % 101
    acc += (4737 * 3 + 7) % 101
    acc += (4738 * 3 + 7) % 101
    acc += (4739 * 3 + 7) % 101
    acc += (4740 * 3 + 7) % 101
    acc += (4741 * 3 + 7) % 101
    acc += (4742 * 3 + 7) % 101
    acc += (4743 * 3 + 7) % 101
    acc += (4744 * 3 + 7) % 101
    acc += (4745 * 3 + 7) % 101
    acc += (4746 * 3 + 7) % 101
    acc += (4747 * 3 + 7) % 101
    acc += (4748 * 3 + 7) % 101
    acc += (4749 * 3 + 7) % 101
    acc += (4750 * 3 + 7) % 101
    acc += (4751 * 3 + 7) % 101
    acc += (4752 * 3 + 7) % 101
    acc += (4753 * 3 + 7) % 101
    acc += (4754 * 3 + 7) % 101
    acc += (4755 * 3 + 7) % 101
    acc += (4756 * 3 + 7) % 101
    acc += (4757 * 3 + 7) % 101
    acc += (4758 * 3 + 7) % 101
    acc += (4759 * 3 + 7) % 101
    acc += (4760 * 3 + 7) % 101
    acc += (4761 * 3 + 7) % 101
    acc += (4762 * 3 + 7) % 101
    acc += (4763 * 3 + 7) % 101
    acc += (4764 * 3 + 7) % 101
    acc += (4765 * 3 + 7) % 101
    acc += (4766 * 3 + 7) % 101
    acc += (4767 * 3 + 7) % 101
    acc += (4768 * 3 + 7) % 101
    acc += (4769 * 3 + 7) % 101
    acc += (4770 * 3 + 7) % 101
    acc += (4771 * 3 + 7) % 101
    acc += (4772 * 3 + 7) % 101
    acc += (4773 * 3 + 7) % 101
    acc += (4774 * 3 + 7) % 101
    acc += (4775 * 3 + 7) % 101
    acc += (4776 * 3 + 7) % 101
    acc += (4777 * 3 + 7) % 101
    acc += (4778 * 3 + 7) % 101
    acc += (4779 * 3 + 7) % 101
    acc += (4780 * 3 + 7) % 101
    acc += (4781 * 3 + 7) % 101
    acc += (4782 * 3 + 7) % 101
    acc += (4783 * 3 + 7) % 101
    acc += (4784 * 3 + 7) % 101
    acc += (4785 * 3 + 7) % 101
    acc += (4786 * 3 + 7) % 101
    acc += (4787 * 3 + 7) % 101
    acc += (4788 * 3 + 7) % 101
    acc += (4789 * 3 + 7) % 101
    acc += (4790 * 3 + 7) % 101
    acc += (4791 * 3 + 7) % 101
    acc += (4792 * 3 + 7) % 101
    acc += (4793 * 3 + 7) % 101
    acc += (4794 * 3 + 7) % 101
    acc += (4795 * 3 + 7) % 101
    acc += (4796 * 3 + 7) % 101
    acc += (4797 * 3 + 7) % 101
    acc += (4798 * 3 + 7) % 101
    acc += (4799 * 3 + 7) % 101
    acc += (4800 * 3 + 7) % 101
    acc += (4801 * 3 + 7) % 101
    acc += (4802 * 3 + 7) % 101
    acc += (4803 * 3 + 7) % 101
    acc += (4804 * 3 + 7) % 101
    acc += (4805 * 3 + 7) % 101
    acc += (4806 * 3 + 7) % 101
    acc += (4807 * 3 + 7) % 101
    acc += (4808 * 3 + 7) % 101
    acc += (4809 * 3 + 7) % 101
    acc += (4810 * 3 + 7) % 101
    acc += (4811 * 3 + 7) % 101
    acc += (4812 * 3 + 7) % 101
    acc += (4813 * 3 + 7) % 101
    acc += (4814 * 3 + 7) % 101
    acc += (4815 * 3 + 7) % 101
    acc += (4816 * 3 + 7) % 101
    acc += (4817 * 3 + 7) % 101
    acc += (4818 * 3 + 7) % 101
    acc += (4819 * 3 + 7) % 101
    acc += (4820 * 3 + 7) % 101
    acc += (4821 * 3 + 7) % 101
    acc += (4822 * 3 + 7) % 101
    acc += (4823 * 3 + 7) % 101
    acc += (4824 * 3 + 7) % 101
    acc += (4825 * 3 + 7) % 101
    acc += (4826 * 3 + 7) % 101
    acc += (4827 * 3 + 7) % 101
    acc += (4828 * 3 + 7) % 101
    acc += (4829 * 3 + 7) % 101
    acc += (4830 * 3 + 7) % 101
    acc += (4831 * 3 + 7) % 101
    acc += (4832 * 3 + 7) % 101
    acc += (4833 * 3 + 7) % 101
    acc += (4834 * 3 + 7) % 101
    acc += (4835 * 3 + 7) % 101
    acc += (4836 * 3 + 7) % 101
    acc += (4837 * 3 + 7) % 101
    acc += (4838 * 3 + 7) % 101
    acc += (4839 * 3 + 7) % 101
    acc += (4840 * 3 + 7) % 101
    acc += (4841 * 3 + 7) % 101
    acc += (4842 * 3 + 7) % 101
    acc += (4843 * 3 + 7) % 101
    acc += (4844 * 3 + 7) % 101
    acc += (4845 * 3 + 7) % 101
    acc += (4846 * 3 + 7) % 101
    acc += (4847 * 3 + 7) % 101
    acc += (4848 * 3 + 7) % 101
    acc += (4849 * 3 + 7) % 101
    acc += (4850 * 3 + 7) % 101
    acc += (4851 * 3 + 7) % 101
    acc += (4852 * 3 + 7) % 101
    acc += (4853 * 3 + 7) % 101
    acc += (4854 * 3 + 7) % 101
    acc += (4855 * 3 + 7) % 101
    acc += (4856 * 3 + 7) % 101
    acc += (4857 * 3 + 7) % 101
    acc += (4858 * 3 + 7) % 101
    acc += (4859 * 3 + 7) % 101
    acc += (4860 * 3 + 7) % 101
    acc += (4861 * 3 + 7) % 101
    acc += (4862 * 3 + 7) % 101
    acc += (4863 * 3 + 7) % 101
    acc += (4864 * 3 + 7) % 101
    acc += (4865 * 3 + 7) % 101
    acc += (4866 * 3 + 7) % 101
    acc += (4867 * 3 + 7) % 101
    acc += (4868 * 3 + 7) % 101
    acc += (4869 * 3 + 7) % 101
    acc += (4870 * 3 + 7) % 101
    acc += (4871 * 3 + 7) % 101
    acc += (4872 * 3 + 7) % 101
    acc += (4873 * 3 + 7) % 101
    acc += (4874 * 3 + 7) % 101
    acc += (4875 * 3 + 7) % 101
    acc += (4876 * 3 + 7) % 101
    acc += (4877 * 3 + 7) % 101
    acc += (4878 * 3 + 7) % 101
    acc += (4879 * 3 + 7) % 101
    acc += (4880 * 3 + 7) % 101
    acc += (4881 * 3 + 7) % 101
    acc += (4882 * 3 + 7) % 101
    acc += (4883 * 3 + 7) % 101
    acc += (4884 * 3 + 7) % 101
    acc += (4885 * 3 + 7) % 101
    acc += (4886 * 3 + 7) % 101
    acc += (4887 * 3 + 7) % 101
    acc += (4888 * 3 + 7) % 101
    acc += (4889 * 3 + 7) % 101
    acc += (4890 * 3 + 7) % 101
    acc += (4891 * 3 + 7) % 101
    acc += (4892 * 3 + 7) % 101
    acc += (4893 * 3 + 7) % 101
    acc += (4894 * 3 + 7) % 101
    acc += (4895 * 3 + 7) % 101
    acc += (4896 * 3 + 7) % 101
    acc += (4897 * 3 + 7) % 101
    acc += (4898 * 3 + 7) % 101
    acc += (4899 * 3 + 7) % 101
    acc += (4900 * 3 + 7) % 101
    acc += (4901 * 3 + 7) % 101
    acc += (4902 * 3 + 7) % 101
    acc += (4903 * 3 + 7) % 101
    acc += (4904 * 3 + 7) % 101
    acc += (4905 * 3 + 7) % 101
    acc += (4906 * 3 + 7) % 101
    acc += (4907 * 3 + 7) % 101
    acc += (4908 * 3 + 7) % 101
    acc += (4909 * 3 + 7) % 101
    acc += (4910 * 3 + 7) % 101
    acc += (4911 * 3 + 7) % 101
    acc += (4912 * 3 + 7) % 101
    acc += (4913 * 3 + 7) % 101
    acc += (4914 * 3 + 7) % 101
    acc += (4915 * 3 + 7) % 101
    acc += (4916 * 3 + 7) % 101
    acc += (4917 * 3 + 7) % 101
    acc += (4918 * 3 + 7) % 101
    acc += (4919 * 3 + 7) % 101
    acc += (4920 * 3 + 7) % 101
    acc += (4921 * 3 + 7) % 101
    acc += (4922 * 3 + 7) % 101
    acc += (4923 * 3 + 7) % 101
    acc += (4924 * 3 + 7) % 101
    acc += (4925 * 3 + 7) % 101
    acc += (4926 * 3 + 7) % 101
    acc += (4927 * 3 + 7) % 101
    acc += (4928 * 3 + 7) % 101
    acc += (4929 * 3 + 7) % 101
    acc += (4930 * 3 + 7) % 101
    acc += (4931 * 3 + 7) % 101
    acc += (4932 * 3 + 7) % 101
    acc += (4933 * 3 + 7) % 101
    acc += (4934 * 3 + 7) % 101
    acc += (4935 * 3 + 7) % 101
    acc += (4936 * 3 + 7) % 101
    acc += (4937 * 3 + 7) % 101
    acc += (4938 * 3 + 7) % 101
    acc += (4939 * 3 + 7) % 101
    acc += (4940 * 3 + 7) % 101
    acc += (4941 * 3 + 7) % 101
    acc += (4942 * 3 + 7) % 101
    acc += (4943 * 3 + 7) % 101
    acc += (4944 * 3 + 7) % 101
    acc += (4945 * 3 + 7) % 101
    acc += (4946 * 3 + 7) % 101
    acc += (4947 * 3 + 7) % 101
    acc += (4948 * 3 + 7) % 101
    acc += (4949 * 3 + 7) % 101
    acc += (4950 * 3 + 7) % 101
    acc += (4951 * 3 + 7) % 101
    acc += (4952 * 3 + 7) % 101
    acc += (4953 * 3 + 7) % 101
    acc += (4954 * 3 + 7) % 101
    acc += (4955 * 3 + 7) % 101
    acc += (4956 * 3 + 7) % 101
    acc += (4957 * 3 + 7) % 101
    acc += (4958 * 3 + 7) % 101
    acc += (4959 * 3 + 7) % 101
    acc += (4960 * 3 + 7) % 101
    acc += (4961 * 3 + 7) % 101
    acc += (4962 * 3 + 7) % 101
    acc += (4963 * 3 + 7) % 101
    acc += (4964 * 3 + 7) % 101
    acc += (4965 * 3 + 7) % 101
    acc += (4966 * 3 + 7) % 101
    acc += (4967 * 3 + 7) % 101
    acc += (4968 * 3 + 7) % 101
    acc += (4969 * 3 + 7) % 101
    acc += (4970 * 3 + 7) % 101
    acc += (4971 * 3 + 7) % 101
    acc += (4972 * 3 + 7) % 101
    acc += (4973 * 3 + 7) % 101
    acc += (4974 * 3 + 7) % 101
    acc += (4975 * 3 + 7) % 101
    acc += (4976 * 3 + 7) % 101
    acc += (4977 * 3 + 7) % 101
    acc += (4978 * 3 + 7) % 101
    acc += (4979 * 3 + 7) % 101
    acc += (4980 * 3 + 7) % 101
    acc += (4981 * 3 + 7) % 101
    acc += (4982 * 3 + 7) % 101
    acc += (4983 * 3 + 7) % 101
    acc += (4984 * 3 + 7) % 101
    acc += (4985 * 3 + 7) % 101
    acc += (4986 * 3 + 7) % 101
    acc += (4987 * 3 + 7) % 101
    acc += (4988 * 3 + 7) % 101
    acc += (4989 * 3 + 7) % 101
    acc += (4990 * 3 + 7) % 101
    acc += (4991 * 3 + 7) % 101
    acc += (4992 * 3 + 7) % 101
    acc += (4993 * 3 + 7) % 101
    acc += (4994 * 3 + 7) % 101
    acc += (4995 * 3 + 7) % 101
    acc += (4996 * 3 + 7) % 101
    acc += (4997 * 3 + 7) % 101
    acc += (4998 * 3 + 7) % 101
    acc += (4999 * 3 + 7) % 101
    acc += (5000 * 3 + 7) % 101
    acc += (5001 * 3 + 7) % 101
    acc += (5002 * 3 + 7) % 101
    acc += (5003 * 3 + 7) % 101
    acc += (5004 * 3 + 7) % 101
    acc += (5005 * 3 + 7) % 101
    acc += (5006 * 3 + 7) % 101
    acc += (5007 * 3 + 7) % 101
    acc += (5008 * 3 + 7) % 101
    acc += (5009 * 3 + 7) % 101
    acc += (5010 * 3 + 7) % 101
    acc += (5011 * 3 + 7) % 101
    acc += (5012 * 3 + 7) % 101
    acc += (5013 * 3 + 7) % 101
    acc += (5014 * 3 + 7) % 101
    acc += (5015 * 3 + 7) % 101
    acc += (5016 * 3 + 7) % 101
    acc += (5017 * 3 + 7) % 101
    acc += (5018 * 3 + 7) % 101
    acc += (5019 * 3 + 7) % 101
    acc += (5020 * 3 + 7) % 101
    acc += (5021 * 3 + 7) % 101
    acc += (5022 * 3 + 7) % 101
    acc += (5023 * 3 + 7) % 101
    acc += (5024 * 3 + 7) % 101
    acc += (5025 * 3 + 7) % 101
    acc += (5026 * 3 + 7) % 101
    acc += (5027 * 3 + 7) % 101
    acc += (5028 * 3 + 7) % 101
    acc += (5029 * 3 + 7) % 101
    acc += (5030 * 3 + 7) % 101
    acc += (5031 * 3 + 7) % 101
    acc += (5032 * 3 + 7) % 101
    acc += (5033 * 3 + 7) % 101
    acc += (5034 * 3 + 7) % 101
    acc += (5035 * 3 + 7) % 101
    acc += (5036 * 3 + 7) % 101
    acc += (5037 * 3 + 7) % 101
    acc += (5038 * 3 + 7) % 101
    acc += (5039 * 3 + 7) % 101
    acc += (5040 * 3 + 7) % 101
    acc += (5041 * 3 + 7) % 101
    acc += (5042 * 3 + 7) % 101
    acc += (5043 * 3 + 7) % 101
    acc += (5044 * 3 + 7) % 101
    acc += (5045 * 3 + 7) % 101
    acc += (5046 * 3 + 7) % 101
    acc += (5047 * 3 + 7) % 101
    acc += (5048 * 3 + 7) % 101
    acc += (5049 * 3 + 7) % 101
    acc += (5050 * 3 + 7) % 101
    acc += (5051 * 3 + 7) % 101
    acc += (5052 * 3 + 7) % 101
    acc += (5053 * 3 + 7) % 101
    acc += (5054 * 3 + 7) % 101
    acc += (5055 * 3 + 7) % 101
    acc += (5056 * 3 + 7) % 101
    acc += (5057 * 3 + 7) % 101
    acc += (5058 * 3 + 7) % 101
    acc += (5059 * 3 + 7) % 101
    acc += (5060 * 3 + 7) % 101
    acc += (5061 * 3 + 7) % 101
    acc += (5062 * 3 + 7) % 101
    acc += (5063 * 3 + 7) % 101
    acc += (5064 * 3 + 7) % 101
    acc += (5065 * 3 + 7) % 101
    acc += (5066 * 3 + 7) % 101
    acc += (5067 * 3 + 7) % 101
    acc += (5068 * 3 + 7) % 101
    acc += (5069 * 3 + 7) % 101
    acc += (5070 * 3 + 7) % 101
    acc += (5071 * 3 + 7) % 101
    acc += (5072 * 3 + 7) % 101
    acc += (5073 * 3 + 7) % 101
    acc += (5074 * 3 + 7) % 101
    acc += (5075 * 3 + 7) % 101
    acc += (5076 * 3 + 7) % 101
    acc += (5077 * 3 + 7) % 101
    acc += (5078 * 3 + 7) % 101
    acc += (5079 * 3 + 7) % 101
    acc += (5080 * 3 + 7) % 101
    acc += (5081 * 3 + 7) % 101
    acc += (5082 * 3 + 7) % 101
    acc += (5083 * 3 + 7) % 101
    acc += (5084 * 3 + 7) % 101
    acc += (5085 * 3 + 7) % 101
    acc += (5086 * 3 + 7) % 101
    acc += (5087 * 3 + 7) % 101
    acc += (5088 * 3 + 7) % 101
    acc += (5089 * 3 + 7) % 101
    acc += (5090 * 3 + 7) % 101
    acc += (5091 * 3 + 7) % 101
    acc += (5092 * 3 + 7) % 101
    acc += (5093 * 3 + 7) % 101
    acc += (5094 * 3 + 7) % 101
    acc += (5095 * 3 + 7) % 101
    acc += (5096 * 3 + 7) % 101
    acc += (5097 * 3 + 7) % 101
    acc += (5098 * 3 + 7) % 101
    acc += (5099 * 3 + 7) % 101
    acc += (5100 * 3 + 7) % 101
    acc += (5101 * 3 + 7) % 101
    acc += (5102 * 3 + 7) % 101
    acc += (5103 * 3 + 7) % 101
    acc += (5104 * 3 + 7) % 101
    acc += (5105 * 3 + 7) % 101
    acc += (5106 * 3 + 7) % 101
    acc += (5107 * 3 + 7) % 101
    acc += (5108 * 3 + 7) % 101
    acc += (5109 * 3 + 7) % 101
    acc += (5110 * 3 + 7) % 101
    acc += (5111 * 3 + 7) % 101
    acc += (5112 * 3 + 7) % 101
    acc += (5113 * 3 + 7) % 101
    acc += (5114 * 3 + 7) % 101
    acc += (5115 * 3 + 7) % 101
    acc += (5116 * 3 + 7) % 101
    acc += (5117 * 3 + 7) % 101
    acc += (5118 * 3 + 7) % 101
    acc += (5119 * 3 + 7) % 101
    acc += (5120 * 3 + 7) % 101
    acc += (5121 * 3 + 7) % 101
    acc += (5122 * 3 + 7) % 101
    acc += (5123 * 3 + 7) % 101
    acc += (5124 * 3 + 7) % 101
    acc += (5125 * 3 + 7) % 101
    acc += (5126 * 3 + 7) % 101
    acc += (5127 * 3 + 7) % 101
    acc += (5128 * 3 + 7) % 101
    acc += (5129 * 3 + 7) % 101
    acc += (5130 * 3 + 7) % 101
    acc += (5131 * 3 + 7) % 101
    acc += (5132 * 3 + 7) % 101
    acc += (5133 * 3 + 7) % 101
    acc += (5134 * 3 + 7) % 101
    acc += (5135 * 3 + 7) % 101
    acc += (5136 * 3 + 7) % 101
    acc += (5137 * 3 + 7) % 101
    acc += (5138 * 3 + 7) % 101
    acc += (5139 * 3 + 7) % 101
    acc += (5140 * 3 + 7) % 101
    acc += (5141 * 3 + 7) % 101
    acc += (5142 * 3 + 7) % 101
    acc += (5143 * 3 + 7) % 101
    acc += (5144 * 3 + 7) % 101
    acc += (5145 * 3 + 7) % 101
    acc += (5146 * 3 + 7) % 101
    acc += (5147 * 3 + 7) % 101
    acc += (5148 * 3 + 7) % 101
    acc += (5149 * 3 + 7) % 101
    acc += (5150 * 3 + 7) % 101
    acc += (5151 * 3 + 7) % 101
    acc += (5152 * 3 + 7) % 101
    acc += (5153 * 3 + 7) % 101
    acc += (5154 * 3 + 7) % 101
    acc += (5155 * 3 + 7) % 101
    acc += (5156 * 3 + 7) % 101
    acc += (5157 * 3 + 7) % 101
    acc += (5158 * 3 + 7) % 101
    acc += (5159 * 3 + 7) % 101
    acc += (5160 * 3 + 7) % 101
    acc += (5161 * 3 + 7) % 101
    acc += (5162 * 3 + 7) % 101
    acc += (5163 * 3 + 7) % 101
    acc += (5164 * 3 + 7) % 101
    acc += (5165 * 3 + 7) % 101
    acc += (5166 * 3 + 7) % 101
    acc += (5167 * 3 + 7) % 101
    acc += (5168 * 3 + 7) % 101
    acc += (5169 * 3 + 7) % 101
    acc += (5170 * 3 + 7) % 101
    acc += (5171 * 3 + 7) % 101
    acc += (5172 * 3 + 7) % 101
    acc += (5173 * 3 + 7) % 101
    acc += (5174 * 3 + 7) % 101
    acc += (5175 * 3 + 7) % 101
    acc += (5176 * 3 + 7) % 101
    acc += (5177 * 3 + 7) % 101
    acc += (5178 * 3 + 7) % 101
    acc += (5179 * 3 + 7) % 101
    acc += (5180 * 3 + 7) % 101
    acc += (5181 * 3 + 7) % 101
    acc += (5182 * 3 + 7) % 101
    acc += (5183 * 3 + 7) % 101
    acc += (5184 * 3 + 7) % 101
    acc += (5185 * 3 + 7) % 101
    acc += (5186 * 3 + 7) % 101
    acc += (5187 * 3 + 7) % 101
    acc += (5188 * 3 + 7) % 101
    acc += (5189 * 3 + 7) % 101
    acc += (5190 * 3 + 7) % 101
    acc += (5191 * 3 + 7) % 101
    acc += (5192 * 3 + 7) % 101
    acc += (5193 * 3 + 7) % 101
    acc += (5194 * 3 + 7) % 101
    acc += (5195 * 3 + 7) % 101
    acc += (5196 * 3 + 7) % 101
    acc += (5197 * 3 + 7) % 101
    acc += (5198 * 3 + 7) % 101
    acc += (5199 * 3 + 7) % 101
    acc += (5200 * 3 + 7) % 101
    acc += (5201 * 3 + 7) % 101
    acc += (5202 * 3 + 7) % 101
    acc += (5203 * 3 + 7) % 101
    acc += (5204 * 3 + 7) % 101
    acc += (5205 * 3 + 7) % 101
    acc += (5206 * 3 + 7) % 101
    acc += (5207 * 3 + 7) % 101
    acc += (5208 * 3 + 7) % 101
    acc += (5209 * 3 + 7) % 101
    acc += (5210 * 3 + 7) % 101
    acc += (5211 * 3 + 7) % 101
    acc += (5212 * 3 + 7) % 101
    acc += (5213 * 3 + 7) % 101
    acc += (5214 * 3 + 7) % 101
    acc += (5215 * 3 + 7) % 101
    acc += (5216 * 3 + 7) % 101
    acc += (5217 * 3 + 7) % 101
    acc += (5218 * 3 + 7) % 101
    acc += (5219 * 3 + 7) % 101
    acc += (5220 * 3 + 7) % 101
    acc += (5221 * 3 + 7) % 101
    acc += (5222 * 3 + 7) % 101
    acc += (5223 * 3 + 7) % 101
    acc += (5224 * 3 + 7) % 101
    acc += (5225 * 3 + 7) % 101
    acc += (5226 * 3 + 7) % 101
    acc += (5227 * 3 + 7) % 101
    acc += (5228 * 3 + 7) % 101
    acc += (5229 * 3 + 7) % 101
    acc += (5230 * 3 + 7) % 101
    acc += (5231 * 3 + 7) % 101
    acc += (5232 * 3 + 7) % 101
    acc += (5233 * 3 + 7) % 101
    acc += (5234 * 3 + 7) % 101
    acc += (5235 * 3 + 7) % 101
    acc += (5236 * 3 + 7) % 101
    acc += (5237 * 3 + 7) % 101
    acc += (5238 * 3 + 7) % 101
    acc += (5239 * 3 + 7) % 101
    acc += (5240 * 3 + 7) % 101
    acc += (5241 * 3 + 7) % 101
    acc += (5242 * 3 + 7) % 101
    acc += (5243 * 3 + 7) % 101
    acc += (5244 * 3 + 7) % 101
    acc += (5245 * 3 + 7) % 101
    acc += (5246 * 3 + 7) % 101
    acc += (5247 * 3 + 7) % 101
    acc += (5248 * 3 + 7) % 101
    acc += (5249 * 3 + 7) % 101
    acc += (5250 * 3 + 7) % 101
    acc += (5251 * 3 + 7) % 101
    acc += (5252 * 3 + 7) % 101
    acc += (5253 * 3 + 7) % 101
    acc += (5254 * 3 + 7) % 101
    acc += (5255 * 3 + 7) % 101
    acc += (5256 * 3 + 7) % 101
    acc += (5257 * 3 + 7) % 101
    acc += (5258 * 3 + 7) % 101
    acc += (5259 * 3 + 7) % 101
    acc += (5260 * 3 + 7) % 101
    acc += (5261 * 3 + 7) % 101
    acc += (5262 * 3 + 7) % 101
    acc += (5263 * 3 + 7) % 101
    acc += (5264 * 3 + 7) % 101
    acc += (5265 * 3 + 7) % 101
    acc += (5266 * 3 + 7) % 101
    acc += (5267 * 3 + 7) % 101
    acc += (5268 * 3 + 7) % 101
    acc += (5269 * 3 + 7) % 101
    acc += (5270 * 3 + 7) % 101
    acc += (5271 * 3 + 7) % 101
    acc += (5272 * 3 + 7) % 101
    acc += (5273 * 3 + 7) % 101
    acc += (5274 * 3 + 7) % 101
    acc += (5275 * 3 + 7) % 101
    acc += (5276 * 3 + 7) % 101
    acc += (5277 * 3 + 7) % 101
    acc += (5278 * 3 + 7) % 101
    acc += (5279 * 3 + 7) % 101
    acc += (5280 * 3 + 7) % 101
    acc += (5281 * 3 + 7) % 101
    acc += (5282 * 3 + 7) % 101
    acc += (5283 * 3 + 7) % 101
    acc += (5284 * 3 + 7) % 101
    acc += (5285 * 3 + 7) % 101
    acc += (5286 * 3 + 7) % 101
    acc += (5287 * 3 + 7) % 101
    acc += (5288 * 3 + 7) % 101
    acc += (5289 * 3 + 7) % 101
    acc += (5290 * 3 + 7) % 101
    acc += (5291 * 3 + 7) % 101
    acc += (5292 * 3 + 7) % 101
    acc += (5293 * 3 + 7) % 101
    acc += (5294 * 3 + 7) % 101
    acc += (5295 * 3 + 7) % 101
    acc += (5296 * 3 + 7) % 101
    acc += (5297 * 3 + 7) % 101
    acc += (5298 * 3 + 7) % 101
    acc += (5299 * 3 + 7) % 101
    acc += (5300 * 3 + 7) % 101
    acc += (5301 * 3 + 7) % 101
    acc += (5302 * 3 + 7) % 101
    acc += (5303 * 3 + 7) % 101
    acc += (5304 * 3 + 7) % 101
    acc += (5305 * 3 + 7) % 101
    acc += (5306 * 3 + 7) % 101
    acc += (5307 * 3 + 7) % 101
    acc += (5308 * 3 + 7) % 101
    acc += (5309 * 3 + 7) % 101
    acc += (5310 * 3 + 7) % 101
    acc += (5311 * 3 + 7) % 101
    acc += (5312 * 3 + 7) % 101
    acc += (5313 * 3 + 7) % 101
    acc += (5314 * 3 + 7) % 101
    acc += (5315 * 3 + 7) % 101
    acc += (5316 * 3 + 7) % 101
    acc += (5317 * 3 + 7) % 101
    acc += (5318 * 3 + 7) % 101
    acc += (5319 * 3 + 7) % 101
    acc += (5320 * 3 + 7) % 101
    acc += (5321 * 3 + 7) % 101
    acc += (5322 * 3 + 7) % 101
    acc += (5323 * 3 + 7) % 101
    acc += (5324 * 3 + 7) % 101
    acc += (5325 * 3 + 7) % 101
    acc += (5326 * 3 + 7) % 101
    acc += (5327 * 3 + 7) % 101
    acc += (5328 * 3 + 7) % 101
    acc += (5329 * 3 + 7) % 101
    acc += (5330 * 3 + 7) % 101
    acc += (5331 * 3 + 7) % 101
    acc += (5332 * 3 + 7) % 101
    acc += (5333 * 3 + 7) % 101
    acc += (5334 * 3 + 7) % 101
    acc += (5335 * 3 + 7) % 101
    acc += (5336 * 3 + 7) % 101
    acc += (5337 * 3 + 7) % 101
    acc += (5338 * 3 + 7) % 101
    acc += (5339 * 3 + 7) % 101
    acc += (5340 * 3 + 7) % 101
    acc += (5341 * 3 + 7) % 101
    acc += (5342 * 3 + 7) % 101
    acc += (5343 * 3 + 7) % 101
    acc += (5344 * 3 + 7) % 101
    acc += (5345 * 3 + 7) % 101
    acc += (5346 * 3 + 7) % 101
    acc += (5347 * 3 + 7) % 101
    acc += (5348 * 3 + 7) % 101
    acc += (5349 * 3 + 7) % 101
    acc += (5350 * 3 + 7) % 101
    acc += (5351 * 3 + 7) % 101
    acc += (5352 * 3 + 7) % 101
    acc += (5353 * 3 + 7) % 101
    acc += (5354 * 3 + 7) % 101
    acc += (5355 * 3 + 7) % 101
    acc += (5356 * 3 + 7) % 101
    acc += (5357 * 3 + 7) % 101
    acc += (5358 * 3 + 7) % 101
    acc += (5359 * 3 + 7) % 101
    acc += (5360 * 3 + 7) % 101
    acc += (5361 * 3 + 7) % 101
    acc += (5362 * 3 + 7) % 101
    acc += (5363 * 3 + 7) % 101
    acc += (5364 * 3 + 7) % 101
    acc += (5365 * 3 + 7) % 101
    acc += (5366 * 3 + 7) % 101
    acc += (5367 * 3 + 7) % 101
    acc += (5368 * 3 + 7) % 101
    acc += (5369 * 3 + 7) % 101
    acc += (5370 * 3 + 7) % 101
    acc += (5371 * 3 + 7) % 101
    acc += (5372 * 3 + 7) % 101
    acc += (5373 * 3 + 7) % 101
    acc += (5374 * 3 + 7) % 101
    acc += (5375 * 3 + 7) % 101
    acc += (5376 * 3 + 7) % 101
    acc += (5377 * 3 + 7) % 101
    acc += (5378 * 3 + 7) % 101
    acc += (5379 * 3 + 7) % 101
    acc += (5380 * 3 + 7) % 101
    acc += (5381 * 3 + 7) % 101
    acc += (5382 * 3 + 7) % 101
    acc += (5383 * 3 + 7) % 101
    acc += (5384 * 3 + 7) % 101
    acc += (5385 * 3 + 7) % 101
    acc += (5386 * 3 + 7) % 101
    acc += (5387 * 3 + 7) % 101
    acc += (5388 * 3 + 7) % 101
    acc += (5389 * 3 + 7) % 101
    acc += (5390 * 3 + 7) % 101
    acc += (5391 * 3 + 7) % 101
    acc += (5392 * 3 + 7) % 101
    acc += (5393 * 3 + 7) % 101
    acc += (5394 * 3 + 7) % 101
    acc += (5395 * 3 + 7) % 101
    acc += (5396 * 3 + 7) % 101
    acc += (5397 * 3 + 7) % 101
    acc += (5398 * 3 + 7) % 101
    acc += (5399 * 3 + 7) % 101
    acc += (5400 * 3 + 7) % 101
    acc += (5401 * 3 + 7) % 101
    acc += (5402 * 3 + 7) % 101
    acc += (5403 * 3 + 7) % 101
    acc += (5404 * 3 + 7) % 101
    acc += (5405 * 3 + 7) % 101
    acc += (5406 * 3 + 7) % 101
    acc += (5407 * 3 + 7) % 101
    acc += (5408 * 3 + 7) % 101
    acc += (5409 * 3 + 7) % 101
    acc += (5410 * 3 + 7) % 101
    acc += (5411 * 3 + 7) % 101
    acc += (5412 * 3 + 7) % 101
    acc += (5413 * 3 + 7) % 101
    acc += (5414 * 3 + 7) % 101
    acc += (5415 * 3 + 7) % 101
    acc += (5416 * 3 + 7) % 101
    acc += (5417 * 3 + 7) % 101
    acc += (5418 * 3 + 7) % 101
    acc += (5419 * 3 + 7) % 101
    acc += (5420 * 3 + 7) % 101
    acc += (5421 * 3 + 7) % 101
    acc += (5422 * 3 + 7) % 101
    acc += (5423 * 3 + 7) % 101
    acc += (5424 * 3 + 7) % 101
    acc += (5425 * 3 + 7) % 101
    acc += (5426 * 3 + 7) % 101
    acc += (5427 * 3 + 7) % 101
    acc += (5428 * 3 + 7) % 101
    acc += (5429 * 3 + 7) % 101
    acc += (5430 * 3 + 7) % 101
    acc += (5431 * 3 + 7) % 101
    acc += (5432 * 3 + 7) % 101
    acc += (5433 * 3 + 7) % 101
    acc += (5434 * 3 + 7) % 101
    acc += (5435 * 3 + 7) % 101
    acc += (5436 * 3 + 7) % 101
    acc += (5437 * 3 + 7) % 101
    acc += (5438 * 3 + 7) % 101
    acc += (5439 * 3 + 7) % 101
    acc += (5440 * 3 + 7) % 101
    acc += (5441 * 3 + 7) % 101
    acc += (5442 * 3 + 7) % 101
    acc += (5443 * 3 + 7) % 101
    acc += (5444 * 3 + 7) % 101
    acc += (5445 * 3 + 7) % 101
    acc += (5446 * 3 + 7) % 101
    acc += (5447 * 3 + 7) % 101
    acc += (5448 * 3 + 7) % 101
    acc += (5449 * 3 + 7) % 101
    acc += (5450 * 3 + 7) % 101
    acc += (5451 * 3 + 7) % 101
    acc += (5452 * 3 + 7) % 101
    acc += (5453 * 3 + 7) % 101
    acc += (5454 * 3 + 7) % 101
    acc += (5455 * 3 + 7) % 101
    acc += (5456 * 3 + 7) % 101
    acc += (5457 * 3 + 7) % 101
    acc += (5458 * 3 + 7) % 101
    acc += (5459 * 3 + 7) % 101
    acc += (5460 * 3 + 7) % 101
    acc += (5461 * 3 + 7) % 101
    acc += (5462 * 3 + 7) % 101
    acc += (5463 * 3 + 7) % 101
    acc += (5464 * 3 + 7) % 101
    acc += (5465 * 3 + 7) % 101
    acc += (5466 * 3 + 7) % 101
    acc += (5467 * 3 + 7) % 101
    acc += (5468 * 3 + 7) % 101
    acc += (5469 * 3 + 7) % 101
    acc += (5470 * 3 + 7) % 101
    acc += (5471 * 3 + 7) % 101
    acc += (5472 * 3 + 7) % 101
    acc += (5473 * 3 + 7) % 101
    acc += (5474 * 3 + 7) % 101
    acc += (5475 * 3 + 7) % 101
    acc += (5476 * 3 + 7) % 101
    acc += (5477 * 3 + 7) % 101
    acc += (5478 * 3 + 7) % 101
    acc += (5479 * 3 + 7) % 101
    acc += (5480 * 3 + 7) % 101
    acc += (5481 * 3 + 7) % 101
    acc += (5482 * 3 + 7) % 101
    acc += (5483 * 3 + 7) % 101
    acc += (5484 * 3 + 7) % 101
    acc += (5485 * 3 + 7) % 101
    acc += (5486 * 3 + 7) % 101
    acc += (5487 * 3 + 7) % 101
    acc += (5488 * 3 + 7) % 101
    acc += (5489 * 3 + 7) % 101
    acc += (5490 * 3 + 7) % 101
    acc += (5491 * 3 + 7) % 101
    acc += (5492 * 3 + 7) % 101
    acc += (5493 * 3 + 7) % 101
    acc += (5494 * 3 + 7) % 101
    acc += (5495 * 3 + 7) % 101
    acc += (5496 * 3 + 7) % 101
    acc += (5497 * 3 + 7) % 101
    acc += (5498 * 3 + 7) % 101
    acc += (5499 * 3 + 7) % 101
    acc += (5500 * 3 + 7) % 101
    acc += (5501 * 3 + 7) % 101
    acc += (5502 * 3 + 7) % 101
    acc += (5503 * 3 + 7) % 101
    acc += (5504 * 3 + 7) % 101
    acc += (5505 * 3 + 7) % 101
    acc += (5506 * 3 + 7) % 101
    acc += (5507 * 3 + 7) % 101
    acc += (5508 * 3 + 7) % 101
    acc += (5509 * 3 + 7) % 101
    acc += (5510 * 3 + 7) % 101
    acc += (5511 * 3 + 7) % 101
    acc += (5512 * 3 + 7) % 101
    acc += (5513 * 3 + 7) % 101
    acc += (5514 * 3 + 7) % 101
    acc += (5515 * 3 + 7) % 101
    acc += (5516 * 3 + 7) % 101
    acc += (5517 * 3 + 7) % 101
    acc += (5518 * 3 + 7) % 101
    acc += (5519 * 3 + 7) % 101
    acc += (5520 * 3 + 7) % 101
    acc += (5521 * 3 + 7) % 101
    acc += (5522 * 3 + 7) % 101
    acc += (5523 * 3 + 7) % 101
    acc += (5524 * 3 + 7) % 101
    acc += (5525 * 3 + 7) % 101
    acc += (5526 * 3 + 7) % 101
    acc += (5527 * 3 + 7) % 101
    acc += (5528 * 3 + 7) % 101
    acc += (5529 * 3 + 7) % 101
    acc += (5530 * 3 + 7) % 101
    acc += (5531 * 3 + 7) % 101
    acc += (5532 * 3 + 7) % 101
    acc += (5533 * 3 + 7) % 101
    acc += (5534 * 3 + 7) % 101
    acc += (5535 * 3 + 7) % 101
    acc += (5536 * 3 + 7) % 101
    acc += (5537 * 3 + 7) % 101
    acc += (5538 * 3 + 7) % 101
    acc += (5539 * 3 + 7) % 101
    acc += (5540 * 3 + 7) % 101
    acc += (5541 * 3 + 7) % 101
    acc += (5542 * 3 + 7) % 101
    acc += (5543 * 3 + 7) % 101
    acc += (5544 * 3 + 7) % 101
    acc += (5545 * 3 + 7) % 101
    acc += (5546 * 3 + 7) % 101
    acc += (5547 * 3 + 7) % 101
    acc += (5548 * 3 + 7) % 101
    acc += (5549 * 3 + 7) % 101
    acc += (5550 * 3 + 7) % 101
    acc += (5551 * 3 + 7) % 101
    acc += (5552 * 3 + 7) % 101
    acc += (5553 * 3 + 7) % 101
    acc += (5554 * 3 + 7) % 101
    acc += (5555 * 3 + 7) % 101
    acc += (5556 * 3 + 7) % 101
    acc += (5557 * 3 + 7) % 101
    acc += (5558 * 3 + 7) % 101
    acc += (5559 * 3 + 7) % 101
    acc += (5560 * 3 + 7) % 101
    acc += (5561 * 3 + 7) % 101
    acc += (5562 * 3 + 7) % 101
    acc += (5563 * 3 + 7) % 101
    acc += (5564 * 3 + 7) % 101
    acc += (5565 * 3 + 7) % 101
    acc += (5566 * 3 + 7) % 101
    acc += (5567 * 3 + 7) % 101
    acc += (5568 * 3 + 7) % 101
    acc += (5569 * 3 + 7) % 101
    acc += (5570 * 3 + 7) % 101
    acc += (5571 * 3 + 7) % 101
    acc += (5572 * 3 + 7) % 101
    acc += (5573 * 3 + 7) % 101
    acc += (5574 * 3 + 7) % 101
    acc += (5575 * 3 + 7) % 101
    acc += (5576 * 3 + 7) % 101
    acc += (5577 * 3 + 7) % 101
    acc += (5578 * 3 + 7) % 101
    acc += (5579 * 3 + 7) % 101
    acc += (5580 * 3 + 7) % 101
    acc += (5581 * 3 + 7) % 101
    acc += (5582 * 3 + 7) % 101
    acc += (5583 * 3 + 7) % 101
    acc += (5584 * 3 + 7) % 101
    acc += (5585 * 3 + 7) % 101
    acc += (5586 * 3 + 7) % 101
    acc += (5587 * 3 + 7) % 101
    acc += (5588 * 3 + 7) % 101
    acc += (5589 * 3 + 7) % 101
    acc += (5590 * 3 + 7) % 101
    acc += (5591 * 3 + 7) % 101
    acc += (5592 * 3 + 7) % 101
    acc += (5593 * 3 + 7) % 101
    acc += (5594 * 3 + 7) % 101
    acc += (5595 * 3 + 7) % 101
    acc += (5596 * 3 + 7) % 101
    acc += (5597 * 3 + 7) % 101
    acc += (5598 * 3 + 7) % 101
    acc += (5599 * 3 + 7) % 101
    acc += (5600 * 3 + 7) % 101
    acc += (5601 * 3 + 7) % 101
    acc += (5602 * 3 + 7) % 101
    acc += (5603 * 3 + 7) % 101
    acc += (5604 * 3 + 7) % 101
    acc += (5605 * 3 + 7) % 101
    acc += (5606 * 3 + 7) % 101
    acc += (5607 * 3 + 7) % 101
    acc += (5608 * 3 + 7) % 101
    acc += (5609 * 3 + 7) % 101
    acc += (5610 * 3 + 7) % 101
    acc += (5611 * 3 + 7) % 101
    acc += (5612 * 3 + 7) % 101
    acc += (5613 * 3 + 7) % 101
    acc += (5614 * 3 + 7) % 101
    acc += (5615 * 3 + 7) % 101
    acc += (5616 * 3 + 7) % 101
    acc += (5617 * 3 + 7) % 101
    acc += (5618 * 3 + 7) % 101
    acc += (5619 * 3 + 7) % 101
    acc += (5620 * 3 + 7) % 101
    acc += (5621 * 3 + 7) % 101
    acc += (5622 * 3 + 7) % 101
    acc += (5623 * 3 + 7) % 101
    acc += (5624 * 3 + 7) % 101
    acc += (5625 * 3 + 7) % 101
    acc += (5626 * 3 + 7) % 101
    acc += (5627 * 3 + 7) % 101
    acc += (5628 * 3 + 7) % 101
    acc += (5629 * 3 + 7) % 101
    acc += (5630 * 3 + 7) % 101
    acc += (5631 * 3 + 7) % 101
    acc += (5632 * 3 + 7) % 101
    acc += (5633 * 3 + 7) % 101
    acc += (5634 * 3 + 7) % 101
    acc += (5635 * 3 + 7) % 101
    acc += (5636 * 3 + 7) % 101
    acc += (5637 * 3 + 7) % 101
    acc += (5638 * 3 + 7) % 101
    acc += (5639 * 3 + 7) % 101
    acc += (5640 * 3 + 7) % 101
    acc += (5641 * 3 + 7) % 101
    acc += (5642 * 3 + 7) % 101
    acc += (5643 * 3 + 7) % 101
    acc += (5644 * 3 + 7) % 101
    acc += (5645 * 3 + 7) % 101
    acc += (5646 * 3 + 7) % 101
    acc += (5647 * 3 + 7) % 101
    acc += (5648 * 3 + 7) % 101
    acc += (5649 * 3 + 7) % 101
    acc += (5650 * 3 + 7) % 101
    acc += (5651 * 3 + 7) % 101
    acc += (5652 * 3 + 7) % 101
    acc += (5653 * 3 + 7) % 101
    acc += (5654 * 3 + 7) % 101
    acc += (5655 * 3 + 7) % 101
    acc += (5656 * 3 + 7) % 101
    acc += (5657 * 3 + 7) % 101
    acc += (5658 * 3 + 7) % 101
    acc += (5659 * 3 + 7) % 101
    acc += (5660 * 3 + 7) % 101
    acc += (5661 * 3 + 7) % 101
    acc += (5662 * 3 + 7) % 101
    acc += (5663 * 3 + 7) % 101
    acc += (5664 * 3 + 7) % 101
    acc += (5665 * 3 + 7) % 101
    acc += (5666 * 3 + 7) % 101
    acc += (5667 * 3 + 7) % 101
    acc += (5668 * 3 + 7) % 101
    acc += (5669 * 3 + 7) % 101
    acc += (5670 * 3 + 7) % 101
    acc += (5671 * 3 + 7) % 101
    acc += (5672 * 3 + 7) % 101
    acc += (5673 * 3 + 7) % 101
    acc += (5674 * 3 + 7) % 101
    acc += (5675 * 3 + 7) % 101
    acc += (5676 * 3 + 7) % 101
    acc += (5677 * 3 + 7) % 101
    acc += (5678 * 3 + 7) % 101
    acc += (5679 * 3 + 7) % 101
    acc += (5680 * 3 + 7) % 101
    acc += (5681 * 3 + 7) % 101
    acc += (5682 * 3 + 7) % 101
    acc += (5683 * 3 + 7) % 101
    acc += (5684 * 3 + 7) % 101
    acc += (5685 * 3 + 7) % 101
    acc += (5686 * 3 + 7) % 101
    acc += (5687 * 3 + 7) % 101
    acc += (5688 * 3 + 7) % 101
    acc += (5689 * 3 + 7) % 101
    acc += (5690 * 3 + 7) % 101
    acc += (5691 * 3 + 7) % 101
    acc += (5692 * 3 + 7) % 101
    acc += (5693 * 3 + 7) % 101
    acc += (5694 * 3 + 7) % 101
    acc += (5695 * 3 + 7) % 101
    acc += (5696 * 3 + 7) % 101
    acc += (5697 * 3 + 7) % 101
    acc += (5698 * 3 + 7) % 101
    acc += (5699 * 3 + 7) % 101
    acc += (5700 * 3 + 7) % 101
    acc += (5701 * 3 + 7) % 101
    acc += (5702 * 3 + 7) % 101
    acc += (5703 * 3 + 7) % 101
    acc += (5704 * 3 + 7) % 101
    acc += (5705 * 3 + 7) % 101
    acc += (5706 * 3 + 7) % 101
    acc += (5707 * 3 + 7) % 101
    acc += (5708 * 3 + 7) % 101
    acc += (5709 * 3 + 7) % 101
    acc += (5710 * 3 + 7) % 101
    acc += (5711 * 3 + 7) % 101
    acc += (5712 * 3 + 7) % 101
    acc += (5713 * 3 + 7) % 101
    acc += (5714 * 3 + 7) % 101
    acc += (5715 * 3 + 7) % 101
    acc += (5716 * 3 + 7) % 101
    acc += (5717 * 3 + 7) % 101
    acc += (5718 * 3 + 7) % 101
    acc += (5719 * 3 + 7) % 101
    acc += (5720 * 3 + 7) % 101
    acc += (5721 * 3 + 7) % 101
    acc += (5722 * 3 + 7) % 101
    acc += (5723 * 3 + 7) % 101
    acc += (5724 * 3 + 7) % 101
    acc += (5725 * 3 + 7) % 101
    acc += (5726 * 3 + 7) % 101
    acc += (5727 * 3 + 7) % 101
    acc += (5728 * 3 + 7) % 101
    acc += (5729 * 3 + 7) % 101
    acc += (5730 * 3 + 7) % 101
    acc += (5731 * 3 + 7) % 101
    acc += (5732 * 3 + 7) % 101
    acc += (5733 * 3 + 7) % 101
    acc += (5734 * 3 + 7) % 101
    acc += (5735 * 3 + 7) % 101
    acc += (5736 * 3 + 7) % 101
    acc += (5737 * 3 + 7) % 101
    acc += (5738 * 3 + 7) % 101
    acc += (5739 * 3 + 7) % 101
    acc += (5740 * 3 + 7) % 101
    acc += (5741 * 3 + 7) % 101
    acc += (5742 * 3 + 7) % 101
    acc += (5743 * 3 + 7) % 101
    acc += (5744 * 3 + 7) % 101
    acc += (5745 * 3 + 7) % 101
    acc += (5746 * 3 + 7) % 101
    acc += (5747 * 3 + 7) % 101
    acc += (5748 * 3 + 7) % 101
    acc += (5749 * 3 + 7) % 101
    acc += (5750 * 3 + 7) % 101
    acc += (5751 * 3 + 7) % 101
    acc += (5752 * 3 + 7) % 101
    acc += (5753 * 3 + 7) % 101
    acc += (5754 * 3 + 7) % 101
    acc += (5755 * 3 + 7) % 101
    acc += (5756 * 3 + 7) % 101
    acc += (5757 * 3 + 7) % 101
    acc += (5758 * 3 + 7) % 101
    acc += (5759 * 3 + 7) % 101
    acc += (5760 * 3 + 7) % 101
    acc += (5761 * 3 + 7) % 101
    acc += (5762 * 3 + 7) % 101
    acc += (5763 * 3 + 7) % 101
    acc += (5764 * 3 + 7) % 101
    acc += (5765 * 3 + 7) % 101
    acc += (5766 * 3 + 7) % 101
    acc += (5767 * 3 + 7) % 101
    acc += (5768 * 3 + 7) % 101
    acc += (5769 * 3 + 7) % 101
    acc += (5770 * 3 + 7) % 101
    acc += (5771 * 3 + 7) % 101
    acc += (5772 * 3 + 7) % 101
    acc += (5773 * 3 + 7) % 101
    acc += (5774 * 3 + 7) % 101
    acc += (5775 * 3 + 7) % 101
    acc += (5776 * 3 + 7) % 101
    acc += (5777 * 3 + 7) % 101
    acc += (5778 * 3 + 7) % 101
    acc += (5779 * 3 + 7) % 101
    acc += (5780 * 3 + 7) % 101
    acc += (5781 * 3 + 7) % 101
    acc += (5782 * 3 + 7) % 101
    acc += (5783 * 3 + 7) % 101
    acc += (5784 * 3 + 7) % 101
    acc += (5785 * 3 + 7) % 101
    acc += (5786 * 3 + 7) % 101
    acc += (5787 * 3 + 7) % 101
    acc += (5788 * 3 + 7) % 101
    acc += (5789 * 3 + 7) % 101
    acc += (5790 * 3 + 7) % 101
    acc += (5791 * 3 + 7) % 101
    acc += (5792 * 3 + 7) % 101
    acc += (5793 * 3 + 7) % 101
    acc += (5794 * 3 + 7) % 101
    acc += (5795 * 3 + 7) % 101
    acc += (5796 * 3 + 7) % 101
    acc += (5797 * 3 + 7) % 101
    acc += (5798 * 3 + 7) % 101
    acc += (5799 * 3 + 7) % 101
    acc += (5800 * 3 + 7) % 101
    acc += (5801 * 3 + 7) % 101
    acc += (5802 * 3 + 7) % 101
    acc += (5803 * 3 + 7) % 101
    acc += (5804 * 3 + 7) % 101
    acc += (5805 * 3 + 7) % 101
    acc += (5806 * 3 + 7) % 101
    acc += (5807 * 3 + 7) % 101
    acc += (5808 * 3 + 7) % 101
    acc += (5809 * 3 + 7) % 101
    acc += (5810 * 3 + 7) % 101
    acc += (5811 * 3 + 7) % 101
    acc += (5812 * 3 + 7) % 101
    acc += (5813 * 3 + 7) % 101
    acc += (5814 * 3 + 7) % 101
    acc += (5815 * 3 + 7) % 101
    acc += (5816 * 3 + 7) % 101
    acc += (5817 * 3 + 7) % 101
    acc += (5818 * 3 + 7) % 101
    acc += (5819 * 3 + 7) % 101
    acc += (5820 * 3 + 7) % 101
    acc += (5821 * 3 + 7) % 101
    acc += (5822 * 3 + 7) % 101
    acc += (5823 * 3 + 7) % 101
    acc += (5824 * 3 + 7) % 101
    acc += (5825 * 3 + 7) % 101
    acc += (5826 * 3 + 7) % 101
    acc += (5827 * 3 + 7) % 101
    acc += (5828 * 3 + 7) % 101
    acc += (5829 * 3 + 7) % 101
    acc += (5830 * 3 + 7) % 101
    acc += (5831 * 3 + 7) % 101
    acc += (5832 * 3 + 7) % 101
    acc += (5833 * 3 + 7) % 101
    acc += (5834 * 3 + 7) % 101
    acc += (5835 * 3 + 7) % 101
    acc += (5836 * 3 + 7) % 101
    acc += (5837 * 3 + 7) % 101
    acc += (5838 * 3 + 7) % 101
    acc += (5839 * 3 + 7) % 101
    acc += (5840 * 3 + 7) % 101
    acc += (5841 * 3 + 7) % 101
    acc += (5842 * 3 + 7) % 101
    acc += (5843 * 3 + 7) % 101
    acc += (5844 * 3 + 7) % 101
    acc += (5845 * 3 + 7) % 101
    acc += (5846 * 3 + 7) % 101
    acc += (5847 * 3 + 7) % 101
    acc += (5848 * 3 + 7) % 101
    acc += (5849 * 3 + 7) % 101
    acc += (5850 * 3 + 7) % 101
    acc += (5851 * 3 + 7) % 101
    acc += (5852 * 3 + 7) % 101
    acc += (5853 * 3 + 7) % 101
    acc += (5854 * 3 + 7) % 101
    acc += (5855 * 3 + 7) % 101
    acc += (5856 * 3 + 7) % 101
    acc += (5857 * 3 + 7) % 101
    acc += (5858 * 3 + 7) % 101
    acc += (5859 * 3 + 7) % 101
    acc += (5860 * 3 + 7) % 101
    acc += (5861 * 3 + 7) % 101
    acc += (5862 * 3 + 7) % 101
    acc += (5863 * 3 + 7) % 101
    acc += (5864 * 3 + 7) % 101
    acc += (5865 * 3 + 7) % 101
    acc += (5866 * 3 + 7) % 101
    acc += (5867 * 3 + 7) % 101
    acc += (5868 * 3 + 7) % 101
    acc += (5869 * 3 + 7) % 101
    acc += (5870 * 3 + 7) % 101
    acc += (5871 * 3 + 7) % 101
    acc += (5872 * 3 + 7) % 101
    acc += (5873 * 3 + 7) % 101
    acc += (5874 * 3 + 7) % 101
    acc += (5875 * 3 + 7) % 101
    acc += (5876 * 3 + 7) % 101
    acc += (5877 * 3 + 7) % 101
    acc += (5878 * 3 + 7) % 101
    acc += (5879 * 3 + 7) % 101
    acc += (5880 * 3 + 7) % 101
    acc += (5881 * 3 + 7) % 101
    acc += (5882 * 3 + 7) % 101
    acc += (5883 * 3 + 7) % 101
    acc += (5884 * 3 + 7) % 101
    acc += (5885 * 3 + 7) % 101
    acc += (5886 * 3 + 7) % 101
    acc += (5887 * 3 + 7) % 101
    acc += (5888 * 3 + 7) % 101
    acc += (5889 * 3 + 7) % 101
    acc += (5890 * 3 + 7) % 101
    acc += (5891 * 3 + 7) % 101
    acc += (5892 * 3 + 7) % 101
    acc += (5893 * 3 + 7) % 101
    acc += (5894 * 3 + 7) % 101
    acc += (5895 * 3 + 7) % 101
    acc += (5896 * 3 + 7) % 101
    acc += (5897 * 3 + 7) % 101
    acc += (5898 * 3 + 7) % 101
    acc += (5899 * 3 + 7) % 101
    acc += (5900 * 3 + 7) % 101
    acc += (5901 * 3 + 7) % 101
    acc += (5902 * 3 + 7) % 101
    acc += (5903 * 3 + 7) % 101
    acc += (5904 * 3 + 7) % 101
    acc += (5905 * 3 + 7) % 101
    acc += (5906 * 3 + 7) % 101
    acc += (5907 * 3 + 7) % 101
    acc += (5908 * 3 + 7) % 101
    acc += (5909 * 3 + 7) % 101
    acc += (5910 * 3 + 7) % 101
    acc += (5911 * 3 + 7) % 101
    acc += (5912 * 3 + 7) % 101
    acc += (5913 * 3 + 7) % 101
    acc += (5914 * 3 + 7) % 101
    acc += (5915 * 3 + 7) % 101
    acc += (5916 * 3 + 7) % 101
    acc += (5917 * 3 + 7) % 101
    acc += (5918 * 3 + 7) % 101
    acc += (5919 * 3 + 7) % 101
    acc += (5920 * 3 + 7) % 101
    acc += (5921 * 3 + 7) % 101
    acc += (5922 * 3 + 7) % 101
    acc += (5923 * 3 + 7) % 101
    acc += (5924 * 3 + 7) % 101
    acc += (5925 * 3 + 7) % 101
    acc += (5926 * 3 + 7) % 101
    acc += (5927 * 3 + 7) % 101
    acc += (5928 * 3 + 7) % 101
    acc += (5929 * 3 + 7) % 101
    acc += (5930 * 3 + 7) % 101
    acc += (5931 * 3 + 7) % 101
    acc += (5932 * 3 + 7) % 101
    acc += (5933 * 3 + 7) % 101
    acc += (5934 * 3 + 7) % 101
    acc += (5935 * 3 + 7) % 101
    acc += (5936 * 3 + 7) % 101
    acc += (5937 * 3 + 7) % 101
    acc += (5938 * 3 + 7) % 101
    acc += (5939 * 3 + 7) % 101
    acc += (5940 * 3 + 7) % 101
    acc += (5941 * 3 + 7) % 101
    acc += (5942 * 3 + 7) % 101
    acc += (5943 * 3 + 7) % 101
    acc += (5944 * 3 + 7) % 101
    acc += (5945 * 3 + 7) % 101
    acc += (5946 * 3 + 7) % 101
    acc += (5947 * 3 + 7) % 101
    acc += (5948 * 3 + 7) % 101
    acc += (5949 * 3 + 7) % 101
    acc += (5950 * 3 + 7) % 101
    acc += (5951 * 3 + 7) % 101
    acc += (5952 * 3 + 7) % 101
    acc += (5953 * 3 + 7) % 101
    acc += (5954 * 3 + 7) % 101
    acc += (5955 * 3 + 7) % 101
    acc += (5956 * 3 + 7) % 101
    acc += (5957 * 3 + 7) % 101
    acc += (5958 * 3 + 7) % 101
    acc += (5959 * 3 + 7) % 101
    acc += (5960 * 3 + 7) % 101
    acc += (5961 * 3 + 7) % 101
    acc += (5962 * 3 + 7) % 101
    acc += (5963 * 3 + 7) % 101
    acc += (5964 * 3 + 7) % 101
    acc += (5965 * 3 + 7) % 101
    acc += (5966 * 3 + 7) % 101
    acc += (5967 * 3 + 7) % 101
    acc += (5968 * 3 + 7) % 101
    acc += (5969 * 3 + 7) % 101
    acc += (5970 * 3 + 7) % 101
    acc += (5971 * 3 + 7) % 101
    acc += (5972 * 3 + 7) % 101
    acc += (5973 * 3 + 7) % 101
    acc += (5974 * 3 + 7) % 101
    acc += (5975 * 3 + 7) % 101
    acc += (5976 * 3 + 7) % 101
    acc += (5977 * 3 + 7) % 101
    acc += (5978 * 3 + 7) % 101
    acc += (5979 * 3 + 7) % 101
    acc += (5980 * 3 + 7) % 101
    acc += (5981 * 3 + 7) % 101
    acc += (5982 * 3 + 7) % 101
    acc += (5983 * 3 + 7) % 101
    acc += (5984 * 3 + 7) % 101
    acc += (5985 * 3 + 7) % 101
    acc += (5986 * 3 + 7) % 101
    acc += (5987 * 3 + 7) % 101
    acc += (5988 * 3 + 7) % 101
    acc += (5989 * 3 + 7) % 101
    acc += (5990 * 3 + 7) % 101
    acc += (5991 * 3 + 7) % 101
    acc += (5992 * 3 + 7) % 101
    acc += (5993 * 3 + 7) % 101
    acc += (5994 * 3 + 7) % 101
    acc += (5995 * 3 + 7) % 101
    acc += (5996 * 3 + 7) % 101
    acc += (5997 * 3 + 7) % 101
    acc += (5998 * 3 + 7) % 101
    acc += (5999 * 3 + 7) % 101
    acc += (6000 * 3 + 7) % 101
    acc += (6001 * 3 + 7) % 101
    acc += (6002 * 3 + 7) % 101
    acc += (6003 * 3 + 7) % 101
    acc += (6004 * 3 + 7) % 101
    acc += (6005 * 3 + 7) % 101
    acc += (6006 * 3 + 7) % 101
    acc += (6007 * 3 + 7) % 101
    acc += (6008 * 3 + 7) % 101
    acc += (6009 * 3 + 7) % 101
    acc += (6010 * 3 + 7) % 101
    acc += (6011 * 3 + 7) % 101
    acc += (6012 * 3 + 7) % 101
    acc += (6013 * 3 + 7) % 101
    acc += (6014 * 3 + 7) % 101
    acc += (6015 * 3 + 7) % 101
    acc += (6016 * 3 + 7) % 101
    acc += (6017 * 3 + 7) % 101
    acc += (6018 * 3 + 7) % 101
    acc += (6019 * 3 + 7) % 101
    acc += (6020 * 3 + 7) % 101
    acc += (6021 * 3 + 7) % 101
    acc += (6022 * 3 + 7) % 101
    acc += (6023 * 3 + 7) % 101
    acc += (6024 * 3 + 7) % 101
    acc += (6025 * 3 + 7) % 101
    acc += (6026 * 3 + 7) % 101
    acc += (6027 * 3 + 7) % 101
    acc += (6028 * 3 + 7) % 101
    acc += (6029 * 3 + 7) % 101
    acc += (6030 * 3 + 7) % 101
    acc += (6031 * 3 + 7) % 101
    acc += (6032 * 3 + 7) % 101
    acc += (6033 * 3 + 7) % 101
    acc += (6034 * 3 + 7) % 101
    acc += (6035 * 3 + 7) % 101
    acc += (6036 * 3 + 7) % 101
    acc += (6037 * 3 + 7) % 101
    acc += (6038 * 3 + 7) % 101
    acc += (6039 * 3 + 7) % 101
    acc += (6040 * 3 + 7) % 101
    acc += (6041 * 3 + 7) % 101
    acc += (6042 * 3 + 7) % 101
    acc += (6043 * 3 + 7) % 101
    acc += (6044 * 3 + 7) % 101
    acc += (6045 * 3 + 7) % 101
    acc += (6046 * 3 + 7) % 101
    acc += (6047 * 3 + 7) % 101
    acc += (6048 * 3 + 7) % 101
    acc += (6049 * 3 + 7) % 101
    acc += (6050 * 3 + 7) % 101
    acc += (6051 * 3 + 7) % 101
    acc += (6052 * 3 + 7) % 101
    acc += (6053 * 3 + 7) % 101
    acc += (6054 * 3 + 7) % 101
    acc += (6055 * 3 + 7) % 101
    acc += (6056 * 3 + 7) % 101
    acc += (6057 * 3 + 7) % 101
    acc += (6058 * 3 + 7) % 101
    acc += (6059 * 3 + 7) % 101
    acc += (6060 * 3 + 7) % 101
    acc += (6061 * 3 + 7) % 101
    acc += (6062 * 3 + 7) % 101
    acc += (6063 * 3 + 7) % 101
    acc += (6064 * 3 + 7) % 101
    acc += (6065 * 3 + 7) % 101
    acc += (6066 * 3 + 7) % 101
    acc += (6067 * 3 + 7) % 101
    acc += (6068 * 3 + 7) % 101
    acc += (6069 * 3 + 7) % 101
    acc += (6070 * 3 + 7) % 101
    acc += (6071 * 3 + 7) % 101
    acc += (6072 * 3 + 7) % 101
    acc += (6073 * 3 + 7) % 101
    acc += (6074 * 3 + 7) % 101
    acc += (6075 * 3 + 7) % 101
    acc += (6076 * 3 + 7) % 101
    acc += (6077 * 3 + 7) % 101
    acc += (6078 * 3 + 7) % 101
    acc += (6079 * 3 + 7) % 101
    acc += (6080 * 3 + 7) % 101
    acc += (6081 * 3 + 7) % 101
    acc += (6082 * 3 + 7) % 101
    acc += (6083 * 3 + 7) % 101
    acc += (6084 * 3 + 7) % 101
    acc += (6085 * 3 + 7) % 101
    acc += (6086 * 3 + 7) % 101
    acc += (6087 * 3 + 7) % 101
    acc += (6088 * 3 + 7) % 101
    acc += (6089 * 3 + 7) % 101
    acc += (6090 * 3 + 7) % 101
    acc += (6091 * 3 + 7) % 101
    acc += (6092 * 3 + 7) % 101
    acc += (6093 * 3 + 7) % 101
    acc += (6094 * 3 + 7) % 101
    acc += (6095 * 3 + 7) % 101
    acc += (6096 * 3 + 7) % 101
    acc += (6097 * 3 + 7) % 101
    acc += (6098 * 3 + 7) % 101
    acc += (6099 * 3 + 7) % 101
    acc += (6100 * 3 + 7) % 101
    acc += (6101 * 3 + 7) % 101
    acc += (6102 * 3 + 7) % 101
    acc += (6103 * 3 + 7) % 101
    acc += (6104 * 3 + 7) % 101
    acc += (6105 * 3 + 7) % 101
    acc += (6106 * 3 + 7) % 101
    acc += (6107 * 3 + 7) % 101
    acc += (6108 * 3 + 7) % 101
    acc += (6109 * 3 + 7) % 101
    acc += (6110 * 3 + 7) % 101
    acc += (6111 * 3 + 7) % 101
    acc += (6112 * 3 + 7) % 101
    acc += (6113 * 3 + 7) % 101
    acc += (6114 * 3 + 7) % 101
    acc += (6115 * 3 + 7) % 101
    acc += (6116 * 3 + 7) % 101
    acc += (6117 * 3 + 7) % 101
    acc += (6118 * 3 + 7) % 101
    acc += (6119 * 3 + 7) % 101
    acc += (6120 * 3 + 7) % 101
    acc += (6121 * 3 + 7) % 101
    acc += (6122 * 3 + 7) % 101
    acc += (6123 * 3 + 7) % 101
    acc += (6124 * 3 + 7) % 101
    acc += (6125 * 3 + 7) % 101
    acc += (6126 * 3 + 7) % 101
    acc += (6127 * 3 + 7) % 101
    acc += (6128 * 3 + 7) % 101
    acc += (6129 * 3 + 7) % 101
    acc += (6130 * 3 + 7) % 101
    acc += (6131 * 3 + 7) % 101
    acc += (6132 * 3 + 7) % 101
    acc += (6133 * 3 + 7) % 101
    acc += (6134 * 3 + 7) % 101
    acc += (6135 * 3 + 7) % 101
    acc += (6136 * 3 + 7) % 101
    acc += (6137 * 3 + 7) % 101
    acc += (6138 * 3 + 7) % 101
    acc += (6139 * 3 + 7) % 101
    acc += (6140 * 3 + 7) % 101
    acc += (6141 * 3 + 7) % 101
    acc += (6142 * 3 + 7) % 101
    acc += (6143 * 3 + 7) % 101
    acc += (6144 * 3 + 7) % 101
    acc += (6145 * 3 + 7) % 101
    acc += (6146 * 3 + 7) % 101
    acc += (6147 * 3 + 7) % 101
    acc += (6148 * 3 + 7) % 101
    acc += (6149 * 3 + 7) % 101
    acc += (6150 * 3 + 7) % 101
    acc += (6151 * 3 + 7) % 101
    acc += (6152 * 3 + 7) % 101
    acc += (6153 * 3 + 7) % 101
    acc += (6154 * 3 + 7) % 101
    acc += (6155 * 3 + 7) % 101
    acc += (6156 * 3 + 7) % 101
    acc += (6157 * 3 + 7) % 101
    acc += (6158 * 3 + 7) % 101
    acc += (6159 * 3 + 7) % 101
    acc += (6160 * 3 + 7) % 101
    acc += (6161 * 3 + 7) % 101
    acc += (6162 * 3 + 7) % 101
    acc += (6163 * 3 + 7) % 101
    acc += (6164 * 3 + 7) % 101
    acc += (6165 * 3 + 7) % 101
    acc += (6166 * 3 + 7) % 101
    acc += (6167 * 3 + 7) % 101
    acc += (6168 * 3 + 7) % 101
    acc += (6169 * 3 + 7) % 101
    acc += (6170 * 3 + 7) % 101
    acc += (6171 * 3 + 7) % 101
    acc += (6172 * 3 + 7) % 101
    acc += (6173 * 3 + 7) % 101
    acc += (6174 * 3 + 7) % 101
    acc += (6175 * 3 + 7) % 101
    acc += (6176 * 3 + 7) % 101
    acc += (6177 * 3 + 7) % 101
    acc += (6178 * 3 + 7) % 101
    acc += (6179 * 3 + 7) % 101
    acc += (6180 * 3 + 7) % 101
    acc += (6181 * 3 + 7) % 101
    acc += (6182 * 3 + 7) % 101
    acc += (6183 * 3 + 7) % 101
    acc += (6184 * 3 + 7) % 101
    acc += (6185 * 3 + 7) % 101
    acc += (6186 * 3 + 7) % 101
    acc += (6187 * 3 + 7) % 101
    acc += (6188 * 3 + 7) % 101
    acc += (6189 * 3 + 7) % 101
    acc += (6190 * 3 + 7) % 101
    acc += (6191 * 3 + 7) % 101
    acc += (6192 * 3 + 7) % 101
    acc += (6193 * 3 + 7) % 101
    acc += (6194 * 3 + 7) % 101
    acc += (6195 * 3 + 7) % 101
    acc += (6196 * 3 + 7) % 101
    acc += (6197 * 3 + 7) % 101
    acc += (6198 * 3 + 7) % 101
    acc += (6199 * 3 + 7) % 101
    acc += (6200 * 3 + 7) % 101
    acc += (6201 * 3 + 7) % 101
    acc += (6202 * 3 + 7) % 101
    acc += (6203 * 3 + 7) % 101
    acc += (6204 * 3 + 7) % 101
    acc += (6205 * 3 + 7) % 101
    acc += (6206 * 3 + 7) % 101
    acc += (6207 * 3 + 7) % 101
    acc += (6208 * 3 + 7) % 101
    acc += (6209 * 3 + 7) % 101
    acc += (6210 * 3 + 7) % 101
    acc += (6211 * 3 + 7) % 101
    acc += (6212 * 3 + 7) % 101
    acc += (6213 * 3 + 7) % 101
    acc += (6214 * 3 + 7) % 101
    acc += (6215 * 3 + 7) % 101
    acc += (6216 * 3 + 7) % 101
    acc += (6217 * 3 + 7) % 101
    acc += (6218 * 3 + 7) % 101
    acc += (6219 * 3 + 7) % 101
    acc += (6220 * 3 + 7) % 101
    acc += (6221 * 3 + 7) % 101
    acc += (6222 * 3 + 7) % 101
    acc += (6223 * 3 + 7) % 101
    acc += (6224 * 3 + 7) % 101
    acc += (6225 * 3 + 7) % 101
    acc += (6226 * 3 + 7) % 101
    acc += (6227 * 3 + 7) % 101
    acc += (6228 * 3 + 7) % 101
    acc += (6229 * 3 + 7) % 101
    acc += (6230 * 3 + 7) % 101
    acc += (6231 * 3 + 7) % 101
    acc += (6232 * 3 + 7) % 101
    acc += (6233 * 3 + 7) % 101
    acc += (6234 * 3 + 7) % 101
    acc += (6235 * 3 + 7) % 101
    acc += (6236 * 3 + 7) % 101
    acc += (6237 * 3 + 7) % 101
    acc += (6238 * 3 + 7) % 101
    acc += (6239 * 3 + 7) % 101
    acc += (6240 * 3 + 7) % 101
    acc += (6241 * 3 + 7) % 101
    acc += (6242 * 3 + 7) % 101
    acc += (6243 * 3 + 7) % 101
    acc += (6244 * 3 + 7) % 101
    acc += (6245 * 3 + 7) % 101
    acc += (6246 * 3 + 7) % 101
    acc += (6247 * 3 + 7) % 101
    acc += (6248 * 3 + 7) % 101
    acc += (6249 * 3 + 7) % 101
    acc += (6250 * 3 + 7) % 101
    acc += (6251 * 3 + 7) % 101
    acc += (6252 * 3 + 7) % 101
    acc += (6253 * 3 + 7) % 101
    acc += (6254 * 3 + 7) % 101
    acc += (6255 * 3 + 7) % 101
    acc += (6256 * 3 + 7) % 101
    acc += (6257 * 3 + 7) % 101
    acc += (6258 * 3 + 7) % 101
    acc += (6259 * 3 + 7) % 101
    acc += (6260 * 3 + 7) % 101
    acc += (6261 * 3 + 7) % 101
    acc += (6262 * 3 + 7) % 101
    acc += (6263 * 3 + 7) % 101
    acc += (6264 * 3 + 7) % 101
    acc += (6265 * 3 + 7) % 101
    acc += (6266 * 3 + 7) % 101
    acc += (6267 * 3 + 7) % 101
    acc += (6268 * 3 + 7) % 101
    acc += (6269 * 3 + 7) % 101
    acc += (6270 * 3 + 7) % 101
    acc += (6271 * 3 + 7) % 101
    acc += (6272 * 3 + 7) % 101
    acc += (6273 * 3 + 7) % 101
    acc += (6274 * 3 + 7) % 101
    acc += (6275 * 3 + 7) % 101
    acc += (6276 * 3 + 7) % 101
    acc += (6277 * 3 + 7) % 101
    acc += (6278 * 3 + 7) % 101
    acc += (6279 * 3 + 7) % 101
    acc += (6280 * 3 + 7) % 101
    acc += (6281 * 3 + 7) % 101
    acc += (6282 * 3 + 7) % 101
    acc += (6283 * 3 + 7) % 101
    acc += (6284 * 3 + 7) % 101
    acc += (6285 * 3 + 7) % 101
    acc += (6286 * 3 + 7) % 101
    acc += (6287 * 3 + 7) % 101
    acc += (6288 * 3 + 7) % 101
    acc += (6289 * 3 + 7) % 101
    acc += (6290 * 3 + 7) % 101
    acc += (6291 * 3 + 7) % 101
    acc += (6292 * 3 + 7) % 101
    acc += (6293 * 3 + 7) % 101
    acc += (6294 * 3 + 7) % 101
    acc += (6295 * 3 + 7) % 101
    acc += (6296 * 3 + 7) % 101
    acc += (6297 * 3 + 7) % 101
    acc += (6298 * 3 + 7) % 101
    acc += (6299 * 3 + 7) % 101
    acc += (6300 * 3 + 7) % 101
    acc += (6301 * 3 + 7) % 101
    acc += (6302 * 3 + 7) % 101
    acc += (6303 * 3 + 7) % 101
    acc += (6304 * 3 + 7) % 101
    acc += (6305 * 3 + 7) % 101
    acc += (6306 * 3 + 7) % 101
    acc += (6307 * 3 + 7) % 101
    acc += (6308 * 3 + 7) % 101
    acc += (6309 * 3 + 7) % 101
    acc += (6310 * 3 + 7) % 101
    acc += (6311 * 3 + 7) % 101
    acc += (6312 * 3 + 7) % 101
    acc += (6313 * 3 + 7) % 101
    acc += (6314 * 3 + 7) % 101
    acc += (6315 * 3 + 7) % 101
    acc += (6316 * 3 + 7) % 101
    acc += (6317 * 3 + 7) % 101
    acc += (6318 * 3 + 7) % 101
    acc += (6319 * 3 + 7) % 101
    acc += (6320 * 3 + 7) % 101
    acc += (6321 * 3 + 7) % 101
    acc += (6322 * 3 + 7) % 101
    acc += (6323 * 3 + 7) % 101
    acc += (6324 * 3 + 7) % 101
    acc += (6325 * 3 + 7) % 101
    acc += (6326 * 3 + 7) % 101
    acc += (6327 * 3 + 7) % 101
    acc += (6328 * 3 + 7) % 101
    acc += (6329 * 3 + 7) % 101
    acc += (6330 * 3 + 7) % 101
    acc += (6331 * 3 + 7) % 101
    acc += (6332 * 3 + 7) % 101
    acc += (6333 * 3 + 7) % 101
    acc += (6334 * 3 + 7) % 101
    acc += (6335 * 3 + 7) % 101
    acc += (6336 * 3 + 7) % 101
    acc += (6337 * 3 + 7) % 101
    acc += (6338 * 3 + 7) % 101
    acc += (6339 * 3 + 7) % 101
    acc += (6340 * 3 + 7) % 101
    acc += (6341 * 3 + 7) % 101
    acc += (6342 * 3 + 7) % 101
    acc += (6343 * 3 + 7) % 101
    acc += (6344 * 3 + 7) % 101
    acc += (6345 * 3 + 7) % 101
    acc += (6346 * 3 + 7) % 101
    acc += (6347 * 3 + 7) % 101
    acc += (6348 * 3 + 7) % 101
    acc += (6349 * 3 + 7) % 101
    acc += (6350 * 3 + 7) % 101
    acc += (6351 * 3 + 7) % 101
    acc += (6352 * 3 + 7) % 101
    acc += (6353 * 3 + 7) % 101
    acc += (6354 * 3 + 7) % 101
    acc += (6355 * 3 + 7) % 101
    acc += (6356 * 3 + 7) % 101
    acc += (6357 * 3 + 7) % 101
    acc += (6358 * 3 + 7) % 101
    acc += (6359 * 3 + 7) % 101
    acc += (6360 * 3 + 7) % 101
    acc += (6361 * 3 + 7) % 101
    acc += (6362 * 3 + 7) % 101
    acc += (6363 * 3 + 7) % 101
    acc += (6364 * 3 + 7) % 101
    acc += (6365 * 3 + 7) % 101
    acc += (6366 * 3 + 7) % 101
    acc += (6367 * 3 + 7) % 101
    acc += (6368 * 3 + 7) % 101
    acc += (6369 * 3 + 7) % 101
    acc += (6370 * 3 + 7) % 101
    acc += (6371 * 3 + 7) % 101
    acc += (6372 * 3 + 7) % 101
    acc += (6373 * 3 + 7) % 101
    acc += (6374 * 3 + 7) % 101
    acc += (6375 * 3 + 7) % 101
    acc += (6376 * 3 + 7) % 101
    acc += (6377 * 3 + 7) % 101
    acc += (6378 * 3 + 7) % 101
    acc += (6379 * 3 + 7) % 101
    acc += (6380 * 3 + 7) % 101
    acc += (6381 * 3 + 7) % 101
    acc += (6382 * 3 + 7) % 101
    acc += (6383 * 3 + 7) % 101
    acc += (6384 * 3 + 7) % 101
    acc += (6385 * 3 + 7) % 101
    acc += (6386 * 3 + 7) % 101
    acc += (6387 * 3 + 7) % 101
    acc += (6388 * 3 + 7) % 101
    acc += (6389 * 3 + 7) % 101
    acc += (6390 * 3 + 7) % 101
    acc += (6391 * 3 + 7) % 101
    acc += (6392 * 3 + 7) % 101
    acc += (6393 * 3 + 7) % 101
    acc += (6394 * 3 + 7) % 101
    acc += (6395 * 3 + 7) % 101
    acc += (6396 * 3 + 7) % 101
    acc += (6397 * 3 + 7) % 101
    acc += (6398 * 3 + 7) % 101
    acc += (6399 * 3 + 7) % 101
    acc += (6400 * 3 + 7) % 101
    acc += (6401 * 3 + 7) % 101
    acc += (6402 * 3 + 7) % 101
    acc += (6403 * 3 + 7) % 101
    acc += (6404 * 3 + 7) % 101
    acc += (6405 * 3 + 7) % 101
    acc += (6406 * 3 + 7) % 101
    acc += (6407 * 3 + 7) % 101
    acc += (6408 * 3 + 7) % 101
    acc += (6409 * 3 + 7) % 101
    acc += (6410 * 3 + 7) % 101
    acc += (6411 * 3 + 7) % 101
    acc += (6412 * 3 + 7) % 101
    acc += (6413 * 3 + 7) % 101
    acc += (6414 * 3 + 7) % 101
    acc += (6415 * 3 + 7) % 101
    acc += (6416 * 3 + 7) % 101
    acc += (6417 * 3 + 7) % 101
    acc += (6418 * 3 + 7) % 101
    acc += (6419 * 3 + 7) % 101
    acc += (6420 * 3 + 7) % 101
    acc += (6421 * 3 + 7) % 101
    acc += (6422 * 3 + 7) % 101
    acc += (6423 * 3 + 7) % 101
    acc += (6424 * 3 + 7) % 101
    acc += (6425 * 3 + 7) % 101
    acc += (6426 * 3 + 7) % 101
    acc += (6427 * 3 + 7) % 101
    acc += (6428 * 3 + 7) % 101
    acc += (6429 * 3 + 7) % 101
    acc += (6430 * 3 + 7) % 101
    acc += (6431 * 3 + 7) % 101
    acc += (6432 * 3 + 7) % 101
    acc += (6433 * 3 + 7) % 101
    acc += (6434 * 3 + 7) % 101
    res.json({ status: 'success', acc })
  }
}


