<template>
    <div class="footer">
            <link rel="stylesheet" 
                href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
                integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
                crossorigin="anonymous">
        <div class="footer_main">
            <a href="#" class="footer_row main_questions">Задать вопрос</a>
            <a href="#" class="footer_row main_feedbacks">Отзывы наших клиентов</a>
            <a href="#" class="footer_row main_gallery">Фотоотчёты</a>
            <a href="#" class="footer_row main_locations">Наши локации</a>
            <a href="#" class="footer_row main_partnerships">Партнёрство</a>
            <a href="#" class="footer_row main_contacts">Контакты</a>
            <div class="footer_row social">
                <a href="/" class="social_item social_facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social_item social_instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social_item social_pinterest"><i class="fab fa-pinterest-p"></i></i></a>
                <a href="#" class="social_item social_whatsup"><i class="fab fa-whatsapp"></i></a>
                <a href="#" class="social_item social_telegram"><i class="fab fa-telegram-plane"></i></a>
                <a href="#" class="social_item social_viber"><i class="fab fa-viber"></i></a>
            </div>
            <p class="footer_row main_author">site made by <a href="#" class="borys">Borys Rohulia</a> <i class="borys_crown fas fa-crown"></i></a></p>
            <p class="footer_row main_rights">All rights reserved. Vinnytsia 2019</p>
        </div>
        <a class="call" href="tel:+380664665202">
            <div class="call_block">
                <i class="fa fa-phone"></i>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'my-footer',
    data() {
        return{
        
        }
    }
}
</script>
<style scoped>
.footer{
    min-height: max-content;  
    margin-top: 100px;
    display: flex; 
    justify-content: center; 
    align-content: center;  
    border-left: 15px solid #f4f7f6;
    border-right: 15px solid #f4f7f6; 
    border-bottom: 15px solid #f4f7f6; 
    padding: 0px 5px;
    padding-bottom: 5px;
    background: white; 
    position: relative;
}
.footer_main{
    display: flex; 
    justify-content: center; 
    align-content: center; 
    flex-direction: column; 
    background: #ffe8e6; 
    width: 100%; 
    height: 100%;
    padding: 20px 0; 
}

.footer_row{
    text-align: center; 
    margin: 10px 0; 
    text-transform: uppercase; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px; 
    font-weight: 500; 
    cursor: pointer; 
    display: block; 
    text-decoration: none; 
    color: black; 
}
.social{
    display: flex; 
    justify-content: center; 
}
.social_item{
    margin: 0 5px;
    font-size: 25px;
    color: #040502;
    border: 1px solid #040502; 
    display: block;
    padding: 0px 5px;
    width: 40px;
}
.social_item:hover{
    color: azure;
    border-color: azure; 
    -webkit-transition: color 0.5s ease-out;
    -moz-transition: color 0.5s ease-out;
    transition: color 0.5s ease-out;
    /* transition: border-color 0.2s ease-out; */

}
.borys{
    color:black;
    font-weight: 900;
    text-decoration: none;  
}
.borys_crown{
    margin-left: 5px; 
    color: #F5C21B;
  background: -webkit-gradient(linear, left top, left bottom, from(#F5C21B), to(#D17000));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.call{
    background:#38a3fd;
    border:2px solid #38a3fd;
    border-radius:50%;
    box-shadow:0 8px 10px rgba(56,163,253,0.3);
    cursor:pointer;
    height: 40px;
    width: 40px;
    display: none; 
    justify-content: center;
    align-items: center;
    font-size: 21px;
    transition:.3s;
    animation:hoverWave linear 1s infinite;
    position: absolute; 
    right: 8%;
    top: 38%;
}
.call_block i{
    animation: 1200ms ease 0s normal none 1 running shake;
    animation-iteration-count: infinite;
    -webkit-animation: 1200ms ease 0s normal none 1 running shake;
    -webkit-animation-iteration-count: infinite;
    color: azure; 
}

@media(max-width: 768px){
    .footer_main{
    display: flex; 
    justify-content: flex-start; 
    align-content: flex-start; 
    text-align: left; 
    align-items: flex-start; 
    padding-left: 15px;
    }
    .call{
        display: flex; 
    }
}

@-webkit-keyframes hoverWave {
        0% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 0 rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
}
40% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 15px rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
}
80% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 26.7px rgba(56,163,253,0.067)
}
100% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 40px rgba(56,163,253,0.0)
}
}@keyframes hoverWave {
        0% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 0 rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
}
40% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 15px rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
}
80% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 26.7px rgba(56,163,253,0.067)
}
100% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 40px rgba(56,163,253,0.0)
}
}




@keyframes shake {
0% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
10% {
    transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
}
20% {
    transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
}
30% {
    transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
}
40% {
    transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
}
50% {
    transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
}
60% {
    transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
}
70% {
    transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
}
80% {
    transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
}
90% {
    transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
}
100% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
}

@-webkit-keyframes shake {
0% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
10% {
    transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
}
20% {
    transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
}
30% {
    transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
}
40% {
    transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
}
50% {
    transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
}
60% {
    transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
}
70% {
    transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
}
80% {
    transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
}
90% {
    transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
}
100% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
}
</style>