<template>
  <div>
    <div v-if="!image" class="d-flex justify-center align-center">
      <v-progress-circular
        color="primary"
        indeterminate
        size="50"
      ></v-progress-circular>
    </div>
    <v-card v-else class="mx-auto" outlined>
      <v-list-item class="flex-sm-row flex-column-reverse">
        <v-list-item-content>
          <p><span class="font-weight-bold">ID: </span>{{ image.id }}</p>
          <p>
            <span class="font-weight-bold">Заголовок: </span>{{ image.title }}
          </p>
          <p><span class="font-weight-bold">Ссылка: </span>{{ image.url }}</p>
        </v-list-item-content>

        <v-img
          :src="image.url"
          max-height="150"
          max-width="150"
          class="ma-2"
        ></v-img>
      </v-list-item>

      <v-card-actions>
        <v-btn color="primary" outlined text to="/"> Назад </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImageInfo",
  computed: {
    image() {
      return this.$store.getters.IMAGE_BY_ID(this.$route.params.id);
    },
  },
  mounted() {
    if (!this.image) {
      setTimeout(() => {
        this.FETCH_IMAGE_BY_ID(this.$route.params.id);
      }, 500);
    }
  },
  methods: {
    ...mapActions(["FETCH_IMAGE_BY_ID"]),
  },
};
</script>

<style lang="scss" scoped>
</style>