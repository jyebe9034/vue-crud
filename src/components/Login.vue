<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
            <input placeholder="Enter your Id" v-model="uid"><br>
            <input placeholder="Enter your password" v-model="password"><br>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Login',
        data: () => ({
            uid: 'pizza@gmail.com',
            password: 'pizza1234'
        }),
        methods: {
            onSubmit() {
                var loginUrl = "http://localhost:8081/api/login";
                // var loginUrl2 = "http://localhost:8081/api/jpaLogin";

                /*
                axios.get(loginUrl, {
                    params: {
                        email: this.uid,
                        password: this.password
                    }
                })
                 */
                axios.post(loginUrl, {

                        email: this.uid,
                        password: this.password

                })
                .then((response) => {

                    console.log(response);

                    if (response.data['result'] === this.uid){

                        // this.isSuccess = localStorage.getItem("uid");
                        localStorage.setItem("isLogin", true);

                        // console.log(this.$router);
                        this.$router.push("/memo");
                    }
                })

                return false;
            }
        }
    }
</script>