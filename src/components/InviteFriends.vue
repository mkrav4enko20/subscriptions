<template>
  <div class="invite">
    <div>
        <h3 class="invite__subtitle">Invite friends</h3>
        <p class="invite__desc">Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL</p>
    </div>
    <div class="invite__block">
        <p class="invite__text">Click on the link</p>
        <a class="invite__link" href="#">DISCOUNTS ON SERVICES</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .invite {
        background-color: var(--main-color);
        border-radius: 32px;
        padding: 40px 80px;
        display: flex;
    }
    .invite__subtitle {
        font-size: 26px;
        line-height: 140%;
        color: var(--white-color);
        margin: 0;
    }
    .invite__desc {
        font-size: 16px;
        line-height: 150%;
        color: var(--white-color);
        margin-top: 24px;
        margin-bottom: 0;
    }
    .invite__block {
        background-color: var(--input-color);
        border-radius: 16px;
        padding: 28px 72px;
        width: 100%;
    }
    .invite__text {
        font-size: 20px;
        line-height: 140%;
        color: var(--title-color);
        margin: 0;
    }
    .invite__link {
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        color: var(--main-color);
    }
    .invite__link:hover {
        color: var(--title-color);
    }
    .invite__link:active {
        color: var(--active-black-color);
    }
</style>
