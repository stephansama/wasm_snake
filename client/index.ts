import "./index.css";
import init from "../pkg/wasm_snake";

window.onload = () => {
  if (process.env.NODE_ENV === "development")
    document.body.classList.add("debug-screens");

  const key = "darkmode";
  const query = "(prefers-color-scheme: dark)";
  const isSystemDarkMode = window.matchMedia(query).matches;
  const isDarkMode =
    window.localStorage[key] === "true" ||
    (!(key in window.localStorage) && isSystemDarkMode);

  if (isDarkMode) document.documentElement.classList.add("mocha");

  init()
    .then(() => {
      // greet();
    })
    .catch((e) => console.error(e))
    .finally(() => console.log("done fetching wasm"));
};

const root = document.getElementById("root");
if (!root) throw new Error("unable to find root element");

root.innerHTML = `
root
`;
