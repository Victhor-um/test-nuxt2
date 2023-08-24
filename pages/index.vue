<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-carousel
        v-if="gallery.length"
        v-model="currentIndex"
        :cycle="isCycle"
        interval="3000"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="item in gallery"
          :key="item.id"
          :src="item.src"
          cover
          @click="selectedImage = item.id"
        />
      </v-carousel>
      <p v-else>Loading...</p>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <image-form />
    </v-col>
    <v-dialog v-model="selectedImage" max-width="800">
      <v-carousel v-model="currentIndex" hide-delimiters>
        <v-carousel-item
          v-for="item in gallery"
          :key="item.id"
          :src="item.src"
        />
      </v-carousel>
    </v-dialog>
    <div
      v-if="selectedImage"
      class="overlay"
      @click.self="selectedImage = null"
    ></div>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      selectedImage: null,
      currentIndex: 0,
    }
  },
  computed: {
    gallery() {
      return this.$store.state.gallery.gallery
    },
    isCycle() {
      return this.gallery.length > 3 && !this.selectedImage
    },
  },
  created() {
    this.$store.dispatch('gallery/fetchGallery')
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
}
</style>
