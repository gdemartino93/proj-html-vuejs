<script>

export default {
data(){
   return{
      cards:[
         {
            name : "Modular",
            text : "Composed in a pseudo-Latin language which more or less corresponds",
            link : "Read More",
            icon : "fa-solid fa-layer-group"
         },
         {
            name : "Responsive",
            text : "Composed in a pseudo-Latin language which more or less corresponds",
            link : "Read More",
            icon : "fa-solid fa-desktop"
         },
         {
            name : "Customizable",
            text : "Composed in a pseudo-Latin language which more or less corresponds",
            link : "Read More",
            icon : "fa-solid fa-expand"
         },
         {
            name : "Scalable",
            text : "Composed in a pseudo-Latin language which more or less corresponds",
            link : "Read More",
            icon : "fa-solid fa-maximize"
         },
         
      ]
   }
},
}


</script>

<template>
<section class="features">
   <div class="container">
      <div class="col-6">
         <h3 class="my-3">Key Features</h3>
         <font-awesome-icon icon="fa-regular fa-layer-group" />
         <span>Start working with <a href="">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect. </span>
      </div>
      <div class="row my-5">
         <div class="col-12 d-flex justify-content-between">
            <div class="plan" v-for="card in cards" :key="card">
               <div class="box">
                  <font-awesome-icon :icon="card.icon" />
               </div>
         <span class="fw-bold">{{ card.name }}</span>
         <p>{{ card.text }}</p>
         <a href="">{{ card.link}}></a>
         </div>
         </div>

      </div>

   </div>
</section>


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.features{
   a{

      text-decoration: none;
      color: $txt-blue;
   }
   min-height: 90vh;
   span{
      color: $txt-darkgrey;
      a{
         font-weight: bold;
      }
   }
   .plan{
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      border: 1px solid $border-lightgrey;
      gap: 15px;
      span{
         color: black;
      }
      p{
         color: $txt-darkgrey; 
      }
      .box{
         width: 60px;
         height: 60px;
         background: $bg-iconHeader;
         display: flex;
         justify-content: center;
         align-items: center;
         color: $txt-blue;
         font-size: 21px;
         border-radius: 7px;
      }
   }
}

</style>
