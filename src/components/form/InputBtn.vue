<template>
    <button :class="classes" @click="onclick">Check</button>
</template>

<script>
import { Form } from '../../mixins'

export default {
    name: 'InputBtn',
    mixins: [Form]
}
</script>