if ("serviceWorker" in navigator) {
  const serviceWorkerUrl = webpackDevServer
    ? "service-worker.js"
    : "https://franciscotco.github.io/cooking-recipe/service-worker.js";

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(serviceWorkerUrl)
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
