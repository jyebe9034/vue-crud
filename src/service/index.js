import loginAPI from './loginAPI'

export default {
    async login (uid, password) {
        const loginResponse = await loginAPI.login(uid, password)
        return loginResponse
    }
}