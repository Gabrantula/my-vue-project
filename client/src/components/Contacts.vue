<script>
export default {

};
</script>

<template>
    <!-- Contact Section -->
    <div id="contact" class="w3-container w3-light-grey">
        <h3 class="w3-center">
            CONTACT
        </h3>
        <p class="w3-center w3-large">
            Lets get in touch. Send us a message:
        </p>
        <div>
            <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" /> Chicago, US</p>
            <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right" /> Phone: +00 151515</p>
            <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right" /> Email: mail@mail.com</p>
            <br>
            <form action="/action_page.php" target="_blank">
                <p>
                    <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
                </p>
                <p>
                    <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                </p>
                <p>
                    <input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject">
                </p>
                <p>
                    <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
                </p>
                <p>
                    <button class="w3-button w3-black" type="submit">
                        <i class="fa fa-paper-plane" /> SEND MESSAGE
                    </button>
                </p>
            </form>
            <!-- Image of location/map -->
            <img src="/pic/street/maarten-van-den-heuvel--WWFGrfm7qk-unsplash.jpg" class="w3-image w3-greyscale">
        </div>
    </div>
</template>

<style scoped>
#contact {
    padding: 128px 16px;
}

#contact div {
    margin-top: 48px;
}

img {
    width: 90%;
    margin: 45px auto 0 auto;
    height: 800px;
}
</style>
