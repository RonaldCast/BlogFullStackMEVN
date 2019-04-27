
<template>

  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div class="title-card">
            <div class="headline">
              <v-btn flat v-bind:to="`/movies/${movie._id}`">
              {{ movie.name }}
              </v-btn>
              </div>
            <span class="grey--text">{{ movie.release_year }} ‧ {{movie.genre}} </span>
          </div>
        </v-card-title>{{movie.description}}<v-card-text>
        </v-card-text>
        <v-card-actions>
          <!--<v-btn  flat color="purple">Rate this movie</v-btn>-->
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
/* eslint-disable */
import axios from 'axios'; 
  export default {
    name: 'HelloWorld',
    data() {
      return {
        movies:[]
      };
    },
    mounted() {
      this.fectchMovies()
    }, 
    methods: {
      async fectchMovies(){
        return axios({
          method:'get',
          url:'http://localhost:8082/movies',
        }).then((response) => {
          this.movies = response.data.movies;
        })
        .catch(() => {})
      }
    },
  };
</script>

<style scoped>

</style>


