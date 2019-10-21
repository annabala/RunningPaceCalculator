import { shallowMount } from '@vue/test-utils'
import CalculatePace from '@/components/CalculatePace.vue'

describe('CalculatePace.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CalculatePace, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
