<script>
import { mapState } from 'pinia';
import { useUserStore } from '../pinia-store/userStore';

export default {

    computed: {
        ...mapState(useUserStore, ['profile', 'isAuth']),
    },
};
</script>

<template>
    <div v-if="profile" class="cont">
        <h1>My Profile</h1>
        <div class="profile">
            <!--
   <div class="skills">
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
            </div>
            -->

            <div class="info">
                <p>Name:</p>

                <p class="dynamic" v-if="profile.gender === 'male'">
                    <span style="color: rgb(61, 61, 240);">Mr</span> {{ profile.username }}
                </p>
                <p class="dynamic" v-if="profile.gender === 'female'">
                    <span style="color: palevioletred;">Ms</span> {{ profile.username }}
                </p>

                <p>Email:</p>
                <p class="dynamic">{{ profile.email }}</p>
            </div>
        </div>
        <div class="it">
            <i class="fa-brands fa-react" />
            <i class="fa-brands fa-vuejs" />
            <i class="fa-brands fa-angular" />
            <i class="fa-brands fa-html5" />
            <i class="fa-brands fa-css3-alt" />
        </div>
    </div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';

.cont {
    margin-top: 130px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
}

.cont h1 {

    letter-spacing: 1.5px;
    /* margin-top: 40px;
    margin-bottom: 40px;*/
    margin: 40px auto 40px auto;
    position: relative;
    display: inline-block;
    color: rgb(80, 138, 115);
    text-shadow: 2px 4px 10px gray;
}

.cont h1::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px auto;
    width: 50%;
    height: 2px;
    background-color: rgb(80, 138, 115);
}


.profile {
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    justify-content: space-around;
}

.info {
    box-shadow: 5px 5px 5px gray;
    width: 50%;
    height: 200px;
    border: 2px solid gray;
    padding-left: 1.5%;
    padding-top: 1.5%;
}

.info p {
    display: inline-block;
    width: 50%;
}

.info .dynamic {
    font-style: italic;
    font-size: 2.5rem;
}

.it {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.it i {
    font-size: 2rem;
}
</style>
