<template>
    <div style="width: 800px">
        <Button @click="col = 4">change col</Button>
        <Button @click="show = !show">toggle show</Button>
        <DescriptionList :col="col" title="我是标题">
            <Description>
                <strong slot="term">内容：</strong>
                A free, open source, cross-platform,
                graphical web browser developed by the
                Mozilla Corporation and hundreds of
                volunteers.
            </Description>
            <Description term="内容：">
                A free, open source, cross-platform,
                graphical web browser developed by the
                Mozilla Corporation and hundreds of
                volunteers.
            </Description>
            <Description term="内容：">
                A free, open source, cross-platform,
                graphical web browser developed by the
                Mozilla Corporation and hundreds of
                volunteers.
            </Description>
            <Description term="内容：" v-if="show">
                A free, open source, cross-platform,
                graphical web browser developed by the
                Mozilla Corporation and hundreds of
                volunteers.
            </Description>
        </DescriptionList>
        <br><br>
        <!--<DescriptionList :col="col" title="我是标题" layout="vertical">-->
            <!--<Description>-->
                <!--<strong slot="term">内容：</strong>-->
                <!--A free, open source, cross-platform,-->
                <!--graphical web browser developed by the-->
                <!--Mozilla Corporation and hundreds of-->
                <!--volunteers.-->
            <!--</Description>-->
            <!--<Description term="内容：">-->
                <!--A free, open source, cross-platform,-->
                <!--graphical web browser developed by the-->
                <!--Mozilla Corporation and hundreds of-->
                <!--volunteers.-->
            <!--</Description>-->
            <!--<Description term="内容：">-->
                <!--A free, open source, cross-platform,-->
                <!--graphical web browser developed by the-->
                <!--Mozilla Corporation and hundreds of-->
                <!--volunteers.-->
            <!--</Description>-->
            <!--<Description term="内容：" v-if="show">-->
                <!--A free, open source, cross-platform,-->
                <!--graphical web browser developed by the-->
                <!--Mozilla Corporation and hundreds of-->
                <!--volunteers.-->
            <!--</Description>-->
        <!--</DescriptionList>-->
    </div>
</template>
<script>
    import DescriptionList from '../../src/components/description-list/description-list';
    import Description from '../../src/components/description-list/description';

    export default {
        components: { DescriptionList, Description },
        data () {
            return {
                col: 3,
                show: false
            }
        },
        methods: {

        }
    }
</script>