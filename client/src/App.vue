<script>
import Navigation from './components/Navigation.vue';

// import HeaderApp from './components/HeaderApp.vue';
// import About from './components/About.vue';
// import PromoSection from './components/Promo-section.vue';

// import TeamSection from './components/Team-section.vue';
// import Statistics from './components/Statistics.vue';

// import OurWork from './components/OurWork.vue';
// import Skills from './components/Skills.vue';

// import PricingSection from './components/Pricing-section.vue';
// import Contacts from './components/Contacts.vue';
// import Login from './components/login-register/Login.vue';
// import Register from './components/login-register/Register.vue';

import FooterApp from './components/FooterApp.vue';

// import NotFound from './components/NotFound.vue';

export default {
  components: {
    Navigation,
    // HeaderApp,
    // About,
    // PromoSection,
    // TeamSection,
    // Statistics,
    // OurWork,
    // Skills,
    // PricingSection,
    // Contacts,
    // Login,
    // Register,
    FooterApp,
    //  NotFound,
  },
  data() {
    return {
      pages: [
        {
          url: '/',
          text: 'HeaderApp',
        },
        {
          url: '/about',
          text: 'About',
        },
        {
          url: '/login',
          text: 'Login',
        },
        {
          url: '/register',
          text: 'Register',
        },
        {
          url: '/contacts',
          text: 'Contacts',
        },
        {
          url: '/our-work',
          text: 'OurWork',
        },
        {
          url: '/pricing-section',
          text: 'PricingSection',
        },
        /*
        {
          url: '/promo-section',
          text: 'PromoSection',
        }, */
        {
          url: '/team-section',
          text: 'TeamSection',
        },
        {
          url: '/cart',
          text: 'Cart',
        },
      ],
    };
  },
};
</script>

<template>
  <Navigation />
  <!--
          <HeaderApp />
          <About />

          <TeamSection />

          <OurWork />

          <PricingSection />
          <Contacts />
          <Login />
          <Register /> -->
  <router-view />

  <!--  <NotFound /> -->

  <FooterApp />
</template>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif
}

body,
html {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;

  background-image: url(/pic/andras-vas-Bd7gNnWJBkU-unsplash.jpg);
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}

.w3-col .w3-round-large {
  width: 300px;
  height: 55%;
}
</style>
