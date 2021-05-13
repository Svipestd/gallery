<template>
  <div>
    <div
      v-if="IMAGES.length == 0"
      class="loader d-flex justify-center align-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="50"
      ></v-progress-circular>
    </div>
    <div v-else>
      <ImageGroup title="Природа" :images="IMAGES.slice(0, 6)" />
      <ImageGroup title="Спорт" :images="IMAGES.slice(6, 12)" />
      <ImageGroup title="Город" :images="IMAGES.slice(12, 18)" />
      <ImageGroup title="Культура" :images="IMAGES.slice(18, 24)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ImageGroup from "../components/ImageGroup";

export default {
  name: "Gallery",
  components: {
    ImageGroup,
  },
  methods: {
    ...mapActions(["FETCH_IMAGES"]),
  },
  computed: {
    ...mapGetters(["IMAGES"]),
  },
  mounted() {
    setTimeout(() => {
      this.FETCH_IMAGES();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.loader {
  height: 80vh;
}
</style>