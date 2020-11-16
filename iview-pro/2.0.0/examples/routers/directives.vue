<template>
    <div style="margin-left: 300px">
        <div class="normal-div" v-width="200" v-margin="20">元素一</div>
        <div class="normal-div" v-height="100" v-padding="30">元素二</div>
        <div class="normal-div" v-font="24" v-display="'inline-block'" v-color="'red'" v-bg-color="'green'">元素三</div>
        <br><br>
        <hr>
        <br>
        <Button @click="width = 400">改变宽度</Button>
        <div class="normal-div" v-width="width" v-resize="handleResize">
            当宽度变化时，会触发事件
        </div>
        <Divider>line-clamp</Divider>
        <div v-width="500" v-line-clamp="2">
            春秋战国之际，七雄并立，各国间的兼并战争，各统治集团内部新旧势力的斗争，以及民众风起云涌的反抗斗争，都异常尖锐激烈。在这激烈动荡的时代，“士”作为一种最活跃的阶层出现在政治舞台上。他们以自己的才能和学识，游说于各国之间，有的主张连横，有的主张合纵，所以，史称这些人为策士或纵横家。他们提出一定的政治主张或斗争策略，为某些统治集团服务，并且往往利用当时错综复杂的斗争形势游说使诸侯采纳，施展着自己治国安邦的才干。各国统治者也认识到，人心的向背，是国家政权能否巩固的决定性因素。失去了民心，国家的统治就难以维持。所以，他们争相招揽人才，虚心纳谏，争取“士”的支持。
        </div>
    </div>
</template>
<script>
    import style from '../../src/directives/style.js';
    import resize from '../../src/directives/resize.js';
    import lineClamp from '../../src/directives/line-clamp.js';

    export default {
        directives: {
            display: style.display,
            width: style.width,
            height: style.height,
            margin: style.margin,
            padding: style.padding,
            font: style.font,
            color: style.color,
            'bg-color': style.bgColor,

            resize,

            'line-clamp': lineClamp
        },
        data () {
            return {
                width: 300
            }
        },
        methods: {
            handleResize () {
                console.log(1)
            }
        },
    }
</script>
<style>
    .normal-div{
        border: 1px solid #999;
    }
</style>
