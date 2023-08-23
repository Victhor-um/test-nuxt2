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
      <v-form>
        <v-text-field v-model="title" label="Заголовок"></v-text-field>
        <v-textarea
          v-model="description"
          label="Короткое описание"
          rows="2"
          row-height="20"
        ></v-textarea>
        <v-text-field v-model="authorName" label="Имя автора"></v-text-field>
        <v-file-input v-model="image" label="Изображение"></v-file-input>
        <v-btn color="primary" :disabled="!isFormValid" @click="submitForm"
          >Отправить</v-btn
        >
      </v-form>
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
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: '',
      description: '',
      authorName: '',
      image: null,
      newImage: null,
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
    isFormValid() {
      return this.image !== null && this.image.type.startsWith('image')
    },
  },
  created() {
    this.$store.dispatch('gallery/fetchGallery')
  },
  methods: {
    submitForm() {
      // logic to submit
      console.log(this.image)

      const newImage = {
        id: Date.now(),
        src: URL.createObjectURL(this.image),
      }
      this.newImage = newImage
      this.$store.commit('gallery/addImage', newImage)
      // // reset form
      this.title = ''
      this.description = ''
      this.authorName = ''
      this.image = null
      this.newImage = null
    },
  },
}
</script>
