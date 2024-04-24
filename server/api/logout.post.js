export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const url = `${config.public.baseURL}/api/mis/logout`;

  const bodyData = await readBody(event);

  return await $fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${bodyData.token}`,
    },
    body: bodyData,
  });
});
