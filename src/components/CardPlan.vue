<template>
  <div class="card__wrapper">
    <h3 class="card__title">{{title}}</h3>
    <div class="card__content">
        <ul class="card__list">
            <li class="card__item" v-for="item in list" :key="item">{{item}}</li>
        </ul>
        <div class="card__price">
            <span class="card__price-sign">$</span>
            <span class="card__price-num">{{price}}</span>
        </div>
        <ButtonMain class="card__button" :type="buttonType" text="Get started"/>
    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue'
export default {
  props: {
    title: String,
    price: Number,
    list: Array,
    buttonType: String
  },
  components: { ButtonMain }
}
</script>

<style>
    .card__wrapper {
        background-color: var(--white-color);
        box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);
        border-radius: 32px;
        width: 100%;
        margin-top: 48px;
    }
    .card__title {
        font-weight: 700;
        font-size: 32px;
        line-height: 140%;
        color: #0F0F0F;
        text-align: center;
        margin: 0;
        padding: 60px 40px 32px;
        border-bottom: 1px solid #DBDBDB;
    }
    .card__content {
        padding: 32px 40px 40px;
    }
    .card__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .card__item {
        position: relative;
        line-height: 24px;
        font-size: 16px;
        padding-left: 44px;
        color: #5C5C5C;
    }
    .card__item::before {
        content: '';
        width: 32px;
        height: 32px;
        background-image: url(../img/check.svg);
        position: absolute;
        left: 0;
        top: -4px;
    }
    .card__price {
        color: #0F0F0F;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin-top: 64px;
        margin-bottom: 16px;
    }
    .card__price-sign {
        font-size: 26px;
        line-height: 130%;
    }
    .card__price-num {
        font-size: 50px;
        line-height: 130%;
    }
    .card__button {
        width: 100%;
    }
</style>
