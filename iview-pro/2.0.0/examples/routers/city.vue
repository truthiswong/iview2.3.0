<template>
    <div style="margin: 100px;">
        <Row>
            <Col span="12">
                {{ value1 }}
                <City v-model="value1" use-name show-suffix />
            </Col>
            <Col span="12">
<!--                <City v-model="value2" show-suffix />-->
            </Col>
        </Row>
    </div>
</template>
<script>
    import City from '../../src/components/city/city.vue';
    export default {
        components: { City },
        data () {
            return {
                value1: '南京',
                value2: '',
                value3: '210200',
                cs: ['110000', '220100', '210200', '320300', '110000', '220100', '210200', '320300', '110000', '220100', '210200', '320300', '110000', '220100', '210200', '320300', '220100', '210200', '320300', '110000', '220100', '210200', '320300']
            }
        },
        methods: {
            hc (data) {
                console.log(data);
            }
        }
    }
</script>
