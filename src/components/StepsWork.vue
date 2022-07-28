<template>
  <div class="steps">
    <TitleMain text="How it works?" />
    <div class="steps__wrapper">
        <StepWork :img="step1Image" title="Step 1" subtitle="Enter your account information" />
        <StepWork :img="step2Image" title="Step 2" subtitle="Enter your account information" />
        <StepWork :img="step3Image" title="Step 3" subtitle="Enter your account information" />
    </div>
  </div>
</template>

<script>
import TitleMain from '@/components/TitleMain.vue'
import StepWork from '@/components/StepWork.vue'
import step1Image from '@/img/step-1.png'
import step2Image from '@/img/step-2.png'
import step3Image from '@/img/step-3.png'

export default {
  components: {
    TitleMain,
    StepWork
  },
  data () {
    return {
      step1Image,
      step2Image,
      step3Image
    }
  }
}
</script>

<style>
    .steps {
        padding-top: 120px;
    }
    .steps__wrapper {
        display: flex;
        gap: 16px;
        margin-bottom: 20px;
    }
</style>
