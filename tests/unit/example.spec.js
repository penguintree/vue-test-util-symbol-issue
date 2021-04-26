import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
   it('shallow mount', () => {
      const msg = 'new message'
      const wrapper = shallowMount(HelloWorld, {
         propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
   });

   it('mount', () => {
      const msg = 'new message'
      const wrapper = mount(HelloWorld, {
         propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
   });
})
