
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

import { assert } from 'chai'
import { PluginResult } from '../../../src'

const testData = {
  pluginName: 'plugin-name',
  statusCode: 'success'
}

describe('PluginResult getters', function () {
  const sut = new PluginResult(testData.pluginName, testData.statusCode)

  it('should return an unchanged statusCode', () => {
    assert.strictEqual(sut.statusCode, testData.statusCode)
  })

  it('should return an unchanged pluginName', () => {
    assert.strictEqual(sut.pluginName, testData.pluginName)
  })

  it('should flatten an object using JSON.stringify()', () => {
    assert.strictEqual(JSON.stringify(sut), `{"statusCode":"success","pluginName":"plugin-name"}`)
  })
})