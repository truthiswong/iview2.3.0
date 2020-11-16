<template>
    <div style="margin-left: 100px">
        <Button @click="handleScroll1">滚动至300</Button>
        <Button @click="handleScroll2">内容滚动至200</Button>
        <div class="s-page" ref="scroll" style="height: 400px;overflow: auto">
            <h1>和日本萌妹一起读深度学习最新论文</h1>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-9c51d1b50abcce04?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-9c51d1b50abcce04?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-d5c5bdc46d0e3bcd?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-d5c5bdc46d0e3bcd?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-60f35021373eb025?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-60f35021373eb025?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-96ecf9bb0f2301e8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-96ecf9bb0f2301e8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-a4f30f4d7763c1fb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-a4f30f4d7763c1fb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-e30c41a2dbf317ab?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-e30c41a2dbf317ab?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-69a10e2b53404c59?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-69a10e2b53404c59?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-abdf396f35cd7038?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-abdf396f35cd7038?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-43a6d20f39ac2cac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-43a6d20f39ac2cac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-6c3b563f2c79fd37?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-6c3b563f2c79fd37?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-d5d4c6c8bae5033c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-d5d4c6c8bae5033c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-92954d506a5cb64a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-92954d506a5cb64a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-59f13581c0539b5b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-59f13581c0539b5b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-bb8d35e1ea8d7560?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-bb8d35e1ea8d7560?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-2c6be754b25203d9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-2c6be754b25203d9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-1f0884378a15bed9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-1f0884378a15bed9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-d8c901598953559c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-d8c901598953559c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-709b1382ce2f9aa7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-709b1382ce2f9aa7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-855a0f656f21b2fa?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-855a0f656f21b2fa?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-9b20d8e78af68065?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-9b20d8e78af68065?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-298994d241a2e74a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-298994d241a2e74a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-04009c653c8d50a0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-04009c653c8d50a0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-3d7df06bdc2a270f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-3d7df06bdc2a270f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-054d72e4fd35b0a0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-054d72e4fd35b0a0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-be5436d08d5fbff1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-be5436d08d5fbff1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-dc2da88ca3769bde?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-dc2da88ca3769bde?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-7660e08b5699faf2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-7660e08b5699faf2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-edfc53d4db391aa7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-edfc53d4db391aa7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-72fcc2d92000b759?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-72fcc2d92000b759?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-96babb1debd33a46?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-96babb1debd33a46?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-2605eca12dff723b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-2605eca12dff723b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-dc5767013822a4ae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-dc5767013822a4ae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <h1 ref="container">Hello World</h1>
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-1b7fd4a04b84aaa0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-1b7fd4a04b84aaa0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-a07c0bbc8e943c3d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-a07c0bbc8e943c3d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-963eb8b174fa89d8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-963eb8b174fa89d8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-1a26465ecac024ae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-1a26465ecac024ae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-8137e002fed85af0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-8137e002fed85af0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-7adb1c8dfa816044?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-7adb1c8dfa816044?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
            <div data-type="p"></div>
            <div data-type="p">
                <div data-type="image" data-display="block" data-align="left" data-src="http://upload-images.jianshu.io/upload_images/8885151-f10d3d2d93bdc656?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-width=""><img src="http://upload-images.jianshu.io/upload_images/8885151-f10d3d2d93bdc656?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="" /></div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ScrollIntoView from '../../src/components/scroll-into-view/index';
    import $ScrollTop from '../../src/components/scroll-top/index';

    export default {
        data () {
            return {

            }
        },
        methods: {
            handleScroll1 () {
                $ScrollIntoView(this.$refs.container, {
                    time: 500,
                    align: {
                        top: 0
                    }
                })
            },
            handleScroll2 () {
                $ScrollTop(this.$refs.scroll, {
                    to: 100,
                    time: 1000
                })
            }
        }
    }
</script>
<style>
    .s-page{
        height: 3000px;
        padding: 10px;
        border: 1px solid #999;
    }
</style>