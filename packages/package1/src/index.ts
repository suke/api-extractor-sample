import { package2 } from 'package2'
import { package3 } from 'package3'
export type { Package2 } from 'package2'
export type { Package3 } from 'package3'

export type Package1 = {}

export const package1: Package1 = {
  package2,
  package3,
}