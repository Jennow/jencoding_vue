<template>
  <div class="page">
    <div class="container">
      <div class="content">
        <h2 v-scrollanimation>{{ $t("cv.header") }}</h2>
        <p v-scrollanimation  v-html="$t('cv.paragraph')"></p>
        <div v-scrollanimation class="cv mobile-glass">
          <div class="cv-container">
              <div class="timeline">
                  <a 
                  class="" 
                  v-for="(job, index) in jobs" 
                  :key="index" 
                  :class="{ active: index === activeIndex }"
                  @click="activeIndex = index; activeJob = jobs[index]"
                  >{{ $t(job.timeline) }}
                  </a>
              </div>
              <div class="job-description">
                <h3>{{ $t(activeJob.title) }} </h3>
                <div class="paragraph">
                  <p class="company">@ {{ activeJob.company }}</p>
                  <p v-html="$t(activeJob.description)"/>
                  
                </div>
                <span class="tags">
                  <span v-for="tag in activeJob.tags" :key="tag" class="tag">
                      {{ tag }}
                    </span>
                </span>
              </div>
          </div>
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
        jobs: [
          {
            title: 'cv.jobs.engineer.title',
            timeline: 'cv.jobs.engineer.timeline',
            company: "white label eCommerce GmbH",
            description: 'cv.jobs.engineer.description',
            tags: [
                "PHP",
                "PostgreSQL",
                "JavaScript",
                "REST API",
                "HTML",
                "CSS",
                "Vue.js"
            ]
          },
          {
            title: 'cv.jobs.junior.title',
            timeline: 'cv.jobs.junior.timeline',
            company: "white label eCommerce GmbH",
            description: 'cv.jobs.junior.description',
            tags: [
                "PHP",
                "PostgreSQL",
                "REST API",
                "HTML",
                "CSS",
                "JavaScript"
            ]
          },
          {
            title: 'cv.jobs.student2.title',
            timeline: 'cv.jobs.student2.timeline',
            company: "white label eCommerce GmbH",
            description: 'cv.jobs.student2.description',
            tags: [
                "PHP",
                "PostgreSQL",
                "HTML",
                "CSS",
                "JavaScript",
                "UI/UX"
            ]
          },
          {
            title: 'cv.jobs.student1.title',
            timeline: 'cv.jobs.student1.timeline',
            company: "Napsys GmbH",
            description: 'cv.jobs.student1.description',
            tags: [
                "JavaScript",
                "HTML",
                "CSS",
                "WordPress",
                "Java",
                "Android Studio",
                "UI/UX"
            ]
          }
        ],
        activeIndex: 0,
        activeJob: {
            title: '',
            timeline: '',
            company: "",
            description: '',
            tags: []
          }
        
    }
  },
  mounted() {
    this.activeJob = this.jobs[this.activeIndex]
  }
}
</script>

<style scoped>

.cv-container {
    display: flex;
    gap: 20px;
}

.cv-container h3 {
    font-size: 2.1em;
    display: inline-block;
    margin-bottom: 20px;
}

.cv-container p {
    font-size: 1em;
    margin: 0;
}

.timeline a {
    display: block;
    cursor: pointer;
}

.timeline a:hover, .timeline a.active {
  font-weight: bold;
}

.timeline a:hover {
  background: rgba(255, 255, 255, 0.05);
}

.job-description .company {
  font-weight: bold;
  margin-bottom: 10px;
  font-style: italic;
}

.job-description .paragraph {
  margin-bottom: 20px;
}

@media screen and (max-width: 789px) {
  .cv-container {
    flex-direction: column;
  }

  .timeline {
    display: flex;
    justify-content: center;
  }

  .timeline a {
    font-size: 0.8em;
    padding: 10px;
    border-bottom: 1px solid var( --font-color-transparent);
    text-align: center;
  }

  .timeline a:hover, .timeline a.active {
    border-bottom: 3px solid var( --font-color);
  }

  .timeline a:hover {
    background: rgba(255, 255, 255, 0.05);
  }
}

@media screen and (min-width: 790px) {
  .timeline a {
    padding: 12px;
    border-right: 1px solid var( --font-color-transparent);
    min-width: 150px;
  }

  .timeline a:hover, .timeline a.active {
    border-right: 3px solid var( --font-color);

  }

  .timeline a:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .job-description {
    padding: 0 10px 10px;
  }

}
</style>



