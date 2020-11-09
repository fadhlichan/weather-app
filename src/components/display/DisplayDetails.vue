<template>
    <div class="mt-5 md:mt-0 md:w-3/5 w-full">
        <div class="grid md:grid-cols-2 gap-y-1 gap-x-6">
            <Detail
                label="Feels like"
                :icon="require('@/assets/icons/thermometer-2.png')"
                :value="`${ temperature(WeatherData.main.feels_like) }°`"
            />
            <Detail
                label="Max/min"
                :icon="require('@/assets/icons/thermometer.png')"
                :value="`${ temperature(WeatherData.main.temp_max) }°/${ temperature(WeatherData.main.temp_min) }°`"
            />
            <Detail
                label="Humidity"
                :icon="require('@/assets/icons/humidity.png')"
                :value="`${ WeatherData.main.humidity }%`"
            />
            <Detail
                label="Pressure"
                :icon="require('@/assets/icons/barometer.png')"
                :value="`${ WeatherData.main.pressure } mb`"
            />
            <Detail
                label="Visibility"
                :icon="require('@/assets/icons/view.png')"
                :value="toKilometer(WeatherData.visibility)"
            />
            <Detail
                label="Wind"
                :icon="require('@/assets/icons/wind.png')"
                :value="toKmh(WeatherData.wind.speed)"
            />
            <Detail
                label="Direction"
                :icon="require('@/assets/icons/transfer.png')"
                :value="`${ WeatherData.wind.deg }°`"
            />
            <Detail
                label="Cloudiness"
                :icon="require('@/assets/icons/cloudiness.png')"
                :value="`${ WeatherData.clouds.all }%`"
            />
        </div>
    </div>
</template>

<script>
import { WeatherData, WeatherComputed } from '../../mixins'
import Detail from '../display/single/Detail'

export default {
    name: 'DisplayDetails',
    mixins: [WeatherData, WeatherComputed],
    components: { Detail }
}
</script>