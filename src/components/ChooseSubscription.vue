<template>
  <div class="choose">
    <TitleMain text="Choose a subscription" />
    <div class="choose__wrapper">
        <div>
            <h3 class="choose__subtitle">Netflix subscription rates</h3>
            <p class="choose__text">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
            <ButtonMain text="Learn more" :onClick="handleClickNetflix" />
        </div>
        <img src="../img/netflix.png" alt="">
    </div>
    <div class="choose__wrapper">
        <div>
            <h3 class="choose__subtitle">Spotify Premium</h3>
            <p class="choose__text">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
            <ButtonMain text="Learn more" />
        </div>
        <img src="../img/spotify.png" alt="">
    </div>
    <div class="choose__wrapper">
        <div>
            <h3 class="choose__subtitle">YouTube Premium </h3>
            <p class="choose__text">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
            <ButtonMain text="Learn more" />
        </div>
        <img src="../img/youtube.png" alt="">
    </div>
  </div>
</template>

<script>
import TitleMain from '@/components/TitleMain.vue'
import ButtonMain from './ButtonMain.vue'

export default {
  components: { TitleMain, ButtonMain },
  methods: {
    handleClickNetflix () {
      this.$router.push('/netflix')
    }
  }
}
</script>

<style>
    .choose {
        padding-top: 120px;
    }
    .choose__wrapper {
        background-color: var(--white-color);
        box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
        border-radius: 32px;
        display: flex;
        padding-left: 60px;
        gap: 112px;
    }
    .choose__wrapper + .choose__wrapper {
        margin-top: 16px;
    }
    .choose__subtitle {
        font-size: 26px;
        line-height: 140%;
        color: var(--title-color);
        margin-top: 60px;
        margin-bottom: 22px;
    }
    .choose__text {
        font-size: 16px;
        line-height: 150%;
        color: var(--text-color);
        margin-top: 0;
        margin-bottom: 38px;
    }
</style>
