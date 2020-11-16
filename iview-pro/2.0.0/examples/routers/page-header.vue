<template>
    <div style="background: #f8f8f9;padding: 100px 0">
        <PageHeader @on-tab-change="tc" :breadcrumb-list="bl" :tabList="tl" tab-active-key="detail" logo="https://dev-file.iviewui.com/userinfokwqmR735ielbLrW4neG2HhXIi0s3bfhL/avatar">
            <div slot="title">Title</div>
            <div slot="content">Content</div>
            <!--<div slot="logo">Logo</div>-->
            <div slot="action">
                <ButtonGroup>
                    <Button>操作</Button>
                    <Button>操作</Button>
                    <Button>其它</Button>
                </ButtonGroup>
                <Button type="primary">主操作</Button>
            </div>
            <div slot="extra">Extra Content</div>
        </PageHeader>
        <Divider>返回</Divider>
        <PageHeader back @on-tab-change="tc" :breadcrumb-list="bl" :tabList="tl" tab-active-key="detail">
            <div slot="title">Title</div>
            <div slot="content">Content</div>
            <!--<div slot="logo">Logo</div>-->
            <div slot="action">
                <ButtonGroup>
                    <Button>操作</Button>
                    <Button>操作</Button>
                    <Button>其它</Button>
                </ButtonGroup>
                <Button type="primary">主操作</Button>
            </div>
            <div slot="extra">Extra Content</div>
        </PageHeader>
        <Divider>返回</Divider>
        <PageHeader title="页面标题" back hidden-breadcrumb>

        </PageHeader>
    </div>
</template>
<script>
    /**
     * API
     *  PageHeader slot:
     * title
     * logo
     * action
     * content
     * extra
     * */
    import PageHeader from '../../src/components/page-header/page-header.vue';
    export default {
        components: { PageHeader },
        data () {
            return {
                bl: [
                    {
                        title: '首页',
                        to: '/'
                    },
                    {
                        title: '组件',
                        to: '/components'
                    },
                    {
                        title: '页头'
                    }
                ],
                tl: [
                    {
                        label: '详情',
                        name: 'detail'
                    },
                    {
                        label: '规则',
                        name: 'rule'
                    }
                ]
            }
        },
        methods: {
            tc (v) {
                console.log(v)
            }
        }
    }
</script>
