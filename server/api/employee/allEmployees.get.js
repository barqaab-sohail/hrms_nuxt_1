export default defineEventHandler(async (event) => {
  const url = `http://localhost/hrms/api/employees`;

  return await $fetch(url, {
    options: {
      headers: {
        Authorization: `Bearer 32|SkrSxxDzYHpaI2QvubrSwz0ufXwiuiNcGEWWCyvF0af1e52f`,
      },
    },
  });
});
