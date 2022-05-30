<script lang="ts">
    import Basic from './demo/basic.md'
</script>

# Contain 容纳

#### 介绍

你可以认为他是任意组件的 object-fit: contain

#### 引入

```js
import { Contain } from '@oasis-end/ui'
```

#### 基础用法

<Basic />

## API

### Props

| 参数      | 说明           | 类型                                                                | 默认值 |
| --------- | -------------- | ------------------------------------------------------------------- | ------ |
| width | 标准宽度，用于完成最终的比例换算       | _number_          | 1920     |
| height      | 标准高度，用于完成最终的比例换算       | _number_          | 1080     |
| background | 背景 | _string_ | - |
| blur | 是否采用高斯模糊背景，只有在 background 属性值存在且有效时才有效 | _boolean_ | false |