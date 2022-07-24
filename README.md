# vue3-shape    
> 简单易用的css图形组件, 由纯css3属性(clip-path)绘制, 无依赖。适用于vue3。     
### [中文](README.md) | [English](README-EN.md)     

# [在线预览](https://cirolee.github.io/vue3-shape/)
<div style="display: flex; justify-content: center; margin-bottom: 20px"><img src='./assets/shape-img-1.png' align="center" /></div>    

# 安装
pnpm     
```shell
pnpm install vue3-shape
```
npm     
```shell
npm install vue3-shape
```
yarn     
```shell
yarn install vue3-shape
```

# 使用     

全局引用
```javascript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import ShapeComponent from 'vue3-shape';

createApp(App).use(ShapeComponent).mount('#app');

// use in sfc
// xxx/app.vue
<template>
  <div>
     <shape type="circle" :size="20" color="red" />
  </div>
</template>

// abrove will render a circle that it's tadius is 20px and fill witch red color;
```    
直接引用
```javascript
<script lang="ts" setup>
import { Shape } from 'vue3-shape';

</script>

<template>
  <div>
     <shape type="circle" :size="20" color="red" />
  </div>
</template>
```

