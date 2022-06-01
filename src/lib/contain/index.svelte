<script lang="ts">
    import { size, useNamespace } from '$lib/utils'

    import './style.scss'

    export let width = 1920
    export let height = 1080
    export let background = ''
    export let blur = false

    let scale = 0

    const { basic, of } = useNamespace('contain')
</script>

<div
    class={basic}
    use:size={(w, h) => {
        scale = Math.min(w / width, h / height)
    }}
    {...$$restProps}
>
    {#if blur && background}
        <div class={of('background')} class:blur style:background />
    {/if}
    <div
        class={of('wrapper')}
        style:width={width + 'px'}
        style:height={height + 'px'}
        style:transform="scale({scale})"
        style:background
    >
        <slot />
    </div>
</div>
