<script lang="ts">
    import { Contain } from '$lib'
</script>

<div class="contain-demo">
    <Contain
        background="url(https://images.unsplash.com/photo-1650171766529-c4cc0db06f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
        blur
        style="color: #fff; height: 400px;"
    >
        <span style="position: absolute; font-size: 40px; top: 100px; left: 100px; width: 200px; height: 200px; background: orange; padding: 20px;">Hello, World.</span>
        <span style="position: absolute; font-size: 40px; top: 500px; left: 500px; width: 200px; height: 200px; background: orange; padding: 20px;">Hello, World.</span>
    </Contain>
</div>

<style lang="scss">
    .contain-demo :global(.o-contain) {
        height: 600px;
        color: #fff;
    }
</style>