<template>
  <LoadingScreen :loading="loading"></LoadingScreen>
  <Header :darkmode="darkMode" @switch-color="switchColor" @switch-language="switchLanguage"></Header>
  <IntroPage></IntroPage>
  <DescriptionPage></DescriptionPage>
  <WorkPage></WorkPage>
  <ContactPage></ContactPage>
</template>

<script>

import ContactPage from "./components/ContactPage";
import DescriptionPage from "./components/DescriptionPage";
import Header from './components/Header.vue'
import IntroPage from "./components/IntroPage";
import WorkPage from "./components/WorkPage";

import LoadingScreen from "./components/LoadingScreen";
const axios = require('axios');

export default {
  name: 'App',
  components: {
    DescriptionPage,
    ContactPage,
    IntroPage,
    Header,
    LoadingScreen,
    WorkPage
  },
  data() {
    return {
      darkMode: false,
      loading: true,
    }
  },
  mounted() {
    let localTheme = localStorage.getItem('theme');
    if (!localTheme) {
      let lat  = 53.550052;
      let long = 9.967203;

      axios.get('https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + long + '&formatted=0')
          .then(response => {
            console.log(response)
            let data = response.data
            let sunriseAt = new Date(data.results.sunrise);
            let sunsetAt  = new Date(data.results.sunset);
            let now       = new Date();

            this.darkMode = now.getTime() < sunriseAt.getTime() || now.getTime() > sunsetAt.getTime();
            document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark-mode' : '');
            this.loading = false;
          });
    }  else {
      document.documentElement.setAttribute('data-theme', localTheme);
      this.loading = false;
    }

    let localLanguage = localStorage.getItem('lang');
    if (localLanguage) {
      this.$i18n.locale = localLanguage;
    }

  },
  methods: {
    switchColor() {
      this.darkMode = !this.darkMode;
      document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark-mode' : '');
      localStorage.setItem('theme', this.darkMode ? 'dark-mode' : '');
    },
    switchLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'de' ? 'en': 'de';
      localStorage.setItem('lang', this.$i18n.locale);
    }
  }
}
</script>

<style>
@import './assets/styles/variables.css';
</style>


<style>

* {
  z-index: 1;
}
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: var(--background-color);
}
#app {
  font-family: var(--paragraph-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  background-color: var(--background-color);
  position: absolute;
  top: 0;
  width: 100%;
}
h1, h2, h3 {
  font-family: var(--header-font-family);
  font-size: 6pc;
  margin: 0;
  color: var(--font-color);
}
h2, h3 {
  font-size: 3pc;
}
p {
  font-family: var(--paragraph-font-family);
  font-weight: 300;
  font-size: 1.2pc;
  margin: 20px 0;
}
.page {
  height: 100vh;
  width: 100%;
  vertical-align: middle;
  display: table;
  box-sizing: border-box;
}
.page .container {
  height: 100%;
  width: 100%;
  vertical-align: middle;
  display: table-cell;
  box-sizing: border-box;
}
.btn {
  display: inline-block;
  color: var(--background-color);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  line-height:30px;
  text-align:center;
  font-size:20px;
  border-radius: 50px;

}
.btn.round {
  border-radius: 50%;
  width:30px;
  height:30px;
  padding: 10px;
}
.primary {
  background: var(--primary-color);
}
.secondary {
  background: var(--secondary-color);
}
.tertiary {
  background: var(--tertiary-color);
}
.lowkey {
  background: var(--lowkey-color);
}
.btn:hover {
  opacity: 0.4;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.container {
  position: relative;
  z-index: 0;
}
.container .background {
  content: "";
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100%;
  background-position: 90% center;
  background-size: contain;
  background-repeat: no-repeat;
}
.content {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
