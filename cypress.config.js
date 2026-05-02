const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      watchForFileChanges: false 
      // implement node event listeners here
    },
  },
});
