<template>
  <div id="app">
    <button @click="fetchData">get data</button>
    <div v-if='view === true'>
      <p>번호 : {{ number }}</p>
      <p>제목 : {{ title }}</p>
      <p>글쓴이 : {{ writer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      view: false,
      number: '',
      title: '',
      writer: ''
    }
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8081/api/test')
        .then((response) => {
          this.number = response.data[0].seq;
          this.title = response.data[0].title;
          this.writer = response.data[0].writer;
          this.view = true;
        })
        .catch(function(error) {
          window.console.log(error);
        })
    }
  }
}
</script>
