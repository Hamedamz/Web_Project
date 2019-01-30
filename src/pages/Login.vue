<template>
    <div id="login">
        <div class="login-form">

            <sui-form>
                <sui-form-field v-if="mode === 'forgot'">
                    <label>Email</label>
                    <input type="text" name="email" v-model="email.email" placeholder="Email"/>
                </sui-form-field>
                <sui-form-field v-if="mode === 'login'">
                    <label>Username</label>
                    <input type="text" name="username" v-model="input.username" placeholder="Username"/>
                    <label>Password</label>
                    <input type="password" name="password" v-model="input.password" placeholder="Password"/>
                </sui-form-field>
                <sui-form-field>
                    <a class="hand" v-if="mode === 'login'" @click="mode = 'forgot'"> Forgot password...? </a>
                    <a class="hand" v-if="mode === 'forgot'" @click="mode = 'login'"> Login... </a>
                </sui-form-field>
                <sui-button secondary type="button" v-on:click.prevent="login()" v-if="mode === 'login'">Login</sui-button>
                <sui-button secondary type="button" v-on:click.prevent="forgot()" v-if="mode === 'forgot'">Send</sui-button>
            </sui-form>

        </div>

    </div>
</template>

<script>
    import {APIService} from "@/APIService";

    export default {
        name: "Login",
        data() {
            return {
                mode: 'login',
                input: {
                    username: "",
                    password: ""
                },
                email:{
                    email:"",
                }
            }
        },
        props: ['nav'],
        methods: {
            login: function () {
                this.$http.post(APIService.AUTH+'login/', this.input, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) =>APIService.KEY =data.key)
                    .then(this.logged())
                    .catch(error => console.log(error))
                this.$emit('toggle-modal')
            },
            forgot() {
                this.$http.post(APIService.AUTH+'password/reset/', this.email, {emulateJSON: true})
                    .then(response => response.json())
                    .catch(error => console.log(error))
            },
            logged() {
                this.$http.post(APIService.USER + 'logged/', {key:APIService.KEY}, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => APIService.loggedIn = data)
                    .catch(error => console.log(error))
                if(APIService.loggedIn.logged){
                    this.toggle()
                }

            }
        },
    }
</script>

<style scoped>
    .login-form {
        padding: 1rem;
        justify-content: center;
        align-items: center;
    }

    .hand {
        cursor: pointer;
    }
</style>
