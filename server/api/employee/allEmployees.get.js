export default defineEventHandler(async (event) => {
  const url = `http://localhost/hrms/api/employees`;

  return await $fetch(url, {
    options: {
      headers: {
        Authorization: `Bearer 34|Sakf37EffWj6EAghl4NmVzG9akPqgcrncudUkK8Qff2d0399`,
      },
    },
  });
});
