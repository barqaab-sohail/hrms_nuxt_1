import { userName } from "~/composable/states";

export default defineNuxtRouteMiddleware((to) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  const token = useState("token").value;
  const uName = userName();
console.log('name...'+ uName.value)
   console.log("token..." + token);
   console.log('path...'+to.path);
  if (token !==null && to.path ==='/') {
     return navigateTo("/dashboard");
  } 
});
