import moment from 'moment'

export const Form = {
    props: {
        value: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        classes: {
            type: [String, Array],
            required: true
        }
    },
    methods: {
        oninput: function(e) {
            this.$emit('update:text', e.target.value);
        },
        onenter: function() {
            this.$emit('entered');
        },
        onclick: function() {
            this.$emit('clicked');
        }
    }
}

export const WeatherData = {
    props: {
        WeatherData: {
            type: [Object, Array],
            required: true
        }
    }
}

export const WeatherComputed = {
    data: function() {
        return {
            celcius: {
                active: true
            },
            fahrenheit: {
                active: false
            }
        }
    },
    methods: {
        switchTemp() {
            if (this.$store.state.weather.default.unit === 'celcius') {
                this.$store.state.weather.default.unit = 'fahrenheit';
                this.celcius.active = false;
                this.fahrenheit.active = true;
            } else if (this.$store.state.weather.default.unit === 'fahrenheit') {
                this.$store.state.weather.default.unit = 'celcius';
                this.celcius.active = true;
                this.fahrenheit.active = false;
            }
        }
    },
    computed: {
        time() {
            return moment().format('dddd H:mm');
        },
        temperature() {
            return (temp) => {
                if (this.$store.state.weather.default.unit === 'celcius') {
                    return this.toCelcius(temp)
                }
                return Math.floor(temp)
            }
        },
        recentTime()  {
            return (text) => {
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Oct', 'Nov', 'Des']
                var date = text.substr(8, 2);
                var month = text.substr(5, 2);
                var time = text.substr(11, 5);
                return `${ months[month - 1] } ${ date }, ${ time }`
            }
        },
        toCelcius() {
            return (kelvin) => {
                return Math.floor(kelvin - 273);
            }
        },
        toKilometer() {
            return (meter) => {
                return meter / 1000 + ' km';
            }
        },
        toKmh() {
            return (ms) => {
                return Math.floor(ms * 3.6) + ' km/h';
            }
        }
    }
}
