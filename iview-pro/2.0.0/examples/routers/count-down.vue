<template>
    <div>
        <CountDown :target="targetTime1" />
        <CountDown :target="targetTime" :format="format" @on-end="handleEnd"></CountDown>
        <Button @click="handleChangeTargetTime">更改目标时间</Button>
    </div>
</template>
<script>
    import CountDown from '../../src/components/count-down/count-down.vue';
    export default {
        components: { CountDown },
        data () {
            return {
                targetTime1: new Date().getTime() + 3900000,
                targetTime: new Date().getTime() + 5000
            }
        },
        methods: {
            handleEnd () {
                iview.Message.info('时间到');
            },
            handleChangeTargetTime () {
                this.targetTime += 5000;
            },
            format (time) {
                return false;
            }
        }
    }
</script>
