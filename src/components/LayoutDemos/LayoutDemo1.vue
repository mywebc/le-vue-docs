<demo>
布局一
</demo>

<template>
<Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
</Layout>
</template>

<script lang="ts">
import {
    Content,
    Layout,
    Footer,
    Header,
} from "../../lib/Layout"

export default {
    components: {
        Content,
        Layout,
        Footer,
        Header,
    }
}
</script>

<style lang="scss" scoped>
.le-layout {
    color: #fff;
    font-size: 14px;

    .le-layout-header {
        background-color: #7dbcea;
        height: 80px;
    }

    .le-layout-content {
        background-color: rgba(16, 142, 233, 1);
        height: 200px;
    }

    .le-layout-footer {
        background-color: #7dbcea;
        height: 80px;
    }
}
</style>
