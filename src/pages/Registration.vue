<template>
  <login-card loginTitle="Registration Form">
    <q-input
      type="text"
      float-label="Name"
      placeholder="Enter your name"
      v-model="form.name"
    />

    <q-input
      type="text"
      float-label="Address"
      placeholder="Enter your Address"
      v-model="form.address"
    />
    <q-input
      type="text"
      float-label="Phone Number"
      placeholder="Enter your Phone Nunber"
      v-model="form.phone_no"
    />
    <q-input
      type="email"
      float-label="Email"
      placeholder="abc@gmail.com"
      v-model="form.email"
    />
    <q-input
      type="password"
      float-label="Password"
      v-model="form.password"
    />
        <q-input
      type="password"
      float-label="Confirm Password"
      v-model="form.cpassword"
    />

    <q-btn class="q-mt-sm" color="primary" @click="registration" type="submit" label="submit"/>

  </login-card>
</template>

<style>
</style>

<script>
import LoginCard from '../components/LoginCard'
export default {
  name: 'Registration',

  components: {
    LoginCard
  },
  data () {
    return {
      form: {
        name: '',
        address: '',
        phone_no: '',
        email: '',
        password: '',
        cpassword: ''
      }
    }
  },
  methods: {
    registration () {
      // console.log(this.form)
      this.$store.dispatch('UserRegistration', this.form).then(() => {
        this.form.name = ''
        this.form.address = ''
        this.form.phone_no = ''
        this.form.email = ''
        this.form.password = ''
        this.form.cpassword = ''
        this.$router.push('/')
      })
    }

  }

}
</script>
