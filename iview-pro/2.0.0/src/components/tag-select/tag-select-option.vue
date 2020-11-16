<template>
    <div class="ivu-tag-select-option">
        <Tag checkable :checked="checked" @on-change="handleChange" :color="color" v-bind="tagProps"><slot></slot></Tag>
    </div>
</template>
<script>
    export default {
        name: 'TagSelectOption',
        inject: ['TagSelectInstance'],
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            tagProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            color: {
                type: String,
                default: 'primary'
            }
        },
        data () {
            return {
                checked: false
            };
        },
        methods: {
            handleChange (checked) {
                this.checked = checked;
                this.TagSelectInstance.handleChangeTag(this.name);
            }
        }
    };
</script>
