import { URL_HOME, URL_ABOUT } from './constant.js';

// export no default
export function getHref() {
  return window.location.href
}

export function getPort() {
  return window.location.port
}


console.log('constant: ', URL_HOME, URL_ABOUT)