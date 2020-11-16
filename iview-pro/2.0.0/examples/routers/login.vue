<template>
    <div style="margin: 50px 400px">
        <!--
        api:
          rules、name
          @on-change
          @on-submit

          captcha slot
          text，也支持图形验证码，点击换图像
          type 改名为 button-type
          -->
        <Button @click="pl = '新的 PL'">改 pl</Button>
        <Login @on-submit="hs">
            <UserName @on-change="hc" :placeholder="pl" :rules="usernameRule" name="username" />
            <Password name="password" />
            <Mobile name="mobile" />
            <Email name="mail" />
<!--            <Captcha name="captcha" @on-get-captcha="handleGet" :before-click="handleBeforeClick" enter-to-submit />-->
            <Captcha name="captcha" unit-text="second" :count-down="0" field="username" @on-get-captcha="handleCaptcha"></Captcha>
            <Submit></Submit>
        </Login>
    </div>
</template>
<script>
    import Login from '../../src/components/login/login';
    import UserName from '../../src/components/login/user-name';
    import Password from '../../src/components/login/password';
    import Mobile from '../../src/components/login/mobile';
    import Email from '../../src/components/login/email';
    import Captcha from '../../src/components/login/captcha';
    import Submit from '../../src/components/login/submit';

    export default {
        components: { Login, UserName, Password, Mobile, Email, Captcha, Submit },
        data () {
            return {
                username: 'aresn',
                pl: '我是 UserName',
                usernameRule: [
                    {
                        required: true, message: '用户名不能为空', trigger: 'change'
                    }
                ]
            }
        },
        methods: {
            hs (status, values) {
                console.log(status);
                console.log(values);
            },
            hc (val) {
                console.log(val);
            },
            handleCaptcha (val, valAll) {
                console.log(val);
                console.log(valAll);
            },
            handleGet (val) {
                console.log(val);
            },
            handleBeforeClick () {
                return new Promise((resolve, reject) => {

                });
            }
        }
    }
</script>
