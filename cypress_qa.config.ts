import { defineConfig } from "cypress";

export default defineConfig({
  env:{
    qa_server: 'http://localhost:3000/'
  },
  defaultCommandTimeout: 60000,
  responseTimeout: 60000,
  requestTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
