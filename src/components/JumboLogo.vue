<script>

export default {
data(){
   return{
    logos : [
        {
            img : "../../public/img/jumbologos/amazon.svg"
        },
        {
            img : "../../public/img/jumbologos/google.svg"
        },
        {
            img : "../../public/img/jumbologos/lenovo.svg"
        },
        {
            img : "../../public/img/jumbologos/paypal.svg"
        },
        {
            img : "../../public/img/jumbologos/shopify.svg"
        },
        {
            img : "../../public/img/jumbologos/spotify.svg"
        },
    ]
   }
},
}


</script>

<template>
<section class="sect-logo">
    <div class="container">
    <div class="logos d-flex justify-content-around align-items-center mx-2">
        <img :src="logo.img" alt="" v-for="logo in logos" :key="logo" >
    </div>


</div>
<div class="position-relative">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style="
                width: 300%;
                height: 100px;
                fill: #F8F9FC;
                transform: rotateY(0deg);">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
</div>

</section>


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.logos{
    min-height: 150px;
    img{
        width: 100px;
    }
}
</style>
