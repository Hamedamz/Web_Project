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
                    <input type="password" name="password" v-model="input.password" placeholder="Password"/>
                </sui-form-field>
                <sui-form-field>
                    <label>Confirm Password</label>
                    <input type="password" name="confirm-password" v-model="input.confirm_password"
                           placeholder="Password"/>
                </sui-form-field>
                <sui-button type="button" v-on:click="signup()">Sign Up</sui-button>
            </sui-form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                input: {
                    username: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                }
            }
        },
        mounted() {
        },
        methods: {
            signup() {

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
</style>