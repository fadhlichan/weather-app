<template>
    <div class="mt-5 md:mt-0 md:w-3/5 w-full" :class="{ 'animate-pulse': !$store.state.weather.error }">
        <div class="grid md:grid-cols-2 gap-y-1 gap-x-6">
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
        </div>
    </div>
</template>

<script>
import Detail from './single/Detail'

export default {
    name: 'LoadDetails',
    components: { Detail }
}
</script>