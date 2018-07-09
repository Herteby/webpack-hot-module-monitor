# webpack-hot-module-monitor 🔥
Just a small development experience improvement.
Prints a message in the browser console to let you know that Hot Module Replacement is done.

[Live demo](https://codesandbox.io/s/zll5vv3nql)

### Screenshot
![screenshot](https://github.com/Herteby/webpack-hot-module-monitor/blob/master/screenshot.png)

### Installation
```bash
npm install webpack-hot-module-monitor
```
```javascript
import monitor from 'webpack-hot-module-monitor'

monitor() //That's it!
```
By default, it also clears the console after each reload. This means that you always know that any errors/messages in the console are from the latest version. If you don't want this, you can turn it off:
```javascript
monitor({clear:false})
```

The package is only 30 lines, with no dependencies. If Hot Module Replacement is not available (in production mode for example) it will simply do nothing.
