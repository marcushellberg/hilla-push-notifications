import { Route } from "@vaadin/router";
import "./views/notifications/notifications-view";

export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v19/flow/typescript/creating-routes.html)
  {
    path: "",
    component: "notifications-view",
    title: "Notifications",
  },
];
export const routes: ViewRoute[] = [...views];
