<template>
    <div>
        <Trend flag="up">
            <span>12.5%</span>
        </Trend>
        <Trend flag="down">25.5%</Trend>

        <Trend flag="up" :colorful="false">12.5%</Trend>
        <Trend flag="down" :colorful="false">25.5%</Trend>

        <Trend flag="up" reverse-color>12.5%</Trend>
        <Trend flag="down" reverse-color>25.5%</Trend>

        <Trend flag="up" reverse-color :colorful="false">12.5%</Trend>
        <Trend flag="down" reverse-color :colorful="false">25.5%</Trend>
    </div>
</template>
<script>
    import Trend from '../../src/components/trend/trend.vue';
    export default {
        components: { Trend },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>
