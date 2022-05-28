<script lang="ts">
    import Markdown from 'svelte-exmarkdown'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'
    import { highlightPlugin } from '../prism'
    export let md: string
</script>

<Markdown {md} plugins={[gfmPlugin, highlightPlugin]} />
<slot />
