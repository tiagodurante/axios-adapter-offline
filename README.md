axios-adapter-offline
===

Cache response each time, responed with cached when request in offline environment.

Repository based from [ali322](https://github.com/ali322/axios-offline-adapter)

## Install

```bash
npm i axios-adapter-offline --save
```

or

```bash
yarn add axios-adapter-offline
```

## Usage

Add adapter in your request code

```javascript
import axios from 'axios'
import offlineAdapter from 'axios-adapter-offline'

const offline = offlineAdapter({
  name: 'axios-offline',
  adapter: axios.defaults.adapter
})

const http = axios.create({
  adapter: offline
})

http.get('/path/to/api').then(ret => {
  // bussiness code
})
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
