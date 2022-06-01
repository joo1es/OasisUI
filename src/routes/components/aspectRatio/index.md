<script lang="ts">
    import Basic from './demo/basic.md'
    import Ratio from './demo/ratio.md'
</script>

## AspectRatio 纵横比

#### 介绍

aspect-ratio 为容器规定了一个期待的纵横比，这个纵横比可以用来计算自动尺寸以及为其他布局函数服务。

#### 引入

```js
import { AspectRadio } from '@oasis-end/ui'
```

<Basic />

<Ratio />

## API

### Props

| 参数         | 说明                                                          | 类型                                                       | 默认值 |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| ratio | 纵横比，通常为宽度除以高度                                                      | _number_ | 1      |