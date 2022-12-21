<script>
export default {
data(){
   return{
    //Aggiungere nav links
    navLinks : ["landing","pages","docs"]
   }
}
}


</script>

<template>
  <div class="container">
    <div class="col-12 d-flex justify-content-between my-3">
        <div class="logo col-2">
            <img src="../../public/img/logo-dark.png" alt="">
        </div>
        <ul class="d-flex gap-5 col-4">
            <li>
                <a href="">
                    HOME
                </a>
            </li>
            <li class="" v-for="link in navLinks" :key="link">
                <a href="" class="nav-link dropdown-toggle">{{link.toUpperCase()}}</a>
                
            </li>
        </ul>
        <div class="col-4"> cmd section</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.logo{
    img{
        width: 100%;
    }
}
li{
    a{
        text-decoration: none;
        color: grey;
        font-weight: bold;
        
        &:hover{
            color: $txt-blue
        }
    }
}
</style>
