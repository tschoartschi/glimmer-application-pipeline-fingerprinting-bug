# Bug with fingerprinting

When upgrading `@glimmer/application-pipeline` from `0.10.0` to `0.11.1` fingerprinting for files in `public` does not work anymore. It seems like the public files are not available to `broccoli-asset-rev` because when you look at `tmp/asset_rewrite-input_base_path-cAJ8rDeV.tmp` only `app.css`, `app.js`, `app.js.map` and `index.html` are available. 

## Reproduction

Pre-steps: 

* `npm install -g ember-cli`
* `ember new my-app -b @glimmer/blueprint`
* `cd my-app/`
* upgrade versions accodring to `package.json` from this repo

* run `ember s`
* check `dist` folder and see that `test.js` has no fingerprint
* downgrade to `@glimmer/application-pipeline` `0.10.0`
* run `yarn` or `npm install`
* run `ember s`
* check `dist` folder and see that `test.js` has  a fingerprint now
