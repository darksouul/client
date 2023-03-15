<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="formData.message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      const formData = JSON.stringify(this.formData)
      fetch('/.netlify/functions/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formData
      })
        .then(response => {
          alert('Thank you for contacting us!')
          this.formData = {
            name: '',
            email: '',
            message: ''
          }
        })
        .catch(error => {
          alert('There was a problem submitting your form. Please try again later.')
        })
    }
  }
}
</script>