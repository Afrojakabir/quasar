<template>
  <q-card inline >
    <q-card-main >
      <q-card style="width: 250px">
        <q-card-media>
          <img src="image/new1.jpg">
        </q-card-media>
        <q-card-title>
          {{productInfo.name}}
        </q-card-title>
        <q-card-main>
          {{productInfo.price}}
        </q-card-main>
        <q-card-separator />
        <q-card-actions align="center">
          <q-btn  color="primary" @click="addToCart(productInfo)" type="submit" label="Add to Cart" />
        </q-card-actions>
      </q-card>
    </q-card-main>
  </q-card>
</template>
<script>
// import { openURL } from 'quasar'
export default {
  name: 'ProductCard',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    productInfo: { type: Object },
    addToCart: Function
  },
  methods: {

  }
}
</script>

<style>
.abc{
 width:100%
}
</style>
