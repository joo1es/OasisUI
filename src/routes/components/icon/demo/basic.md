<script lang="ts">
    import { Icon } from '$lib'
    import Add from '@oasis-end/ionicons/icons/Add.svelte'
</script>

#### 基础用法

```svelte
<Icon size={60}>
    😄
</Icon>
```

<Icon size={60}>
    😄
</Icon>

#### 导入图标 / 设置颜色

为了保证在 dev 环境仍然能按需引入，可以直接导入具体的组件

```svelte
<script lang="ts">
    import Add from '@oasis-end/ionicons/icons/Add.svelte'
</script>

<Icon size={60} color="red">
    <Add />
</Icon>
```

<Icon size={60} color="red">
    <Add />
</Icon>
