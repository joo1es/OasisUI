<script lang="ts">
    import Markdown from 'svelte-exmarkdown'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'
    import { highlightPlugin } from '../prism'
    export let name: string
    export let description: string
    export let imports: string[]
    export let api: string = ''
    $: info = `
# ${name}

### 介绍

${description}

### 引入

\`\`\`js
import { ${imports.join(', ')} } from '@oasis-end/ui'
\`\`\`
    `
</script>

<Markdown md={info} plugins={[gfmPlugin, highlightPlugin]} />
<slot />
<Markdown md={api} plugins={[gfmPlugin, highlightPlugin]} />
