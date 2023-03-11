
# flexible-ledger-framework

[![Build Status](https://travis-ci.org/ExpressLens/flexible-ledger-framework.svg?branch=master)](https://travis-ci.org/ExpressLens/flexible-ledger-framework)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1a74f181aa5d034637b8/test_coverage)](https://codeclimate.com/github/ExpressLens/flexible-ledger-framework/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/1a74f181aa5d034637b8/maintainability)](https://codeclimate.com/github/ExpressLens/flexible-ledger-framework/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The Flexible Ledger Framework, a TypeScript/Javascript tool as a main component of a plugin system that implements a message-based approach supportive in browsers and Node.js backends.

## Installation

In an existing project (with `package.json`), install `flexible-ledger-framework`
```bash
npm install flexible-ledger-framework --save
```

## Usage

### Mobile app

Implements all [official ULA plugins](docs/plugins-list.md) in the mobile app by running the following npm commands:
```bash
npm install flexible-ledger-framework --save
npm install vp-toolkit --save
npm install crypt-util --save
npm install ula-process-eth-barcode --save
npm install ula-vp-controller --save
npm install ula-vc-data-management --save
```

Introduce the following code to initialize the ULA with all plugins:
```typescript
import { LocalCryptUtils } from 'crypt-util'
import { VpController } from 'ula-vp-controller'
import { VcDataManagement } from 'ula-vc-data-management'
import { ProcessEthBarcode } from 'ula-process-eth-barcode'
import { EventHandler, UlaResponse } from 'flexible-ledger-framework'

// Generate 
const privateMasterKey = 'xprv9s21ZrQH143K4Hahxy3chUqrrHbCynU5CcnRg9xijCvCG4f3AJb1PgiaXpjik6pDnT1qRmf3V3rzn26UNMWDjfEpUKL4ouy6t5ZVa4GAJVG'
const cryptUtil = new LocalCryptUtils()
cryptUtil.importMasterPrivateKey(privateMasterKey)

// Plugins
const processQrCodePlugin = new ProcessEthBarcode()
const vpControllerPlugin = new VpController(cryptUtil)
const vcDataMgmtPlugin = new VcDataManagement()

const plugins = [
  vcDataMgmtPlugin,
  vpControllerPlugin,
  processQrCodePlugin
]

// ULA
const eventHandler = new EventHandler(plugins)

// Call the ULA
function callUla(payload: any) {
eventHandler.processMsg(payload, (response: UlaResponse) => {
	console.log('statuscode:', response.statusCode)
	console.log('body:', response.body)
})
}
```

When a plugin error occurs, other plugins will continue their workflows. Therefore, Application developers should listen to these errors.

For ULA plugin developers, please provide a clear list of all Error codes and their descriptions for the application developers.

```typescript
const callback = function(response: UlaResponse) {
	// Note: multiple errors can occur!
	console.log('statuscode:', response.statusCode) // 'error-cr'
	console.log('body:', response.body) // {}
	console.log('body:', response.error) // Error('The ChallengeRequest validation failed: Invalid signature')
	// Inform user about failed connection setup with the third party
}

eventHandler.processMsg(message, callback)
```

## Creating your ULA plugins
Please refer to [creating-plugins.md](docs/creating-plugins.md)

## Testing

The effectiveness of all tests is measured with Stryker mutation testing framework along with Mocha unit testing.

```bash
npm run test
npm run stryker
```

We aim for 100% coverage. Scores below 80% with Stryker and/or Mocha will fail the build.

## Credits

The ULA architecture has been designed in collaboration with Workday, Inc.

## Contributing

Pull requests are welcome. For major changes, please open an issue first discussing your proposals and make sure to update tests as appropriate.

## License and disclaimer

[apache-2.0](https://choosealicense.com/licenses/apache-2.0/) with a [notice](NOTICE).

Active development is ongoing. As such, we discourage the use of this work in production environments.