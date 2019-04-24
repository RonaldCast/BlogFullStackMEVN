<template>
<div>
  <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="article in displayArticle" :key="article.id">
         <div class="card mb-2">
           <img  :src="article.imageURL" class="card-img-top" alt="">
           <div class="card-body">
             <h5>{{article.title}}</h5>
             <p>{{article.description}}</p>
           </div>
         </div>
        </div>
      </div>
    </div>
 
      <div>
 <div class="btn-group col-md-2 offset-md-5 mb-5">
      <button
       type="button" 
       class="btn btn-sm-outline-secondary"
      
        v-if="page != 1"
        @click="page--">
        Before
      </button>

      <button 
       v-for="pageNumber in pages.slice(page-1, page+7)" :key="pageNumber"
        class="btn btn-sm-outline-secondary" 
         @click="page = pageNumber "
       type="button" >
       {{pageNumber}}
       </button>
      <button  
        type="button"
        @click="page++"
        v-if="page < pages.length"
       class="btn btn-sm-outline-secondary">
        Next
      </button>
    </div> 
    </div>
  </div>

    
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      baseURL: "http://localhost:3000",
      page: 1,
      perPage: 12,
      pages: []
    };
  },

  created() {
    this.getArticle();
  },

  methods: {
    async getArticle() {
      const res = await this.axios.get(`${this.baseURL}/articles`);
      this.articles = res.data;
      console.log(res.data);
    },
    paginate(article) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return article.slice(from, to);
    },
    setArtitle(){
      let numberOfPage = Math.ceil(this.articles.length / this.perPage)
      for(let i = 1; i < numberOfPage; i++){
        this.pages.push(i)
      }

    }

  },

  computed: {
    displayArticle() {
      return this.paginate(this.articles);
    }
  },
  watch: {
    articles(){
      this.setArtitle(); 
    }
  },
};
</script>