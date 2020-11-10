<template>
    <div class="fixed sm:static z-20 w-full">
        <div class="sm:mb-5 flex relative">
            <input-txt classes="inp-text" :value="city"  placeholder="Enter your location..." @inputed="monitoring($event)" @entered="process"/>
            <input-btn classes="btn" @clicked="process"/>
        </div>
    </div>
</template>

<script>
import InputTxt from './InputTxt';
import InputBtn from './InputBtn';

export default {
    name: 'SearchBox',
    components: { InputTxt, InputBtn },
    data: function() {
        return {
            city: ''
        }
    },
    methods: {
        monitoring: function(val) {
            this.$store.state.weather.city = val;
        },
        process: function() {
            this.$store.dispatch('weather/getWeather');
        }
    }
}
</script>

<style lang="postcss">
@screen sm {
    .inp-text {
        @apply p-12 rounded-md
    }

    .btn {
        @apply rounded-r-md
    }
}

.inp-text {
    @apply shadow-lg flex-1 bg-blue-100 px-5 py-3 outline-none
}

.btn {
    @apply bg-blue-500 px-5 py-3 text-white absolute right-0
}

.btn:focus {
    @apply bg-blue-600 outline-none
}
</style>
