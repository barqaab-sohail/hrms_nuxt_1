export default defineEventHandler(async (event) => {
  const url = `http://localhost/hrms/api/mis/login`;

  const bodyData = await readBody(event);

  return await $fetch(url, {
    method: "post",
    body: bodyData,
  });
});
