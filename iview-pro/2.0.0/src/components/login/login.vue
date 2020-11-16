<template>
    <div class="ivu-login">
        <Form ref="form" :model="formValidate" @submit.native.prevent>
            <slot></slot>
        </Form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        props: {

        },
        data () {
            return {
                formValidate: {

                }
            };
        },
        provide () {
            return { LoginInstance: this };
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    this.$emit('on-submit', valid, JSON.parse(JSON.stringify(this.formValidate)));
                });
            },
            handleValidate (fields, cb) {
                let status = true;

                fields.forEach(field => {
                    this.$refs.form.validateField(field, (valid) => {
                        // 验证不通过
                        if (valid) status = false;
                    });
                });

                cb(status);
            }
        }
    };
</script>