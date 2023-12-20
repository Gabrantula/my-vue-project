<script>
export default {

};
</script>

<template>
    <div class="not">
        <div class="number">
            404
        </div>
        <div class="text">
            <span>Ooops...</span><br>page not found
            <router-link to="/" class="button">
                Go back
            </router-link>
        </div>

        <a class="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank" />
    </div>
</template>

<style  scoped>
.not {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;
    height: 100%;
}

div {
    width: 100%;

    text-align: center;
}

.number {
    background: #fff;
    position: relative;
    font: 900 30vmin "Consolas";
    letter-spacing: 5vmin;
    text-shadow: 2px -1px 0 #000, 4px -2px 0 #0a0a0a, 6px -3px 0 #0f0f0f, 8px -4px 0 #141414, 10px -5px 0 #1a1a1a, 12px -6px 0 #1f1f1f, 14px -7px 0 #242424, 16px -8px 0 #292929;
}

.number::before {
    background-color: #9f7878;
    background-image: radial-gradient(closest-side at 50% 50%, #383535 100%, rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #9e9e9e 100%, rgba(0, 0, 0, 0));
    background-repeat: repeat-x;
    background-size: 40vmin 40vmin;
    background-position: -100vmin 20vmin, 100vmin -25vmin;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    -webkit-animation: moving 10s linear infinite both;
    animation: moving 10s linear infinite both;
    display: block;
    position: absolute;
    content: "";
}

@-webkit-keyframes moving {
    to {
        background-position: 100vmin 20vmin, -100vmin -25vmin;
    }
}

@keyframes moving {
    to {
        background-position: 100vmin 20vmin, -100vmin -25vmin;
    }
}

.text {
    font: 400 5vmin "Courgette";
}

.text span {
    font-size: 10vmin;
}

.button {
    cursor: pointer;
    color: white;
    text-shadow: 1px 1px 1px black;
    border-radius: 10px;
    border: 2px gray;
    text-decoration: none;
    background-color: #9f7878;
    padding: 3px 20px;
}

.button:hover {
    box-shadow: 4px 4px 4px grey;
    color: #9f7878;
    text-shadow: 1px 1px 1px black;
    background-color: rgb(207, 203, 203);
}
</style>
