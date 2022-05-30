<script lang="ts">
    import { useNamespace } from '$lib/utils'
    import { onMount, onDestroy } from 'svelte'
    import { writable } from 'svelte/store'

    import './style.scss'

    export let width = 1920
    export let height = 1080
    export let background = ''
    export let blur = false

    let basicRef: HTMLDivElement

    let scale = writable(0)

    let resizeObserver: ResizeObserver
    onMount(() => {
        resizeObserver = new ResizeObserver(([entry]) => {
            const contentWidth = entry.contentRect.width
            const contentHeight = entry.contentRect.height
            $scale = Math.min(contentWidth / width, contentHeight / height)
        })
        resizeObserver.observe(basicRef)
    })
    onDestroy(() => {
        if (resizeObserver) resizeObserver.disconnect()
    })

    const { basic, of } = useNamespace('contain')
</script>

<div bind:this={basicRef} class={basic} {...$$restProps}>
    {#if blur && background}
        <div class={of('background')} class:blur style:background />
    {/if}
    <div
        class={of('wrapper')}
        style:width={width + 'px'}
        style:height={height + 'px'}
        style:transform="scale({$scale})"
        style:background
    >
        <slot />
    </div>
</div>
