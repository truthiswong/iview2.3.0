<template>
    <div style="margin: 100px">
        <AvatarList :list="list" size="large" :max="4">
            <a slot="extra">+10</a>
        </AvatarList>
        <br><br>
        <AvatarList :list="list" :max="3"></AvatarList>
        <br><br>
        <AvatarList :list="list" :max="5" size="small" :excess-style="excessStyle"></AvatarList>
    </div>
</template>
<script>
    import AvatarList from '../../src/components/avatar-list/avatar-list.vue';
    export default {
        components: { AvatarList },
        data () {
            return {
                list: [
                    {
                        src: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        tip: 'Aresn'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/userinfo8xa5ye7E2jQtJEWlmuEeJPIfOxpd9as9/avatar',
                        tip: '小肥今天也要敲代码'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/userinfokwqmR735ielbLrW4neG2HhXIi0s3bfhL/avatar',
                        tip: 'onenameneo'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/userinfoVe8V5jWgV7gp0oMtmh2qQES4Txh83S3P/avatar',
                        tip: '咸鱼'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/userinfohRf8MIX3RrQHbT9k2aX05v1pTwl0owTh/avatar',
                    },
                    {
                        src: 'https://dev-file.iviewui.com/userinfoe7nHvqOqVJWrGdq42zupOHTLdxbCX7BY/avatar',
                        tip: '白灼菜心儿 '
                    }
                ],
                excessStyle: {
                    color: '#f56a00',
                    backgroundColor: '#fde3cf'
                }
            }
        },
        methods: {

        }
    }
</script>
