<template>
<login-card loginTitle="Login">
  <q-input
  type="email"
  v-model="form.email"
  float-label="Email"
  placeholder="abc@gmail.com"
/>
  <q-input
  type="password"
  v-model="form.password"
  float-label="Password"
/>
<q-btn class="q-mt-sm" color="primary" @click="login" type="submit" label="submit"/>

</login-card >
</template>

<style>
</style>

<script>
import LoginCard from '../components/LoginCard'
import { QBtn } from 'quasar'

export default {
  name: 'Login',

  components: {
    LoginCard,
    QBtn
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      }

    }
  },
  methods: {
    login () {
      this.$store.dispatch('UserLogin', this.form).then(() => {
        this.form.email = ''
        this.form.password = ''
        this.$router.push('/')
      })
    }
  }
}
</script>
