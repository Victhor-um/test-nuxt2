<template>
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
</template>

<script>
export default {
  name: 'ImageForm',

  data() {
    return {
      title: '',
      description: '',
      authorName: '',
      image: null,
      newImage: null,
    }
  },
  computed: {
    isFormValid() {
      return (
        this.title.length > 0 &&
        this.description.length > 0 &&
        this.authorName.length > 0 &&
        this.image !== null &&
        this.image.type.startsWith('image')
      )
    },
  },
  methods: {
    submitForm() {
      // logic to submit
      const newImage = {
        title: this.title,
        description: this.description,
        authorName: this.authorName,
        id: Symbol(this.title),
        uploadDate: new Date(),
        src: URL.createObjectURL(this.image),
      }
      this.$store.commit('gallery/addImage', newImage)
      // // reset form
      this.title = ''
      this.description = ''
      this.authorName = ''
      this.image = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
