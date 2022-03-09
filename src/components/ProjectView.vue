<template>

    <div class="project">
        <div  class="text">
            <h3>
                {{ project.title }}
            </h3>

            <p v-scrollanimation class="glass">
                {{ $t('work.projects.' + project.identifier + '.short') }}
            </p>
            <span class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                </span>
            </span>

            <div class="links">
                <a target="_blank" v-for="link in project.links" :key="link" :href="link.url" class="link">
                    <i v-if="link.type === 'git'" class="fab fa-github"></i>
                    <svg v-else-if="link.type === 'gplay'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span class="hint" v-if="link.hint">{{ link.hint }}</span>
                </a>
            </div>
        </div>
        <div class="img">
            <img :src="require('@/assets/' + project.image )"/>
        </div>
    </div>
</template>

<script>

export default {
  name: "WorkPage",
  props: {
      project: Object
  }
}
</script>

<style :scoped>

.project {
    position: relative;
    min-height: 50%;
    flex-wrap: wrap;
    margin: 40px 0;
}

.project .img {
    width: 100%;
}

.project h3 {
    margin-bottom: 20px;
    font-size: 2.1em;
}

.tag {
  display: inline-block;
  background-color: var(--secondary-color);
  padding: 5px 15px;
  color: var(--background-color);
  margin: 10px 10px 0 0;
  border-radius: 50px;
}

.links {
    margin-top: 20px;
 }

 .link {
    margin-right: 15px;
    color: inherit;
    transition: opacity 0.2s ease-in-out;
    position: relative;
    text-decoration: none;

 }

 .link .hint {
     font-size: 0.8em;
     font-weight: bold;
     position: absolute;
     bottom: -7px;
     right: -15px;
     color: var(--primary-color);
 }

 .link:hover {
     opacity: 0.2;
 }

 .link i {
     font-size: 2.4rem;
 }

 .links svg {
    width: 2.2em;
    height: 2.2em;
    margin: 0.2em;

 }
@media screen and (max-width: 790px){
    .project {
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
        border-radius: 8px;
    }

    .project .text {
        z-index: 100;
        padding: 20px;
        position: absolute;
    }

    .project .text p, .tag {
        font-size: 1em;
    }

    .tag {
        font-size: 0.8em;
    }

    .project .img {
        height: 500px;
    }
    .project .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        opacity: 0.1;
    }
}

@media screen and (min-width: 790px){


    .project {
        padding: 40px 0 20vh;

    }
    .project .text {
        position: absolute;
        top: 0;
        max-width: 50%;
    }
    .project .img {
        width: 60%;
        margin-left: auto;
    }

    .project .img img {
        width: 100%;
        margin: auto;
        display: block;
        max-height: 40vh;
        object-fit: cover;
        object-position: top;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .glass {
        padding: 20px;
        /* background: rgba(0, 0, 0, 0.3); */
        color: #000;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    .project:nth-child(2) .img {
        margin-right: auto;
        margin-left: 0;
    }    

    .project:nth-child(2) .text {
        right: 0;
        text-align: right;
    }    
}
/* 
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
  padding: 10px 15px;
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
              rgb(0 0 0 / 30%) 0px 10px 10px 0px  
}

.project:hover h4 {
  -webkit-box-shadow: 0px 0px 20px 0px var(--background-color);
  box-shadow: 0px 0px 20px 0px var(--background-color);
  transition: ease all 0.4s;

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
} */
</style>


