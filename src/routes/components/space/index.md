<script lang="ts">
    import Basic from './demo/basic.md'
    import Vertical from './demo/vertical.md'
</script>

## Space 空间

#### 介绍

每个组件都需要一个私人空间

#### 引入

```js
import { Space, SpaceItem } from '@oasis-end/ui'
```

<Basic />

<Vertical />

## API

### Props

| 参数      | 说明           | 类型                                                                | 默认值 |
| --------- | -------------- | ------------------------------------------------------------------- | ------ |
| size      | 间距大小       | _string \| number \| [string \| number, string \| number]_          | 10     |
| align     | 主轴对齐方式   | _'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'_           | -      |
| justify   | 交叉轴对齐方式 | _'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between'_ | -      |
| vertical  | 是否垂直       | _boolean_                                                           | false  |
| wrap      | 是否换行       | _boolean_                                                           | true   |