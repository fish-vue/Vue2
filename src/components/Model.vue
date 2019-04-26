<template>
  <div>
    <h2>数据绑定</h2>
    <div>{{text}}</div>

    <!-- 标签属性不能用{{}}语法，这里我们使用v-bind来给标签做动态绑定-->
    <div v-bind:id="id">v-bind</div>
    <!-- 可以省略v-bind来简写-->
    <div :data-birthday="new Date().toDateString()">v-bind</div>

    <!--在模板中，只能使用：
      - 单行JS表达式
      - Math、Date等全局变量。用户自定义的全局变量不能使用
    -->
    <div>{{new Date().toDateString()}}</div>

    <!-- 使用三元表达式来做条件输出 -->
    <div>{{isLogin ? 'Hello Bob' : 'Please login'}}</div>

    <!-- 只能使用单行表达式，这种写法无法解析 -->
    <div>if(isLogin){return 'Hello Bob'}</div>
  </div>
</template>
<script>
export default {
  name: 'Model',
  data () {
    return {
      text: 'Hello World!',
      isLogin: true
    }
  }
}
</script>
