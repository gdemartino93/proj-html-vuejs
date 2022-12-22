<script>

export default {
data(){
   return{

   }
},
}


</script>

<template>
<div class="contact">
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 text-center">
                <h2>Want to be among the first to find out?</h2>
                <p class="my-4">Start working with <a href="">Landrick</a> that can provide everything you need to generate  awareness, drive traffic, connect. </p>
                <div class="input-group mb-3">
                    <input class="form-control form-control-lg" type="text" placeholder="Email Address" aria-label=".form-control-lg example" id="email">
                    <button class="btn btn-primary" type="button" id="getstarted">Get Started</button>
                </div>
            </div>
            

        </div>
        
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.contact{
    #email{
        position: relative;
        z-index: 1;
        border-radius: 18px 18px;
    }
    #getstarted{
        position: absolute;
        z-index: 2;
        right: 0;
        transform: translate(-4%,15%);
        border-radius: 18px 18px;
        background: $bg-blue;
    }
    margin: 80px 0;
    p{
        color: $txt-darkgrey;
    }
    a{
        text-decoration: none;
        color: $txt-blue;
    }
}
</style>
