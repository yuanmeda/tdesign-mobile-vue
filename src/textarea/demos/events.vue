<template>
  <t-textarea
    v-model="value"
    name="标签文字"
    label="标签文字"
    placeholder="请输入文字"
    @focus="onFocus"
    @blur="onBlur"
    @change="onChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
const onFocus = (value: string, e: Event) => {
  console.log('onFocus: ', value, e);
};
const onBlur = (value: string, e: Event) => {
  console.log('onBlur: ', value, e);
};
const onChange = (value: string) => {
  console.log('change: ', value);
};
</script>
