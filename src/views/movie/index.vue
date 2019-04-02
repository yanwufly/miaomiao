<template>
    <div id="main">
        <Header title="电影"></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>

import Header from '@/components/header';
import TabBar from '@/components/tabbar';

export default {
    name: 'movie',
    components: {
        Header,
        TabBar
    }
}
</script>

<style>

</style>
