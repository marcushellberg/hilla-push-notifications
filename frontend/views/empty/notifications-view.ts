import { customElement, html } from "lit-element";
import { View } from "../view";

@customElement("notifications-view")
export class NotificationsView extends View {
  render() {
    return html` <h1>Web Push Notifications</h1> `;
  }
}
