# Vue Impl
Vue的基本使用

### 为什么使用Vue（React）
- 项目组件化
- 通过 数据 + 模板 自动生成视图层
  -  数据的来源有
     - data，computed
      
       组件自身的数据
     
     - components, router
       
       子组件、路由也可以看做是一种数据
       
     - props, slots
     
       来做父组件的数据
       
  - 视图层通过触发事件来反馈给数据层
    
    - native events
    - custom events

[官方文档](https://vuejs.org/v2/guide)

### 写代码思路
#### 组件化
- 项目可以拆分成哪些组件？

- 每个组件的数据来源是什么？
  - 简单的不与外界发生数据交流的显示组件？
  - 从父组件接受数据的木偶组件？
  - 需要发起AJAX请求的组件？
  - 需要和其他组件交互的组件？
  
- 如何复用组件？

#### VM
数据 + 模板 --> 视图
- 数据
  - 有哪些数据
  - 如何修改数据
- 模板
  - 模板怎么写

## 相关目录
- [template](./template.md)

- [model](./model.md)

- [vm](./vm.md)

- [events](./v-on.md)

- [组件](./components.md)

- [instance](./instance.md)

## think like vue
- where is data from (take child components as data)
- how to render (template)
- function
  - events chain
  - lifecycle function
  - watch

Focus on data ,data will immediately effect view.
