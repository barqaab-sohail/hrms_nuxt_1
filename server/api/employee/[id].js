export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const url = `http://localhost/hrms/api/employee/${id}`;

  return await $fetch(url);
});
