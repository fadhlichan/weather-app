<template>
    <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-5">
        <div class="forecast" v-for="data in WeatherData" :key="data.dt">
            <div><span class="text-gray-600">{{ recentTime(data.dt_txt) }}</span></div>
            <div class="inline-block m-auto">
                <weather-icon :icon="data.weather[0].icon" />
            </div>
            <div>{{ temperature(data.main.temp_max) }}° <span class="text-gray-600">{{ temperature(data.main.temp_min) }}°</span></div>
        </div>
    </div>
</template>

<script>
import { WeatherData, WeatherComputed } from '../../mixins'
import WeatherIcon from '../display/weather/WeatherIcon'

export default {
    name: 'DisplayForecasts',
    mixins: [WeatherData, WeatherComputed],
    components: { WeatherIcon }
}
</script>

<style lang="postcss">
.forecast {
    @apply bg-white text-gray-700 border border-gray-300 rounded-md p-5 text-center content-center
}

.forecast:hover {
    @apply border-gray-400 shadow-md
}
</style>