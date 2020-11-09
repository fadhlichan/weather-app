<template>
    <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-5">
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
    </div>
</template>

<script>
import Forecast from './single/Forecast'

export default {
    name: 'LoadForecasts',
    components: { Forecast }
}
</script>