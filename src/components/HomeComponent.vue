<template>
  <div class="home">
    <div class="home__block">
        <h2 class="home__title">Start enjoying a benefit <br> of up to 50%</h2>
        <p class="home__desc">You have always wanted to get the same product at a <br> special price for you, without haggling - and it is yours.</p>
        <ButtonMain class="third home__button" text="Start using" />
    </div>
    <img src="../assets/main-img.png" alt="">
  </div>
</template>

<script>
import ButtonMain from './ButtonMain.vue'
export default {
  components: { ButtonMain }
}
</script>

<style>
    .home {
        display: flex;
        padding-top: 60px;
        gap: 16px;
    }
    .home__block {
        background-color: var(--main-color);
        box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
        border-radius: 32px;
        padding: 114px 60px;
    }
    .home__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 140%;
        color: var(--white-color);
        margin: 0;
    }
    .home__desc {
        font-size: 16px;
        line-height: 150%;
        color: var(--white-color);
        margin-top: 24px;
        margin-bottom: 40px;
    }
    .home__button {
        width: 207px;
    }
</style>
