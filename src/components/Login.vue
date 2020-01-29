<template>
    <div>
        <h2>Login</h2>
        <form @submit="onSubmit">
            <input placeholder="Enter your Id" v-model="uid">
            <input placeholder="Enter your password" v-model="password">
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({
            uid: '',
            password: ''
        }),
        methods: {
            onSubmit() {
                console.log(this.uid)
                console.log(this.password)
            }
        }
    }
</script>