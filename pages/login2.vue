<script setup lang="js">
import axios from '../axios'
const email = ref("")
const password = ref("")
const progressBar= ref(false)
const visible = ref(false)
const alert= ref(false)
const rememberMe = ref(false)
onMounted(()=>{
  rememberMe.value = localStorage.getItem('password')===null?false:true
  email.value = localStorage.getItem('email')
  password.value = localStorage.getItem('password')
});
const valid = ref(false)
const  errorMessage= ref("")
const passwordRules =[
                        (v) => !!v || 'This field is required',
                        (v) =>
                          v.length >= 5 || 'Minimum Characters must be five',
                      ]
const emailRules = [
       v => !!v || 'This field is required',
       v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]

async function signInWithCredentials()  {
  progressBar.value=true;
  const credentials = {
    email: email.value,
    password: password.value
  }
  try {
    const response = await axios.post('login', credentials);
    localStorage.setItem('userName',response.userName);
    localStorage.setItem('token',response.token);
    localStorage.setItem('pictureUrl',response.pictureUrl);
    if(rememberMe.value){
      localStorage.setItem('email',email.value);
      localStorage.setItem('password',password.value);
    }else{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    }
    console.log(response);
    progressBar.value=false;

  } catch (error) {
    console.error(error.response.data);
    progressBar.value=false;
    alert.value=true;
    errorMessage.value=error.response.data.message

  }
}
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-alert
          closable
          title="Error"
          :text="errorMessage"
          type="error"
          v-model="alert"
        ></v-alert>
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
          :rules="emailRules"
        ></v-text-field>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        />
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          v-model="password"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="passwordRules"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <v-checkbox label="Remember Me" v-model="rememberMe"></v-checkbox>
        <v-btn
          type="submit"
          :disabled="!valid"
          @click.prevent="signInWithCredentials()"
          class="mt-4"
          color="primary"
          value="log in"
          >Login<v-progress-circular
            v-show="progressBar"
            color="white"
            indeterminate
          ></v-progress-circular>
        </v-btn>
      </v-form>
      <!--
      <v-card-text
      class="text-center">
      <a
      class="text-blue text-decoration-none"
      href="#"
      rel="noopener noreferrer"
      target="_blank"
      >
      Sign
      up
      now
      <v-icon
      icon="mdi-chevron-right"></v-icon>
      </a>
      </v-card-text>
      -->
    </v-card>
  </div>
</template>
