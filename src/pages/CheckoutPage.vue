<template>
  <div>
    <h6 class="text-center">Checkout Page</h6>
    <div class="row ">
      <div class="col-6 q-ma-lg">
        <q-table
        title="Your Product"
        :data="cartView"
        :columns="columns"
        row-key="name"
        hide-bottom
      />
      </div>
      <div class="col-1"></div>
      <div class="col-4  q-ma-lg">
        <q-card>
          <q-card-title>
          Order Summary
          </q-card-title>
          <q-card-separator />
          <q-card-main>
              Shopping amount: {{totalAmount}}৳
            <q-card-separator />
              Delivery Charge: 75৳
            <q-card-separator />
              Sub Total: {{totalAmount +75}} ৳
          </q-card-main>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-3 col-6">
        <q-input  v-model="form.address" float-label="Address" placeholder="Address" />
        <q-input v-model="form.phone_no" float-label="Phone Number" placeholder="Phone Number" />
        <br>
        <q-option-group
          color="secondary"
          type="radio"
          v-model="form.payment"
          :options="[
            { label: 'Cash on Delivery', value: 'cash' },
            { label: 'Bkash', value: 'bkash' }
          ]"
        />
         <q-btn class="q-mt-sm" color="primary" @click="PlaceOrder" type="submit" label="Place Order" />
      </div>
    </div>
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
    ],
    form: {
      address: '',
      phone_no: '',
      payment: 'cash'
    }
  }),
  props: {
  },
  computed: {
    totalAmount () {
      return this.cartView.reduce((accu, item) => accu + item.totalPrice, 0)
    }
  },
  methods: {
    cartSession () {
      this.cartView = SessionStorage.get.item(STORAGE_KEY)
      console.log(this.cartView)
    },
    PlaceOrder () {
      let product = this.cartView.map((productlist) => {
        return {
          product_id: productlist.id,
          name: productlist.name,
          price: productlist.price,
          quantity: productlist.count,
          img: '11477036207759-Ruhaans-Women-Tunics-561477036207453-1_1556090386.jpg'
        }
      })
      let Order = {
        total_price: this.totalAmount + 75,
        ...this.form,
        product_list: product
      }
      this.$store.dispatch('Checkout', Order).then(() => {
        SessionStorage.remove(STORAGE_KEY)
        this.$router.push('/')
      })
      // console.log(Order)
    }
  },
  created () {
    this.cartSession()
  }
}
</script>
