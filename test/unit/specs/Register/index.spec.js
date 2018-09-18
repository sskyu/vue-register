import Vue from 'vue'
import Register from '@/components/Register'

describe('Register/index.vue', () => {
  it('shoud render correct contents', () => {
    const Constructor = Vue.extend(Register)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('svg rect:last-child').attributes.fill).toEqual('yellow')
  })
})
