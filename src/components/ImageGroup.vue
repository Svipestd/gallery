<template>
  <v-row no-gutters>
    <v-col cols="12" class="my-2 font-weight-bold">{{ title }}</v-col>
    <v-col v-for="image in images" :key="image.id" cols="6" md="2">
      <v-img :src="image.url" class="gallery-image ma-2">
        <v-row
          class="image-btn-box fill-height ma-0"
          align="center"
          justify="center"
        >
          <router-link
            class="image-btn-link"
            :to="{ name: 'imageInfo', params: { id: image.id } }"
          >
            <v-btn elevation="2" small class="image-btn">Подробнее</v-btn>
          </router-link>
        </v-row>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ImageGroup",
  props: ["title", "images"],
};
</script>

<style lang="scss" scoped>
.gallery-image {
  .image-btn-link {
    text-decoration: none;

    .image-btn {
      display: none;
    }
  }

  &:hover .image-btn-box {
    background-color: rgb(188, 202, 202);
  }
  &:hover .image-btn {
    display: block;
  }
}
</style>