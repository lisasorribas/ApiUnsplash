<script>
import CustomHeader from '../components/CustomHeader.vue'
import CustomFooter from '../components/CustomFooter.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  components: {
    CustomHeader,
    CustomFooter,
    SearchBar
  },
  data() {
    return {
      query: undefined,
      results: undefined
    }
  },
  mounted() {
    // Recherche des résultats pour le contenu de ?query dans l'URL
    this.searchPhoto({ value: this.$route.query.query })
  },
  methods: {
    searchPhoto(e) {
      this.query = e

      // Si le paramètre n'est pas une string, c'est un event (sorti de l'input) donc on prend sa valeur
      if(typeof e !== 'string') {
        this.query = e.value
      }

      // Recherche des photos selon une string
      const endpoint="https://api.unsplash.com/search/photos/?page=1&query=" + this.query + "&client_id=hOyhq0eRYiJM1wqXAOPGiLLwfiikQEmgEI0X1CiJLY4";
      fetch(endpoint)
        .then((response)=>
          response.json()
        )
        .then((r)=>{
          this.results = r.results
        })
        .catch((err) => {
          console.log(err)
        })
    }  
  }
}
</script>

<template>
  <div class="container search">
    <h2>Recherche</h2>
    <section class="search__bar">
      <search-bar @searchChanged='searchPhoto' :placeholder="$route.query.query" />
    </section>
    <div v-if="results" class="results">
      <!-- Boucle for qui vient afficher chaque résultat indépendamment -->
      <div v-for="result in results" :key="result.id" class="result">
        <router-link :to="'/photo/' + result.id" class="result__cover"><img :src="result.urls.regular" /></router-link>
        <p class="result__title">{{ result.description ? result.description : 'No title' }}</p>
        <div class="result__likes">
          <p>{{ result.likes }}</p>
          <img src="../assets/img/red-heart-svgrepo-com.svg" alt="" class="svg-taille">
        </div>
        <p class="result__author">{{ result.user.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/search.scss';
@import '@/assets/styles/home.scss';
@import '@/assets/styles/global.scss';
</style>