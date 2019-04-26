<template>
  <div>
    <Model></Model>
    <Template></Template>
    <Event></Event>
    <Computed></Computed>
  </div>
</template>
<script>
import Model from '@/components/Model.vue'
import Template from '@/components/Template.vue'
import Event from '@/components/Event.vue'
import Computed from '@/components/Computed.vue'

let app = {
  name: 'App',
  data () {
    return {
      name: 'My name is App'
    }
  },
  components: {
    Model,
    Template,
    Event,
    Computed
  }
}
export default app
</script>
