import { setAlbums } from '../actions/setAlbums'
import * as request from 'superagent'


export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.body)
      })
  }
}



