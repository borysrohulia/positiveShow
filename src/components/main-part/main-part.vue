<template>
    <div class="main-part">
        <div class="carusel">
            <v-carousel
                :show-arrows="showArrows"
                hide-delimiters 
                style="height: 320px"   
                cycle         
            >
                <v-carousel-item
                    v-for="(photo, i) in photos"
                    :key="i"
                >
                    <img :src="photo.src">
            </v-carousel-item>
        </v-carousel>
        </div>
        <div class="text-side">
            <div class="container">
                <div class="event-container" v-for="(event, index) in events" :key="index">
                    <h1 class="event-title">{{event.title}}</h1>
                    <img :src="event.src" alt="img" class="event-image"> 
                    <p class="event-text">{{event.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'main-part',
    props: {
        photos: {
            type: Array,
            default: () => { return []},
            subtype: {
                srs: {
                    type: String,
                    default: ''
                }
            }
        },
        events: {
            type: Array,
            default: () => { return []},
            subtype: {
                title: {
                    type: String,
                    default: ''
                },
                src: {
                    type: String,
                    default: ''
                },
                text: {
                    type: String,
                    default: ''
                }
            }
        },
    },
    data() {
        return {
            showArrows: true,
            int: 3
        }
    }
}
</script>

<style scoped>
.main-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
}
.carusel {
    height: 320px;
    width: 400px;
}
v-carousel {
    height: 320px;
    width: 400px;
}
v-carouserl>>>.v-window__prev {
    top: 40%;
    left: 5px;
}
.carusel>>>.v-window__next {
    top: 45%;
    right: 5px !important;
}
.carusel>>>.v-window__prev {
    top: 45%;
    left: 5px !important;
}
.v-carousel-item {
    height: 320px;
    width: 400px;
}
.v-image {
    height: 320px;
    width: 400px;
}
.v-responsive {
    height: 320px;
    width: 400px;
}
</style>