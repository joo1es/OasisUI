<script lang="ts">
    import { Grid, GridItem } from '$lib'
</script>

#### 纵向排列

```svelte
<Grid gap={10}>
    <GridItem rowSpan={2}>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem span={10}>4</GridItem>
    <GridItem>5</GridItem>
</Grid>
```

<Grid gap={10} autoRows="50px">
    <GridItem rowSpan={2}>
        1
    </GridItem>
    <GridItem>2</GridItem>
    <GridItem span={10}>4</GridItem>
    <GridItem>5</GridItem>
</Grid>