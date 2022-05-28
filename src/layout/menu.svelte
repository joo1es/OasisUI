<script lang="ts">
    import type { Menu } from './components'
    export let list: Menu[]
    export let level: number = 0
    import { page } from '$app/stores'

    $: levelArray = new Array(level).fill('')
</script>

<nav>
    {#each list as menu}
        {#if menu.children}
            <div class="menu-title">
                {menu.title}
            </div>
            <div class="menu-children">
                <svelte:self list={menu.children} level={level + 1} />
            </div>
        {:else}
            <div class="menu-title" class:active={`/${$page.routeId}` === menu.link}>
                {#each levelArray as _}
                    <div class="indent" />
                {/each}
                <a class="menu-title-text" href={menu.link}>
                    {menu.title}
                </a>
            </div>
        {/if}
    {/each}
</nav>

<style lang="scss">
    .indent {
        width: 20px;
    }
    .menu-title {
        display: flex;
        padding: 10px 20px;
        font-size: 14px;
        color: #999;
        &-text {
            flex: 1;
            overflow: hidden;
        }
        &:hover {
            background-color: #f5f5f5;
        }
        &.active {
            font-weight: bold;
            a {
                color: #2080f0;
            }
        }
        a {
            color: #333;
            text-decoration: none;
        }
    }
</style>
