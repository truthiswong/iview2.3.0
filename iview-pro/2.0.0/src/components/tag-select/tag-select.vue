<template>
    <div class="ivu-tag-select" :class="classes">
        <div class="ivu-tag-select-option" v-if="!hideCheckAll">
            <Tag checkable :checked="checkedAll" @on-change="handleCheckAll" color="primary">全部</Tag>
        </div>
        <slot></slot>
        <a class="ivu-tag-select-expand-btn" @click="handleToggleExpand" v-if="expandable">
            <span v-if="expand">{{ locale.collapseText }}</span>
            <span v-else>{{ locale.expandText }}</span>
            <Icon type="ios-arrow-up" v-if="expand" />
            <Icon type="ios-arrow-down" v-else />
        </a>
    </div>
</template>
<script>
    import { findComponentsDownward } from '../../utils/assist.js';
    import Emitter from '../../mixins/emitter.js';

    export default {
        name: 'TagSelect',
        mixins: [ Emitter ],
        provide () {
            return { TagSelectInstance: this };
        },
        props: {
            value: {
                type: Array,
                default () {
                    return [];
                }
            },
            // 是否展示 展开/收起 按钮
            expandable: {
                type: Boolean,
                default: false
            },
            // 隐藏 全部 按钮
            hideCheckAll: {
                type: Boolean,
                default: false
            },
            locale: {
                type: Object,
                default () {
                    return {
                        collapseText: '收起',
                        expandText: '展开'
                    };
                }
            }
        },
        data () {
            return {
                currentValue: this.value,
                checkedAll: false,
                expand: false
            };
        },
        computed: {
            classes () {
                return {
                    'ivu-tag-select-with-expanded': this.expandable,
                    'ivu-tag-select-expanded': this.expand
                };
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
                this.handleUpdateTags();
            }
        },
        methods: {
            handleUpdateTags () {
                let checkedAll = true;

                const tags = findComponentsDownward(this, 'TagSelectOption');

                tags.forEach(tag => {
                    if (this.currentValue.indexOf(tag.name) >= 0) {
                        tag.checked = true;
                    } else {
                        tag.checked = false;
                        checkedAll = false;
                    }
                });

                this.checkedAll = checkedAll;
            },
            handleChangeTag (name) {
                const checkedNames = [];
                let checkedAll = true;

                const tags = findComponentsDownward(this, 'TagSelectOption');

                tags.forEach(tag => {
                    if (tag.checked) {
                        checkedNames.push(tag.name);
                    } else {
                        checkedAll = false;
                    }
                });

                this.currentValue = checkedNames;
                this.$emit('input', checkedNames);
                this.$emit('on-change', [...checkedNames], name);
                this.dispatch('FormItem', 'on-form-change', name);

                // name 有值，说明是从内部点击 Tag 来的，而非点击全部，这时检测全选的状态
                if (name) {
                    this.checkedAll = checkedAll;
                }
            },
            handleCheckAll (checked) {
                this.checkedAll = checked;
                const tags = findComponentsDownward(this, 'TagSelectOption');

                tags.forEach(tag => {
                    tag.checked = checked;
                });

                this.handleChangeTag();
                this.$emit('on-checked-all', checked);
            },
            handleToggleExpand () {
                this.expand = !this.expand;
            }
        },
        mounted () {
            this.handleUpdateTags();
        }
    };
</script>
