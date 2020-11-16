<template>
    <div style="margin-left: 300px">
        <Button @click="show = !show">show</Button>
        <Button @click="count = 6">改 count</Button>
        <Notification class="nnnn" :clear-close="false" @on-tab-change="tc" @on-load-more="lm" @on-visible-change="hv" @on-item-click="hc" @on-clear="handleClear" :count="5" :badge-props="badgeProps" :auto-count="false" count-type="badge">
            <NotificationTab :loading="loading" :loaded-all="false" title="通知" :count="5">
                <NotificationItem v-for="item in list" v-bind="item" :time-props="timeProps" :key="item.id"></NotificationItem>
            </NotificationTab>
            <NotificationTab title="关注" :show-loaded-all="false" :show-clear-icon="false" :count="count">
                <div slot="top" style="text-align: center;padding: 12px 0">这些人最近关注了你</div>
            </NotificationTab>
            <NotificationTab title="系统" name="system" :count="9"></NotificationTab>
            <!--<NotificationTab title="系统1"></NotificationTab>-->
            <!--<NotificationTab title="系统2" v-if="show"></NotificationTab>-->
            <!--<NotificationTab title="系统3"></NotificationTab>-->
            <!--<NotificationTab title="系统4"></NotificationTab>-->
            <!--<div slot="extra">-->
                <!--查看全部 >>-->
            <!--</div>-->
        </Notification>
        <!--<Notification :count="0"></Notification>-->
        <!--<br><br>-->
        <!--<Notification :count="99" icon="ios-notifications-outline"></Notification>-->
    </div>
</template>
<style>
    .nnn{
        width: 100%;
    }
    .nnn .ivu-select-dropdown{
        left: 0 !important;
        right: 0;
    }
</style>
<script>
    /**
     * API
     * Notification slot：
     * icon 自定义铃，同 prop: icon
     * extra 底部信息，如 设置、查看全部
     * ----------
     * Notification event：
     * @on-clear 点击清空
     * @on-item-click 点击列表项
     * @on-load-more 加载更多触发
     * @on-visible-change 菜单显示状态改变时调用
     * @on-tab-change 切换页签
     * ----------
     * NotificationTab slot:
     * empty,
     * loading 加载中
     * loaded-all 已完成加载
     * load-more 加载更多
     * clear 是否清空
     * top 顶部，比如：这些人最近关注了你
     * ----------
     * NotificationItem slot:
     * title，
     * content,
     * time
     * */
    import Notification from '../../src/components/notification/notification';
    import NotificationTab from '../../src/components/notification/notification-tab';
    import NotificationItem from '../../src/components/notification/notification-item';

    export default {
        components: { Notification, NotificationTab, NotificationItem },
        data () {
            return {
                badgeProps: {
                    // offset: [5,5],
                },
                show: false,
                count: 0,
                timeProps: {
                    // type: 'datetime'
                },
                loading: false,
                list: [
                    {
                        id: 1,
                        read: true,
                        icon: 'md-mail',
                        iconColor: '#fe5c57',
                        iconSize: 'small',
                        title: '你推荐的 曲妮妮 已通过第三轮面试你推荐的',
                        time: 1551070123000,
                        clickClose: true
                    },
                    {
                        id: 2,
                        read: false,
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar',
                        title: '张某人 评论了你',
                        content: '这里是评论信息这里是评论信息这里是评论信息',
                        time: 1551070123000,
                    },
                    {
                        id: 3,
                        read: true,
                        title: '任务名称',
                        content: '张某提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                        tag: '进行中',
                        tagProps: {
                            color: 'blue'
                        }
                    },
                    {
                        id: 4,
                        read: true,
                        icon: 'md-mail',
                        iconColor: '#fe5c57',
                        iconSize: 'small',
                        title: '你推荐的 曲妮妮 已通过第三轮面试你推荐的',
                        time: 1551070123000,
                    },
                    {
                        id: 5,
                        read: true,
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar',
                        title: '张某人 评论了你',
                        content: '这里是评论信息这里是评论信息这里是评论信息',
                        time: 1551070123000,
                    },
                    {
                        id: 6,
                        read: true,
                        title: '任务名称',
                        content: '张某提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                        tag: '进行中',
                        tagProps: {
                            color: 'blue'
                        }
                    }
                ]
            }
        },
        methods: {
            hc (tab, item) {
                console.log(tab, item);
            },
            handleClear (tab) {
                console.log(tab);
            },
            hv (s) {
                console.log(s);
            },
            lm (t) {
                // this.loading = true;
                console.log(t)
            },
            tc (tab) {
                console.log(tab);
            }
        }
    }
</script>