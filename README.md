# vue
- 项目组件化，提高代码可写性
- data --VM--> view 
  - [data, computed] [components, router] [props, slots]  --template--> view

  - view --[native events, custom events] --> data

[官方文档](https://vuejs.org/v2/guide)

数据 + 模板 --> 视图
- 数据
  - 有哪些数据
  - 如何修改数据
- 模板
  - 模板怎么写
- 视图
  - 

## [template](./template.md)

## [model](./model.md)

## [vm](./vm.md)

## [events](./v-on.md)

## [组件](./components.md)

## [instance](./instance.md)

## think like vue
- where is data from (take child components as data)
- how to render (template)
- function
  - events chain
  - lifecycle function
  - watch

Focus on data ,data will immediately effect view.

## tips
我去，data中，如果变量名是`_`开头的，比如说是`_title``，是无法被observer的！！
为什么？computed之类的呢？