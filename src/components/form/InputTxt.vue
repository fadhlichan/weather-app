<template>
    <input type="text" :value="value" :class="classes" :placeholder="placeholder" @input="oninput" @keyup.enter="onenter">
</template>

<script>
import { Form } from '../../mixins'

export default {
    name: 'InputTxt',
    mixins: [Form]
}
</script>