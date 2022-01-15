<template>
  <div class="page">
    <div class="container">
      <div class="content">
        <h2 v-scrollanimation>{{ $t("work.header") }}</h2>
        <p v-scrollanimation  v-html="$t('work.paragraph')"></p>
        <div class="projects">
          <a target="_blank" v-for="project in projects" :key="project.title" :href="project.url" class="project">
              <div class="background-img" :style="{ backgroundImage: `url(${require('@/assets/' + project.image )})` }"></div>
              <h4 class="btn primary">{{project.title }}</h4>
              <span class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage",
  data: function () {
    return {
      projects: [
        {
          title: 'Coworking Explorer',
          short: 'Progressive Web App with Vue.js and a Page Crawler API',
          tags: [
            'Vue',
            'Google Maps API',
            'Progresive Web App',
          ],
          image: 'coworking-explorer_home.png',
          url: 'https://coworking-explorer.jencoding.com',  
        },
        {
          title: 'bluerizon',
          short: 'Wordpress eCommerce Website',
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
          url: 'https://blue-rizon.com/',
        },
        ]
    }
  }
}
</script>

<style :scoped>
@media screen and (min-width: 560px){
  .projects {
    grid-template-columns: 1fr;
  }
}

.projects {
  display: grid;
  column-gap: 20px;
  row-gap: 30px;
  margin-top: 50px;
}

.project {
  height: 50vw;
  max-height: 400px;
  text-decoration: none;
  transition: ease opacity 0.4s;
  opacity: 1;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.29);
  display: block;
  position: relative;
  margin-bottom: 2rem;
}

.project .background-img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-size: cover;
}

.project:hover .background-img {
  opacity: 0.3;
  transition: ease opacity 0.4s;
}

.project h4 {
  font-size: 2rem;
  line-height: 1.8rem;
  position: relative;
  display: block;
  padding: 0px 15px;
  margin: 20px auto;
  font-weight: 100;
  width: fit-content;
  border-radius: 50px;
  transition: ease all 0.4s;
  background-color: var(--primary-color);
  color: #fff;
  opacity: 1;
  mix-blend-mode: darken;
  box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 20px,
              rgb(50 50 93 / 25%) 0px 0px 100px 0px,
              rgb(0 0 0 / 30%) 0px 10px 10px 0px  /* color: var(--background-color); */
}

.project:hover h4 {
  -webkit-box-shadow: 0px 0px 20px 0px var(--background-color);
  box-shadow: 0px 0px 20px 0px var(--background-color);
  transition: ease all 0.4s;

}

.project .tags {
  opacity: 0;
  transition: ease all 0.4s;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.project:hover .tags {
  opacity: 1;
  transition: ease all 0.4s;
}

.tag {
  display: inline-block;
  background-color: var(--secondary-color);
  -webkit-box-shadow: 0px 0px 20px 0px var(--background-color);
  box-shadow: 0px 0px 20px 0px var(--background-color);
  padding: 5px 15px;
  color: var(--background-color);
  margin: 5px;
  border-radius: 50px;
}
</style>


