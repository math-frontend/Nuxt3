<template lang="pug">
Form
  div(v-for='{ as, name, label, children, ...attrs } in props.schema.fields' :key='name')
    label(:for='name') {{ label }}
    Field(:as='as' :id='name' :name='name' v-bind='attrs')
      template(v-if='children && children.length')
        component(v-for='({ tag, text, ...childAttrs }, idx) in children' :key='idx' :is='tag' v-bind='childAttrs')
          | {{ text }}
    ErrorMessage(:name='name')
  button Submit

</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  }
})

</script>
