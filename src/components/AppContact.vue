<script>

export default {
data(){
   return{
    isEmpty :false,
    isError : Boolean,
    userEmail : ""
   }
},
methods : {
    checkEmpty(){
        if (this.userEmail == ""){
        this.isEmpty = true;
        this.isError = true
        }else{
            this.isEmpty = false
            this.isError = false
            this.userEmail = ""
        }
    }

}
}


</script>

<template>
<div class="contact">
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 text-center">
                <h2>Want to be among the first to find out?</h2>
                <p class="my-4">Start working with <a href="">Landrick</a> that can provide everything you need to generate  awareness, drive traffic, connect. </p>
                <!-- alert success  -->
                <div class="alert alert-success" role="alert" v-if="isEmpty == false && isError == false">
                Grazie per l'interessamento, la contatteremo presto.
                </div>
                <!-- errore in caso il value dell'input è vuoto -->
                <div class="alert alert-danger" role="alert" v-if="isEmpty == true && isError == true">
                Questo campo non può essere vuoto :D
                </div>
                <div class="input-group mb-3">
                    <input class="form-control form-control-lg" type="text" placeholder="Email Address" aria-label=".form-control-lg example" id="email" v-model="userEmail">
                    <button class="btn btn-primary" type="button" id="getstarted" @click="checkEmpty" formaction="submit">Get Started</button>
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
