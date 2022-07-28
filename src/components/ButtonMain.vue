<template>
  <button @click="onClick" :class="buttonClass">{{text}}</button>
</template>

<script>

export default {
  props: {
    text: String,
    type: {
      type: String,
      default: 'primary'
    },
    onClick: Function
  },
  computed: {
    buttonClass () {
      return {
        button: true,
        primary: this.type === 'primary',
        secondary: this.type === 'secondary',
        third: this.type === 'third'
      }
    }
  }
}
</script>

<style scoped>
    .button {
        border-radius: 16px;
        padding: 16px 24px;
        font-weight: 700;
        font-size: 17px;
        line-height: 130%;
        color: var(--white-color);
    }

    .primary {
        background-color: var(--main-color);
        border: 1px solid var(--main-color);
    }
    .primary:hover {
        background-color: transparent ;
        color: var(--title-color);
    }
    .primary:active {
        background-color: var(--active-blue-color) ;
        color: var(--white-color);
        border: 1px solid var(--active-blue-color);
    }
    .secondary {
        background-color: var(--title-color);
        border: 1px solid var(--title-color);
    }
    .secondary:hover {
        background-color: transparent;
        color: var(--title-color);
    }
    .secondary:active {
        background-color: var(--active-black-color);
        border: 1px solid var(--active-black-color);
        color: var(--white-color);
    }
    .third {
      color: var(--title-color);
      background-color: var(--white-color);
      border: 1px solid var(--white-color);
    }
    .third:hover {
      color: var(--white-color);
      background-color: transparent;
    }
    .third:active {
      color: var(--title-color);
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
</style>
