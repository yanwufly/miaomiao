<template>
    <div id="main">
        <Header title="影院"></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import TabBar from '@/components/tabbar';
    export default {
        name: 'cinema',
        components: {
            Header,
            TabBar
        }
    }
</script>

<style>

</style>