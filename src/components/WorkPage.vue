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
          image: 'bluerizon.webp',
          url: 'https://blue-rizon.com/',
        },
        {
          title: 'Puzzl3D',
          short: 'Augmented Reality 3D Puzzle',
          tags: [
            'Unity3D',
            'Blender',
            'C#',
            'Vuforia',
          ],
          image: 'puzzl3d.webp',
          url: 'https://www.youtube.com/watch?v=SUzKEtgb2P0',
        },
        {
          title: 'Blackout',
          short: '2D Side Scroller with Unity3D',
          tags: [
            'Unity3D',
            'C#',
          ],
          image: 'blackout.webp',
          url: 'https://www.youtube.com/embed/AmMQ5QKA19o>',
        },
        {
          title: 'V-Art',
          short: 'Virtual Reality Connect-The-Dots Gam',
          tags: [
            'Unity3D',
            'C#',
            'Vuforia',
            'Blender'
          ],
          image: 'vart.webp',
          url: 'https://www.youtube.com/embed/P2umz5qVCTo',
        }
        ]
    }
  }
}
</script>

<style :scoped>
@media screen and (min-width: 560px){
  .projects {
    grid-template-columns: 1fr 1fr;
  }
}

.projects {
  display: grid;
  column-gap: 20px;
  row-gap: 30px;
  margin-top: 50px;
}

.project {
  height: 250px;
  text-decoration: none;
  transition: ease opacity 0.4s;
  opacity: 1;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.29);
  display: block;
  position: relative;
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
  font-size: 1.5em;
  position: relative;
  display: block;
  padding: 5px 15px;
  margin-top: -15px;
  margin-left: 15px;
  width: fit-content;
  border-radius: 50px;
  transition: ease all 0.4s;
  color: var(--background-color);
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


