# Example of sending Web Push notifications from Java

This is a full-stack example showing:

- How to subscribe (and unsubscribe) to notifications in the browser
- How to send push notifications from a Java (Spring Boot) server


## Tech stack

The project uses [Vaadin Fusion](https://vaadin.com/fusion). It has a Spring Boot backend (Java) and a LitElement frontend (TypeScript). It uses the [Java WebPush](https://github.com/web-push-libs/webpush-java) library for sending messages.

## Pre-requisites

- Java 16+
- Maven 3.6+
- Node 14+

## Running the app

1. First, generate required a private and public key pair for your server with `npx web-push generate-vapid-keys`. 
2. Rename `.env.template` to `.env` and add your keys to it.
3. Load the environment file with `source .env`
3. Start the Spring Boot application with `mvn` or by running `Application.java`.

## Navigating the code

- `frontend/views/notifications/notifications-view.ts` contains the client implementation for subscribing and unsubscribing
- `src/main/java/com/example/application/MessageService.java` contains the code for sending push messages
- `src/main/java/com/example/application/MessageEndpoint.java` contains the code for accessing the server