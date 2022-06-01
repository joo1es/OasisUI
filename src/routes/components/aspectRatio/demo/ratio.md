<script lang="ts">
    import { AspectRatio } from '$lib'
</script>

#### 调整比例

```svelte
<AspectRatio ratio={16 / 9} style="width: 200px; background: #eee; font-size: 13px;">
    I'm in an 1 / 1 box.
</AspectRatio>
```

<AspectRatio ratio={16 / 9} style="width: 200px; background: #eee; font-size: 13px;">
    I'm in an 16 / 9 box.
</AspectRatio>