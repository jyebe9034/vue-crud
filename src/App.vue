<template>
  <v-app>
    <v-content>
      <!--<Memo/>-->
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
  // import Memo from "./components/Memo"
  import Login from "./components/Login"

  export default {
    name: "App",
    components: {
      // Memo,
      Login
    }
  }
</script>