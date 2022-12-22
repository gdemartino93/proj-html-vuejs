<script>

export default {
data(){
   return{
    source : "../../public/img/footerlogos/",
    methods : [
        {
            name : "American Express",
            path : "american-ex.png"
        },
        {
            name : "Discover",
            path : "discover.png"
        },
        {
            name : "Master Card",
            path : "master-card.png"
        },
        {
            name : "PayPal",
            path : "paypal.png"
        },
        {
            name : "Visa",
            path : "visa.png"
        }
    ]
   }
},
}


</script>

<template>
<div class="credit-footer">
    <div class="container d-flex justify-content-between">
        <span>&copysr; 2020 Landrick. Design with &hearts; by Gianluca</span>
        <div class="img-logo">
            <img :src="source + method.path" :alt="method.name" v-for="method in methods" :key="method" class="mx-1">
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.credit-footer{
    border-top: 1px solid $border-footer;
    background: $bg-footer ;
    color: $txt-lightgrey;
    padding: 20px;
    img{
        width: 20px;
        height: 20px;
    }
}
</style>
