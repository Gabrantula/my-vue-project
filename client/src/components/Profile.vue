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
            <div class="skills">
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
                <p><span>✅</span> lorem Ipsum</p>
            </div>
            <div class="info">
                <p>Name</p>
                <!-- <p>{{ profile.username }}</p> -->

                <p v-if="profile.gender === 'male'">
                    <span style="color: rgb(61, 61, 240);">Mr</span> {{ profile.username }}
                </p>
                <p v-if="profile.gender === 'female'">
                    <span style="color: palevioletred;">Ms</span> {{ profile.username }}
                </p>
                <!--  <p v-if="profile.gender === 'male'">
                    <span style="color: rgb(61, 61, 240);">Mr</span> {{ profile.firstName }} {{ profile.lastName }}
                </p>
                <p v-if="profile.gender === 'female'">
                    <span style="color: palevioletred;">Ms</span> {{ profile.firstName }} {{ profile.lastName }}
                </p> -->
                <p>Email</p>
                <p>{{ profile.email }}</p>
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
}

.cont h1 {
    margin: 0 auto;
}

.profile {
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    justify-content: space-around;
}

.info {
    box-shadow: 5px 5px 5px gray;
    width: 40%;
    border: 2px solid gray;
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
