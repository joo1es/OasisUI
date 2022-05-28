<script lang="ts">
    import type { Menu } from './components'
    export let list: Menu[]
    export let level: number = 0
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { base } from '$app/paths'

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
            <div
                class="menu-title"
                class:active={`/${$page.routeId}` === menu.link}
                on:click={() => menu.link && goto(base + menu.link)}
            >
                {#each levelArray as _}
                    <div class="indent" />
                {/each}
                <div class="menu-title-text">
                    {menu.title}
                </div>
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
        cursor: default;
        &-text {
            flex: 1;
            overflow: hidden;
        }
        &:hover {
            background-color: #f5f5f5;
        }
        &.active {
            font-weight: bold;
            .menu-title-text {
                color: #2080f0;
            }
        }
        .menu-title-text {
            color: #333;
            text-decoration: none;
        }
    }
</style>
