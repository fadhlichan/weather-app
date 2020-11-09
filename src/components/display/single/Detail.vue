<template>
    <div class="detail">
        <span><img :src="icon" class="inline-block mr-1" alt="Detail Icon"/> {{ label }}</span>
        <span class="font-semibold text-gray-600">{{ value }}</span>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        icon: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="postcss">
.detail {
    @apply col-span-1 py-3 flex justify-between border-t border-gray-300
}
</style>