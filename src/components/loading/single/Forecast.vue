<template>
    <div class="forecast-body">
        <div :class="{ 'animate-pulse': !$store.state.weather.error }">
        <div class="h-6 w-24 bg-gray-400 rounded mb-6 m-auto"></div>
        <div class="h-16 w-16 bg-gray-400 rounded-full mb-5 m-auto"></div>
        <div class="h-5 w-16 bg-gray-400 rounded m-auto"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Forecast'
}
</script>

<style lang="postcss">
.forecast-body {
    @apply bg-white text-gray-700 border border-gray-300 rounded-md p-5 text-center content-center
}
</style>