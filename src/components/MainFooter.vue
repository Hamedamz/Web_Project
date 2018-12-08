<template>
    <div class="footer">
        <div class="logo-div">
            <sui-header href="#" class="logo large">LOGO</sui-header>
        </div>
        <div class="float">
            <div class="first">
                <ul>
                    <li>
                        <a href="#">PRIVACY POLICY</a>
                    </li>
                    <li>
                        <a href="#">TERMS & CONDITION</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                </ul>
            </div>
            <div class="second">
                <sui-button circular social="facebook" icon="facebook"></sui-button>
                <sui-button circular social="twitter" icon="twitter"></sui-button>
                <sui-button circular social="instagram" icon="instagram"></sui-button>
                <span class="white">Weekly Newsletter</span>
                <div class="ui action input inverted">
                    <input type="text" placeholder="email...">
                    <button class="ui button red">Subscribe</button>
                </div>
            </div>
            <div class="third">
                <ul>
                    <li>
                        <a href="#">SOCCER</a>
                    </li>
                    <li>
                        <a href="#">BASKETBALL</a>
                    </li>
                    <li>
                        <a href="#">GAMES</a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="cp-text">
            © Copyright 2015 ElCampos All rights reserved.
        </p>
    </div>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>
    .footer {
        /*background: linear-gradient(to top, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0)),url("https://images.newrepublic.com/b57acf7c771395caaffcc403eacb199b2b822e07.jpeg?w=1200&q=65&dpi=2&fm=pjpg&h=800");*/
        width: 100vw;
        height: 50vh;
        background-size: cover !important;
        background-position: center center !important;
        background-blend-mode: multiply;
        margin-top: 2rem;
    }

    .third {
        margin-right: 10% !important;
        text-align: center;
    }

    .float {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .logo {
        font-size: 20px;
        color: #ffffff;
        line-height: 0.5;
        text-align: center;
        display: inline-block;
        position: relative;
        padding: 0 1rem;
    }

    .logo-div {
        text-align: center;
    }

    .logo:before,
    .logo:after {
        content: "";
        position: absolute;
        height: 5px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        top: 0;
        width: 2000px;
    }

    .logo:before {
        right: 100%;
        margin-right: 15px;
    }

    .logo:after {
        left: 100%;
        margin-left: 15px;
    }

    .first {
        margin-left: 10% !important;
        text-align: center;
    }

    .second {
        position: relative;
        left: -1.7%;
        text-align: center;
    }

    a {
        text-decoration: none !important;
        color: #ffffff !important;
        font-weight: 500;
    }

    li {
        margin-bottom: 15px;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a:after {
        border-bottom: 1px solid #f4f3f8;
        content: "";
        display: block;
        margin: 0.25em auto 0;
        transition: width 250ms ease-in-out 0s;
        width: 0;
    }

    a:hover:after {
        transition: width 100ms ease-in-out 0s;
        width: 4rem;
    }

    span {
        padding: 10px;
        display: block;
        position: relative;
        margin-top: 100px;
        color: #ffffff;
        font-size: 20px;
        margin-bottom: 20px;
    }

    span:before {
        content: '';
        width: 1px;
        height: 50px;
        background: rgba(255, 255, 255, 0.25);
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -1px;
        margin-bottom: 20px;
    }

    .inp {
        display: block !important;
        /*margin-left: 25%!important;*/
        margin: auto !important;
        margin-top: 20px !important;
    }

    .cp-text {
        color: rgba(249, 249, 249, 0.7);
        text-shadow: 0 1px rgba(255, 255, 255, 0.1);
        text-align: center;
        margin-top: 25px;
    }
</style>
