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
    <div class="logos d-flex justify-content-around align-items-center m-4">
        <img :src="logo.img" alt="" v-for="logo in logos" :key="logo" >
    </div>
</div>

</section>


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.logos{
  
    img{
        width: 100px;
    }
}
</style>
