# Example of sending Web Push notifications from Java

This is a full-stack example showing:

- How to subscribe (and unsubscribe) to notifications in the browser
- How to send push notifications from a Java (Spring Boot) server

Text tutorial: https://dev.to/marcushellberg/how-to-send-web-push-notifications-in-java-21lo
Video tutorial: https://youtu.be/M5sbGvW3S4I

## Tech stack

The project uses [Hilla](https://hilla.dev). It has a Spring Boot backend (Java) and a [Lit](https://lit.dev) frontend (TypeScript). It uses the [Java WebPush](https://github.com/web-push-libs/webpush-java) library for sending messages.

## Pre-requisites

- Java 17+
- Maven 3.6+
- Node 16.14+

## Running the app

1. First, generate required a private and public key pair for your server with `npx web-push generate-vapid-keys`.
2. Rename `.env.template` to `.env` and add your keys to it.
3. Load the environment file with `source .env`
4. Start the Spring Boot application with `mvn` or by running `Application.java`.

## Navigating the code

- `frontend/views/notifications/notifications-view.ts` contains the client implementation for subscribing and unsubscribing
- `src/main/java/com/example/application/MessageService.java` contains the code for sending push messages
- `src/main/java/com/example/application/MessageEndpoint.java` contains the code for accessing the server
