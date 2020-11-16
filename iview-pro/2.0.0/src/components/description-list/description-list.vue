<template>
    <div class="ivu-description-list" :class="{ 'ivu-description-list-vertical': layout === 'vertical' }">
        <div class="ivu-description-list-title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
        <Row :gutter="gutter">
            <slot></slot>
        </Row>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist.js';

    export default {
        name: 'DescriptionList',
        props: {
            layout: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            title: {
                type: String
            },
            gutter: {
                type: Number,
                default: 32
            },
            col: {
                validator (value) {
                    return oneOf(value, [1, 2, 3, 4]);
                },
                default: 3
            }
        },
        provide () {
            return { DescriptionListInstance: this };
        }
    };
</script>