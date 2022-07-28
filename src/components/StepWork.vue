<template>
    <div class="step">
        <img class="step__img" :src="img" alt="">
        <h3 class="step__title">{{title}}</h3>
        <p class="step__subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
.step {
    height: 300px;
    border-radius: 32px;
    background-color: var(--white-color);
    padding: 40px;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.step__img {
    position: absolute;
    top: 6px;
    right: 6px;
}
.step__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    color: var(--title-color);
    margin-top: 0;
    margin-bottom: 26px;
}
.step__subtitle {
    font-size: 18px;
    line-height: 150%;
    color: var(--text-color);
    margin: 0;
}
</style>
