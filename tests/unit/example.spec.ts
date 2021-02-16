import { mount } from '@vue/test-utils'
import eliPoints from '@/views/eliPoints.vue'

describe('eliPoints.vue', () => {
  it('renders tab 1 view', () => {
    const wrapper = mount(eliPoints)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
