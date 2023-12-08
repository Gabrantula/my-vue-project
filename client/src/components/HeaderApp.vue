<script>
export default {

};
</script>

<template>
    <!-- Header with full-height image -->
    <header id="home" class="bgimg-1 w3-display-container w3-grayscale-min">
        <div class="w3-display-left w3-text-white" style="padding:48px">
            <span class="w3-jumbo w3-hide-small">Start something that matters</span><br>
            <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br>
            <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>

            <p>
                <router-link to="/about"
                    class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                    Learn
                    more
                    and start today
                </router-link>
            </p>
        </div>
        <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
            <i class="fa fa-facebook-official w3-hover-opacity" />
            <i class="fa fa-instagram w3-hover-opacity" />
            <i class="fa fa-snapchat w3-hover-opacity" />
            <i class="fa fa-pinterest-p w3-hover-opacity" />
            <i class="fa fa-twitter w3-hover-opacity" />
            <i class="fa fa-linkedin w3-hover-opacity" />
        </div>
    </header>
    <!-- Promo Section - "We know design" -->
    <div class="w3-container w3-light-grey" style="padding:128px 16px">
        <div class="w3-row-padding">
            <div class="w3-col m6">
                <h3>We know design.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>tempor incididunt ut labore
                    et
                    dolore.
                </p>

                <p>
                    <router-link to="/our-work" class="w3-button w3-black">
                        <i class="fa fa-th" /> View Our Works
                    </router-link>
                </p>
            </div>
            <div class="w3-col m6">
                <img class="w3-image w3-round-large" src="/pic/amir-hanna-sweUF7FcyP4-unsplash.jpg" alt="Buildings"
                    width="700" height="394">
            </div>
        </div>
    </div>
    <!-- Promo Section "Statistics" -->
    <div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
        <div class="w3-quarter">
            <span class="w3-xxlarge">14+</span>
            <br>Partners
        </div>
        <div class="w3-quarter">
            <span class="w3-xxlarge">55+</span>
            <br>Projects Done
        </div>
        <div class="w3-quarter">
            <span class="w3-xxlarge">89+</span>
            <br>Happy Clients
        </div>
        <div class="w3-quarter">
            <span class="w3-xxlarge">150+</span>
            <br>Meetings
        </div>
    </div>
    <!-- Skills Section -->
    <div class="w3-container w3-light-grey w3-padding-64">
        <div class="w3-row-padding">
            <div class="w3-col m6">
                <h3>Our Skills.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
                    tempor incididunt ut labore et dolore.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
                    tempor incididunt ut labore et dolore.
                </p>
            </div>
            <div class="w3-col m6">
                <p class="w3-wide">
                    <i class="fa fa-camera w3-margin-right" />Photography
                </p>
                <div class="w3-grey">
                    <div class="w3-container w3-dark-grey w3-center" style="width:90%">
                        90%
                    </div>
                </div>
                <p class="w3-wide">
                    <i class="fa fa-desktop w3-margin-right" />Web Design
                </p>
                <div class="w3-grey">
                    <div class="w3-container w3-dark-grey w3-center" style="width:85%">
                        85%
                    </div>
                </div>
                <p class="w3-wide">
                    <i class="fa fa-photo w3-margin-right" />Photoshop
                </p>
                <div class="w3-grey">
                    <div class="w3-container w3-dark-grey w3-center" style="width:75%">
                        75%
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style  scoped></style>
