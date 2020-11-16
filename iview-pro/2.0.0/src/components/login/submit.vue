<script>
    export default {
        name: 'Submit',
        inject: ['LoginInstance'],
        props: {

        },
        methods: {
            handleSubmit () {
                this.LoginInstance.handleSubmit();
            }
        },
        render (h) {
            const defaultProps = {
                size: 'large',
                type: 'primary',
                long: true
            };

            const finalProps = Object.assign(defaultProps, this.$attrs);

            const $button = h('i-button', {
                props: finalProps,
                on: {
                    click: this.handleSubmit
                }
            }, this.$slots.default || '登录');

            return h('div', {
                attrs: {
                    class: 'ivu-login-submit'
                }
            }, [$button]);
        }
    };
</script>