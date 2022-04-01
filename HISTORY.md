# 0.2.0 / 27-07-2020

**BREAKING**
- The callback function signature is now strictly typed instead of `any`. Application developers are required to follow this signature ([#12](https://github.com/rabobank-blockchain/universal-ledger-agent/issues/12))
- The `UlaResponse.statusCode` now has type `any` instead of `number`. We recommend you to use self explanatory strings.
- The return signature of `EventHandler.processMsg()` changed from `Promise<void>[]` to `Promise<PluginResult>[]` to get a clear list of the exit statuscodes for each plugin after full completion ([#13](https://github.com/rabobank-blockchain/universal-ledger-agent/issues/13))
- If your plugin raises an error, please use the new `UlaError` type: `throw new UlaError('error-xyz', 'Something went wrong!')` ([#8](https://github.com/rabobank-blockchain/universal-ledger-agent/issues/8))

**New features**
- Introduced `GenericStatusCode` enum for developers to use consistent status codes in a few scenario's (`success` for happy flow and `ignored` if the message isn't interpreted by your plugin)
-`UlaResponse` has an extra optional field `error` for better error handling

**Deprecations**
- `HttpHandler` class is now deprecated and will be removed in a future major release ([#11](https://github.com/rabobank-blockchain/universal-ledger-agent/issues/11))
- `Message` class is now deprecated and will be renamed to `UlaMessage` to give more clarity

**Enhancements**
- Renamed `ulaMessage.ts` to `ula-message.ts` for consistency
- Refactored HttpService and HttpHandler tests
- Stryker score back to 100 (stable)
- Improved documentation
- Dependency upgrades:
  - class-transformer: 0