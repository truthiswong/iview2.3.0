<template>
    <div class="ivu-notifications-item" :class="classes" @click="handleClick">
        <slot>
            <row v-bind="rowProps">
                <i-col span="4" class="ivu-notifications-item-icon">
                    <Avatar v-if="icon" :icon="icon" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                    <Avatar v-else-if="customIcon" :custom-icon="customIcon" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                    <Avatar v-else-if="avatar" :src="avatar" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                </i-col>
                <i-col :span="contentSpan" class="ivu-notifications-item-content">
                    <div class="ivu-notifications-item-title">
                        <h4 v-if="title || $slots.title">
                            <slot name="title">{{ title }}</slot>
                            <div class="ivu-notifications-item-tag" v-if="tag">
                                <Tag v-bind="tagProps">{{ tag }}</Tag>
                            </div>
                        </h4>
                    </div>
                    <div class="ivu-notifications-item-desc" v-if="content || $slots.content"><slot name="content">{{ content }}</slot></div>
                    <div class="ivu-notifications-item-time" v-if="time || $slots.time"><slot name="time"><Time :time="time" v-bind="timeProps" /></slot></div>
                </i-col>
            </row>
        </slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist.js';

    export default {
        name: 'NotificationItem',
        inject: ['NotificationTabInstance', 'NotificationInstance'],
        props: {
            // Row 的配置，默认垂直居中
            rowProps: {
                type: Object,
                default () {
                    return {
                        type: 'flex',
                        justify: 'center',
                        align: 'middle'
                    };
                }
            },
            // 是否已读，1 和 true 是已读，0 和 false 是未读
            read: {
                type: [Boolean, Number],
                default: false
            },
            // 小图标
            icon: {
                type: String
            },
            // 自定义图标
            customIcon: {
                type: String
            },
            // 小图标颜色
            iconColor: {
                type: String
            },
            iconSize: {
                validator (value) {
                    return oneOf(value, ['small', 'default', 'large']);
                },
                default: 'default'
            },
            // 头像地址
            avatar: {
                type: String
            },
            // 图标或头像类型
            avatarShape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            // 标题
            title: {
                type: String
            },
            // 内容
            content: {
                type: String
            },
            // 时间，会转为相对时间
            time: {
                type: [Number, Date, String]
            },
            // 相对时间配置
            timeProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 标签
            tag: {
                type: String
            },
            // 标签配置
            tagProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 点击列表项关闭通知菜单
            clickClose: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return {
                    'ivu-notifications-item-unread': this.read === false || this.read === 0
                };
            },
            contentSpan () {
                return this.icon || this.customIcon || this.avatar ? 20 : 24;
            },
            iconStyle () {
                let style= {};
                if (this.iconColor) {
                    style = {
                        'background-color': this.iconColor
                    };
                }
                return style;
            }
        },
        methods: {
            handleClick () {
                this.$emit('on-item-click', this.$attrs);
                this.NotificationTabInstance.handleItemClick(this.$attrs);

                if (this.clickClose) {
                    this.NotificationInstance.handleClose();
                }
            }
        },
        mounted () {
            this.NotificationTabInstance.handleGetItems();
        },
        beforeDestroy () {
            this.NotificationTabInstance.handleGetItems();
        }
    };
</script>