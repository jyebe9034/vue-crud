<template>
    <div class="blue lighten-3 pa-3">
        <h1>CRUD 구현</h1>
        <p>이름: 출력하기</p>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <MemoDetail></MemoDetail>
            </v-flex>
            <v-flex xs12 sm6>
                <MemoEdit></MemoEdit>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import MemoDetail from "./MemoDetail"
import MemoEdit from "./MemoEdit"

export default {
    components: {
        MemoDetail,
        MemoEdit
    }
}
</script>
