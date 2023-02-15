/*
 * Copyright 2020 Coöperatieve Rabobank U.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { classToPlain, Expose } from 'class-transformer'
import { v4 as uuid } from 'uuid'

export interface IAttestation {
  uuid?: string
  attestorPubKey: string // This is the issuer
  forPubKey?: string // This is the receiver of the attestation
  context: string[]
  type: string[]
  expires?: Date | string
  datetime: Date | string
  statements: any
}

/**
 * All data sources and ULA plugins
 * must eventually transform their
 * attestations / credentials back
 * to this model.
 */
export class Attestation {
  private readonly _uuid: string
  private readonly _attestorPubKey: string
  private readonly _forPubKey?: string
  private readonly _context: string[]
  private readonly _type: string[]
  private readonly _expires?: Date
  private readonly _datetime: Date
  private readonly _statements: any

  constructor (at