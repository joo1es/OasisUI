<script lang="ts">
    import type { HastNode } from 'svelte-exmarkdown/types'
    import Children from 'svelte-exmarkdown/renderer/Children.svelte'
    import * as Prism from 'prismjs'
    import 'prism-svelte'
    export let children: HastNode[]
    export let properties: Record<string, unknown>
    let lang: string | undefined
    $: lang = String(properties.class).match(/language-(\w+)/)?.[1]
    let child: HastNode
    $: child = children[0]
</script>

{#if lang == null || Prism.languages[lang] == null || child?.type !== 'text'}<code {...properties}
        ><Children {children} /></code
    >{:else}<code {...properties}
        >{@html Prism.highlight(child.value, Prism.languages[lang], lang)}</code
    >{/if}

<style>
    code {
        background-color: var(--background);
    }
</style>
