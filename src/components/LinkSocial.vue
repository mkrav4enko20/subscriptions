<template>
    <a :href="url" class="link">
        <img :src="src" alt="">
    </a>
</template>
<script>
export default {
  props: {
    src: String,
    url: String
  }
}
</script>

<style scoped>
.link {
    border: 1px solid #DFDFDF;
    border-radius: 12px;
}
</style>
