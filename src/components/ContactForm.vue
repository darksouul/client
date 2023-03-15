<template>
  <form class="contact-form" method="POST" data-netlify data-netlify-site="superb-flan-d5ab3c">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="formData.name" required />
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      v-model="formData.email"
      required
    />
    <label for="message">Message</label>
    <textarea
      name="message"
      id="message"
      v-model="formData.message"
      required
    ></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
