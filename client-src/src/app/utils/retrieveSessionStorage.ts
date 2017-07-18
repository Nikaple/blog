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
        const data = ENV === 'dev' ? response.json().data : response;
        sessionStorage.setItem(key, JSON.stringify(data));
        return data;
      }).catch(err => console.log(err));
    } else {
      return Promise.resolve(JSON.parse(sessionStorage.getItem(key)));
    }
  }
