<template>
    <div id="signup">
        <div class="signup-form">
            <sui-form>
                <sui-form-field>
                    <label>Username</label>
                    <input type="text" name="username" v-model="input.username" placeholder="Username"/>
                </sui-form-field>
                <sui-form-field>
                    <label>Email</label>
                    <input type="text" name="email" v-model="input.email" placeholder="Email"/>
                </sui-form-field>
                <sui-form-field>
                    <label>Password</label>
                    <input type="password" name="password" v-model="input.password1" placeholder="Password"/>
                </sui-form-field>
                <sui-form-field>
                    <label>Confirm Password</label>
                    <input type="password" name="confirm-password" v-model="input.password2"
                           placeholder="Password"/>
                </sui-form-field>
                <sui-button secondary type="button" v-on:click="signup()">Sign Up</sui-button>
            </sui-form>
            <sui-form>
                <sui-form-field>
                    <label>Verification Code</label>
                    <input type="text" name="key" v-model="activate_input.key" placeholder="check your mail..."/>
                </sui-form-field>
                <sui-form-field>
                    <a class="hand" v-if="mode === 'activate'" @click="mode = 'signup'"> back to form... </a>
                </sui-form-field>
                <p>{{activateMsg}}</p>
                <sui-button type="button" positive v-on:click="activate()">activate</sui-button>
            </sui-form>
        </div>

    </div>
</template>

<script>
    import {APIService} from "../APIService";

    export default {
        name: "Signup",
        data() {
            return {
                input: {
                    username: "",
                    email: "",
                    password1: "",
                    password2: "",
                },
                activate_input: {
                    key: null,
                },
                activateMsg: '',
                mode: 'signup',
            }
        },
        mounted() {
        },
        methods: {
            signup() {
                this.$http.post(APIService.AUTH+'registration/', this.input, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) =>APIService.KEY =data.key)
                    .then(this.logged())
                    .finally(() => this.mode = 'activate');
            },
            activate() {
                this.$http.post(APIService.AUTH+'registration/verify-email/' , this.activate_input, {emulateJSON: true})
                    .then(response => response.json())
                    .then(data => this.activateMsg = (data.detail === 'ok') ? 'email verified!': 'error :(')
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    .signup-form {
        padding: 1rem;
        justify-content: center;
        align-items: center;
    }
    .hand {
        cursor: pointer;
    }
</style>
