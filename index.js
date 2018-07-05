export default function hotModuleMonitor(options = {clear: true}) {
  if (module && module.hot) {
    const styleHMR = `
      padding:2px 5px;
      background:linear-gradient(#666, #333);
      color:white;
      border-top-left-radius:3px;
      border-bottom-left-radius:3px;`
    const styleReloading = `
      padding:2px 5px;
      background:linear-gradient(#69e, #36b);
      color:white;
      border-top-right-radius:3px;
      border-bottom-right-radius:3px;`
    const styleReloaded = `
      padding:2px 5px;
      background:linear-gradient(#6e6, #3b3);
      color:white;
      border-top-right-radius:3px;
      border-bottom-right-radius:3px;`

    module.hot.addStatusHandler(status => {
      if (status === 'ready') {
        console.log('%cHMR%cReloading', styleHMR, styleReloading)
      } else if (status === 'apply') {
        if (options.clear) {
          console.clear()
        }
        console.log('%cHMR%c' + 'Reloaded', styleHMR, styleReloaded)
      }
    })
  }
}
