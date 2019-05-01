<template>
  <div class="hello">
    <h1>The count is: {{fetchCount}}</h1>
   <button class="btn btn-primary" @click="increment">Increase</button>
 <button class="btn btn-primary" @click="decrement">Decrease</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',

//para mappear los getters y acceder a ellos por su nombre
  computed: mapGetters([ 
    'fetchCount'
  ]),
  methods: mapActions(['increment','decrement']),
  
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
