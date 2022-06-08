<template>
  <div class="aleatoire" id="information">
    <div class="aleatoire-img">
      <a id="imageLink">
        <img class="aleatoire-img-file" alt="" :src=url>
      </a>
    </div>
    <div class="aleatoire-content">
      <h2 class="aleatoire-content-title" v-if="title">{{ title }}</h2>
      <h2 class="aleatoire-content-title" v-else>Aucun titre</h2>
      <div class="likes">
        <p>{{likes}}</p>
        <img src="../assets/img/red-heart-svgrepo-com.svg" alt="" class="svg-taille">
      </div>
        
      <div class="infos">
        <div class="auteur">
          <p class="auteur-nom">Nom de l'auteur : {{ name }}</p>
        </div>

        <div class="RS">
          <a :href="'https://www.instagram.com/' + instagram" target="_blank">
            <img src="../assets/img/instagram-svgrepo-com.svg" alt="" class="svg-taille">
          </a>
        </div>

        <p class="texte-api" v-if="appareil">Modèle : {{ appareil }} </p>
        <p class="texte-api" v-if="place">Lieu : {{ place }} </p>
      </div>
      <div class="ctas">
        <!-- Au click, recharge une nouvelle photo en appelant la méthode aussi appelée au mounted() -->
        <button class="btn" ref="randomButton" type="button" v-on:click="getPhotos">Aléatoire</button>
        <router-link class="btn" :to="'/photo/' + id">Voir en détail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      likes: 0,
      name: '',
      appareil: '',
      place: '',
      instagram: '',
      facebook: '',
      url: '',
      test: false,
      id: ''
    }
  },

  mounted() {
    this.getPhotos()
  },

  methods: {
    getPhotos() {
      // Va récuperer une photo aléatoire sur le Endpoint Unsplash puis fetch les données dans les data du composant
      const endpoint="https://api.unsplash.com/photos/random/?client_id=hOyhq0eRYiJM1wqXAOPGiLLwfiikQEmgEI0X1CiJLY4";
      fetch(endpoint)
        .then((response)=>
            response.json()
        )
        .then((r)=>{
          this.name = r.user.name
          this.url = r.urls.regular
          this.likes = r.likes
          this.place = r.location.city
          this.title = r.description
          this.instagram = r.user.social.instagram_username
          this.facebook = ''
          this.appareil = r.exif.name
          this.id = r.id
        }
        )
    }
  }
}
</script>