<template>
    <div class="home">
        <Navbar />
        <b-container>
            <b-row>
                <b-col cols="6" lg="8" class="mx-auto my-4 py-3">
                    <h4>Seacrh Movie ya</h4>
                    <input type="text" class="w-100 px-3 py-3" placeholder="Enter the movie film..">
                </b-col>
            </b-row>
        </b-container>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue' 
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Home',
    components: {
        // HelloWorld,
        Navbar
    }
}
</script>
