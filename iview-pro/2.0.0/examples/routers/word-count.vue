<template>
    <div style="margin-left: 300px">
        <Input v-model="value1" type="textarea" />
        <WordCount :value="value1" :total="10">
            <strong slot="length" slot-scope="{length}">{{length}}</strong>
            <strong slot="total" slot-scope="{total}">{{total}}</strong>
            <strong slot="separator"> / </strong>
        </WordCount>
        <WordCount :value="value1" :total="10" overflow></WordCount>
        <br><br>
        <WordCount :value="value1" :total="10" overflow hide-total>
            <span slot="prefix">已输入了 </span>
            <span slot="prefix-overflow">已超出了 </span>
            <span slot="suffix"> 个字</span>
            <span slot="suffix-overflow"> 个字</span>
        </WordCount>
        <br><br><br>
        <WordCount :value="value1" :total="13" circle></WordCount>
    </div>
</template>
<script>
    import WordCount from '../../src/components/word-count/word-count.vue';
    export default {
        components: { WordCount },
        data () {
            return {
                value1: '你好啊'
            }
        },
        methods: {

        }
    }
</script>