# 0.2.0 / 27-07-2020

**BREAKING**
- The callback function signature is now strictly typed instead of `any`. Application developers are required to follow this signature ([#12](https://github.com/rabobank-blockchain/universal-ledger-agent/issues/12))
- The `UlaResponse.statusCode` now has type `any` instead of `number`. We recommend you to use self explanatory strings.
- The return signature of `EventHandler.processMsg()` changed from `Promise<void>[]` to `Promise<PluginResult>[]` to get a clear list of the exit statuscodes for each plugin after full completion 