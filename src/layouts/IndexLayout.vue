<template>
  <q-layout>
    <q-layout-header reveal>
      <q-tabs
        color="black"
        align="right"
      >
        <q-route-tab  to="/" slot="title" name="tab-1" icon="home" class="absolute-left" >Home</q-route-tab>
        <q-tab slot="title" name="tab-2" >
          <q-btn-dropdown label="Order">
            <q-list>
              <q-item link>
                <q-item-main>
                  <q-route-tab link to="/orderList">Order List</q-route-tab>
                  <q-item link>Order Request</q-item>
                  <q-item link>Request List</q-item>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown></q-tab>
        <q-route-tab slot="title" name="tab-3" to="/cart">Cart</q-route-tab>
        <q-route-tab slot="title" name="tab-4" to="/login" >Login</q-route-tab>
        <q-route-tab slot="title" name="tab-5" to="/registration">Register</q-route-tab>
      </q-tabs>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs
        color="black"
      >
        <q-tab slot="title" name="footer-1" class="absolute-left">E-Shop.com</q-tab>
        <q-tab slot="title" name="footer-2" class="absolute-center">Let Us Help YOU</q-tab>
        <q-tab slot="title" name="footer-3" class="absolute-right">CONTACT</q-tab>
      </q-tabs>
    </q-layout-footer>

</q-layout>
</template>
<script>
// import { openURL } from 'quasar'
//
import { QTabs, QTab, QBtnDropdown, QLayoutFooter } from 'quasar'
export default {
  name: 'HomePageLayout',
  components: {
    QTabs,
    QTab,
    // QBtn
    QBtnDropdown,
    QLayoutFooter
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
</style>
