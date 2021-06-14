import { registerApplication, start } from "single-spa";

//React App Container
registerApplication({
  name: "@d3/react-app-container",
  app: () =>
    System.import("@d3/react-app-container"),
  activeWhen: ['/'],
});

//React Menu
registerApplication({
  name: "@d3/react-menu",
  app: () =>
    System.import("@d3/react-menu"),
  activeWhen: (location) => location.pathname === '/react-menu',
});

registerApplication({
  name: "@d3/react-title",
  app: () =>
    System.import("@d3/react-title"),
  activeWhen: (location) => location.pathname === '/react-title',
});

registerApplication({
  name: "@d3/react-table-expenses",
  app: () =>
    System.import("@d3/react-table-expenses"),
  activeWhen: (location) => location.pathname === '/react-table-expenses',
});

registerApplication({
  name: "@d3/react-total-expenses",
  app: () =>
    System.import("@d3/react-total-expenses"),
  activeWhen: (location) => location.pathname === '/react-total-expenses',
});

start({
  urlRerouteOnly: true,
});
