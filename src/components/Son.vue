<template>
  <div>
    <h2>子元素的内容</h2>
    <!-- 
      @input 可以修改input内容，并把内容传给父元素
      :value="value" 把父元素的msg作为子组件input的value值
     -->
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    &nbsp;
    <span>父元素的信息是：{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style></style>
