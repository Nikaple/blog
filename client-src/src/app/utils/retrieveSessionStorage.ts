import { ENV } from './config';

/**
   * initialize the sessionStorage of 'key' using 'prop' property in this class
   * by 'method'
   *
   * @param {string} key
   * @param {*} prop
   * @param {() => any} method
   * @memberof InMemoryDataService
   */
  export function retrieveSessionStorage(key: string, value: Promise<any>) {
    if (!sessionStorage.getItem(key)) {
      return value.then(response => {
        if (ENV === 'dev') {
          let data = response.json();
          if (Object.prototype.hasOwnProperty.call(data, 'data')) {
            data = response.json().data;
          }
          sessionStorage.setItem(key, JSON.stringify(data));
          return data;
        } else {
          if (response.hasOwnProperty('data')) {
            sessionStorage.setItem(key, JSON.stringify(response.data));
            return response.data;
          } else {
            sessionStorage.setItem(key, response);
            return JSON.parse(response);
          }
        }
      }).catch(err => console.log(err));
    } else {
      return Promise.resolve(JSON.parse(sessionStorage.getItem(key)));
    }
  }
