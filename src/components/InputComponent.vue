<template>
  <label>
    {{ label }}
    <br>
    <input class="input" :type="type" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    type: {
      default: 'text'
    },
    placeholder: String
  }
}
</script>

<style>
  .input {
    padding: 16px 24px;
    background-color: var(--input-color);
    border: 1px solid var(--input-color);
    border-radius: 8px;
    margin-top: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .input:hover {
    border: 1px solid #838099;
  }
  .input:active {
    border: 1px solid var(--input-color);
  }
  .input:focus {
    outline: none;
  }
</style>
