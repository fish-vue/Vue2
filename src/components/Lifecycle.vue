<template>
  <div>
    <h2>生命周期</h2>

    <div>{{message.split('').reverse().join('')}}</div>

    <!-- 使用计算属性对一些属性进行预处理，提高可读性
         同时它具有缓存功能 -->
    <div>{{reversedMessage}}</div>

    <div>{{fullName}}</div>
    <!-- 通过计算属性的Setter方法，当我们修改
         fullName时候，也能修改firstName以及lastName-->
    <input v-model="fullName"/>
  </div>
</template>
<script>
export default {
  create(){

  }
}
</script>
