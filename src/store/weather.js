import { KEY, API_WEATHER, API_FORECAST } from '../constans';

function state() {
    return {
        default: {
            city: 'Jakarta',
            unit: 'celcius'
        },
        data: null,
        recently: null,
        error: null
    }
}

const mutations = {
    setData: function(state, data) {
        state.data = data;
    },
    setRecently: function(state, recent) {
        state.recently = recent;
    }
}
const actions = {
    getWeather: async function({ state, commit, dispatch }, city) {
        state.data = null;
        state.recently = null;
        state.error = null;
        setTimeout(async function() {
            var req = await fetch(`${ API_WEATHER }?q=${ city ? city : state.default.city }&appid=${ KEY }`);
            var res = await req.json();
            if (res.cod === 200) {
                var recent = await dispatch('getRecently');
                commit('setData', res);
                commit('setRecently', recent);
            } else {
                state.error = res;
            }
        }, 1000)
    },
    getRecently: async function({ state }, city) {
        var req = await fetch(`${ API_FORECAST }?q=${ city ? city : state.default.city }&appid=${ KEY }`);
        var res = await req.json();
        return res.list.splice(0, 8);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
