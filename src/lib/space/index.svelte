<script lang="ts">
    import { addUnit } from '$lib/utils'
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'
    import './style.scss'
    export let size: string | number | (string | number)[] = 10
    export let vertical = false
    export let wrap = true
    export let align: string = ''
    export let justify: string = ''

    const formatSize = writable(['0px', '0px'])

    $: {
        if (Array.isArray(size)) {
            $formatSize = [vertical ? '0px' : addUnit(size[0]), addUnit(size[1])]
        } else {
            $formatSize = [vertical ? '0px' : addUnit(size), addUnit(size)]
        }
    }

    setContext('oSpaceSize', formatSize)
</script>

<div
    class="o-space"
    class:o-space--vertical={vertical}
    class:o-space--wrap={wrap}
    style:margin-bottom={`calc(0px - ${$formatSize[1]})`}
    style:align-items={align}
    style:justify-content={justify}
    style:--o-space-right={$formatSize[0]}
    style:--o-space-bottom={$formatSize[1]}
>
    <slot />
</div>
