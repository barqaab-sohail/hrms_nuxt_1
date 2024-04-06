export const useAuth = () => {
  const login = async (email, password, rememberMe) => {
    const data = await $fetch("http://localhost/hrms/api/mis/login", {
      method: "POST",
      body: {
        email,
        password,
        rememberMe,
      },
    });

    console.log(data);
  };

  const logout = async () => {
    const data = await $fetch("/auth/logout", {
      method: "POST",
    });

    setUser(data.user);
  };

  return {
    login,
    logout,
  };
};
