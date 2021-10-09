<template>
  <div class="home">
    <Navbar />
    <div class="abs"></div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-9 is-offset-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          perferendis ab suscipit, ipsum autem commodi. Fugiat facilis pariatur
          esse voluptatem nobis illum aperiam sed quidem, in eos reiciendis,
          sunt modi!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      view: false,
      info: [],
      keyword: "",
      data: [],
    };
  },
  watch: {
    keyword: "search",
  },

  methods: {
    showBtn() {
      this.view = true;
      // console.log(this.info);
    },
    search() {
      axios
        .get(`http://www.omdbapi.com/?apikey=14123fb&s=${this.keyword}`)
        .then((res) => (this.info = res.data.Search));
    },
  },
};
</script>

<style scoped>
.abs {
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  /* z-index: 1; */
  background-image: url("https://images.unsplash.com/photo-1629208113515-4569380efcb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
  object-fit: none;
}
</style>
