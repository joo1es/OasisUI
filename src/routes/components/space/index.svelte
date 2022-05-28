<script lang="ts">
    import Introduce from '../../../layout/introduce.svelte'
    import mdApi from './README.md?raw'
    import Basic from './demo/basic/index.svelte'
    import Vertical from './demo/vertical/index.svelte'
</script>

<Introduce
    name="Space 空间"
    description="每个组件都需要一个私人空间"
    imports={['Space', 'SpaceItem']}
    api={mdApi}
>
    <Basic />
    <Vertical />
</Introduce>
