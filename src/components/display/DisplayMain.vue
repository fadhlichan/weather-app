<template>
    <div class="md:w-2/5 w-full">
        <div class="relative">
            <div>
                <p>{{ time }}</p>
                <p class="text-2xl font-bold">{{ WeatherData.name }}, {{WeatherData.sys.country }}</p>
                <p class="font-semibold">{{ WeatherData.weather[0].main }} ({{ WeatherData.weather[0].description }})</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <div class="absolute top-0 right-0 lg:static">
                    <weather-icon :icon="WeatherData.weather[0].icon" />
                </div>
                <div class="flex flex-row align-top">
                    <span class="digital text-6xl font-bold mr-1">{{ temperature(WeatherData.main.temp) }}°</span>
                    <div class="digital text-xl mt-3">
                        <button :class="celcius.active ? 'active' : 'iddle'" @click="switchTemp">C</button>
                        <button :class="fahrenheit.active ? 'active' : 'iddle'" @click="switchTemp">F</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { WeatherData, WeatherComputed } from '../../mixins'
import WeatherIcon from '../display/weather/WeatherIcon'

export default {
    name: 'DisplayMain',
    mixins: [WeatherData, WeatherComputed],
    components: { WeatherIcon }
}
</script>

<style lang="postcss">
.active {
    @apply mr-2 font-semibold
}

.iddle {
    @apply text-gray-500  font-semibold mr-2
}

.active:focus, .iddle:focus {
    @apply outline-none
}

.iddle:hover {
    @apply text-gray-600
}
</style>