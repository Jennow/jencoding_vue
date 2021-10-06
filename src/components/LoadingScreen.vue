<template>
  <div class="screen" :class="{'loading' : loading}">
    <div class="container">
      <div class="content">
        <p>INSERT LOADING ANIMATION</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    loading: Boolean
  }
}
</script>

<style scoped>
.screen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: none;
  z-index: 1000;
}

.screen.loading {
  display: block;
}
</style>
