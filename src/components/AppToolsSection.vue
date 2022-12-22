<script>

export default {
data(){
   return{
    features : [ "Digital Marketing Solutions for Tomorrow", "Our Talented & Experience Marketing Agency", "Create your own skin to match your brand"]
   }
},
}


</script>

<template>
<div class="tools my-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6">
            <h2>Build tools and <br> extensive documention</h2>
            <p class="my-3">You can combine all the Landrick templates into a single one, you can take a <br> component from the Application theme and use it in the Website.</p>
            <ul class="my-4">
                <li v-for="feature in features" :key="feature">
                    <font-awesome-icon icon="fa-regular fa-circle-check" /> 
                    <span class="mx-2">{{ feature }}</span>
                </li>
            </ul>
            <a class="readMore btn btn-primary col-4 " href="#" role="button">
                Read More
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="mx-2" />
            </a>
        </div>
        <div class="col-6 d-flex justify-content-center">
            <img src="../../public/img/1.png" alt="" class="img-fluid">
        </div>
        </div>

    </div>
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.tools{
    ul{
        padding-left: 0;
        li{
            .fa-circle-check{
                color: $txt-lightblue;
            }
            span{
                color: $txt-darkgrey;
            }
        }
    }
    p{
        color: $txt-darkgrey;
    }
    .readMore{
        width: 25%;
        background: $bg-blue;
    }

}
</style>
