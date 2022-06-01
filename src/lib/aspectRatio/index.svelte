<script lang="ts">
    import { useNamespace } from '$lib/utils'
    import './style.scss'

    export let ratio = 1
    const { basic, of } = useNamespace('aspect-ratio')

    $: paddingTop = `${(1 / ratio) * 100}%`
</script>

<div class={basic} {...$$restProps}>
    <div class={of('fill')} style:padding-top={paddingTop} />
    <div class={of('content')}>
        <slot />
    </div>
</div>
