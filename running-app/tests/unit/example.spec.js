import { shallowMount } from '@vue/test-utils'
import AppCalculatePace from '@/components/AppCalculatePace.vue'

describe('AppCalculatePace.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppCalculatePace, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
