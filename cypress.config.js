const { defineConfig } = require("cypress");
const{ authenticator } = require('otplib');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        generateOTP(secret) {
          return authenticator.generate(secret);
    }
  })
    },
    
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,

  },
 
});