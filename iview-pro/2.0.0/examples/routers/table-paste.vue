<template>
    <div style="margin: 100px">
        <TablePaste :hide-table="false" @on-change="hc" @on-success="hs" @on-error="he">
            <!--<Row :gutter="32">-->
                <!--<i-col span="12">-->
                    <!--<Input v-model="value" type="textarea" :rows="10" />-->
                <!--</i-col>-->
                <!--<i-col span="12">-->
                    <!--<Table :columns="columns" :data="data" border></Table>-->
                <!--</i-col>-->
            <!--</Row>-->
        </TablePaste>
        <Table :columns="columns" :data="data" border></Table>
    </div>
</template>
<script>
    /**
     * 如果自定义 slot，则必须传入 value
     * */
    import TablePaste from '../../src/components/table-paste/table-paste.vue'

    export default {
        components: { TablePaste },
        data () {
            return {
                value: '',
                columns: [],
                data: []
            }
        },
        methods: {
            hc (val) {
                // console.log(val);
            },
            hs (val) {
                console.log(val);
                this.columns = val.columns;
                this.data = val.data;
            },
            he (val, index) {
                console.log(111, val);
                console.log(222, index);
            }
        }
    }
</script>