<template>
  <div class="page project-page">
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
          title: 'Asset Tracker',
          identifier: 'asset_tracker',
          mainUrl: 'https://github.com/Jennow/asset_tracker',
          tags: [
            'Angular',
            'Typescript',
            'Tailwind',
            'Node.js',
            'Express.js',
          ],
          image: 'asset_tracker.webp',
          links: [
            {
              type: 'git',
              hint: 'App',
              url: 'https://github.com/Jennow/asset_tracker'
            },
            {
              type: 'git',
              hint: 'API',
              url: 'https://github.com/Jennow/asset_tracker_api'
            }
          ]
        },
        {
          title: 'PawPal',
          identifier: 'pawpal',
          mainUrl: 'https://github.com/Jennow/paw_pal',
          tags: [
            'Vue',
            'Ionic',
            'Node.js',
            'Express.js',
          ],
          image: 'pawpal.png',
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
            {
              type: 'gplay',
              url: 'https://play.google.com/store/apps/details?id=com.jencoding.paw_pal'
            },
          ]
        },
        {
          title: 'Coworking Explorer',
          identifier: 'cwe',
          mainUrl: 'https://play.google.com/store/apps/details?id=com.jencoding.coworking_explorer.twa',
          tags: [
            'Vue',
            'Google Maps API',
            'Progresive Web App',
            'Node.js',
            'Express.js',
            'Cheerio',
          ],
          image: 'coworking-explorer.png',
          links: [
            {
              type: 'git',
              hint: 'App',
              url: 'https://github.com/Jennow/coworking-explorer-map'
            },
            {
              type: 'git',
              hint: 'API',
              url: 'https://github.com/Jennow/coworking-explorer-api'
            },

            {
              type: 'gplay',
              url: 'https://play.google.com/store/apps/details?id=com.jencoding.coworking_explorer.twa'
            },
            {
              type: 'web',
              url: 'https://coworking-explorer.jeniferprochnow.com'
            },
          ],
        },
        {
          title: 'bluerizon',
          identifier: 'bluerizon',
          mainUrl: 'https://blue-rizon.com',
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
.project-page {
    margin-top: 20vh;
}

@media screen and (min-width: 790px){

  .projects {
    margin-top: 10vh;
  }
}
</style>



