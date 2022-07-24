<template>
  <div class="vue3-shape">
    <a class="repo" href="https://github.com/CiroLee/vue3-shape" target="_blank">Github</a>
    <div class="shapes" :class="{ copied: showCopiedTip }">
      <div v-for="item in shapeConfig" :key="item.type" class="box" @click="copy(item)">
        <shape :type="item.type" :size="size" :color="color" :width="width" :height="height" />
        <p>{{ item.type }}</p>
      </div>
    </div>
    <div class="operate">
      <div class="panel">
        <label class="color-panel">
          <input v-model="color" type="color" />
        </label>
        <span>{{ color }}</span>
      </div>
      <div class="panel">
        <p>size:</p>
        <input v-model="size" min="0" max="100" step="1" class="range-panel" type="range" @input="sizeChange" />
        <input v-model="size" class="number" max="100" type="number" />
      </div>
      <div class="panel">
        <p>width:</p>
        <input v-model="width" class="number" max="100" type="number" />
        <p>height:</p>
        <input v-model="height" class="number" max="100" type="number" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { toClipboard } from '@soerenmartius/vue3-clipboard';
import { Shape } from 'vue3-shape';
import { shapeConfig } from './config';
const color = ref('#000000');
const size = ref(36);
const width = ref(null);
const height = ref(null);
let timer: number = 0;
const showCopiedTip = ref(false);
const sizeChange = () => {
  width.value && (width.value = null);
  height.value && (height.value = null);
};

const copy = (item: { type: string; cname?: string }) => {
  console.log(item, size.value, width.value, height.value);
  toClipboard(`<shape type="${item.type}" />`).then(() => {
    console.log(123);
    showCopiedTip.value = true;
    timer = setTimeout(() => {
      showCopiedTip.value = false;
      clearTimeout(timer);
    }, 1500) as unknown as number;
  });
};
</script>
<style lang="scss">
.vue3-shape {
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 18px;
  position: relative;
}

.repo {
  text-decoration: none;
  color: #333;
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 12px;
  top: 12px;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 6px;
    display: inline-block;
    background: url('./assets/github-fill.svg') center no-repeat;
    background-size: 100% auto;
  }
}

.shapes {
  margin-top: 6%;
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  grid-template-rows: repeat(6, 120px);
  position: relative;
  &.copied::before {
    content: 'Copied!';
    height: 20px;
    color: #0f7721;
    position: absolute;
    top: -52px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 22px;
    background: #b1fdbd;
    border-radius: 4px;
    line-height: 1.2;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    font-size: 12px;
    border-right: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    transform: background-color 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: rgb(201 220 207 / 21%);
    }
  }
  p {
    margin: 0;
    margin-top: 6px;
    color: #7c7c7c;
  }
}

.operate {
  margin-top: 6%;
  margin-left: 24px;
}

.panel {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & > p {
    margin: 0 12px 0 0;
  }
}

input {
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
}

.color-panel {
  width: 26px;
  height: 26px;
  z-index: 1;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: v-bind(color);
  border-radius: 4px;
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
  }
  & + span {
    margin-left: 12px;
    font-size: 14px;
  }
}

.range-panel {
  appearance: none;
  width: 200px;
  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 4px;
    background-color: #eee;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: #1ba1e2;
    cursor: pointer;
    margin-top: -6px;
  }
}

input[class='number'] {
  width: 40px;
  margin-left: 4px;
  border-radius: 2px;
  padding: 6px;
  border: 1px solid #d8d8d8;
  margin-right: 8px;
}
</style>
