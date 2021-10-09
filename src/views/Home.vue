<template>
  <div class="home">
    <Navbar />
    <div class="abs"></div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-9 is-offset-3">
          <p>Cinema 21</p>
          <br />
          <b-field label-position="on-border">
            <b-input v-model="keyword" placeholder="Search"></b-input>
          </b-field>
          <div class="columns is-multiline">
            <div class="column is-4" v-for="(dt, i) in data" :key="i">
              <b-skeleton height="130px" :active="loading"> </b-skeleton>
              <template v-if="!loading">
                <div class="card">
                  <div class="card-image">
                    <b-image
                      :src="dt.Poster"
                      :placeholder="dt.Poster"
                      alt="A problematic image"
                      ratio="5by3"
                    ></b-image>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      keyword: "",
      data: [],
      loading: false,
    };
  },
  watch: {
    keyword: "search",
  },

  methods: {
    search() {
      this.loading = true;
      this.$http
        .get(`http://www.omdbapi.com/?apikey=14123fb&s=${this.keyword}`)
        .then((res) => {
          this.data = res.data.Search;
          this.loading = false;
        });
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
