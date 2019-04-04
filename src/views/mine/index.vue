<template>
    <div id="main">
        <Header title="我的" />
        <Login/>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import TabBar from '@/components/tabbar';
    import Login from '@/components/login';
    export default {
        name: 'mine',
        components: {
            Header,
            TabBar,
            Login
        }
    }
</script>

<style>

</style>