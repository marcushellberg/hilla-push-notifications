import { customElement, html, state } from "lit-element";
import "@vaadin/vaadin-button";
import { View } from "../view";
import * as server from "Frontend/generated/MessageEndpoint";

@customElement("notifications-view")
export class NotificationsView extends View {
  @state()
  denied = Notification.permission === "denied";
  @state()
  subscribed = false;
  @state()
  publicKey = "";

  render() {
    return html`
      <h1>Web Push Notifications 📣</h1>

      ${this.denied
        ? html`
            <b>
              You have blocked notifications. You need to manually enable them
              in your browser.
            </b>
          `
        : ""}
      ${this.subscribed
        ? html`
            <p>Hooray! You are subscribed to receive notifications 🙌</p>
            <vaadin-button theme="error" @click=${this.unsubscribe}
              >Unsubscribe</vaadin-button
            >
          `
        : html`
            <p>You are not yet subscribed to receive notifications.</p>

            <vaadin-button
              theme="primary"
              @click=${this.subscribe}
              .disabled=${!this.publicKey}
              >Subscribe</vaadin-button
            >
          `}
    `;
  }

  async firstUpdated() {
    const registration = await navigator.serviceWorker.getRegistration();
    this.subscribed = !!(await registration?.pushManager.getSubscription());
    this.publicKey = await server.getPublicKey();
  }

  async subscribe() {
    const notificationPermission = await Notification.requestPermission();

    if (notificationPermission === "granted") {
      const registration = await navigator.serviceWorker.getRegistration();
      const subscription = await registration?.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlB64ToUint8Array(this.publicKey),
      });

      if (subscription) {
        this.subscribed = true;
        server.subscribe(JSON.parse(JSON.stringify(subscription)));
      }
    } else {
      this.denied = true;
    }
  }

  async unsubscribe() {
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration?.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      await server.unsubscribe(subscription.endpoint);
      this.subscribed = false;
    }
  }

  private urlB64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
