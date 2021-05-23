<template>
  <div>
    <div class="container is-fullhd p-fixed">
      <div class="notification is-warning is-radiusless p-5">
        Indoxxi's <strong>number one movie search</strong> site that uses free
        <b><a href="https://www.tvmaze.com/api">api</a></b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.p-fixed {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
