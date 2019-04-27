<template>
  <v-form v-model="valid" ref="form" lazy-validation>
  
  
  
    <v-text-field label="Movie Name" v-model="name" :rules="nameRules" required></v-text-field>
  
  
  
    <v-text-field name="input-7-1" label="Movie Description" v-model="description" multi-line required :rules="releaseRules"></v-text-field>
  
  
  
    <v-select label="Movie Release Year" v-model="release_year" :items="years"></v-select>
  
  
  
    <v-text-field label="Movie Genre" v-model="genre" required :rules="genreRules"></v-text-field>
  
  
  
    <v-btn @click="submit" :disabled="!valid">
  
      submit
  
    </v-btn>
  
  
  
    <v-btn @click="clear">clear</v-btn>
  
  
  
  </v-form>
</template>
<script>
  /* eslint-disable */
  
  import axios from 'axios';
  export default {

   data() {
  
      return {
  
        name: "",
        nameRules: [v => !!v || "Movie name is requiered"],
        description: "",
        releaseRules: [ v => !!v || 'Movie release year is required'],
        release_year: null,
        years: ["2018", "2017", "2016", "2015"],
        genre:"",
        genreRules: [v => !!v || 'Movie genre year is required',
        v => (v && v.length <= 80) || 'Genre must be less than equal to 80 characters.',]
  
      };
  
    },
  
    methods: {
  
      submit() {
  
        if (this.$refs.form.validate()) {
          //axios 
          return axios({
              method: 'post',
              data: {
                name: this.name,
                description: this.description,
                release_year: parseInt(this.release_year),
                genre: this.genre,
              },
              url: 'http://localhost:8082/movies',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(() => {
              this.$swal(
                'Great!',
                'Movie added succesfully!',
                'success'
              )
              this.$router.push({
                name: 'Home'
              });
              this.$refs.form.reset()
            })
            .catch((err) => {
                 console.log(err)
                this.$swal(
                'Oh oo!',
                'Could not add the movie!',
                'error',
               )
            })
        }
        return true
      },
  
      clear() {
  
        this.$refs.form.reset()
  
        console.log(this.$refs.form)
  
      }
  
    }
  
  };
</script>
