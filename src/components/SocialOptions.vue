<template>
  <p class="social__options">Or sign in with</p>
  <div class="social__wrapper">
    <LinkSocial class="social__link" :src="googleIcon" url="https://google.com" />
    <LinkSocial class="social__link" :src="fbIcon" url="https://facebook.com" />
    <LinkSocial class="social__link" :src="appleIcon" url="https://apple.com" />
  </div>
</template>

<script>
import LinkSocial from '@/components/LinkSocial.vue'
import fbIcon from '@/assets/social/fb.png'
import googleIcon from '@/assets/social/google.png'
import appleIcon from '@/assets/social/apple.png'

export default {
  components: {
    LinkSocial
  },
  data () {
    return {
      fbIcon,
      googleIcon,
      appleIcon
    }
  }
}
</script>

<style>
.social__options {
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #919191;
      margin-top: 40px;
      position: relative;
    }
    .social__options::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 160px;
      top: 50%;
      left: 0;
      background-color: #DFDFDF;
    }
    .social__options::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 160px;
      top: 50%;
      right: 0;
      background-color: #DFDFDF;
    }
    .social__wrapper {
      display: flex;
      gap: 8px;
    }
    .social__link {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 148px;
    }
</style>
