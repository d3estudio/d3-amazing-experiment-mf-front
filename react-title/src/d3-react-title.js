import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Title from "./components/Title";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Title,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
