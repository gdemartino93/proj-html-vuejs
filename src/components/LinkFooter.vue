<script>

export default {
  data(){
    return{
      companyLinks : [ "About us","Services","Team","Pricing","Project","Careers","Blog","Login"],
      usefullLinks : [ "Terms of Services","Privacy Policy","Documentation","Changelog","Components"]
    }
  }
}
</script>

<template>
 <div class="footer-link">
  <div class="container">
    <div class="row">
      <div class="col-3 d-flex flex-column gap-4">
        <img src="../../public/img/logo-light.png" alt="" class="logo-white my-3">
        <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
        <div class="icon">
          <div class="box">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </div>
          <div class="box">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
          <div class="box">
            <font-awesome-icon icon="fa-brands fa-square-twitter" />
          </div>
          <div class="box">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div class="col-3">
        <h3 class="my-3">Company</h3>
        <ul>
          <li v-for="companyLink in companyLinks" :key="companyLink">
            > {{ companyLink }}
          </li>
        </ul>
      </div>
      <div class="col-3">
        <h3 class="my-3">Usefull Links</h3>
        <ul>
          <li v-for="usefullLink in usefullLinks" :key="usefullLink">
            > {{ usefullLink }}
          </li>
        </ul>
      </div>
      <div class="col-3">
        <h3 class="my-3">Newsletter</h3>
        <p>Signup and receive the latest tips <br> via email.</p>
        <span>Write your email <span class="text-danger">*</span></span>
        <div class="input-group my-2">
          <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="fa-regular fa-envelope" /></span>
          <input type="text" class="form-control" placeholder="Your Email:" aria-label="Username" aria-describedby="basic-addon1">
          
        </div>
        <button type="button" class="btn btn-primary">Subscribe</button>

      </div>
    </div>
  </div>
 </div>

</template>

<style lang="scss">
@use '../styles/partials/variables' as *;
.footer-link{
  background: $bg-footer ;
  padding: 40px;
  .input-group-text{
    background: $bg-inputfooter;
    border: none;
  }

  .logo-white{
    height: 33.6px;
    width: 60%;
  }
  button{
    width: 100%;
    background: $bg-inputfooter;
    border: none;
    // border: 1px solid $border-blue;
    // box-shadow: 1px $border-blue;
    color: $txt-blue;
    box-shadow: 0px 2px 4px 0px rgba(38, 38, 216, 0.877);

  }
  input{
    background: $bg-inputfooter ;
    border: none;
    &::placeholder{
      color: $txt-lightgrey;
      font-size: 13px;
    }
  }
  li{
    color: $txt-lightgrey;
    margin: 7px auto;
  }
  h3{
    color: white;
  }
  p,span{
    color: $txt-lightgrey;
  }
  .icon{
    display: flex;

    .box{
      width: 30px;
      height: 30px;
      border: 1px solid $border-lightgrey;
      color: $txt-lightgrey;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2px;
      border-radius: 5px;
    }
}
}
</style>
