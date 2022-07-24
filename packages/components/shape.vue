<template>
  <div class="shape" :class="type"></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
interface IProps {
  type: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  size: 16,
  color: '#000',
  width: undefined,
  height: undefined,
});
const transWidthUnit = (val: number | string) => {
  return Number(val) ? `${val}px` : val;
};
const width = computed(() => (props.width ? transWidthUnit(props.width) : transWidthUnit(props.size)));
const height = computed(() => (props.height ? transWidthUnit(props.height) : transWidthUnit(props.size)));
</script>
<style lang="scss">
@import './shape';

.shape {
  width: v-bind(width);
  height: v-bind(height);
  background-color: v-bind(color);
  position: relative;
  &::before,
  &::after {
    background-color: v-bind(color);
  }
}
</style>
