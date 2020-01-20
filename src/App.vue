<template>
  <v-app>
    <v-content>
      <Memo/>
    </v-content>
  </v-app>
</template>

<script>
  import Memo from "./components/Memo"

  export default {
    name: "App",
    components: {
      Memo
    }
  }
</script>