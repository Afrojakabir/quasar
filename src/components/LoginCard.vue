<template>
  <div class="absolute-center ">
    <q-card style="width: 600px;" class="q-pa-lg">
        <q-card-title class="text-center">
          {{loginTitle}}
        </q-card-title >
      <q-card-main >
        <slot/>
      </q-card-main >
    </q-card>
  </div>
</template>
<script>
// import { openURL } from 'quasar'
import { QCard, QCardTitle } from 'quasar'
export default {
  name: 'LoginCard',
  props: {
    loginTitle: { type: String }
  },
  components: {
    QCardTitle,
    QCard

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
