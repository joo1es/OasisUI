# A Svelte UI FrameWork

[Docs](https://joo1es.github.io/OasisUI/)

#### 前言
也许世界需要一个国产的 svelte 框架？

#### 快速开始

```bash
# npm i @oasis-end/ui
yarn add @oasis-end/ui
```

然后就可以直接在组件内部使用了，并且无需单独引入任何的 CSS

```svelte
<script lang="ts">
    import { Space, SpaceItem } from "@oasis-end/ui"
</script>

<Space>
    <SpaceItem>test</SpaceItem>
</Space>
```

#### 使用 Namespace 引入

```svelte
<script lang="ts">
    import * as Oasis from "@oasis-end/ui"
</script>

<Oasis.Space>
    <Oasis.SpaceItem>test</Oasis.SpaceItem>
</Oasis.Space>
```