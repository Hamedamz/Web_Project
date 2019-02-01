<template>
    <div id="login">
        <div class="login-form">

            <sui-form>
                <sui-form-field v-if="mode === 'forgot'">
                    <label>Email</label>
                    <input type="text" name="email" v-model="email.email" placeholder="Email"/>
                    <p>{{forgotMsg}}</p>
                </sui-form-field>
                <sui-form-field v-if="mode === 'login'">
                    <label>Username</label>
                    <input type="text" name="username" v-model="input.username" placeholder="Username"/>
                </sui-form-field>
                <sui-form-field v-if="mode === 'login'">
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

            <sui-form v-if="mode === 'forgot'">
                <sui-form-field>
                    <label>uid</label>
                    <input type="text" name="uid" v-model="reset.uid" placeholder="uid"/>
                </sui-form-field>
                <sui-form-field>
                    <label>token</label>
                    <input type="text" name="token" v-model="reset.token" placeholder="token"/>
                </sui-form-field>
                <sui-form-field>
                    <label>new password</label>
                    <input type="password" name="new_password1" v-model="reset.new_password1" placeholder="Password"/>
                </sui-form-field>
                <sui-form-field>
                    <label>new password confirm</label>
                    <input type="password" name="new_password2" v-model="reset.new_password2" placeholder="Password Confirm"/>
                </sui-form-field>
                <p>{{resetMsg}}</p>
                <sui-button positive type="button" v-on:click.prevent="resetPass()">Reset</sui-button>
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
                },
                reset: {
                    uid: '',
                    token: '',
                    new_password1: '',
                    new_password2: '',
                },
                forgotMsg: '',
                resetMsg: '',

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
                    .then(data => this.forgotMsg = data.detail)
                    .catch(error => console.log(error))
            },
            resetPass() {
                this.$http.post(APIService.AUTH+'password/reset/confirm/', this.reset, {emulateJSON: true})
                    .then(response => response.json())
                    .then(data => {this.resetMsg = data.detail;
                    })
                    .catch(error => this.resetMsg = error.body.new_password2[0])
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
