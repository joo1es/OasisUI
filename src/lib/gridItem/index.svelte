<script lang="ts">
    import { getContext } from 'svelte'
    import type { Readable } from 'svelte/store'

    export let span = 1
    export let rowSpan = 1
    export let offset = 0
    export let offsetRight = 0

    const defaultSpan = getContext<Readable<number>>('oDefaultSpan')

    $: spanComputed = span || $defaultSpan
</script>

{#if offset > 0}
    <div class="o-grid-item" style:grid-column={`span ${offset} / span ${offset}`} />
{/if}
<div
    class="o-grid-item"
    style:grid-column={`span ${spanComputed} / span ${spanComputed}`}
    style:grid-row={`span ${rowSpan} / span ${rowSpan}`}
    {...$$restProps}
>
    <slot />
</div>
{#if offsetRight > 0}
    <div class="o-grid-item" style:grid-column={`span ${offsetRight} / span ${offsetRight}`} />
{/if}
