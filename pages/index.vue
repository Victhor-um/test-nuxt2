<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-carousel
        v-if="gallery.length"
        :cycle="gallery.length > 4 ? true : null"
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in gallery"
          :key="item.id"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
      <p v-else>Loading...</p>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-form v-model="isFormValid">
        <v-text-field v-model="title" label="Заголовок"></v-text-field>
        <v-textarea
          v-model="description"
          label="Короткое описание"
        ></v-textarea>
        <v-text-field v-model="authorName" label="Имя автора"></v-text-field>
        <v-file-input v-model="image" label="Изображение"></v-file-input>
        <v-btn color="primary" :disabled="isFormValid" @click="submitForm"
          >Отправить</v-btn
        >
      </v-form>
    </v-col>
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
      // isFormValid: false,
    }
  },
  computed: {
    gallery() {
      console.log(this.$store)
      return this.$store.getters['gallery/getGallery']
    },
    isFormValid: {
      get() {
        return this.image !== null && this.image.type === 'image'
      },
      set(value) {
        // do nothing
      },
    },
  },
  created() {
    this.$store.dispatch('gallery/fetchGallery')
  },
  methods: {
    submitForm() {
      // logic to submit
      console.log(this.image)
    },
  },
}
</script>
