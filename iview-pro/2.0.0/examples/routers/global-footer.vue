<template>
    <div>
        <GlobalFooter :links="links" :copyright="copyright"></GlobalFooter>
    </div>
</template>
<script>
    import GlobalFooter from '../../src/components/global-footer/global-footer.vue';
    export default {
        components: { GlobalFooter },
        data () {
            return {
                links: [
                    {
                        key: '帮助',
                        title: '帮助',
                        href: 'https://iviewui.com',
                        blankTarget: false
                    },
                    {
                        key: 'github',
                        icon: 'logo-github',
                        href: 'https://github.com/iview/iview',
                        blankTarget: true,
                    },
                    {
                        key: '条款',
                        title: '条款',
                        href: '',
                        blankTarget: true,
                    }
                ],
                copyright: 'Copyright © 2019 北京视图更新科技有限公司'
            }
        }
    }
</script>