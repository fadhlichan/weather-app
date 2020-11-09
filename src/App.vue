<template>
  <div id="app" class="weather-app">
    <div class="container m-auto">
      <search-box />
      <div class="main">

        <template v-if="$store.state.weather.data">
          <display-main :weather-data="$store.state.weather.data" />
          <display-details :weather-data="$store.state.weather.data" />
        </template>

        <template v-if="!$store.state.weather.data">
          <Error />
          <load-main />
          <load-details />
        </template>
        
        <template v-if="$store.state.weather.recently">
          <display-forecasts :weather-data="$store.state.weather.recently" />
        </template>
        
        <template v-if="!$store.state.weather.recently">
          <load-forecasts />
        </template>
        
      </div>
    </div>
    <a href="https://github.com/fadhlisy/weather-app" target="_blank" title="GitHub Repository"><img src="./assets/icons/github-2.png" class="animate-bounce fixed right-0 bottom-0 w-20 h-20 m-5"/></a>
  </div>
</template>

<script>
import SearchBox from './components/form/SearchBox'
import DisplayMain from './components/display/DisplayMain'
import DisplayDetails from './components/display/DisplayDetails'
import DisplayForecasts from './components/display/DisplayForecasts'
import LoadMain from './components/loading/LoadMain'
import LoadDetails from './components/loading/LoadDetails'
import LoadForecasts from './components/loading/LoadForecasts'
import Error from './components/error/Error'

export default {
  name: 'App',
  components: { SearchBox, DisplayMain, DisplayDetails, DisplayForecasts, LoadMain, LoadDetails, LoadForecasts, Error },
  data: function() {
    return {}
  },
  created: async function() {
    await this.$store.dispatch('weather/getWeather');
  }
}
</script>

<style lang="postcss">
@font-face {
  font-family: 'Digital Numbers Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Digital Numbers Regular'), url('assets/DigitalNumbers-Regular.woff') format('woff');
}

@screen sm {
  .weather-app {
    @apply p-12
  }

  .main {
    @apply rounded-md
  }
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  @apply m-0 font-sans
}

.digital {
  font-family: 'Digital Numbers Regular';
}

.weather-app {
  @apply min-h-screen bg-gradient-to-br from-blue-500 to-blue-300 flex flex-col items-center
}

.main {
  @apply bg-white p-5 text-gray-700 shadow-lg flex flex-row flex-wrap
}
</style>
