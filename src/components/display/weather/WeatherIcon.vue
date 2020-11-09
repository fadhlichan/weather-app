<template>
    <img :src="`https://openweathermap.org/img/wn/${ icon }@2x.png`" alt="Weather Icon"/>
</template>

<script>
export default {
    name: 'WeatherIcon',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>