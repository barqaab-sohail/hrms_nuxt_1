export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const url = `${config.public.baseURL}/api/mis/login`;

  const bodyData = await readBody(event);

  return await $fetch(url, {
    method: "post",
    body: bodyData,
  });
});
