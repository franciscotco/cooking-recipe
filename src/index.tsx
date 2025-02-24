import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

const createDomNode = (): HTMLElement => {
  const domNodeRoot = document.getElementById("root");

  if (domNodeRoot) {
    return domNodeRoot;
  } else {
    const domNode = document.createElement("div");

    domNode.setAttribute("id", "root");
    document.body.appendChild(domNode);
    return domNode;
  }
};

const root = createRoot(createDomNode());

root.render(<App />);
