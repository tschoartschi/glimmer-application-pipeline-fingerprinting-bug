'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    fingerprint: {
        enabled: true
    }
  });

  return app.toTree();
};
