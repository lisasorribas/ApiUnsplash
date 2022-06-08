<template>
  <div class="search-bar">
    <!-- Placeholder est une props qui peut être passée au composant, sert lors de la redirection vers /search?query=unerecherche pour afficher "unerecherche" / -->
    <input type="text" :placeholder="placeholder !== undefined ? placeholder : 'Fait ta recherche !'" ref="search">
    <button type="submit" class="searchButton"><img src="../assets/img/search.svg" alt="" @click="emitSearch"></button>
  </div>
</template>

<script>
export default {
  props: ['placeholder'],
  methods: {
    // Méthode qui émet un evenement Vue à écouter pour les parents lors du clique sur la loupe, et fait passer en paramètre le contenu de l'input
    emitSearch() {
      this.$emit('searchChanged', this.$refs.search)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  max-width: 800px;
  background-color: #F2E9E4;
  padding: 1rem 3.5rem;
  border-radius: 1.2rem;
  border: 3px solid #FDD3BC;
  margin-bottom: 5rem;

  input {
    background-color: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.7);
    height: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    height: 70%;
    cursor: pointer;

    img {
      height: 100%;
    } 
  }
}
</style>