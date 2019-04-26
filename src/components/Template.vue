<template>
  <!-- 所有vue指令后面的都是JS表达式而不是普通字符串-->
  <div>
    <h2>模板语法</h2>

    <!-- {{}} 里面的代码会被当做一行函数表达式来执行 -->
    <div>{{text}}</div>

    <!-- 如果字符串是HTML格式，它们不会被解析成HTML，因为这样不安全-->
    <div>{{html}}</div>


    <!-- 使用v-html会让vue把它们当做HTML来插入页面，这样有很大的风险-->
    <div v-html="html"></div>

    <ul>
      <!-- vue中的列表循环 -->
      <li v-for="person in persons" :key="person">
        person: {{person}}.
      </li>
    </ul>
    <hr>

    <div class="middle">
      <!--@click === v-on:click，包装了用户点击事件-->
      <button @click="ifShow = !ifShow">ifShow</button>

      <!-- 使用v-if v-else来控制元素的存在与否，不存在的元素会被删除出dom-->
      <span v-if='ifShow'>control by v-if</span>
      <span v-else>control by v-else</span>

      <!-- 使用v-show指令的元素，是通过display:none来显示和隐藏的-->
      <span v-show="ifShow">control by v-show</span>
    </div>
    <hr>

    <!-- 使用👇两个指令，会将元素里面的内容替换成变量的值 -->
    <div v-text="article">It will be replaced</div>
    <div v-html="article">It will be replaced</div>
    <!-- v-html会直接将html插入页面:
           - 会忽略数据邦绑定
           - 不能用这种方式复用组件
           - 可能会导致XSS攻击
    -->
    <hr>


    <div v-once>
      <!-- 使用vue-once命令，一次性的使用变量，
           里面的内容在初次渲染后便不会再改变了-->
      <input v-model="text1">
      will not change because it is v-once: {{text1}}
    </div>

    <div>
      <!-- v-model是双向数据绑定，它的变化会让其他相关元素立刻变化-->
      <input v-model="text2">
      {{text2}}
    </div>
    <hr>

    <ul>
      <!-- 使用对象语法给元素绑定class-->
      <li :class="{bg: true}">:class="{bg: true}"</li>
      <li :class="{bg: true, blueCol: true}">
        :class="{bg: true, blueCol: true}"</li>

      <!--使用数组语法给元素绑定class-->
      <li :class="['bg', 'blueCol', 'aquaBor']">
        :class="['bg', 'blueCol', 'aquaBor']"</li>

      <!-- 使用内联样式，注意中划线格式应该修改为驼峰格式 -->
      <li :style="{color:'red', fontSize: '1rem'}">
        :style="{color:'red', fontSize: '1rem'}"
        </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Template',

  // 当前页面的数据
  data () {
    return {
      text: 'hello world',
      id: 'MyId',
      html: '<h4>hello world</h4>',
      persons: ['Bob', 'Jack'],
      ifShow: true,
      article: '<div>I am article</div>',
      text1: 'hello world1',
      text2: 'hello world2'
    }
  }
}
</script>

<style scoped lang="scss">
.middle span{
  border: 1px solid yellow;
}

.bg{
  background-color: rgb(185, 219, 230);
}
.blueCol{
  color: blue;
}
.aquaBor{
  border: 1px solid aqua;
}
</style>
