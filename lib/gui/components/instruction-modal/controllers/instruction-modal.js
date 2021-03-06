/*
 * Copyright 2016 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = function($uibModalInstance, OSOpenExternalService, options) {

  /**
   * @summary Modal options
   * @property
   * @public
   */
  this.options = options;

  /**
   * @summary continue and close the instruction prompt
   * @function
   * @public
   *
   * @example
   * InstructionModalController.continue();
   */
  this.continue = () => {
    $uibModalInstance.close(false);
  };

  /**
   * @summary visit the instruction url
   * @function
   * @public
   *
   * @example
   * InstructionModalController.visit();
   */
  this.visit = () => {
    OSOpenExternalService.open(this.options.instructionsUrl);
  };

};
