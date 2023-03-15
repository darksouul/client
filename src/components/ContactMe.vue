<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="success">
      <p>Thank you for contacting us!</p>
    </div>
    <div v-else-if="error">
      <p>Sorry, an error occurred. Please try again later.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false,
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch(process.env.API_ENDPOINT, {
        // <-- Use the API endpoint from the environment variable
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        this.success = true;
        this.error = false;
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        this.success = false;
        this.error = true;
      }
    },
  },
};
</script>
