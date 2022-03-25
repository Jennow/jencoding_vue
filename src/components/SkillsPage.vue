<template>
<div class="page">
  <div class="container">
    <div class="content">
    <h2 v-scrollanimation>{{ $t("skills.header") }}</h2>
    <p v-scrollanimation v-html="$t('skills.paragraph')"></p>
    <div v-scrollanimation class="skill-table mobile-glass">
      <div v-for="(skillcategory, type) in skills" :key="type" :class="['skill-set', type]">
        <div class="skill-set-seperator"></div>
        <font-awesome-icon v-if="type === 'frontend'" icon="display" />
        <font-awesome-icon v-if="type === 'backend'" icon="server" />
        <font-awesome-icon v-if="type === 'tools'" icon="screwdriver-wrench" />
        <h3>{{ type }}</h3>
        <span v-scrollanimation v-for="skill in skillcategory" :key="skill" class="skill">
        <font-awesome-icon :icon="skill.icon" />
          {{  skill.name }}
        </span>
      </div>
    </div>
    <div class="background"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SkillsPage",
  mounted() {
  },
  data() {
    return {
      skills: {
        frontend: [
          {
            'icon': ['fab', 'html5'],
            'name': 'HTML'
          },
          {
            'icon': ['fab', 'css3'],
            'name': 'CSS & Sass'
          },
          {
            'icon': ['fab', 'js'],
            'name': 'JavaScript'
          },
          {
            'icon': ['fab', 'vuejs'],
            'name': 'Vue.js'
          },
          {
            'icon': ['fa', 'code'],
            'name': 'Ionic'
          },
                    {
            'icon': ['fab', 'wordpress'],
            'name': 'Wordpress'
          },
        ],
        backend: [
          {
            'icon': ['fab', 'php'],
            'name': 'PHP'
          },
          {
            'icon': ['fa', 'database'],
            'name': 'PostgreSQL'
          },
          {
            'icon': ['fab', 'node-js'],
            'name': 'Node.js'
          },
          {
            'icon': ['fa', 'code'],
            'name': 'Express'
          },
          {
            'icon': ['fa', 'database'],
            'name': 'MongoDB'
          },
          {
            'icon': ['fa', 'code'],
            'name': 'REST APIs'
          },
          {
            'icon': ['fab', 'python'],
            'name': 'Python'
          },
        ], 
        tools: [
          {
            'icon': ['fab', 'git'],
            'name': 'GIT'
          },
          {
            'icon': ['fab', 'android'],
            'name': 'Android Studio'
          },
          {
            'icon': ['fa', 'code'],
            'name': 'Unity3D'
          },
          {
            'icon': ['fa', 'mobile-screen'],
            'name': 'Figma'
          },
          {
            'icon': ['fa', 'mobile-screen'],
            'name': 'Photoshop'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .skill-table {
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 1rem;
  }

  .skill-table h3 {
    font-size: 1.5em;
  }

  .skill-set svg {
    font-size: 3em;
    margin: 20px 0 0px;
  }

  .skill-set {
    flex: 1;
    position: relative;
  }

  .skill-set-seperator {
    width: 0.5px;
    height: 100%;
    background-color: var(--font-color-transparent);
    opacity: 0.5;
    position: absolute;
  }

  .skill-set:first-child .skill-set-seperator {
    display: none;
  }

  .skill {
    display: inline-block;
    width: calc(50% - 20px);
    margin: 20px 10px 0 ;
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 10px 0;
    box-sizing: border-box;
  }

  .skill.before-enter {
      transform: translateX(-100px) translateY(0px);
  }

  .skill:nth-child(2) .before-enter {
      transform: translateX(100px) translateY(0px);
  }

  .skill.enter {
      transform: translateX(0px) translateY(0);
  }

  .skill svg {
    font-size: 1.5em;
    margin: 2px auto;
    display: block;
  }

  .skill:hover {
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out;
    background-color: var(--font-color-transparent);
  } 

  .frontend svg {
    color: var(--primary-color);
  }

  .frontend .skill {
    border-color: var(--primary-color);
  }

  .backend svg{
    color: var(--secondary-color);
  }

  .backend .skill {
    border-color: var(--secondary-color);
  }

  .tools svg {
    color: var(--tertiary-color);
  }

  .tools .skill {
    border-color: var(--tertiary-color);
  }

  @media (max-width: 970px) {
    .skill-table {
      flex-direction: column;
    }
    .skill-set-seperator {
      height: 0.5px;
      width: 100%;
      opacity: 0.5
    }
    .skill {
      width: calc(33% - 20px);
    }
  }

  @media (max-width: 600px) {
    .skill {
      width: calc(50% - 20px);
    }
  }
</style>
