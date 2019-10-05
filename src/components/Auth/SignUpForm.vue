<template>
  <div class="ui stackable three column centered grid container">
    <div class="column">
      <h2 class="ui dividing header">
        Sign Up
      </h2>

      <Notification
        :message="notification.message"
        :type="notification.type"
        v-if="notification.message"
      />

      <form class="ui form" @submit.prevent="signup">

        <div class="field">
          <label>Full Name</label>
          <input type="text" name="name" v-model="name" placeholder="Full name">
        </div>

        <div class="field">
          <label>Username</label>
          <input type="text" name="username" v-model="username" placeholder="Username">
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" name="email" v-model="email" placeholder="Email">
        </div>

        <div class="field">
          <label>Password</label>
          <input type="password" name="password" v-model="password" placeholder="Password">
        </div>

        <button class="fluid ui primary button">SIGN UP</button>

        <div class="ui hidden divider"></div>
      </form>

      <div class="ui divider"></div>

      <div class="ui column grid">
        <div class="center aligned column">
          <p>
            Got an account? <router-link to="/login">Log In</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import axios from 'axios'

export default {
  name: 'SignUpForm',
  components: {
    Notification
  },
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      notification: {
        message: '',
        type: ''
      }
    }
  },
  computed: {
    isFormValid () {
      return Object.keys(this.fileds).every(key => this.fileds[key].valid)
    }
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('tweetr-token')

    return token ? next('/') : next()
  },
  methods: {
    signup () {
      axios.post('/signup', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response.data)
          // save token in localstorage
          localStorage.setItem('tweetr-token', response.data.data.token)

          // redirect to user home
          this.$router.push('/')
        })
        .catch(error => {
          // display error notification
          this.notification = Object.assign({}, this.notification, {
            message: error.response.data.message,
            type: error.response.data.status
          })
        })
    }
  }
}
</script>
