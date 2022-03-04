<template>
  <div class="page">
    <div class="container">
      <div class="content">
        <h2 v-scrollanimation>{{ $t("work.header") }}</h2>
        <p v-scrollanimation  v-html="$t('work.paragraph')"></p>
        <div class="projects">
          <project-view v-for="project in projects" :key="project" :project="project"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectView from './ProjectView.vue'
export default {
  name: "WorkPage",
  components: {
    ProjectView,
  },
  data: function () {
    return {
      projects: [
        {
          title: 'PawPal',
          identifier: 'pawpal',
          tags: [
            'Vue',
            'Ionic',
            'Node.js',
            'Express.js',
          ],
          image: 'chat.png',
          links: [
            {
              type: 'git',
              hint: 'App',
              url: 'https://github.com/Jennow/paw_pal'
            },
            {
              type: 'git',
              hint: 'API',
              url: 'https://github.com/Jennow/paw_pal_api'
            },
            // {
            //   type: 'web',
            //   url: 'gibhub.com'
            // },
          ]
        },
        {
          title: 'Coworking Explorer',
          identifier: 'cwe',
          tags: [
            'Vue',
            'Google Maps API',
            'Progresive Web App',
            'Node.js',
            'Express.js',
            'Cheerio',
          ],
          image: 'coworking-explorer_home.png',
          links: [
            {
              type: 'git',
              hint: 'App',
              url: 'https://github.com/Jennow/coworking-explorer-map'
            },
            {
              type: 'git',
              hint: 'API',
              url: 'https://github.com/Jennow/coworking-explorer-map-api'
            },

            {
              type: 'gplay',
              url: 'https://play.google.com/store/apps/details?id=com.jencoding.coworking_explorer.twa'
            },
            {
              type: 'web',
              url: 'https://coworking-explorer.jencoding.com'
            },
          ],
        },
        {
          title: 'bluerizon',
          identifier: 'bluerizon',
          tags: [
            'Woocommerce',
            'eCommerce',
            'PHP',
            'HTML',
            'JavaScript',
            'CSS',
            'Custom Gutenberg Blocks'
          ],
          image: 'bluerizon.png',
          links: [
            {
              type: 'web',
              url: 'https://blue-rizon.com'
            },
          ]
        },
        ]
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 790px){

  .projects {
    margin-top: 10vh;
  }
}
</style>



