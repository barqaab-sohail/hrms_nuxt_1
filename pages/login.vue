<script setup lang="js">
const progressBar= ref(false)
const  errorMessage= ref("")
const alert= ref(false)
const valid= ref(false)
const show1= ref(false)
const rememberMe= ref(false)
const  email= ref("")
const  password= ref("")
const isLogin = useState("isLogin", () => false);
const passwordRules =[
                        (v) => !!v || 'This field is required',
                        (v) =>
                          v.length >= 5 || 'Minimum Characters must be five',
                      ]
const emailRules = [
       v => !!v || 'This field is required',
       v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]


  async function signInWithCredentials() {
    // Probably you'll do some validation here before submitting to the backend
    // ...
    // This is the object that our backend expects for the `signIn` endpoint
    const credentials = {
      email: email.value,
      password: password.value
    }

    const {data} = await useFetch("api/login",{
      method:'post',
      body:credentials
    });
    console.log(data.value.userName);

  }
 
</script>

<template>
  <v-app>
    <v-main>
      <v-container >
        <v-row>
          <v-col class="justify-center" md="4"> </v-col>
          <v-col class="justify-center" md="4">
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-4">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login Form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-alert
                    closable
                    title="Error"
                    :text="errorMessage"
                    type="error"
                    v-model="alert"
                  ></v-alert>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="email"
                      name="email"
                      label="Email"
                      type="text"
                      :rules="emailRules"
                      placeholder="email"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      name="password"
                      label="Password"
                      :type="show1 ? 'text' : 'password'"
                      placeholder="password"
                      :rules="passwordRules"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1"
                    ></v-text-field>

                    <div class="red--text">{{ errorMessage }}</div>
                    <v-checkbox
                      label="Remember Me"
                      v-model="rememberMe"
                    ></v-checkbox>
                    <v-btn
                      type="submit"
                      :disabled="!valid"
                      @click.prevent="signInWithCredentials"
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
                </v-card-text>
              </v-card>
            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
