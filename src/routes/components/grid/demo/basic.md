<script lang="ts">
    import { Grid, GridItem } from '$lib'
</script>

#### 基础用法 / 间距

```svelte
<Grid gap={10}>
    <GridItem>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem span={10}>4</GridItem>
    <GridItem>5</GridItem>
</Grid>
```

<Grid gap={10}>
    <GridItem>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem span={10}>4</GridItem>
    <GridItem>5</GridItem>
</Grid>
