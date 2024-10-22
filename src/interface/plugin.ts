
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

 /**
  * Every plugin must implement this interface
  */
import { EventHandler } from '../event-handler'
import { UlaMessage, UlaCallback } from '..'

export interface Plugin {
  /**
   * This method is called when the EventHandler is being constructed.
   * @param eventHandler can be used to pass new messages back to other
   * plugins.
   */
  initialize (eventHandler: EventHandler): void

  /**
   * This property is the name of the plugin. Other plugins can call this
   * plugin using this name,
   */
  name: string

  /**
   * This method is called when the EventHandler received a message.
   * The message is broadcasted, so the plugin must match the 'type' field
   * in the UlaMessage.
   * @param message - the received message from the ULA
   * @param callback - your callback function to listen for results
   * @returns string - the statuscode
   */
  handleEvent (message: UlaMessage, callback: UlaCallback): Promise<string>
}