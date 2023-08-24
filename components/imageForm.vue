<template>
  <v-form>
    <v-text-field v-model="form.title" label="Заголовок"></v-text-field>
    <v-textarea
      v-model="form.description"
      label="Короткое описание"
      rows="2"
      row-height="20"
    ></v-textarea>
    <v-text-field v-model="form.authorName" label="Имя автора"></v-text-field>
    <v-file-input
      v-model="form.image"
      label="Изображение"
      accept="image/png,image/jpeg"
    />
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
      form: {
        title: '',
        description: '',
        authorName: '',
        image: null,
      },
    }
  },
  computed: {
    isFormValid() {
      const { title, description, authorName, image } = this.form
      return (
        title.length > 0 &&
        description.length > 0 &&
        authorName.length > 0 &&
        image !== null &&
        image.type.startsWith('image')
      )
    },
  },
  methods: {
    submitForm() {
      const { title, description, authorName, image } = this.form
      const newImage = {
        title,
        description,
        authorName,
        id: Symbol(title),
        uploadDate: new Date(),
        src: URL.createObjectURL(image),
      }
      this.$store.commit('gallery/addImage', newImage)
      this.form = {
        title: '',
        description: '',
        authorName: '',
        image: null,
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
