import Vue from "vue";
import sample from "./components/sample.vue";

export let app = {
    initialise: () => {
        new Vue({
            el: "#app",
            components: {
                sample
            }
        });    
    }    
}   