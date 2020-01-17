<template>
  <div>
<nav class="navigation">
        <ul class="">
             <li class=""><router-link to="/">Home</router-link></li>
            <li class=""> <router-link to="/about">About</router-link></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
    .navigation{
        @extend .badge !optional;
        @extend .badge-primary!optional
        
    }
</style>