<template>
    <div>
        <Row>
            <i-col span="12">
                <Result type="error" title="提交失败">
                    <div slot="desc">
                        请核对并修改以下信息后，再重新提交。
                    </div>
                    <div slot="extra" v-font="14">
                        <div>您提交的内容有如下错误：</div>
                        <div>
                            <Icon type="ios-close-circle-outline" color="#ed4014" />
                            您的账户已被冻结
                            <a class="ivu-ml-16">
                                立即解冻 <Icon type="ios-arrow-forward" />
                            </a>
                        </div>
                        <div>
                            <Icon type="ios-close-circle-outline" color="#ed4014" />
                            您的账户还不具备申请资格
                            <a class="ivu-ml-16">
                                立即升级 <Icon type="ios-arrow-forward" />
                            </a>
                        </div>
                    </div>
                    <div slot="actions">
                        <Button type="primary">返回修改</Button>
                    </div>
                </Result>
            </i-col>
            <i-col span="12">
                <Result type="error" title="提交失败" :desc="desc" :extra="extra"></Result>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import Result from '../../src/components/result/result.vue';

    export default {
        components: { Result },
        data () {
            return {
                desc: ''
            }
        },
        methods: {

        }
    }
</script>
