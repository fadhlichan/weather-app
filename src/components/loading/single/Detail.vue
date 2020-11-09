<template>
    <div class="detail-body">
        <div class="detail-label"></div>
        <div class="detail-value"></div>
    </div>
</template>

<script>
export default {
    name: 'Detail'
}
</script>

<style lang="postcss">
.detail-body {
    @apply col-span-1 py-3 flex justify-between border-t border-gray-300
}

.detail-label {
    @apply h-6 w-24 bg-gray-400 rounded
}

.detail-value {
    @apply h-6 w-10 bg-gray-400 rounded
}
</style>