export default defineEventHandler(async (event) => {
  const url = `http://localhost/hrms/api/mis/logout`;

  const bodyData = await readBody(event);

  return await $fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${bodyData.token}`,
    },
    body: bodyData,
  });
});
