<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <div class="nav-image">
          <img src="https://inovacijuparks.lv/wp-content/uploads/2017/12/placeholder.png" />
        </div>
        <v-list-item link class="text-center">
          <v-list-item-content>
            <v-list-item-title class="title"> Павел Рогонов </v-list-item-title>
            <v-list-item-subtitle
              >Svipe.std25172@gmail.com</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" class="nav-logo">
        <span>Gallery</span>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Галлерея", icon: "mdi-image", to: "/" },
      { title: "Обо мне", icon: "mdi-account", to: "/aboutMe" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.nav-image {
  text-align: center;

  img {
    width: 50%;
    border: none;
    border-radius: 50%;
  }
}
.nav-logo {
  margin: 16px 20px;
  font-size: 24px;
  color: #000;
  text-decoration: none;
}
</style>