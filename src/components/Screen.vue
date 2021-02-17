<template>
    <b-container>
        <div class="text-left overflow-auto">
            <div v-for="(item, key) in screen" :key="key" :value="item" class="float-left m-3">
                <div class="position-relative">
                    <img v-bind:src="item.image_url" width="320">
                    <div class="ldiv position-absolute bg-white">
                        <h2 class="ltext text-blue px-3">L</h2>
                    </div>
                </div>
                <h5 class="text-blue mt-2">{{ item.title }}</h5>
                <b-row>
                    <b-col cols="4" class="pr-0">
                        <img v-bind:src="item.icon1" class="float-left">
                        <p class="float-left pl-2 my-0">{{ item.location_title }}</p>
                    </b-col>
                    <b-col cols="8">
                        <p class="text-black float-left my-0">{{ item.location }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4" class="pr-0">
                        <img v-bind:src="item.icon2" class="float-left">
                        <p class="float-left pl-2 my-0">{{ item.date_title }}</p>
                    </b-col>
                    <b-col cols="8">
                        <p class="text-black float-left my-0">{{ item.date }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4" class="pr-0">
                        <img v-bind:src="item.icon3" class="float-left">
                        <p class="float-left pl-2 my-0">{{ item.score_title }}</p>
                    </b-col>
                    <b-col cols="8">
                        <p class="text-black float-left my-0">{{ item.score }}</p>
                    </b-col>
                </b-row>
            </div>
        </div>  
    </b-container>
</template>

<script>
export default {
    name: "Screen",
    data() {
        return {
            screen: [
                { 
                    image_url: './images/01.jpg', 
                    title: 'AC Georgia vs Sniper Elite', 
                    icon1: './images/location.svg',
                    location_title: 'Location',
                    location: 'Away',
                    icon2: './images/date.svg',
                    date_title: 'Date',
                    date: '1/15/2021',
                    icon3: './images/score.svg',
                    score_title: 'Score',
                    score: 'Sniper Elite'
                },
                { 
                    image_url: './images/01.jpg', 
                    title: 'AC Georgia vs Sniper Elite', 
                    icon1: './images/location.svg',
                    location_title: 'Location',
                    location: 'Away',
                    icon2: './images/date.svg',
                    date_title: 'Date',
                    date: '1/15/2021',
                    icon3: './images/score.svg',
                    score_title: 'Score',
                    score: 'Sniper Elite'
                },
                { 
                    image_url: './images/01.jpg', 
                    title: 'AC Georgia vs Sniper Elite', 
                    icon1: './images/location.svg',
                    location_title: 'Location',
                    location: 'Away',
                    icon2: './images/date.svg',
                    date_title: 'Date',
                    date: '1/15/2021',
                    icon3: './images/score.svg',
                    score_title: 'Score',
                    score: 'Sniper Elite'
                },
                { 
                    image_url: './images/01.jpg', 
                    title: 'AC Georgia vs Sniper Elite', 
                    icon1: './images/location.svg',
                    location_title: 'Location',
                    location: 'Away',
                    icon2: './images/date.svg',
                    date_title: 'Date',
                    date: '1/15/2021',
                    icon3: './images/score.svg',
                    score_title: 'Score',
                    score: 'Sniper Elite'
                },
                { 
                    image_url: './images/01.jpg', 
                    title: 'AC Georgia vs Sniper Elite', 
                    icon1: './images/location.svg',
                    location_title: 'Location',
                    location: 'Away',
                    icon2: './images/date.svg',
                    date_title: 'Date',
                    date: '1/15/2021',
                    icon3: './images/score.svg',
                    score_title: 'Score',
                    score: 'Sniper Elite'
                },
            ]
        };
    }
}
</script>

<style scoped>
.text-black {
    color: black;
}
.ldiv {
    width: 50px;
    top: 10%;
    left: 6%;
    border: 2px solid white;
    border-radius: 25px;
}

</style>