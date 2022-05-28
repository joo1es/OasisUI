<script lang="ts">
    import { getContext } from 'svelte'
    import type { Readable } from 'svelte/store'

    export let span = 1
    export let rowSpan = 1

    const defaultSpan = getContext<Readable<number>>('oDefaultSpan')

    $: spanComputed = span || $defaultSpan
</script>

<div
    class="o-grid-item"
    style:grid-column={`span ${spanComputed} / span ${spanComputed}`}
    style:grid-row={`span ${rowSpan} / span ${rowSpan}`}
    {...$$restProps}
>
    <slot />
</div>
