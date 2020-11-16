<template>
    <div>
        <Button @click="col = 4">切换数量</Button>
        <Button @click="square = !square">切换形状</Button>
        <Button @click="center = !center">切换居中</Button>
        <Button @click="border = !border">切换边框</Button>
        <Button @click="hover = !hover">切换 Hover</Button>
        <Grid :col="col" :square="square" :center="center" :border="border" :hover="hover">
            <GridItem>content1</GridItem>
            <GridItem>content2</GridItem>
            <GridItem>content3</GridItem>
            <GridItem>content4</GridItem>
            <GridItem>content5</GridItem>
            <GridItem>content6</GridItem>
            <GridItem>content7</GridItem>
            <GridItem>content8</GridItem>
            <GridItem>content9</GridItem>
        </Grid>
    </div>
</template>
<script>
    import Grid from '../../src/components/grid/grid.vue';
    import GridItem from '../../src/components/grid/grid-item.vue';

    export default {
        components: { Grid, GridItem },
        data () {
            return {
                col: 3,
                square: false,
                center: false,
                border: true,
                hover: false
            }
        },
        methods: {

        }
    }
</script>