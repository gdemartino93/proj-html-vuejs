<script>

export default {
data(){
   return{
    plans: [
        {
            type : "Basic",
            price : "$ 9.00",
            duration : "Per Month",
            description : "All the basics for businesses that are just getting started.",
            features : ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free" , "Enhanced Security Pro"],
            required : "* No credit card required",
            isBest : false
        },
        {
            type : "Business",
            price : "$ 39.00",
            duration : "Per Month",
            description : "Better for growing businesses that want more customers.",
            features : ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free" , "Enhanced Security Pro"],
            required : "* No credit card required",
            isBest: true,
        },
        {
            type : "Enterprise",
            price : "$ 79.00",
            duration : "Per Month",
            description : "Advanced features for pros who need more customization",
            features : ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free" , "Enhanced Security Pro"],
            required : "* No credit card required",
            isBest : false
        },
    ]
   }
},
}


</script>

<template>
<div class="plans">
    <div class="container">
        <div class="col-12 text-center">
            <h2> Our rates for developer from landrick team</h2>
            <p class="my-4"> Start working with <a href="">Landrick</a> that can provide everything you need to generate awareness, drive traffic, justify-content-center</p>
        </div>
        <div class="row justify-content-between my-5">
            <div class="card-plan" v-for="plan in plans" :key="plan">
                <div class="label" v-if="plan.isBest === true">Best</div>
                <div>
                    <span class="type">{{ plan.type }}</span>
                </div>
                <span class="price">{{ plan.price }}</span>
                <span class="duration">{{ plan.duration }}</span>
                <p class="description">{{ plan.description }}</p>
                <ul>
                    <li v-for="feature in plan.features" :key="feature">
                        <font-awesome-icon icon="fa-regular fa-circle-check" /> 
                        {{ feature }}
                    </li>
                </ul>
                <button class="btn btn-primary">buy now</button>
                <span class="required">{{ plan.required }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.plans{
    min-height: 80vh;
    p{
        color: $txt-darkgrey;
    }
    a{
        text-decoration: none;
        color: $txt-blue;
        font-weight: bold;
    }
    .card-plan{
        img{
            width: 50px;
        }
        position: relative;
        padding: 20px;
        width: 400px;
        border: 1px solid $border-lightgrey;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.2);
        gap: 10px;
        &:hover{
            box-shadow: 0px 4px 0px 0px rgb(21, 80, 255);
        }

        ul{
            padding-left: 0;
            li{
                color: $txt-darkgrey;
            .fa-circle-check{
                color: $txt-blue;
            }
            }
        }
        .required{
            color: $txt-darkgrey;
        }
        .price{
            font-weight: bold;
            font-size: 30px;
        }
        button{
            width: 90%;
            margin: 0 auto;
        }
        .duration{
            color : $txt-darkgrey;
        }
        .type{
            background-color:$bg-iconHeader;
            border-radius:28px;
            color:$txt-blue;
            padding:7px 20px;
            width: 40%;
            text-decoration:none;
            text-align: center;
        }
        .label{
            width: 90px;
            height: 28px;
            background: orange;
            text-align: center;
            color: white;
            position: absolute;
            right: -20px;
            top: 11px;
            rotate: 40deg;
            overflow: hidden;
        }
    }
}
</style>
