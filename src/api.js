import { BASE_URL, STORAGE_KEY } from './consts'
import { LocalStorage, SessionStorage } from 'quasar'
import axios from 'axios'

export const api = () => {
  const userInfo = LocalStorage.get.item(STORAGE_KEY)
  SessionStorage.get.item(STORAGE_KEY)
  const apiToken = userInfo && userInfo.token
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiToken
    }
  })
}
