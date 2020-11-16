<template>
    <div>
        <Auth :authority="['admin']" :access="['admin']">
            <Alert type="success">通过</Alert>
            <Alert type="error" slot="noMatch">不通过</Alert>
        </Auth>

        <Auth :authority="true" :access="['admin']">
            <Alert type="success">通过</Alert>
            <Alert type="error" slot="noMatch">不通过</Alert>
        </Auth>
        <Auth :authority="func" :access="['admin']">
            <Alert type="success">通过</Alert>
            <Alert type="error" slot="noMatch">不通过</Alert>
        </Auth>
        <Auth :authority="['admin']" access="admin">
            <Alert type="success">通过</Alert>
            <Alert type="error" slot="noMatch">不通过</Alert>
        </Auth>
        <Auth :authority="['admin']" access="admin" to="/city">
            <Alert type="success">通过</Alert>
            <Alert type="error" slot="noMatch">不通过</Alert>
        </Auth>
        <Divider>prevent 模式</Divider>
        <Auth :authority="['admin']" access="op" prevent @click="handleShow" message="没有权限">
            <Button type="primary" @click="handleSubmit">不通过</Button>
        </Auth>
        <Auth :authority="['admin']" access="admin" prevent @click="handleShow">
            <Button type="primary" @click="handleSubmit">通过</Button>
        </Auth>
    </div>
</template>
<script>
    import Auth from '../../src/components/auth/auth.vue';
    export default {
        components: { Auth },
        data () {
            return {

            }
        },
        methods: {
            func () {
                return false;
            },
            handleSubmit () {
                console.log('submit');
            },
            handleShow () {
                console.log('show');
            }
        }
    }
</script>
