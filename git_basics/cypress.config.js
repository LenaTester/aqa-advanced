import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    /*retries: {
      openMode: 2
    },*/
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
