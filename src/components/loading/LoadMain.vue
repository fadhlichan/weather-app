<template>
    <div class="md:w-2/5 w-full" :class="{ 'animate-pulse': !$store.state.weather.error }">
        <div class="z-0 relative">
            <div>
                <div class="h-4 w-32 bg-gray-400 rounded mb-2"></div>
                <div class="h-6 w-32 bg-gray-400 rounded mb-2"></div>
                <div class="h-5 w-48 bg-gray-400 rounded mb-2"></div>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <div class="absolute top-0 right-0 lg:static h-16 w-16 bg-gray-400 rounded-full mb-2 ml-6 mr-5 mt-3"></div>
                <div class="flex flex-row align-top mt-3">
                    <div class="h-20 w-24 bg-gray-400 rounded mb-2 mr-2"></div>
                    <div class="h-8 w-24 bg-gray-400 rounded mb-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadMain'
}
</script>
