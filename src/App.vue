<script>
import HomeView from './views/HomeView.vue';
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  components: {
    HomeView,
    CustomHeader,
    CustomFooter
  }
} 
</script>

<template>
  <main>
    <!-- CustomHeader et CustomerFooter sont des éléments statiques même au changement de routes -->
    <CustomHeader />
    <!-- Element dynamique selon la route -->
    <router-view class="app"></router-view>
    <CustomFooter />
  </main>
</template>

<style>
</style>