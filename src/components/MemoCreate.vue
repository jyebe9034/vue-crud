<template>
    <div class="yelow lighten-3 pa-3">
        <h3>정보 입력</h3>
        <v-text-field
                lable="Regular"
                v-model="title"
        ></v-text-field>
        <v-text-field
                lable="Regular"
                v-model="writer"
        ></v-text-field>
        <v-btn @click="addData">Add</v-btn>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            return {
                title: '',
                writer: ''
            }
        },
        methods: {
            addData() {
                if(this.title !== '' && this.writer !== '') {
                    axios.post('http://localhost:8081/api/createData', {
                        title: this.title,
                        writer: this.writer
                    })
                    .then((response) => {
                        console.log(response);
                        this.title = '';
                        this.writer = '';
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
                } else {
                    alert('insert fail');
                }
            }
        }
    }
</script>
