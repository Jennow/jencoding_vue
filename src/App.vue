<template>
  <LoadingScreen :loading="loading"></LoadingScreen>
  <Header :darkmode="darkMode" @switch-color="switchColor" @switch-language="switchLanguage"></Header>
  <IntroPage></IntroPage>
  <WorkPage></WorkPage>
  <CVPage></CVPage>
  <skills-page/>
  <ContactPage></ContactPage>
  <div class="footer-links">
    <a :title="link.name" target="_blank" v-for="link in links" :key="link" :href="link.url">
      <i :class="link.symbol"></i>
    </a>
  </div>
</template>

<script>

import ContactPage from "./components/ContactPage";
import SkillsPage from "./components/SkillsPage";
import Header from './components/Header.vue'
import IntroPage from "./components/IntroPage";
import WorkPage from "./components/WorkPage";
import CVPage from "./components/CVPage.vue";

import LoadingScreen from "./components/LoadingScreen";

export default {
  name: 'App',
  components: {
    ContactPage,
    IntroPage,
    CVPage,
    Header,
    LoadingScreen,
    WorkPage,
    SkillsPage
  },
  data() {
    return {
      darkMode: false,
      loading: true,
      links: [
        {
          name: 'GitHub',
          symbol: 'fab fa-github',
          url: 'https://github.com/Jennow',
        },
        {
          name: 'Xing',
          symbol: 'fab fa-xing',
          url: 'https://www.xing.com/profile/Jenifer_Prochnow',
        },
        {
          name: 'LinkedIn',
          symbol: 'fab fa-linkedin-in',
          url: 'https://www.linkedin.com/in/jenifer-prochnow-787539223/',
        },
        {
          name: 'Instagram',
          symbol: 'fab fa-instagram',
          url: 'https://www.instagram.com/jeniprochnow/',
        },
        {
          name: 'PDF Download',
          symbol: 'fas fa-file-pdf',
          url: require("@/assets/pdf/Lebenslauf__Jenifer_Prochnow.pdf"),
        },
      ]
    }
  },
  mounted() {
    let localTheme = localStorage.getItem('theme');

    if (!localTheme) {

      let now       = new Date();
      let sunriseAt = new Date();
      let sunsetAt  = new Date();

      sunriseAt.setHours(6, 0, 0);
      sunsetAt.setHours(18, 0, 0);

      this.darkMode = now.getTime() < sunriseAt.getTime() || now.getTime() > sunsetAt.getTime();
      document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark-mode' : '');
      this.loading = false;
    }  else {
      document.documentElement.setAttribute('data-theme', localTheme);
      this.darkMode = localTheme === 'dark-mode';
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
      localStorage.setItem('theme', this.darkMode ? 'dark-mode' : 'light-mode');
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
  background-image: var(--background-gradient);

  position: absolute;
  top: 0;
  width: 100%;
}
h1, h2, h3 {
  font-family: var(--header-font-family);
  font-size: 4pc;
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
  width: 100%;
  height: 100%;
  background-position: 90% center;
  background-size: contain;
  background-repeat: no-repeat;
}
.content {
  width: 100%;
  max-width: 1200px;
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
  transition: all 1s ease-out;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.footer-links a {
  color: var(--font-color);
  font-size: 2rem;
  margin: 10px;
  transition: all 0.2s ease-in-out;
}

.footer-links a:hover {
  color: var(--primary-color);
  transform: translateY(-3px);
}

@media screen and (min-width: 790px) {
  .content {
    width: calc(100% - 40px);
  }
  .glass {
      padding: 20px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
  }
}

@media screen and (min-width: 1350px) {

  .footer-links {
    position: fixed;
    bottom: 0;
    left: 20px;
    flex-direction: column;
  }

}

.mobile-glass {
    padding: 20px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

</style>
