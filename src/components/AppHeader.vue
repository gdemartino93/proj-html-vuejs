<script>

export default {
data(){
   return{
    //Aggiungere nav links
    navLinks : ["landing","pages","docs"]
   }
},
}


</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-12 d-flex">
            <div class="logo col-4 justify-content-center align-items-center">
                <img src="../../public/img/logo-dark.png" alt="">
            </div>
            <ul class="col-4 d-flex justify-content-center align-items-center">
                <li class="mx-3">
                    <a href="">
                        HOME
                    </a>
                </li>
                <li class="mx-3" v-for="link in navLinks" :key="link">
                    <a href="" class="nav-link dropdown-toggle">{{link.toUpperCase()}}</a>
                    
                </li>
            </ul>
            <div class="col-4 d-flex justify-content-center align-items-center gap-3">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <div class="box">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </div>
                <div class="box">
                    <font-awesome-icon icon="fa-brands fa-stack-overflow" />
                </div>
                <div class="box">
                    <font-awesome-icon icon="fa-regular fa-user" />
                </div>
            </div>
        </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.logo{
    img{
        width: 50%;
    }
}
li{
    font-size: 15px;
    a{
        text-decoration: none;
        color: grey;
        font-weight: bold;
        
        &:hover{
            color: $txt-blue
        }
    }
}
.box{
    padding: 10px 10px;
    background: $bg-iconHeader;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $txt-blue;
    box-shadow: 0 5px 5px 0;
}
</style>
