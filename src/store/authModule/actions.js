
import { STORAGE_KEY } from '../../consts'
import { api } from '../../api'
import { LocalStorage, SessionStorage } from 'quasar'

export const UserLogin = ({ commit }, payload) => {
  api().post('sessions', payload).then((response) => {
    LocalStorage.set(STORAGE_KEY, response.data)
    console.log(response)
  })
}
export const UserRegistration = ({ commit }, payload) => {
  api().post('users', payload).then((response) => {
    LocalStorage.set(STORAGE_KEY, response.data.api_token)
    console.log(response)
  })
}
export const ProductView = ({ commit }, payload) => {
  api().get('product', payload).then((response) => {
    commit('SET_PRODUCT_LIST', response.data)
    console.log(response.data)
  })
}
export const AddToCart = ({ commit }, payload) => {
  let cartSession = SessionStorage.get.item(STORAGE_KEY)
  if (cartSession && cartSession.some((item) => item.id === payload.id)) {
    let product = cartSession.map((item, i) => {
      if (item.id === payload.id) {
        let existingProduct = item
        existingProduct.count += 1
        existingProduct.totalPrice = item.price * existingProduct.count
        return existingProduct
      } else return item
    })
    SessionStorage.set(STORAGE_KEY, product)
  } else {
    console.log(cartSession)
    let product = payload
    product.count = 1
    product.totalPrice = product.price
    cartSession && SessionStorage.set(STORAGE_KEY, [...cartSession, product])
    cartSession || SessionStorage.set(STORAGE_KEY, [product])
  }
}
export const Checkout = ({ commit }, payload) => {
  api().post('PlaceOrder', payload).then((response) => {
    console.log(response.data)
  })
}
export const OrderList = ({ commit }, payload) => {
  api().get('UserOrderList', payload).then((response) => {
    commit('SET_ORDER_LIST', response.data)
    console.log(response.data)
  })
}
