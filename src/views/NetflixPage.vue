<template>
  <TitleMain text="Choose a Netflix Plan" />
  <p>Listen without limits at a bargain price</p>
  <form>
    <input class="netflix__plan" type="radio" id="6" name="months" value="6months" placeholder="6 months">
    <label for="6">6 months </label>
    <input class="netflix__plan" type="radio" id="12" name="months" value="12months">
    <label for="12">12 months </label>
  </form>
  <div class="netflix__cards">
    <CardPlan title="Basic" :price="45" :list="basicList" buttonType="secondary" />
    <CardPlan title="Standart" :price="60" :list="basicList" buttonType="primary" />
    <CardPlan title="Premium" :price="80" :list="basicList" buttonType="secondary" />
  </div>
  <InviteFriends/>
</template>

<script>
import TitleMain from '@/components/TitleMain.vue'
import CardPlan from '@/components/CardPlan.vue'
import InviteFriends from '@/components/InviteFriends.vue'

export default {
  components: {
    TitleMain,
    CardPlan,
    InviteFriends
  },
  data () {
    return {
      basicList: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback'
      ]
    }
  }
}
</script>

<style>
  .netflix__plan {
    width: 180px;
    height: 61px;
  }
  .netflix__cards {
    display: flex;
    gap: 16px;
  }
</style>
