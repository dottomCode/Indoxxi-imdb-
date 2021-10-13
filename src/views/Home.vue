<template>
  <div class="home">
    <div class="container">
      <div class="columns is-mobile">
        <div class="abs"></div>
        <div class="column is-9 is-offset-3">
          <p class="neon is-size-6">
            <span class="is-size-3"> Cinema XXI</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            expedita minus officiis provident voluptate! Quas doloribus dolor
            impedit minus eveniet dolores beatae laborum, enim eum deleniti
            distinctio repellendus fugit consectetur.
          </p>

          <br />
          <b-field label-position="on-border">
            <b-input v-model="keyword" placeholder="Search"></b-input>
          </b-field>
          <div class="columns is-multiline mb-3">
            <div class="column is-4" v-for="(dt, i) in data" :key="i">
              <b-skeleton height="130px" :active="loading"> </b-skeleton>
              <template v-if="!loading">
                <div class="card" @click="getModal(dt)">
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
              <b-modal v-if="info" v-model="modal" :width="800">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img
                            :src="info.Poster"
                            :placeholder="info.Poster"
                            alt="A problematic image"
                            ratio="5by3"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{{ info.Title }}</p>
                        <p class="subtitle is-6">
                          # {{ infoCard.Genre }} - @{{ infoCard.Director }}
                        </p>
                        <b-taglist attached>
                          <b-tag type="is-warning">
                            &#9734; {{ infoCard.imdbRating }}
                          </b-tag>
                          <b-tag type="is-info">{{ infoCard.Runtime }}</b-tag>
                          <b-tag type="is-dark">{{ infoCard.Language }}</b-tag>
                        </b-taglist>
                        <b-taglist>
                          <b-tag type="is-primary">
                            {{ infoCard.Awards }}
                          </b-tag>
                          <b-tag type="is-info">
                            {{ infoCard.Actors }}
                          </b-tag>
                        </b-taglist>

                        <div class="content">
                          {{ infoCard.Plot }}
                          <br />
                          <small
                            >{{ infoCard.Released }} - @
                            {{ infoCard.Production }}</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      keyword: "",
      info: "",
      infoCard: "",
      data: [],
      modal: false,
      loading: false,
    };
  },
  watch: {
    keyword: "search",
  },

  methods: {
    search() {
      this.loading = true;
      if (this.keyword.length > 3) {
        this.$http
          .get(`https://www.omdbapi.com/?apikey=14123fb&s=${this.keyword}`)
          .then((res) => {
            this.data = res.data.Search;
            this.loading = false;
          });
      } else {
        this.loading = false;
      }
    },
    getModal(data) {
      this.modal = true;
      this.info = data;
      this.$http
        .get(`https://www.omdbapi.com/?apikey=14123fb&i=${this.info.imdbID}`)
        .then((res) => {
          this.infoCard = res.data;
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
.neon {
  color: #ffa500;
  text-shadow: 0 0 7px #f00, 0 0 10px #ff7736, 0 0 21px #ef0000,
    0 0 42px #6f2109, 0 0 82px #27ff00, 0 0 92px #04ffab, 0 0 102px #0fa,
    0 0 151px #0fa;
}
</style>
