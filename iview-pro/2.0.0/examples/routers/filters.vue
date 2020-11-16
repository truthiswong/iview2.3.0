<template>
    <div style="margin-left: 300px">
        {{ d1 | date_format }}
        <DatePicker type="date" v-model="d1"></DatePicker>
    </div>
</template>
<script>
    import date from '../../src/filters/date';

    const fs = {};

    Object.keys(date).forEach(key => {
        fs[key] = date[key];
    });

    export default {
        filters: fs,
        data () {
            return {
                value: new Date(),
                d1: ''
            }
        },
        methods: {

        }
    }
</script>