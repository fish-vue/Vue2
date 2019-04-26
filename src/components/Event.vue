<template>
  <div>
    <h2>事件监听</h2>

    <!-- @click是Vue中绑定页面点击事件的指令，
         回调函数需要在methods中声明-->
    <button @click='logName'>Bob</button>

    <!-- 原生的点击事件，回调函数需要在全局环境中定义-->
    <button onClick='logName'>Bob</button>

    <!-- 这个是v-bind指令，给元素的属性绑定一个值 -->
    <button :onClick='logName'>Bob</button>
    <!-- 这个就是上面绑定的结果 -->
    <!--<button onclick="function () { [native code] }">Bob</button>-->
  </div>
</template>
<script>
export default {
  name: 'Model',
  methods: {
    logName(){
      console.log('Bob is clicked')
    }
  }
}
</script>
