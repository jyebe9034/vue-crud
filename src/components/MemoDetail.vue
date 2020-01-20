<template>
    <div class="red lighten-3 pa-3">
        <h3>자세한 정보</h3>
        <v-btn color="success" @click="fetchData">get data</v-btn>
        <div v-if='view === true'>
            <v-list dense>
                <v-list-item>
                    <v-list-item-content>번호 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ number }}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>제목 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ title }}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>글쓴이 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ writer }}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
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
                axios.get('http://localhost:8081/api/getData')
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
