import { defineConfig } from "cypress";

import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin.js';

import lib from 'cypress-mochawesome-reporter/lib/index.js'

const { beforeRunHook, afterRunHook } = lib

export default defineConfig({
  e2e: {
      viewportWidth: 1300,
      viewportHeight: 800,
      chromeWebSecurity: false,
      retries: {
        openMode: 0,
        runMode: 0
      },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'my-report-for-cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  setupNodeEvents(on, config) {
    on('before:run', async (details) => {
      console.log('override before:run')
      await beforeRunHook(details)
    })

    on('after:run', async (details) => {
      console.log('override after:run')
      await afterRunHook(details)
    })

    addMatchImageSnapshotPlugin(on);

    //const dynamicUrl = 
    //config.env.urlFromCli || "https://qauto.forstudy.space"
    //config.baseUrl = dynamicUrl
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === "chrome") {
        launchOptions.args.push("--incognito");
      }

      return launchOptions;

    })

    //return config 
    
  }
}
})
