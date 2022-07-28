<template>
    <HomeComponent />
    <ChooseSubscription />
    <StepsWork />
    <InviteFriends />
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import ChooseSubscription from '@/components/ChooseSubscription.vue'
import StepsWork from '@/components/StepsWork.vue'
import InviteFriends from '@/components/InviteFriends.vue'

export default {
  components: {
    HomeComponent,
    ChooseSubscription,
    StepsWork,
    InviteFriends
  }
}
</script>

<style>

</style>
