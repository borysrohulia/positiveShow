<template>
<div class="main">
  <v-toolbar id="toolbar">
    <h1 class="toolbar-title">Positive show</h1>
    <p v-for="(nav, index) in navs" :key="index" :id="nav.href" class="nav">{{nav.title}}</p>
    <img src="./assets/image/hamburger.png" id="hamburger" @click="showDrawerAction()">
  </v-toolbar>
  <div class="drawer" v-if="showDrawer" @click="showDrawerAction()">
    <div class="drawer_nav">
      <p v-for="(nav, index) in navs" :key="index" :id="nav.href" class="nav-draw">{{nav.title}}</p>
    </div>
  </div>
    <div class="container">
      <div class="event-container" v-for="(event, index) in events" :key="index">
        <h1 class="event-title">{{event.title}}</h1>
        <img :src="event.src" alt="img" class="event-image"> 
        <p class="event-text">{{event.text}}</p>
      </div>
    </div>
    <div id="galery-row">
      <div class="galery-container">
        <h1 class="galery-title">Галерея</h1>
        <v-carousel
          show-arrows-on-hover
          :show-arrows="showArrows"
        >
          <v-carousel-item
            v-for="(photo, i) in photos"
            :key="i"
          >
            <img :src="photo.src">
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    


    <div class="footer">
      <h1 class="footer-title">Все права очень защищены</h1>
    </div>
</div>
  
</template>
<script>
import event from './assets/image/event.jpg';
import corporate from './assets/image/corporate.jpg';
import children from './assets/image/children.jpg';
import img1 from './assets/image/img1.jpg';
import img2 from './assets/image/img2.jpg';
import img3 from './assets/image/img3.jpg';
import img4 from './assets/image/img4.jpg';
import img5 from './assets/image/img5.jpg';
import img6 from './assets/image/img6.jpeg';
import img7 from './assets/image/img7.jpg';
import img8 from './assets/image/img8.png';

export default {
  data() {
    return {
      navs: [
        {
          title: 'Взрослые мероприятия',
          href: '#adultActivities'
        },
        {
          title: 'Выпускной',
          href: '#prom'
        },
        {
          title: 'Декор',
          href: '#decor'
        },
        {
          title: 'Детские праздники',
          href: '#childrenHolidays'
        },
        {
          title: 'Свадьба',
          href: '#wedding'
        },
        {
          title: 'Контакты',
          href: '#'
        }
      ],
      events: [
        {
          title: 'Организация мероприятий',
          src: event,
          text: 'Организация мероприятий для взрослыхю Любой масштаб, блабла блаблабла'
        },
        {
          title: 'Организация детских мероприятий',
          src: children,
          text: 'Организация детских мероприятий и дети будут довольны, все круто супер бомба. блаблаблаблабала'
        },
        {
          title: 'Корпоративы, свадьбы',
          src: corporate,
          text: 'Свадьбу запомнят навсегда, обращайтесь, поможем. супер круто классно офигенно'
        }
      ],
      photos: [
        {src: img1},
        {src: img2},
        {src: img3},
        {src: img4},
        {src: img5},
        {src: img6},
        {src: img7},
        {src: img8}
      ],
      showArrows: true,
      showDrawer: false
    }
  },
  methods: {
    showDrawerAction() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>

<style scoped>
#toolbar {
  background-color: rgb(243, 238, 228);
  display: flex;
  position: relative;
  width: 100%;
  /* justify-content: space-between; */
}
#toolbar>>>.v-toolbar__content {
  width: 100%;
}
.nav {
  margin-left: 100px;
  font-size: 18px;
  color:rgb(134, 146, 159); 
  cursor: pointer;
}
.nav-draw {
  margin-left: 10px;
  font-size: 25px;
  color:rgb(134, 146, 159);
  margin-bottom: 20px;
  cursor: pointer;
}
.toolbar-title {
  color: #86929f;
  margin-right: 50px;
}
/* 31, 27, 116 */
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.event-container {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 400px;
  border: solid 2px #86929f;
  border-radius: 5px;
  margin: 10px;
}
.event-title {
  font-size: 20px;
  color: #983b45;
}
.event-text {
  color: #86929f;
}
.drawer_nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-top: 15px;
  background-color: rgb(243, 238, 228);
  top: 0px;
  right: 0px;
  width: 300px;
  height: 100%;
  max-height: 500px;
  border-radius: 5px;
}
.drawer {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.5);
}
#hamburger {
  display: none;
}
@media screen and (max-width: 1265px) {

  .event-container {
    width: 250px;
  }
  .container {
    justify-content: center;
  }
  .nav {
    margin-left: 50px;
  }
}
@media screen and (max-width: 950px) {
  #hamburger {
    display: block;
    position: absolute;
    right: 30px;
  }
  .nav {
    display: none;
  }
}
@media screen and (max-width: 853px) {

  .container {
    flex-direction: column;
  }
  .event-container {
    width: 350px;
  }
}
.galery-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}
.galery-title {
  color: #86929f;
}
.footer {
  background-color: #f3eee4;
}
.footer-title {
  color: #86929f;
}
#galery-row {
  display: flex;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
}
#galery-row>>>.v-window__next {
  position: absolute;
  right: 16px;
}
</style>