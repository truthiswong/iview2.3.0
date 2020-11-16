<template>
    <div style="margin-left: 100px;width: 1200px;">
        <row :gutter="32">
            <i-col span="8">
                {{ value1 }} <Button @click="change1">改 value</Button> <Button @click="changed1">改 data</Button>
                <TreeSelect :transfer="transfer" :show-checkbox="true" :data="data1" v-model="value1" @on-change="hc"></TreeSelect>
            </i-col>
            <i-col span="8">
                {{ value2 }} <Button @click="change2">改 value</Button> <Button @click="changed2">改 data</Button>
                <TreeSelect :transfer="transfer" :show-checkbox="true" :data="data2" v-model="value2" multiple @on-change="hc"></TreeSelect>
            </i-col>
            <i-col span="8">
                {{ value3 }}
                <TreeSelect :transfer="transfer" show-checkbox multiple v-model="value3" :data="data3" :load-data="loadData"></TreeSelect>
            </i-col>
        </row>
        <Divider>Form 校验</Divider>
        <Form ref="formValidate" :model="form" :rules="rules">
            <FormItem label="选择" prop="tree">
                {{ form.tree }}
                <TreeSelect multiple :transfer="transfer" :show-checkbox="true" :data="data1" v-model="form.tree"></TreeSelect>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    /**
     * TreeSelect 的 data 中，需要额外设置一个 value
     * select 或 checked 字段，需预先设置在 data 里
     * */
    import TreeSelect from '../../src/components/tree-select/tree-select.vue';
    let value = 1;
    export default {
        components: { TreeSelect },
        data () {
            return {
                transfer: false,
                value1: 'parent1-1',
                value2: ['leaf3', 'parent1'],
                value3: [],
                data1: [
                    {
                        title: '目标节点',
                        expand: true,
                        value: 'parent1',
                        selected: false,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                value: 'parent1-1',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        value: 'leaf1',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        value: 'leaf2',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                value: 'parent1-2',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf3',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf4',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data2: [
                    {
                        title: '目标节点',
                        expand: true,
                        value: 'parent1',
                        selected: false,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                value: 'parent1-1',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        value: 'leaf1',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        value: 'leaf2',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                value: 'parent1-2',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf3',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf4',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data3: [
                    {
                        title: 'parent1',
                        value: 'parent1',
                        loading: false,
                        selected: false,
                        checked: false,
                        children: []
                    }
                ],
                form: {
                    tree: []
                },
                rules: {
                    tree: [
                        { required: true, type: 'array', message: '请选择', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            loadData (item, callback) {
                value ++;
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children' + value,
                            value: 'children' + value,
                            loading: false,
                            selected: false,
                            checked: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            },
            change1 () {
                this.value1 = 'leaf1';
            },
            change2 () {
                this.value2 = ['leaf3', 'leaf4'];
            },
            changed1 () {
                this.data1 = [
                    {
                        title: 'parent num1',
                        expand: true,
                        value: 'parent1',
                        selected: false,
                        checked: false,
                        children: [
                            {
                                title: 'parent num1-1',
                                expand: true,
                                value: 'parent1-1',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        value: 'leaf1',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        value: 'leaf2',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                value: 'parent1-2',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf3',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf4',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ];
            },
            changed2 () {
                this.data2 = [
                    {
                        title: 'parent num1',
                        expand: true,
                        value: 'parent1',
                        selected: false,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                value: 'parent1-1',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        value: 'leaf1',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf nuy1-1-2',
                                        value: 'leaf2',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                value: 'parent1-2',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf rty1-2-1',
                                        value: 'leaf3',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf4',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            hc (v) {
                console.log(v);
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
