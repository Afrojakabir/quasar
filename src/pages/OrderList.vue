<template>
<div class="q-ma-xl" >
   <q-table
    title="Order List"
    :data="orders"
    :columns="columns"
    row-key="name"
  />
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    columns: [
      { name: 'name', label: 'Name', field: 'name', sortable: true },
      { name: 'img', label: 'Name', field: 'img', sortable: true },
      { name: 'price', label: 'Price', field: 'price', sortable: true },
      { name: 'quantity', label: 'Quantity', field: 'quantity', sortable: true }
    ],
    handleOrder: []
  }),
  props: {
  },

  methods: {
    orderList () {
      this.$store.dispatch('OrderList')
      console.log(this.handleOrder)
    }
  },
  computed: {
    ...mapState({
      orders: state => state.auth.order
    })
  },
  watch: {
    orders (newVal) {
      console.log('Watcher', newVal)
    }
  },
  created () {
    this.orderList()
  }
}
</script>
