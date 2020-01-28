<template>
    <div class="yelow lighten-3 pa-3">
        <h3>정보 수정</h3>
        <v-text-field
                lable="Regular"
                v-model="onememo.seq"
                :readonly="true"
        ></v-text-field>
        <v-text-field
                lable="Regular"
                v-model="onememo.title"
        ></v-text-field>
        <v-text-field
                lable="Regular"
                v-model="onememo.writer"
        ></v-text-field>
        <v-btn @click="editData">Edit</v-btn>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "MemoEdit.vue",
        props: ['onememo'],
        data() {
            return {
                memo: this.onememo
            }
        },
        watch: {
            onememo: {
                // handler의 첫번째 인자값은 NewValue(nv), 두번째 인자값은 OldValue(ov). 사용하지 않으면 생략하면 됨.
                handler: function(nv) {
                    this.memo.title = nv.title
                    this.memo.writer = nv.writer
                },
                deep: true
            }
        },
        methods: {
            editData() {
                axios.put('http://localhost:8081/api/editData', {
                    seq: this.onememo.seq,
                    title: this.memo.title,
                    writer: this.memo.writer
                })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    })
            }
        }
    }
</script>
