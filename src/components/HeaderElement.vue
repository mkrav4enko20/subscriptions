<template>
  <header class="header">
    <div class="header__logo">
      <a href="#"><img src="@/img/logo.png" alt="" /></a>
      <a href="#"><div class="header__logo-name">DiscountsOnServices</div></a>
    </div>
    <div class="header__nav">
      <span>Subscriptions</span>
      <a class="header__nav-links" href="#">FAQ</a>
      <a class="header__nav-links" href="#">Support</a>
      <a class="header__nav-links" href="#">About</a>
    </div>
    <div class="header__block">
      <div class="header__block-links">
        <a class="header__svg" href="#">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a class="header__svg" href="#">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <span>EN</span>
      <ButtonMain
        class="header__button"
        :onClick="showSignInModal"
        text="Log in"
      />
    </div>
  </header>

  <ModalComponent
    v-if="signInModalVisibility"
    :onClose="hideSignInModal"
    title="Log in"
  >
    <template v-slot:description>
      New user?
      <a href="#" @click.prevent="handleSignUpClick">Create an account</a>
    </template>

    <template v-slot:default>
      <div class="fields">
        <InputComponent
          label="Email Address"
          type="email"
          placeholder="Enter your e-mail"
        />
        <InputComponent
          label="Password"
          type="password"
          placeholder="********"
        />
      </div>
      <div class="sign-in__block">
        <a href="#" class="sign-in__password" @click.prevent="handleForgotClick">Forgot password?</a>
        <ButtonMain class="sign-in__button" text="Log in" />
      </div>
      <SocialOptions />
      <p class="sign-in__footer">
        Protected by reCAPTCHA and subject to the Google
        <a class="sign-in__policy" href="#">Privacy Policy</a> and <a class="sign-in__terms" href="#">Terms of Service</a>.
      </p>
    </template>
  </ModalComponent>

  <ModalComponent
    v-if="signUpModalVisibility"
    :onClose="hideSignUpModal"
    title="Create an account"
  >
    <template v-slot:description>
      Already have an account?
      <a href="#" @click.prevent="handleSignInClick">Sign In</a>
    </template>

    <template v-slot:default>
      <div class="fields">
        <InputComponent label="User name" placeholder="Enter your name" />
        <InputComponent
          label="Email Address"
          type="email"
          placeholder="Enter your e-mail"
        />
        <InputComponent
          label="Password"
          type="password"
          placeholder="********"
        />
      </div>
      <div class="sign-up__block">
        <input type="checkbox">
        <p class="sign-up__text">By creating an account you agree to our <a class="sign-in__policy" href="#">Privacy Policy</a> and <a class="sign-in__policy" href="#">Terms of Service</a>.</p>
      </div>
      <ButtonMain class="sign-up__button" text="Sing up" />
      <SocialOptions />
    </template>
  </ModalComponent>

  <ModalComponent
    v-if="forgotModallVisibility"
    :onClose="hideForgotModal"
    title="Forgot Password"
  >
    <template v-slot:description>
      <p class="forgot__text">We will send reset code in this emaill.</p>
    </template>
    <template v-slot:default>
      <div class="fields">
        <InputComponent
          label="Email Address"
          type="email"
          placeholder="Enter your e-mail"
        />
      </div>
      <ButtonMain class="sign-up__button" text="Submit" />
    </template>
  </ModalComponent>

</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import SocialOptions from '@/components/SocialOptions.vue'

export default {
  components: {
    ButtonMain,
    ModalComponent,
    InputComponent,
    SocialOptions
  },
  data () {
    return {
      signInModalVisibility: false,
      signUpModalVisibility: false,
      forgotModallVisibility: false
    }
  },
  methods: {
    showSignInModal () {
      this.signInModalVisibility = true
    },
    hideSignInModal () {
      this.signInModalVisibility = false
    },
    showSignUpModal () {
      this.signUpModalVisibility = true
    },
    hideSignUpModal () {
      this.signUpModalVisibility = false
    },
    showForgotModal () {
      this.forgotModallVisibility = true
    },
    hideForgotModal () {
      this.forgotModallVisibility = false
    },
    handleSignInClick () {
      this.hideSignUpModal()
      this.showSignInModal()
    },
    handleSignUpClick () {
      this.hideSignInModal()
      this.showSignUpModal()
    },
    handleForgotClick () {
      this.hideSignInModal()
      this.showForgotModal()
    }
  }
}
</script>

<style>
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 120px;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__logo-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  margin-left: 8px;
  color: var(--title-color);
}
.header__nav {
  color: var(--text-color);
}
.header__nav-links {
  color: var(--text-color);
  margin-left: 46px;
}
.header__nav-links:hover {
  color: var(--main-color);
}
.header__nav-links:active {
  color: var(--active-blue-color);
}
.header__block {
  display: flex;
  align-items: center;
}
.header__block-links {
  margin-right: 40px;
}
.header__button {
  min-width: 136px;
  margin-left: 40px;
}
.header__svg {
  color: var(--text-color);
}
.header__svg:hover {
  color: var(--main-color);
}
.header__svg:active {
  color: var(--active-blue-color);
}
.header__svg + .header__svg {
  margin-left: 14px;
}

.fields {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
.fields > * {
  flex-basis: 100%;
}
.sign-in__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.sign-in__password {
  font-size: 16px;
  line-height: 150%;
  color: #0f0f0f;
  font-weight: 700;
}
.sign-in__button {
  width: 190px;
}
.sign-in__footer {
  margin-top: 48px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 150%;
  color: #9C99AD;
}
.sign-in__policy {
  color: var(--main-color);
}
.sign-in__terms {
  color: var(--title-color);
}
.sign-up__block {
  display: flex;
  align-items: flex-start;
  margin-top: 32px;
}
.sign-up__text {
  margin: 0;
  font-size: 15px;
  line-height: 130%;
  color: var(--title-color);
}
.sign-up__button {
  margin-top: 40px;
  width: 100%;
}
.forgot__text {
  margin: 0;
}
</style>
