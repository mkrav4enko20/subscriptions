<template>
  <div class="modal__wrapper">
    <div class="modal">
      <span class="modal__close" @click="onClose"></span>
      <h2 class="modal__title">{{ title }}</h2>
      <p class="modal__description">
        <slot name="description"></slot>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    onClose: Function
  }
}
</script>

<style>
.modal__wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background-color: var(--white-color);
  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
  border-radius: 32px;
  padding: 40px;
  position: relative;
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;
}
.modal__close {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(23, 23, 23, 0.1);
  position: absolute;
  right: 40px;
  top: 40px;
  cursor: pointer;
}
.modal__close::before,
.modal__close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--title-color);
  transform: translate(-50%, -50%) rotate(45deg);
}
.modal__close::before {
  width: 2px;
  height: 18px;
}
.modal__close::after {
  width: 18px;
  height: 2px;
}
.modal__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: var(--title-color);
  margin-top: 0;
  margin-bottom: 12px;
}
.modal__description {
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 150%;
}
.modal__description a {
  color: var(--main-color);
}
</style>
