<script>

export default {
data(){
   return{

   }
},
}


</script>

<template>
<section class="install">
    <div class="container">
        <div class="col-12 text-center">
            <a href="">QuickStart</a>
            <h2 class="my-2">Awesome isn't it? Let's dive in!</h2>
            <p>Start working with <a href="">Landrick</a> that can provide everything you need to generate <br> awareness, drive traffic, connect </p>
        </div>
    </div>
</section>

</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.install{
    min-height: 90vh;
    a{
        color: $txt-blue;
        text-decoration: none;
        font-weight: bold;
    }
    p{
        color: $txt-darkgrey;
        word-wrap: break-word;
        width: 100%
    }
}

</style>
