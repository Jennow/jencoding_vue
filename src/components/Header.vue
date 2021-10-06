<template>
  <ul class="header">
    <li>
      <a @click="$emit('switch-color')" class="btn round primary"><i :class="['fas', darkmode ? 'fa-sun' : 'fa-moon']"></i></a>
      <a @click="$emit('switch-language')" class="btn round secondary">{{ $i18n.locale }}</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Header',
  props: {
    darkmode: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    position: fixed;
    right: 0;
    top: 0;
    padding: 10px;
  }
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
</style>
