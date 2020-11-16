// UserName、Password、Mobile、Mail 基于此 mixin

import defaultValidateMessage from './default_validate_message.js';

export default {
    inject: ['LoginInstance'],
    props: {
        rules: {
            type: [Object, Array],
            default () {
                const componentName = this.$options.name;
                return [
                    {
                        required: true,
                        message: defaultValidateMessage[componentName],
                        trigger: 'change'
                    }
                ];
            }
        },
        // 默认值，设置后，初始化时会显示
        value: {
            type: String
        },
        // 自定义校验字段
        name: {
            type: String,
            required: true
        },
        // 回车提交
        enterToSubmit: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            prop: ''
        };
    },
    methods: {
        handleChange (val) {
            this.LoginInstance.formValidate[this.prop] = val;
            this.$emit('on-change', val);
        },
        handleEnter () {
            if (this.enterToSubmit) this.LoginInstance.handleSubmit();
        },
        // 以下方法为了复用而抽象
        handleSetValue () {
            const $props = this.$props;
            // 如果设置了 value 初始值，则初始覆盖
            if ($props.value) {
                this.LoginInstance.formValidate[this.prop] = $props.value;
            }
        },
        handleGetProps () {
            const $props = this.$props;
            // 由于 name 也是 Input 的一个 prop， 但是在 LoginItem 中也声明了，所以主动给 Input 也赋值一遍
            let name = $props.name;
            const defaultProps = {
                prefix: this.prefix,
                placeholder: this.placeholder,
                type: this.type,
                size: 'large',
                // 绑定来在 Form（login.vue） 的值
                value: this.LoginInstance.formValidate[this.prop]
            };

            if (name) defaultProps.name = name;

            return Object.assign(defaultProps, this.$attrs);
        }
    },
    render (h) {
        // 这里不能在 render 写，因为 @on-submit 获取不到实时输入的，render 这里每次输入都会触发
        // this.handleSetValue();
        const finalProps = this.handleGetProps();

        const $input = h('i-input', {
            props: finalProps,
            on: {
                input: this.handleChange,
                'on-enter': this.handleEnter
            }
        });

        const $formitem = h('FormItem', {
            props: {
                prop: this.prop,
                rules: this.rules
            }
        }, [$input]);

        return h('div', {
            attrs: {
                class: this.className
            }
        }, [$formitem]);
    },
    created () {
        const name = this.name;
        // 这里如果直接指定 this.LoginInstance.formValidate['name'] = ''; 会导致一直校验失败
        // 原因是 iView 的 Form 绑定 model 不支持动态修改
        const formValidate = Object.assign({}, this.LoginInstance.formValidate);
        formValidate[name] = '';
        this.LoginInstance.formValidate = formValidate;
        this.prop = name;
        this.handleSetValue();
    }
};
