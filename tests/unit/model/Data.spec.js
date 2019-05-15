import { shallowMount } from '@vue/test-utils'
import Data from '@/components/model/Data.vue'

describe('Data.vue', () => {
  // 传递给组件的数据
  const data = {
    title: 'Vue的数据绑定',
    id: 'id9527',
    isLogin: true
  }
  // shallowMount: 只渲染当前组件，不渲染子组件
  const wrapper = shallowMount(Data, {
    data
  })

  it('{{}}能够渲染数据', () => {
    // 组件应该正确的渲染出title
    expect(wrapper.text()).toContain(data.title)
  })
  it('v-bind为属性绑定数据', () => {
    expect(wrapper.contains('#' + data.id)).toBe(true)
  })
  it('使用三元表达式', () => {
    expect(wrapper.text()).match('Hello Bob')
  })
})
