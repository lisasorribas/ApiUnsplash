<script>
import InfoCard from '../components/InfoCard.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  components: {
    InfoCard,
    SearchBar,
  },
  methods: {
    // Redirige vers /search?query=id au click sur la loupe de la search bar
    search(e) {
      this.$router.push({
        path: '/search', 
        query: { query: e.value}
      });
    }
  }
}
</script>

<template>
  <div class="container home">
    <section class="home__random">
      <h2>Photo aléatoire</h2>
      <InfoCard />
    </section>
    <section class="home__search">
      <h2>Recherche de photo</h2>
      <search-bar @searchChanged='search' />
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/home.scss';
@import '@/assets/styles/global.scss';
</style>