import { defineConfig } from "cypress";

export default defineConfig({
  env:{
    prod_server: 'https://mentoriaventurus.com.br'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
