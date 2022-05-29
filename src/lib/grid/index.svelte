<script lang="ts">
    import { addUnit } from '$lib/utils'

    import { setContext } from 'svelte'
    import { readable } from 'svelte/store'

    import './style.scss'

    export let defaultSpan = 1
    export let cols = 24
    export let gap: number | string | (number | string)[] = [0, 0]
    export let placeItems = ''
    export let placeContent = ''
    export let dense = true
    export let autoRows: boolean | string = false
    export let overflow = 'initial'

    setContext('oDefaultSpan', readable(defaultSpan))

    const getGap = (gapItem: number | string | (number | string)[]) => {
        if (Array.isArray(gapItem)) {
            return `${addUnit(gapItem[1])} ${addUnit(gapItem[0])}`
        } else {
            return `${addUnit(gapItem)} ${addUnit(gapItem)}`
        }
    }
    $: gapComputed = getGap(gap)
</script>

<div
    class="o-grid"
    style:--o-grid-cols={cols}
    style:--o-grid-item--overflow={overflow}
    style:grid-gap={gapComputed}
    style:place-items={placeItems}
    style:place-content={placeContent}
    style:grid-auto-flow={dense ? 'dense' : ''}
    style:grid-auto-rows={autoRows === true ? '1fr' : autoRows === false ? '' : autoRows}
    {...$$restProps}
>
    <slot />
</div>
