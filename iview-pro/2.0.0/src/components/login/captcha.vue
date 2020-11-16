<script>
    import LoginItem from './login-item.js';

    export default {
        name: 'Captcha',
        mixins: [ LoginItem ],
        props: {
            // 设置后，需要对应 name 的表单验证过才会触发
            field: {
                type: [String, Array]
            },
            // 倒计时时间，如果设置为 0，则不置为 disabled
            countDown: {
                type: Number,
                default: 60
            },
            // 按钮文案，也支持同名 slot，且 slot 优先
            text: {
                type: String
            },
            // 倒计时单位
            unitText: {
                type: String,
                default: '秒'
            },
            beforeClick: Function
        },
        data () {
            return {
                className: 'ivu-login-captcha',
                prefix: 'ios-keypad-outline',
                placeholder: '请输入验证码',
                type: 'text',
                buttonDisabled: false,
                limitCountDown: 0
            };
        },
        methods: {
            handleClickCaptcha () {
                if (this.field) {
                    const fields = (typeof this.field === 'string') ? [this.field] : this.field;

                    this.LoginInstance.handleValidate(fields, (status) => {
                        if (status) this.handleBeforeGetCaptcha();
                    });
                } else {
                    this.handleBeforeGetCaptcha();
                }
            },
            handleBeforeGetCaptcha () {
                if (!this.beforeClick) {
                    return this.handleGetCaptcha();
                }

                const before = this.beforeClick();

                if (before && before.then) {
                    before.then(() => {
                        this.handleGetCaptcha();
                    });
                } else {
                    this.handleGetCaptcha();
                }
            },
            handleGetCaptcha () {
                if (this.countDown > 0) {
                    this.buttonDisabled = true;
                    this.limitCountDown = this.countDown;
                    this.handleCountDown();
                }

                this.$emit('on-get-captcha', this.LoginInstance.formValidate[this.prop], JSON.parse(JSON.stringify(this.LoginInstance.formValidate)));
            },
            handleCountDown () {
                this.timer = setTimeout(() => {
                    this.limitCountDown--;
                    if (this.limitCountDown === 0) {
                        this.buttonDisabled = false;
                        clearTimeout(this.timer);
                    } else {
                        this.handleCountDown();
                    }
                }, 1000);
            }
        },
        render (h) {
            const $attrs = this.$attrs;

            const finalProps = this.handleGetProps();

            const defaultButtonProps = {
                size: 'large',
                type: 'default',
                long: true,
                disabled: this.buttonDisabled
            };

            if ('size' in $attrs) defaultButtonProps.size = $attrs.size;
            if ('button-type' in $attrs) defaultButtonProps.type = $attrs['button-type'];

            let buttonSlot;
            if (this.$slots.text) {
                buttonSlot = this.$slots.text;
            } else if (this.limitCountDown !== 0) {
                buttonSlot = `${this.limitCountDown} ${this.unitText}`;
            } else if (this.text) {
                buttonSlot = this.text;
            } else {
                buttonSlot = '获取验证码';
            }

            const $button = h('i-button', {
                props: defaultButtonProps,
                on: {
                    click: this.handleClickCaptcha
                }
            }, buttonSlot);

            const $input = h('i-input', {
                props: finalProps,
                on: {
                    input: this.handleChange,
                    'on-enter': this.handleEnter
                }
            });

            const $colinput = h('i-col', {
                props: {
                    span: 16
                }
            }, [$input]);

            const $colbutton = h('i-col', {
                props: {
                    span: 8
                }
            }, [$button]);

            const $row = h('row', {
                props: {
                    gutter: 8
                }
            }, [$colinput, $colbutton]);

            const $formitem = h('FormItem', {
                props: {
                    prop: this.prop,
                    rules: this.rules
                }
            }, [$row]);

            return h('div', {
                attrs: {
                    class: this.className
                }
            }, [$formitem]);
        },
        beforeDestroy () {
            if (this.timer) clearTimeout(this.timer);
        }
    };
</script>
