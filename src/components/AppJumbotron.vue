<script>
import JumboLogo from './JumboLogo.vue'

export default {
    components:
    { JumboLogo },

}


</script>

<template>
<div class="jumbotron ">
    <div class="container">
        <div class="row py-5">
            <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                <h1 class="fw-bold">A Complete Developer Toolset</h1>
                <span>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page</span>
                <div class="jumbo-btn col-12 my-3 ">
                    <a class="getstarted btn btn-primary col-4 " href="#" role="button">Get Started</a>
                    <a class="documentation btn col-6 mx-2" href="#" role="button">Documentation</a>
                </div>
                <span class="align-self-start">Current Version v2.6.0</span>
            </div>
            <div class="col-8 d-flex justify-content-center">
                <img src="../../public/img/about.png" alt="">
            </div>
        </div>
    </div>
</div>
<JumboLogo />


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.jumbotron{
    background-color: #F8F9FC;
    border-bottom: 1px solid $border-lightgrey;
    span{
        color: $txt-darkgrey;
    }
    h1{
        line-height: 60px;
    }
    .jumbo-btn{
        .getstarted{
            background: $bg-blue;
        }
        .documentation{
            color: $txt-blue;
            border: 1px solid $border-blue;
            &:hover{
                background: $bg-blue;
                color: white;
            }
        }
    }
}

</style>
