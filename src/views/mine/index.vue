<template>
    <div id="main">
        <Header title="我的"></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import TabBar from '@/components/tabbar';
    export default {
        name: 'mine',
        components: {
            Header,
            TabBar
        }
    }
</script>

<style>

</style>