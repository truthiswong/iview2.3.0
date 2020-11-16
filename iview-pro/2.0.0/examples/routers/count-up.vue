<template>
    <div style="margin-left: 300px">
        <CountUp :end="100" />
        <br>
        <CountUp :start="14" :end="100" />
        <br>
        <CountUp :end="100" :decimals="2" />
        <br>
        <CountUp :end="100" :duration="6" />
        <br>
        <CountUp :end="end" :callback="update" />
    </div>
</template>
<script>
    import CountUp from '../../src/components/count-up/count-up';

    export default {
        components: { CountUp },
        data () {
            return {
                end: 50
            }
        },
        methods: {
            update () {
                setTimeout(() => {
                    this.end = 100
                }, 1000)
            }
        }
    }
</script>