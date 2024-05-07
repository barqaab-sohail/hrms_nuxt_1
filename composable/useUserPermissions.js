export default function () {
  useState(() => {
    return localStorage.getItem("permissions");
  });
}
