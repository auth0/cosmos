const puppeteer = require('puppeteer')
const serve = require('serve')

const port = 3099

const takeScreenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`http://localhost:${port}`)
  await page.screenshot({ path: 'tooling/overview.png', fullPage: true })

  await browser.close()
  server.stop()
}

const server = serve('build', { port })
takeScreenshot()

process.on('unhandledRejection', err => console.log('unhandledRejection', err))
