<template>
  <q-page >
  <eshop-carousel/>
  <h4 class="text-faded text-center">OUR TRADE SERVICES ARE HERE FOR YOU</h4>
   <p class="text-faded text-center">e-shop.com  the best online shop in bd offers payment on delivery for branded products is an online shop,here you will find latest trends in fashion according to seasons and occasions.</p>
  <product-card  v-for="product in productList" :key="product.id" :productInfo="product" :addToCart="handleAddToCart"/>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'
export default {
  name: 'PageIndex',

  components: {
    eshopCarousel: Carousel,
    ProductCard
  },
  methods: {
    api () {
      this.$store.dispatch('ProductView')
    },
    handleAddToCart (productInfo) {
      this.$store.dispatch('AddToCart', productInfo)
    }
  },

  computed: {
    ...mapState({
      productList: state => state.auth.porductList
    })
  },
  created () {
    this.api()
  }
}
</script>
