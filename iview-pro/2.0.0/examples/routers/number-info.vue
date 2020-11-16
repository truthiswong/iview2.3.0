<template>
    <Row>
        <Col span="12">
            <NumberInfo title="与数字格式化组件 Numeral 结合" sub-title="近7日活跃设备" sub-total="17.1" status="up">
                <Numeral value="12321" format="0,0" slot="total" />
            </NumberInfo>
        </Col>
        <Col span="12">
            <NumberInfo title="与数字动画组件 CountUp 结合" sub-title="近30日活跃设备" sub-total="5.3" status="down">
                <CountUp :end="50193" :duration="4" slot="total" />
            </NumberInfo>
        </Col>
    </Row>
</template>
<script>
    import NumberInfo from '../../src/components/number-info/number-info.vue';
    import CountUp from '../../src/components/count-up/count-up.vue';
    import Numeral from '../../src/components/numeral/numeral.vue';
    export default {
        components: { NumberInfo, CountUp, Numeral }
    }
</script>
