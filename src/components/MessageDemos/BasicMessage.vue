<demo>
基本用法
</demo>
<template>
  <Button @click="openDefault">default</Button>
</template>

<script lang="ts">
import { Message } from "../../lib/Message/index";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Button },
  setup() {
    const openDefault = () => {
      Message({
        message: "这是一条message",
      });
    };
    return {
      openDefault,
    };
  },
};
</script>
