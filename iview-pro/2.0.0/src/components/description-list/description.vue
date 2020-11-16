<script>
    import responsive from './responsive.js';

    export default {
        name: 'Description',
        inject: ['DescriptionListInstance'],
        props: {
            term: {
                type: String
            }
        },
        computed: {
            styles () {
                let style = {};
                if (this.DescriptionListInstance.gutter !== 0) {
                    style = {
                        paddingLeft: this.DescriptionListInstance.gutter / 2 + 'px',
                        paddingRight: this.DescriptionListInstance.gutter / 2 + 'px'
                    };
                }

                return style;
            }
        },
        render (h) {
            let termNode;
            if (this.term || this.$slots.term) {
                if (this.$slots.term) {
                    termNode = h('div', {
                        attrs: {
                            class: 'ivu-description-term'
                        }
                    }, this.$slots.term);
                } else {
                    termNode = h('div', {
                        attrs: {
                            class: 'ivu-description-term'
                        }
                    }, this.term);
                }
            }

            const detailNode = h('div', {
                attrs: {
                    class: 'ivu-description-detail'
                }
            }, this.$slots.default);

            const children = termNode ? [ termNode, detailNode] : [detailNode];

            return h('i-col', {
                props: responsive[this.DescriptionListInstance.col],
                style: this.styles
            }, children);
        }
    };
</script>