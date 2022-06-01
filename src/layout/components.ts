export default [
    {
        title: '首页',
        link: '/'
    },
    {
        title: '基础组件',
        children: [
            {
                title: 'Icon 图标',
                link: '/components/icon'
            }
        ]
    },
    {
        title: '布局组件',
        children: [
            {
                title: 'Space 空间',
                link: '/components/space'
            },
            {
                title: 'Grid 网格',
                link: '/components/grid'
            },
            {
                title: 'Contain 容纳',
                link: '/components/contain'
            },
            {
                title: 'AspectRatio 纵横比',
                link: '/components/aspectRatio'
            }
        ]
    }
] as Menu[]

export interface Menu {
    title: string,
    link?: string,
    children?: Menu[]
}