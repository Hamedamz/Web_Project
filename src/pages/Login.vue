<template>
    <div id="login">
        <div class="login-form">

            <sui-form>
                <sui-form-field>
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
                <sui-button type="button" v-on:click="login()" v-if="mode === 'login'">Login</sui-button>
                <sui-button type="button" v-on:click="forgot()" v-if="mode === 'forgot'">Send</sui-button>
            </sui-form>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                mode: 'login',
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        mounted() {
        },
        methods: {
            login() {

            },
            forgot() {

            }
        }
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