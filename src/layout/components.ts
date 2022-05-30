export default [
    {
        title: '首页',
        link: '/'
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
            }
        ]
    }
] as Menu[]

export interface Menu {
    title: string,
    link?: string,
    children?: Menu[]
}