<script>

export default {
data(){
   return{

   }
},
}


</script>

<template>
<section class="install py-3">
    <div class="container">
        <div class="col-12 text-center">
            <a href="">QuickStart</a>
            <h2 class="my-2">Awesome isn't it? Let's dive in!</h2>
            <p>Start working with <a href="">Landrick</a> that can provide everything you need to generate <br> awareness, drive traffic, connect </p>
            <div class="col-12">
                <img src="../../public/img/npm.jpg" alt="LandInstall" class="img-fluid">
            </div>
            <div class="d-flex col-10 offset-2 description my-3 ">
                <div>
                    <font-awesome-icon icon="fa-regular fa-circle-check" />
                    <span> Organize your data</span>
                </div>
                <div>
                    <font-awesome-icon icon="fa-regular fa-circle-check" />
                    <span>Work with any team</span>
                </div>
            </div>

        </div>
    </div>
</section>

</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.install{
    div.d-flex:nth-child(5) > div:nth-child(1) {
    margin-left: -16px;
}
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
    .description{
        gap: 50px;
        color: $txt-green;
        span{
            color: $txt-darkgrey;
        }  
    }
}

</style>
