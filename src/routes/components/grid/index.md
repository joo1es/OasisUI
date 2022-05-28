<script lang="ts">
    import Basic from './demo/basic.md'
    import Vertical from './demo/vertical.md'
</script>

## Grid 网格

#### 介绍

生活是一张大网

#### 引入

```js
import { Grid, GridItem } from '@oasis-end/ui'
```

<Basic />

<Vertical />

## Gird API

### Props

| 参数         | 说明                                                          | 类型                                                       | 默认值 |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| gap          | 间距大小                                                      | _string \| number \| [string \| number, string \| number]_ | 0      |
| cols         | 总列数                                                        | _number_                                                   | 24     |
| defaultSpan  | 内部项默认 span                                               | _number_                                                   | 1      |
| placeItems   | align-items 和 justify-items 属性的简写，用于设置对齐模式     | _string_                                                   | -      |
| placeContent | align-content 和 justify-content 属性的简写，用于设置对齐模式 | _string_                                                   | -      |
| dense        | 是否行优先，设置为 `true` 后会优先填充空隙                    | _boolean_                                                  | false  |
| autoRows | 在使用 `autoRows` 时，设置为 `true` 后，每行等高，设置为 `string` 则与 CSS 中的 `grid-auto-rows` 行为一致              | _boolean \| string_                                                  | false  |
| overflow | 统一设定子项的 overflow 属性 | _string_ | initial |

## GirdItem API

### Props

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| span        | 占据列 | _number_ | -      |
| rowSpan     | 占据行 | _number_ | -      |