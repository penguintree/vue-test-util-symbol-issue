import { shallowMount, mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'

describe('ParentComponent.vue', () => {
   it('shallow mount', () => {
      const msg = 'new message'
      const wrapper = shallowMount(ParentComponent, {
         propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
   });

   it('mount', () => {
      const msg = 'new message'
      const wrapper = mount(ParentComponent, {
         propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
   });
})
