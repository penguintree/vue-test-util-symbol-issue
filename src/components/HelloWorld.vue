<template>
  <div>
     <p>{{ msg }}</p>
     <child-component :my-symbol="thisSymbol" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'HelloWorld',
  components: { ChildComponent },
  props: {
    msg: String
  },
  data:() => ({
     thisSymbol: Symbol('this-symbol')
  })
}
</script>