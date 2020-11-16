<template>
    <div style="margin-left: 100px">
        <Button @click="show = !show">Click Me</Button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="ivu-anim-fade">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-ease">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-move-up">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-move-down">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-move-left">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-move-right">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
        </div>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="ivu-anim-transition-drop">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-slide-up">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-slide-down">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-slide-left">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
            <transition name="ivu-anim-slide-right">
                <div v-show="show" class="transition-box">动画容器</div>
            </transition>
        </div>
        <Icon type="ios-loading" class="ivu-anim-loop" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {

        }
    }
</script>
<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>