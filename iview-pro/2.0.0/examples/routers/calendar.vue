<template>
    <div style="margin: 100px;">
        <Calendar
            v-model="value"
            @on-type-change="typeChange"
            :first-day-of-week="fdow"
            type="month"
        >
            <template slot-scope="{month, data}">
                {{ data.month }}
            </template>
        </Calendar>
    </div>
</template>
<script>
    import Calendar from '../../src/components/calendar/calendar.vue';
    export default {
        components: { Calendar },
        data () {
            return {
                value: '2019-08-26',
                fdow: 1
            }
        },
        methods: {
            typeChange (val) {
                console.log(val);
            }
        }
    }
</script>
