<template>
<div class="page">
  <div class="container">
    <div class="content" style="position:relative">
      <div v-scrollanimation class="profile fg"/>
      <div v-scrollanimation class="profile bg"/>
      <div v-scrollanimation class="intro">
        <p class="pretext">{{ $t('pretext') }}</p>
        <h1>{{ $t("h1") }}</h1>
        <p class="subheader" v-html="$t('maincopy')"></p>
      </div>
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
  .container .profile.fg {
    background-image: url('~@/assets/jeni_t.webp');
 }

  .container .profile.bg {
    background-image: url('~@/assets/jeni.webp');
    opacity: 0.3;
  }

  .container .profile:hover {
    opacity: 1;
  }

  .container .profile {
    border-radius: 50%;
    height: 40vw;
    width: 40vw;
    max-width: 450px;
    max-height: 450px;
    top: calc(-40vw - 40px);
    transform: translateX(-50%);
    left: 50%;
    margin: auto;
    margin-right: 1rem;
    background-size: cover;
    position: absolute;
  }

  .pretext {
    margin: 0;
  }
  .subheader {
    font-size: 1.6rem;
  }

    .container .profile.before-enter {
    opacity: 1;
    transform: translateX(-50%) translateY(50px);
  }

  .container .profile.enter {
      transform: translateX(-50%) translateY(0);
  }

  @media only screen and (min-width: 900px) {
  .container .profile {
    border-radius: 50%;
    height: 40vw;
    width: 40vw;
    max-width: 450px;
    max-height: 450px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    margin: auto;
    margin-right: 1rem;
    background-size: cover;
  }
  .container .profile.before-enter {
    transform: translateX(100px) translateY(-50%);
  }

  .container .profile.enter {
      transform: translateX(0) translateY(-50%);
  }
  }
  @media only screen and (max-width: 899px) {
    .intro {
      margin-top: calc(40vw + 40px)
    }
  }
</style>
