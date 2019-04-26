<template>
  <div>
    <h2>计算属性</h2>

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
  data(){
    return {
      message: 'dlroW olleH',
      firstName: 'Jon',
      lastName: 'Snow'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },

    // 同时给计算属性以Getter和Setter
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        let names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>
