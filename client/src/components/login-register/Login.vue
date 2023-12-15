<script>
import { mapActions } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, required, sameAs } from '@vuelidate/validators';
import { loginUser } from '../../services/auth';
import { registerUser } from '../../services/auth';
import { useUserStore } from '../../pinia-store/userStore';

import FormItem from './FormItem.vue';

function nameAreCapitalized(value) {
    const regex = /^([A-Z][a-z]*\s*)+$/;
    return regex.test(value);
}
export default {
    components: { FormItem },

    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            isLoading: false,

            user: {
                email: '',
                password: '',
            },
            registerData: {
                username: '',
                email: '',
                password: '',
                rePass2: '',
                gender: ''
            },
        };
    },

    validations() {
        return {
            registerData: {
                username: {
                    required,
                    nameAreCapitalized: helpers.withMessage('The name should start with a capital letter', nameAreCapitalized),
                },
                email: { required, email },
                password: {
                    required,
                    alphaNum,
                    minLength: minLength(3),
                    maxLength: maxLength(11),
                },
                rePass2: {
                    required,
                    sameAs: sameAs(this.registerData.password),
                },
                gender: {
                    required
                }
            }
        };
    },
    methods: {
        // za register
        ...mapActions(useUserStore, ['setProfile']),

        async handleSubmit() {
            const isValid = await this.v$.$validate();
            this.isLoading = true

            const userData = await registerUser(this.registerData)
            console.log(userData);
            if (isValid) {
                this.setProfile(userData)
                this.$router.push('/profile')
            }
            this.isLoading = false
        },
        // za login

        async onSubmit() {
            this.isLoading = true;
            const userData = await loginUser(this.user);

            console.log(userData);

            if (userData) {
                this.setProfile(userData);
                this.$router.push('/profile');
            }
            this.isLoading = false;

        },
    },
};
</script>

<template>
    <!-- login -->
    <div id="login" class="container">
        <input id="flip" type="checkbox">
        <div class="cover">
            <div class="front">

                <img src="/pic/login-register/frontImg.jpg" alt="">
                <div class="text">
                    <span class="text-1">Every new friend is a <br> new adventure</span>
                    <span class="text-2">Let's get connected</span>
                </div>
            </div>
            <div class="back">

                <img class="backImg" src="/pic/login-register/backImg.jpg" alt="">
                <div class="text">
                    <span class="text-1">Complete miles of journey <br> with one step</span>
                    <span class="text-2">Let's get started</span>
                </div>
            </div>
        </div>

        <div class="forms">
            <div class="form-content">
                <div class="login-form">
                    <div class="title">
                        Login
                    </div>
                    <form @submit.prevent="onSubmit">
                        <div class="input-boxes">

                            <div class="input-box">
                                <i class="fa fa-envelope" />
                                <input id="email" v-model="user.email" :disabled="isLoading" type="text"
                                    placeholder="Enter your email" required>
                            </div>
                            <div class="input-box">
                                <i class="fa fa-lock" />
                                <input id="password" v-model="user.password" :disabled="isLoading" type="password"
                                    placeholder="Enter your password" required>
                            </div>

                            <div class="button input-box">
                                <input :disabled="isLoading" type="submit" value="Sumbit">
                            </div>
                            <div class="text sign-up-text">
                                Don't have an account? <label for="flip">Sigup now</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="signup-form">
                    <div class="title">
                        Register
                    </div>
                    <form action="" @submit.prevent="handleSubmit">
                        <div class="input-boxes">
                            <FormItem class="input-box" field="username" required :v$="v$">
                                <i class="fa fa-user" />

                                <input id="username" v-model="registerData.username" type="text"
                                    placeholder="Enter your name"
                                    :class="{ error: v$?.registerData.username.$errors.length }">
                            </FormItem>

                            <FormItem class="input-box" field="email" required :v$="v$">
                                <i class="fa fa-envelope" />

                                <input id="email" v-model="registerData.email" placeholder="Enter your email"
                                    :class="{ error: v$?.registerData.email.$errors.length }" type="text">
                            </FormItem>

                            <FormItem class="input-box" field="password" required :v$="v$">
                                <i class="fa fa-lock" />

                                <input id="password" v-model="registerData.password" placeholder="Enter your password"
                                    :class="{ error: v$?.registerData.password.$errors.length }" type="password">
                            </FormItem>

                            <FormItem class="input-box" field="rePass2" required :v$="v$">
                                <i class="fa fa-lock" />

                                <input id="rePass2" v-model="registerData.rePass2" placeholder="Repeat your password"
                                    :class="{ error: v$?.registerData.rePass2.$errors.length }" type="password">
                            </FormItem>

                            <FormItem :v$="v$" field="gender" label="Gender" required>
                                <select id="gender" v-model="registerData.gender">
                                    <option disabled value="">
                                        Select
                                    </option>
                                    <option value="male">
                                        Male
                                    </option>
                                    <option value="female">
                                        Female
                                    </option>

                                </select>
                            </FormItem>

                            <div class="button input-box">
                                <input :disabled="isLoading" type="submit" value="Sumbit">
                            </div>
                            <div class="text sign-up-text">
                                Already have an account? <label for="flip">Login now</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#login {
    margin-top: 120px;
    margin-bottom: 70px;
}
</style>
