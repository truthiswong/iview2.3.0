<template>
    <div>
        <Numeral :value="v1"></Numeral>
        <Button @click="handleChange">Change</Button>
        <br><br>
        <Numeral value="1000.234" format="0,0.00">
            <strong slot="prefix">¥</strong>
        </Numeral>
        <br>
        <Numeral value="0.43" format="0.00%" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                v1: '$10,000.00'
            }
        },
        methods: {
            handleChange () {
                this.v1 = '$10,000.23';
            }
        }
    }
</script>