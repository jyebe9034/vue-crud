<template>
    <div class="red lighten-3 pa-3">
        <h3>자세한 정보</h3>
        <v-btn color="success" @click="fetchData">get data</v-btn>
        <div v-if='view === true'>
            <v-list dense v-for="(tmp, index) in memo" :key="tmp.seq">
                <v-list-item @click="sendData(index)">
                    <v-list-item-content>번호 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ tmp.seq }}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>제목 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ tmp.title }}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>글쓴이 : </v-list-item-content>
                    <v-list-item-content class="align-end">
                        {{ tmp.writer }}
                    </v-list-item-content>
                </v-list-item>
                <v-btn @click="deleteData(tmp.seq)">삭제</v-btn>
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
                memo: []
            }
        },
        methods: {
            fetchData() {
                axios.get('http://localhost:8081/api/getData')
                    .then((response) => {
                        this.memo = response.data;
                        this.view = true;
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            sendData(index) {
                this.$emit('child', this.memo[index]);
            },
            deleteData(index) {
                axios.delete('http://localhost:8081/api/deleteData?seq=' + index)
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            }
        }
    }
</script>
