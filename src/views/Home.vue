<template>
  <div class="container">
    <rotate-loader
      :loading="isLoading"
      :color="'#266dd3'"
      :size="50"
      class="loader"
    />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>

<style scoped>
.loader {
  margin-top: 200px;
}
</style>
