<script lang="ts">
    import 'prismjs/themes/prism.css'
    import components from '../layout/components'
    import Menu from '../layout/menu.svelte'
    import './markdown.scss'
    import './table.scss'
</script>

<header>Oasis<span style="color: #2080f0">-End</span></header>
<section class="main">
    <nav class="menus">
        <Menu list={components} />
    </nav>
    <div class="body markdown-body">
        <slot />
    </div>
</section>

<svelte:head>
    <title>Oasis End</title>
</svelte:head>

<style lang="scss">
    :global(body) {
        overflow: auto;
        overflow: overlay;
        margin: 0;
    }
    header {
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        color: #000;
        background-color: rgba(240, 240, 240, 0.8);
        height: 72px;
        margin-bottom: 20px;
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
        text-decoration: underline;
    }
    .main {
        display: flex;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        position: relative;
        .menus {
            width: 200px;
            position: sticky;
            top: 92px;
            height: max-content;
            max-height: 80vh;
            overflow: auto;
            margin-right: 20px;
        }
        .body {
            flex: 1;
            padding-bottom: 50px;
            overflow: hidden;
        }
    }
</style>
