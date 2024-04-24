<script setup lang="js">
definePageMeta({
  layout: 'disable',

})
useHead({
  script: [
    {
      src: 'https://unpkg.com/@popperjs/core@2',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    }
  ]
})

const email = ref("")
const password = ref("")
const progressBar= ref(false)
const visible = ref(false)
const alert= ref(false)
const rememberMe = ref(false)

onMounted(()=>{
  rememberMe.value = localStorage.getItem('rememberMe')===null?false:true
  email.value = localStorage.getItem('email')
  password.value = localStorage.getItem('password')
});
const token = useState("token", () => "");
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

 const {data,error,pending} = await useFetch("api/login",{
      method:'post',
      body:credentials
    });
    pending.value?progressBar.value=true:progressBar.value=false
    if(error.value===null){
      if(rememberMe.value){
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
        localStorage.setItem('rememberMe',true)
      }else{
        localStorage.setItem('email',"")
        localStorage.setItem('password',"")
        localStorage.setItem('rememberMe',false)
      }
      localStorage.setItem('name',data.value.userName)
      localStorage.setItem('token',data.value.token)
      token.value = data.value.token
      localStorage.setItem('designation',data.value.userDesignation)
      localStorage.setItem('picture',data.value.pictureUrl)

      await navigateTo('/dashboard')

    }else{
      alert.value=true;
      errorMessage.value=error.value.message
    }


  // try {
  //   const response = await axios.post('mis/login', credentials);

  //   if(rememberMe.value){
  //     localStorage.setItem('email',email.value)
  //     localStorage.setItem('password',password.value)
  //     localStorage.setItem('rememberMe',true)
  //   }else{
  //     localStorage.setItem('email',"")
  //     localStorage.setItem('password',"")
  //     localStorage.setItem('rememberMe',false)
  //   }
  //   localStorage.setItem('name',response.data.userName)
  //   localStorage.setItem('token',response.data.token)
  //   localStorage.setItem('designation',response.data.userDesignation)
  //   localStorage.setItem('picture',response.data.pictureUrl)
  //   progressBar.value=false;
  //   await navigateTo('/dashboard')

  // } catch (error) {
  //   console.error(error.response.data);
  //   progressBar.value=false;
  //   alert.value=true;
  //   errorMessage.value=error.response.data.message

  // }
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
