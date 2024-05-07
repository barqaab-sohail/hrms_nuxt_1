import { useHrPermission, userName } from "~/composable/states";

export default defineNuxtRouteMiddleware((to) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  const token = useState("token").value;

  const uName = userName();
  console.log("hrPermission...." + useUserPermissions().value);
  console.log("token" + token);
  console.log("path..." + to.path);
  if (!useHrPermission().value && to.path === "/employees/list") {
    console.log("from auth middleware");
    return navigateTo("/dashboard");
  }
  if (token !== null && to.path === "/") {
    return navigateTo("/dashboard");
  }
});
