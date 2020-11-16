<template>
    <div style="width: 300px">
        <Ellipsis :text="article" :height="50"></Ellipsis>
        <br><br>
        <Ellipsis :text="article" :height="50">
            <span slot="prefix"><Tag color="red">New</Tag></span>
            <span slot="suffix">[02/14]</span>
        </Ellipsis>
        <br><br>
        <Ellipsis :text="article" :height="50" tooltip></Ellipsis>
        <br><br>
        <Ellipsis :text="article" :lines="3" tooltip></Ellipsis>
        <br><br><br>
        <Ellipsis :text="article2" :length="5"></Ellipsis>
    </div>
</template>
<script>
    import Ellipsis from '../../src/components/ellipsis/ellipsis.vue';
    export default {
        components: { Ellipsis },
        data () {
            return {
                article: '《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。',
                article2: '一二三四五六七八九十'
            }
        },
        methods: {

        }
    }
</script>
