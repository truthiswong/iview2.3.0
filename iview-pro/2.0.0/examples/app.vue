<style lang="less">
    //@import "../src/styles/index.less";
</style>
<style lang="less" scoped>
nav {
    margin-bottom: 40px;

    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
}
.v-link-active { color: #bbb; }
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><a href="/count-down">Count Down</a></li>
                <li><a href="/trend">Trend</a></li>
                <li><a href="/ellipsis">Ellipsis</a></li>
                <li><a href="/number-info">NumberInfo</a></li>
                <li><a href="/numeral">Numeral</a></li>
                <li><a href="/avatar-list">AvatarList</a></li>
                <li><a href="/city">City</a></li>
                <li><a href="/description-list">DescriptionList</a></li>
                <li><a href="/exception">Exception</a></li>
                <li><a href="/copy">Copy</a></li>
                <li><a href="/grid">Grid</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/count-up">CountUp</a></li>
                <li><a href="/notification">Notification</a></li>
                <li><a href="/result">Result</a></li>
                <li><a href="/footer-toolbar">FooterToolbar</a></li>
                <li><a href="/tag-select">TagSelect</a></li>
                <li><a href="/tree-select">TreeSelect</a></li>
                <li><a href="/page-header">PageHeader</a></li>
                <li><a href="/directives">Directives</a></li>
                <li><a href="/filters">Filters</a></li>
                <li><a href="/animation">Animation</a></li>
                <li><a href="/scroll-into-view">ScrollIntoView</a></li>
                <li><a href="/word-count">WordCount</a></li>
                <li><a href="/table-paste">TablePaste</a></li>
                <li><a href="/global-footer">GlobalFooter</a></li>
                <li><a href="/auth">Auth</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
