<template>
    <div style="margin-left: 300px;width: 600px;">
        {{ value }}
        <Button @click="hs">选中</Button>
        <TagSelect v-model="value" @on-change="hc" @on-checked-all="hca" expandable>
            <TagSelectOption name="tag1">选项一</TagSelectOption>
            <TagSelectOption name="tag2">选项二</TagSelectOption>
            <TagSelectOption name="tag3">选项三</TagSelectOption>
            <TagSelectOption name="tag4">选项四</TagSelectOption>
            <TagSelectOption name="tag5">选项五</TagSelectOption>
            <TagSelectOption name="tag6">选项六</TagSelectOption>
            <TagSelectOption name="tag7">选项七</TagSelectOption>
            <TagSelectOption name="tag8">选项八</TagSelectOption>
            <TagSelectOption name="tag9">选项九</TagSelectOption>
            <TagSelectOption name="tag10">选项十</TagSelectOption>
            <TagSelectOption name="tag11">选项十一</TagSelectOption>
            <TagSelectOption name="tag12">选项十二</TagSelectOption>
        </TagSelect>
        <Divider>Form 校验</Divider>
        <Form ref="formValidate" :model="form" :rules="rules">
            <FormItem label="标签" prop="tag">
                {{ form.tag }}
                <TagSelect v-model="form.tag" expandable>
                    <TagSelectOption :name="1">选项一</TagSelectOption>
                    <TagSelectOption :name="2">选项二</TagSelectOption>
                    <TagSelectOption :name="3">选项三</TagSelectOption>
                    <TagSelectOption :name="4">选项四</TagSelectOption>
                </TagSelect>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import TagSelect from '../../src/components/tag-select/tag-select.vue';
    import TagSelectOption from '../../src/components/tag-select/tag-select-option.vue';
    export default {
        components: { TagSelect, TagSelectOption },
        data () {
            return {
                value: ['tag1'],
                form: {
                    tag: [2]
                },
                rules: {
                    tag: [
                        { required: true, type: 'array', message: '请选择标签', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            hc (n, v) {
                console.log(n);
                console.log(v);
            },
            hca (v) {
                console.log(v);
            },
            hs () {
                this.value.push('tag4');
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
