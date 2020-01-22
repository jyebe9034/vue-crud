<template>
    <div class="blue lighten-3 pa-3">
        <h1>CRUD 구현</h1>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <MemoDetail @child="parents"></MemoDetail>
            </v-flex>
            <v-flex xs12 sm6>
                <MemoCreate></MemoCreate>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <MemoEdit :onememo="memo"></MemoEdit>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import MemoDetail from "./MemoDetail"
import MemoCreate from "./MemoCreate"
import MemoEdit from "./MemoEdit"

export default {
    components: {
        MemoDetail,
        MemoCreate,
        MemoEdit
    },
    data() {
        return {
            memo: {}
        }
    },
    methods: {
        parents(memo) {
            this.memo = memo
        }
    },
}
</script>
