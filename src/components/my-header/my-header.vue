<template>
    <div class="header">
        <v-toolbar id="toolbar">
          <p>CHVO</p>
            <img src="../../assets/image/logo.png" alt="logo">
            <p v-for="(nav, index) in navs" :key="index" :id="nav.href" class="nav">{{nav.title}}</p>
            <img src="../../assets/image/hamburger.png" id="hamburger" @click="showDrawerAction()">
        </v-toolbar>
    </div>
</template>
<script>
export default {
    name: 'my-header',
    data() {
        return{
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
        }
    },
    methods: {
        showDrawerAction() {

        }
    },
    computed: {
        
    }
}
</script>
<style scoped>
#toolbar {
  background-color: rgb(243, 238, 228);
  display: flex;
  position: relative;
  width: 100%;
  height: 100px !important;
  padding: 20px !important; 
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
@media screen and (max-width: 1400px) {

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
@media screen and (max-width: 1100px) {
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