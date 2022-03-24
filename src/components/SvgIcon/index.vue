<!--
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-12 16:45:33
 * @Description: 图标组件，承载 element-icon 或者第三方svg
 设计思路根据传递进来的URL来判定是内部组件还是外部组件
 使用两套不同的容器 来承载不同的icon源 
-->
<template>
    <div>

    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup(props, context) {
    const featureRef = ref(value)
    const featureState = reactive({ property: 'value' })

    return {
      featureRef,
      featureState
    }
  }
}
</script>

<style lang="scss" scoped>
</style>