<template>
<div class="page">
  <div class="container">
    <div class="content">
      <p class="pretext">{{ $t('pretext') }}</p>
      <h1 v-scrollanimation>{{ $t("h1") }}</h1>
      <p class="subheader"  v-scrollanimation v-html="$t('maincopy')"></p>
      <div class="background"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "IntroPage",
}
</script>

<style scoped>
  .container .background {
    background-image: url('~@/assets/floral_pattern.webp');
  }

  .pretext {
    margin: 0;
  }
  .subheader {
    font-size: 1.6rem;
  }
</style>
