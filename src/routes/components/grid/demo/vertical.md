<script lang="ts">
    import { Grid, GridItem } from '$lib'
</script>

#### 纵向排列

```svelte
<Grid gap={10}>
    <GridItem span={5} rowSpan={2}>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem span={10}>4</GridItem>
    <GridItem>5</GridItem>
</Grid>
```

<div class="gird-demo">
    <Grid gap={10} autoRows="50px">
        <GridItem span={5} rowSpan={2}>
            1
        </GridItem>
        <GridItem>2</GridItem>
        <GridItem span={10}>4</GridItem>
        <GridItem>5</GridItem>
    </Grid>
</div>

<style lang="scss">
    .gird-demo :global(.o-grid-item) {
        background-color: #f5f5f5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>