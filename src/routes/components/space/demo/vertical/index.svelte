<script lang="ts">
    import Demo from '../../../../../layout/demo.svelte'
    import md from './README.md?raw'
    import { Space, SpaceItem } from '$lib'
</script>

<Demo {md}>
    <Space>
        <SpaceItem>1</SpaceItem>
        <SpaceItem>2</SpaceItem>
        <SpaceItem>3</SpaceItem>
    </Space>
</Demo>
