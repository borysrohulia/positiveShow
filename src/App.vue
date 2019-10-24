<template>
  <div class="main">
    <myHeader></myHeader>
    <mainPart
      class="part" 
      :photos="photos"
      :events="events1"
      id="event1"
    ></mainPart> 
    <mainPart 
      class="part"
      :photos="photos"
      :events="events2"
      id="event2"
    ></mainPart> 
    <mainPart 
      class="part"
      :photos="photos"
      :events="events3"
      id="event3"
    ></mainPart> 
    <myFooter></myFooter>
  </div> 
</template>
<script>
import myHeader from "./components/my-header/my-header";
import myFooter from "./components/my-footer/my-footer";
import mainPart from "./components/main-part/main-part";
import img1 from './assets/image/img1.jpg';
import img2 from './assets/image/img2.jpg';
import img3 from './assets/image/img3.jpg';
import img4 from './assets/image/img4.jpg';
import img5 from './assets/image/img5.jpg';
import img6 from './assets/image/img6.jpeg';
import img7 from './assets/image/img7.jpg';
import img8 from './assets/image/img8.png';
import event from './assets/image/event.jpg';
import corporate from './assets/image/corporate.jpg';
import children from './assets/image/children.jpg';

export default {
  components: { 
    myFooter,
    myHeader,
    mainPart
  },
  data() {
    return { 
      photos: [
        {
          src: img1,
        },
        {
          src: img2,
        },
        {
          src: img3,
        },
        {
          src: img4,
        },
        {
          src: img5,
        },
        {
          src: img6,
        },
        {
          src: img7,
        },
        {
          src: img8,
        }
      ],
      events1: [
        {
          title: 'Организация мероприятий',
          src: event,
          text: 'Организация мероприятий для взрослыхю Любой масштаб, блабла блаблабла'
        }
      ],
      events2: [
        {
          title: 'Организация детских мероприятий',
          src: children,
          text: 'Организация детских мероприятий и дети будут довольны, все круто супер бомба. блаблаблаблабала'
        }
      ],
      events3: [
        {
          title: 'Корпоративы, свадьбы',
          src: corporate,
          text: 'Свадьбу запомнят навсегда, обращайтесь, поможем. супер круто классно офигенно'
        }
      ]
    }
  }
}
</script>

<style scoped>
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
}

#event1 .v-window__next {
  top: 40%;
  right: 5px;
}
#event1 .v-window__prev {
  top: 40%;
  left: 5px;
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