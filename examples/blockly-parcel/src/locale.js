/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Example of including Blockly using Parcel with a
 *               custom locale: (French lang & JavaScript generator).
 * @author ettinger.boris@gmail.com (Boris Ettinger)
 */

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import {javascriptGenerator} from 'blockly/javascript';
import * as Fr from 'blockly/msg/fr';

Blockly.setLocale(Fr);

const toolbox = {
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'controls_ifelse',
    },
    {
      kind: 'block',
      type: 'logic_compare',
    },
    {
      kind: 'block',
      type: 'logic_operation',
    },
    {
      kind: 'block',
      type: 'controls_repeat_ext',
      inputs: {
        TIMES: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 10,
            },
          },
        },
      },
    },
    {
      kind: 'block',
      type: 'logic_operation',
    },
    {
      kind: 'block',
      type: 'logic_negate',
    },
    {
      kind: 'block',
      type: 'logic_boolean',
    },
    {
      kind: 'block',
      type: 'logic_null',
      disabled: 'true',
    },
    {
      kind: 'block',
      type: 'logic_ternary',
    },
    {
      kind: 'block',
      type: 'text_charAt',
      inputs: {
        VALUE: {
          block: {
            type: 'variables_get',
            fields: {
              VAR: {
                name: 'text',
              }
            },
          },
        },
      },
    }
  ]
}

document.addEventListener('DOMContentLoaded', function () {
  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: toolbox,
      media: 'media/'
    });

  const button = document.getElementById('blocklyButton');
  button.addEventListener('click', function () {
    alert('Check the console for the generated output.');
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code);
  });
});
