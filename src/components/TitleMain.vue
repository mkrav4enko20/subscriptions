<template>
  <h2 class="title">{{text}}</h2>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>
    .title {
        font-weight: 700;
        font-size: 32px;
        line-height: 140%;
        color: var(--title-color);
        margin-top: 0;
        margin-bottom: 36px;
        text-align: center;
    }
</style>
