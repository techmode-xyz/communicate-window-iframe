window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const btn = document.querySelector("button");
  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:3000";

  body.appendChild(iframe);

  btn.addEventListener("click", () => {
    iframe.contentWindow.postMessage({ key: "message", value: "message new" }, "*");
  });
});
