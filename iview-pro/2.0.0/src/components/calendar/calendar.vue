<template>
    <div class="ivu-calendar">
        <div class="ivu-calendar-header" v-if="showHeader">
            <slot name="header">
                <div class="ivu-calendar-header-title"><slot name="headerTitle">{{ headerTitle }}</slot></div>
                <div class="ivu-calendar-header-action">
                    <template v-if="headerType === 'simple'">
                        <ButtonGroup>
                            <Button @click="handlePrev"><Icon type="ios-arrow-back" /></Button>
                            <Button @click="handleToday">{{ locale.today }}</Button>
                            <Button @click="handleNext"><Icon type="ios-arrow-forward" /></Button>
                        </ButtonGroup>
                        <RadioGroup v-if="!hideType" v-model="mode" type="button" class="ivu-ml" @on-change="handleChangeType">
                            <Radio label="month">{{ locale.type.month }}</Radio>
                            <Radio label="year">{{ locale.type.year }}</Radio>
                        </RadioGroup>
                    </template>
                    <template v-else-if="headerType === 'full'">

                    </template>
                </div>
            </slot>
        </div>
        <div class="ivu-calendar-body">
            <CalendarMonth v-if="mode === 'month'" :date="currentValue">
                <slot slot-scope="{ date, data }" :date="date" :data="data" slot="month" name="month"></slot>
            </CalendarMonth>
            <CalendarYear v-else-if="mode === 'year'" :date="currentValue">
                <slot slot-scope="{ month, data }" :month="month" :data="data" slot="year" name="year"></slot>
            </CalendarYear>
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs';
    import { oneOf } from '../../utils/assist.js';
    import CalendarMonth from './month';
    import CalendarYear from './year';

    export default {
        name: 'Calendar',
        components: { CalendarMonth, CalendarYear },
        provide () {
            return { CalendarInstance: this };
        },
        props: {
            value: {
                type: [Date, String, Number]
            },
            // 视图类型，月、年
            type: {
                validator (value) {
                    return oneOf(value, ['month', 'year']);
                },
                default: 'month'
            },
            cellHeight: {
                type: Number,
                default: 100
            },
            // 是否显示顶部
            showHeader: {
                type: Boolean,
                default: true
            },
            // 顶部菜单类型
            headerType: {
                validator (value) {
                    return oneOf(value, ['simple', 'full']);
                },
                default: 'simple'
            },
            // 周起始日
            firstDayOfWeek: {
                validator (value) {
                    return oneOf(value, [1, 2, 3, 4, 5, 6, 7]);
                },
                default: 1
            },
            hideType: {
                type: Boolean,
                default: false
            },
            // 默认文案
            locale: {
                type: Object,
                default () {
                    return {
                        today: '今天',
                        type: {
                            month: '月',
                            year: '年'
                        },
                        weekDays: ['日', '一', '二', '三', '四', '五', '六'],
                        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    };
                }
            }
        },
        data () {
            const value = this.value ? this.value : new Date();
            return {
                currentValue: dayjs(value),
                mode: this.type
            }
        },
        watch: {
            value (val) {
                const value = val ? val : new Date();
                this.currentValue = dayjs(value);
            },
            type (val) {
                this.mode = val;
            }
        },
        computed: {
            headerTitle () {
                if (this.mode === 'month') {
                    return this.currentValue.format('YYYY 年 M 月');
                } else if (this.mode === 'year') {
                    return this.currentValue.format('YYYY 年');
                }
            }
        },
        methods: {
            handleChangeType (type) {
                this.$emit('on-type-change', type);
            },
            handlePrev () {
                const firstDate = this.currentValue.format('YYYY-MM-01');
                let prevDate;
                if (this.mode === 'month') {
                    prevDate = dayjs(firstDate).subtract(1, 'month');
                } else if (this.mode === 'year') {
                    prevDate = dayjs(firstDate).subtract(1, 'year');
                }
                this.handleChangeDate(prevDate);
            },
            handleNext () {
                const firstDate = this.currentValue.format('YYYY-MM-01');
                let nextDate;
                if (this.mode === 'month') {
                    nextDate = dayjs(firstDate).add(1, 'month');
                } else if (this.mode === 'year') {
                    nextDate = dayjs(firstDate).add(1, 'year');
                }
                this.handleChangeDate(nextDate);
            },
            handleToday () {
                const nowDate = dayjs(new Date());
                const today = nowDate.format('YYYY-MM-DD');
                const currentValue = this.currentValue.format('YYYY-MM-DD');
                if (today !== currentValue) {
                    this.handleChangeDate(nowDate);
                }
            },
            handleChangeDate (val) {
                this.currentValue = val;
                const date = new Date(val.format('YYYY-MM-DD'));
                this.$emit('input', date);
                this.$emit('on-change', date);
            }
        }
    }
</script>
