<demo>
基本用法
</demo>
<template>
  <Drawer v-model:visible="visible">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>这是一段信息。</p>
      <p>这是一段信息。</p>
      <p>这是一段信息。</p>
    </template>
      <template v-slot:footer>
        <Button @click="toggleDialog2" level="main">确认文本</Button>
    </template>
  </Drawer>
  <Button @click="drawerDeafult">default</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import Drawer from "../../lib/Drawer.vue";
import { ref } from "vue";
export default {
  components: { Button, Drawer },
  setup() {
    const visible = ref(false);
    const drawerDeafult = () => {
      visible.value = !visible.value;
    };
    return {
      drawerDeafult,
      visible,
    };
  },
};
</script>
