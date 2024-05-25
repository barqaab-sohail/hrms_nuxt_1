import { useHrPermission, userName } from "~/composable/states";

export default defineNuxtRouteMiddleware((to) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  const token = useState("token").value;
  let isHrPermissions = false;
  let isAssetPermissions = false;
  let isProjectPermissions = false;

  process.server ? '' : isHrPermissions = localStorage.getItem("permissions")?.includes('mis hr');
  process.server ? '' : isAssetPermissions = localStorage.getItem("permissions")?.includes('mis assets');
  process.server ? '' : isProjectPermissions = localStorage.getItem("permissions")?.includes('mis all projects');
 
  console.log('path....'+to.path);
  if (!isHrPermissions && to.path === "/employees/list") {
    return navigateTo("/dashboard");
  }
  if (!isAssetPermissions && to.path === "/assets/detail") {
    return navigateTo("/dashboard");
  }
  if (!isProjectPermissions && to.path.includes('projects')) {
    return navigateTo("/dashboard");
  }
  
  if (token !== null && to.path === "/") {
    return navigateTo("/dashboard");
  }
});
