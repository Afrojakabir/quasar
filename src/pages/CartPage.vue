<template>
  <div class=" q-ma-xl">
    <q-table
    title="Cart Page"
    :data="cartView"
    :columns="columns"
    row-key="name"
    hide-bottom
  />
  <q-btn class="q-ma-sm absolute-center" color="primary"  to="/checkout" type="submit" label="Proceed to Checkout" />
</div>
</template>

<script>
import { STORAGE_KEY } from '../consts'
import { SessionStorage } from 'quasar'
export default {
  data: () => ({
    columns: [
      { name: 'name', label: 'Name', field: 'name', sortable: true },
      { name: 'img', label: 'Image', field: 'img', sortable: true },
      { name: 'price', label: 'Price', field: 'price', sortable: true },
      { name: 'count', label: 'Quantity', field: 'count', sortable: true },
      { name: 'totalPrice', label: 'Total Price', field: 'totalPrice', sortable: true }
    ],
    cartView: [
    ]
  }),
  props: {
  },

  methods: {
    cartSession () {
      this.cartView = SessionStorage.get.item(STORAGE_KEY)
      console.log(this.cartView)
    }
  },
  created () {
    this.cartSession()
  }
}
</script>
