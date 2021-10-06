<template>
<div class="page">
  <div class="container">
    <div class="content">
    <h2 v-scrollanimation>{{ $t("description.header") }}</h2>
    <p v-scrollanimation v-html="$t('description.paragraph')"></p>
    <div class="background"/>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DescriptionPage"
}
</script>

<style scoped>
  .container .background {

  }

</style>
