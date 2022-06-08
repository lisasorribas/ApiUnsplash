<script>
import CustomHeader from '../components/CustomHeader.vue'
import CustomFooter from '../components/CustomFooter.vue'

export default {
  components: {
    CustomHeader,
    CustomFooter
  },

  data() {
    return {
      r: undefined
    }
  },

  mounted() {
    // Appelle la méthode dés le chargement de la page
    this.getPhoto()
  },

  methods: {
    getPhoto() {
      // Récupère les infos d'une photo spécifique suivant l'id passé en paramètre
      const endpoint="https://api.unsplash.com/photos/" + this.$route.params.id + "?client_id=hOyhq0eRYiJM1wqXAOPGiLLwfiikQEmgEI0X1CiJLY4";
      fetch(endpoint)
        .then((response)=>
          response.json()
        )
        .then((r)=>{
          this.r = r
        }
        )
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Utilisation des v-if pour ne pas afficher de labels seuls -->
    <h2>Photo <span v-if="r">{{ r.id }}</span></h2>
    <div class="aleatoire" v-if="r" id="information">
      <div class="aleatoire-img">
        <a id="imageLink">
          <img class="aleatoire-img-file" alt="" :src=r.urls.regular>
        </a>
      </div>
      <div class="aleatoire-content">
        <h2 class="aleatoire-content-title" v-if="r.description">{{ r.description }}</h2>
        <h2 class="aleatoire-content-title" v-else>Aucun titre</h2>
        <div class="likes">
          <p>{{ r.likes }}</p>
          <img src="../assets/img/red-heart-svgrepo-com.svg" alt="" class="svg-taille">
        </div>
          
        <div class="infos">
          <div class="auteur">
            <p class="auteur-nom">Nom de l'auteur : {{ r.user.name }}</p>
          </div>

          <div class="RS">
            <a :href="'https://www.instagram.com/' + r.user.social.instagram_username" target="_blank">
              <img src="../assets/img/instagram-svgrepo-com.svg" alt="" class="svg-taille">
            </a>
          </div>

          <p class="texte-api" v-if="r.exif.name">Modèle : {{ r.exif.name }} </p>
          <p class="texte-api" v-if="r.location.city">Lieu : {{ r.location.city }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/home.scss';
@import '@/assets/styles/global.scss';
@import '@/assets/styles/search.scss';
</style>