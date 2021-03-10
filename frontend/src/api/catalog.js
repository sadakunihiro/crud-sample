/**
 * client-server processing
 */
import axios from 'axios'
//axios.defaults.withCredentials = true
//const _products = []

export default {
  getProducts (cb) {
    axios.get('http://192.168.1.18:8889')
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
