<script lang="ts">
    import { addUnit } from '$lib/utils'
    import './style.scss'

    export let size: string | number | undefined = undefined
    export let color: string = ''

    $: fontSize = addUnit(size)
</script>

<div class="o-icon" style:font-size={fontSize} style:color>
    <slot />
</div>
