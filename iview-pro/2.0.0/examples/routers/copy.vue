<template>
    <div style="margin-left: 300px">
        <Button @click="handleCopy">复制</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            handleCopy () {
                this.$Copy({
                    text: '我觉得不在意吧。球场上，我穿aj，鞋包里背着高帮的当季最火实战hyperdunk，穿着复古的NBA球衣，带着ua的护具以为自己是最耀眼的。但是当我被比我矮一头，穿着国产乔丹，和30一套篮球服的隔壁系男生在球场上打爆的时候，连自己班的女生都说他好帅，还嘲笑我。所以我觉得女生首先看脸，其次看球技，最后看你装备。\n' +
                        '\n' +
                        '作者：不会起名\n' +
                        '链接：https://www.zhihu.com/question/30581986/answer/603291414\n' +
                        '来源：知乎\n' +
                        '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                });
            }
        }
    }
</script>