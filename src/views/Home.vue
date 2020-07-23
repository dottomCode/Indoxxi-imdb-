<template>
    <div class="home">
        <Navbar />
        <b-container>
            <b-row class="sticky-top bg-white">
                <b-col cols lg="8" class="mx-auto my-2 py-3">
                    <h5>Search Movie</h5>
                    <input type="text" class="w-100 px-3 py-3" placeholder="Enter the movie film..">
                    <!-- <p>{{dataFilm.Title.radit}}</p> -->
                    {{dataFilm}}
                </b-col>
            </b-row>
    
            <!-- <b-row>
                <b-col cols md="4">
                    <b-card :title="dataFilm.Title" :img-src="film.Poster" img-alt="Image" img-top tag="article" class="mb-2">
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
    
                        <b-button href="#" variant="primary">Synopsis</b-button>
                    </b-card>
                </b-col>
            </b-row> -->
        </b-container>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Home',
    components: {
        // HelloWorld,
        Navbar
    },
    data() {
        return {
            dataFilm: [],
            film:"Radit"
        }
    },
    mounted() {
        axios
            .get("http://www.omdbapi.com/?apikey=25bd8f78&s=")
            // .get("https://my-json-server.typicode.com/dottomCode/API-Test/stores")
            .then(res => (this.dataFilm = res.data))
            .catch(err => console.log(err));
    }
}
</script>
