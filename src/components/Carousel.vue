<template>
  <q-carousel
    color="white"
    arrows
    height="450px"
    class="abc"
    autoplay
  >
    <q-carousel-slide img-src="image/new1.jpg"/>
    <q-carousel-slide img-src="image/new7.jpg"/>
    <q-carousel-slide img-src="image/new11.jpg"/>
  </q-carousel>
</template>
<script>
// import { openURL } from 'quasar'
import { QCarousel, QCarouselSlide } from 'quasar'
export default {
  name: 'Carousel',
  components: {
    QCarousel, QCarouselSlide
  },
  data () {
    return {
    }
  },
  methods: {
    // openURL
  }
}
</script>

<style>
.abc{
 width:100%
}
</style>
