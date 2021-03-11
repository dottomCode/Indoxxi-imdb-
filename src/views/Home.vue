<template>
  <div class="home">
    <!-- <Navbar /> -->
    <div class="container is-fullhd">
      <div class="notification is-info">
        Indoxxi's <strong>number one movie search</strong> site that uses free
        <b><a href="https://www.tvmaze.com/api">api</a></b>
      </div>
    </div>
    <div class="columns">
      <div class="column m-5">
        <b-image
          src="https://images.unsplash.com/photo-1575727735640-ed79e28955d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=408&q=80"
          alt="A random image"
          ratio="6by4"
        ></b-image>
      </div>
      <div class="column">
        <p
          class="has-text-warning-dark is-size-2 has-text-weight-bold is-family-primary mt-6"
        >
          Find the best movies now !
        </p>
        <span class="has-text-grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          delectus nostrum aperiam sint tempora soluta autem nulla adipisci
          illum temporibus nihil neque, ipsa similique corrupti?
        </span>
        <section class="mt-3">
          <b-button @click="showBtn">Find Movie</b-button>
        </section>
      </div>
    </div>

    <div class="container" v-if="view == true">
      <b-field label="search">
        <b-input v-model="search"></b-input>
      </b-field>
      <div class="columns">
        <div class="column">
          <div class="card" v-for="(data, i) in info" :key="i.show">
            <!-- <div class="card-image">
              <figure class="image is-64x64	">
                <img :src="data.show.image[0]" alt="Placeholder image" />
              </figure>
            </div> -->
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ data.show.name }}</p>
                  <p class="subtitle is-6 mb-0">
                    Rating :{{ data.show.rating.average }}
                  </p>
                  <!-- <span v-for="(b, tg) in data" :key="tg">
                    <b-tag>
                      {{ b.genres }}
                    </b-tag>
                  </span> -->
                </div>
              </div>

              <div class="content" v-html="data.show.summary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      view: true,
      info: "",
      search: "",
    };
  },
  methods: {
    showBtn() {
      this.view = true;
      console.log(this.info);
    },
  },
  mounted() {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${this.search}`)
      .then((res) => (this.info = res.data));
  },
};
</script>
