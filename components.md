# 父子组件数据的传递

## 父组件向子组件传递数据
父组件使用子组件的时候通过v-bind给子组件绑定数据
子组件通过props拿到这个数据
这样就实现了父组件向子组件传递数据的
- father data 
  - v-bind:attribute -> 
  - attribute -> 
    - child `props` ->
        - child `data`

## 子组件向父组件传递数据
父组件通过@event监听子组件的事件
子组件触发事件，并且传递数据
父组件通过回调函数难道数据
- passive
  - child -> trigger native event -> trigger father v-on event ->trigger father methods

父组件通过this.$refs.NAME拿到子组件
- negative
  - father <- this.$refs.NAME （需要给组件一个ref属性）

# lifecycle

## 父子组件的先后顺序
假设root是Add的父组件

钩子的触发顺序
- beforeCreate root
- created root
- beforeMount root
- beforeCreate Add
- created Add
- beforeMount Add
- mounted Add
- mounted root

Add发生变化，触发Add.beforeUpdate Add.updated
不会触发父组件的相关事件

如果通过v-if=false 控制子组件,会触发
beforeUpdate root
beforeDestroy Add
destroyed Add
updated root

再次设置v-if=true
beforeUpdate root
beforeCreate Add
created Add
beforeMount Add
mounted Add
updated root

如何选着用哪个函数呢？
- beforeCreate -- this.$el === undefined
- Created -- this.$el === undefined
- beforeMount -- this.$el === 挂载的目标dom节点
- mounted -- this.$el === 新创建的节点
