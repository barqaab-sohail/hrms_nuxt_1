export default defineEventHandler(async (event) => {
  const url = `http://localhost/hrms/api/employees`;

  return await $fetch(url, {
    options: {
      headers: {
        Authorization: `Bearer 36|vBSLIHAH9wU6ChrKJjjA1mo7KCuk93lesE0ckxO96c37a705`,
      },
    },
  });
});
