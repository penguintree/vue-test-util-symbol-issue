<template>
   <div>
      <p>
         do I have a symbol ?
         <span v-if="mySymbol !== undefined">
            yes
         </span>
         <span v-else>
            no
         </span>
      </p>
   </div>
</template>

<script>
   export default {
      props: {
         mySymbol: {
            type: Symbol,
            required: true
         }
      }
   };
</script>