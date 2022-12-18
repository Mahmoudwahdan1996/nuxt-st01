<template>
    <div>
        <v-skeleton-loader v-if="$attrs.loading" v-bind="$attrs">

        </v-skeleton-loader>
        <slot v-else />
    </div>
</template>
<script>
export default {
    name:"ShimmerLoader",
    inheritAttrs:false
}
</script>