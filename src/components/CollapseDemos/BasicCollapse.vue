<demo>
基本用法
</demo>
<template>
  <Collapse v-model:defaultSpread="defaultSpread">
    <collapse-item title="This is panel header 1">
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
    <collapse-item title="This is panel header 2">
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
    <collapse-item title="This is panel header 3">
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
  </Collapse>
</template>

<script lang="ts">
import Collapse from "../../lib/Collapse/Collapse.vue";
import CollapseItem from "../../lib/Collapse/CollapseItem.vue";
import { reactive, ref } from "vue";
export default {
  components: { Collapse, CollapseItem },
  setup() {
    const defaultSpread = ref([0]);
    return { defaultSpread };
  },
};
</script>
