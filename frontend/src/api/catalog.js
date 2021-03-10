/**
 * client-server processing
 */
import axios from 'axios'
const host = process.env.VUE_APP_API_HOST
const port = process.env.VUE_APP_API_PORT
const apiurl = 'http://' + host + ':' + port
console.log("api server: " + apiurl)

export default {
  getProducts (cb) {
    axios.get(apiurl)
    .then(response => {
      cb(response.data)
    })
    .catch(error => {
      console.log("getProducts error: " + error)
    })

  },

  /* buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  } */
}
