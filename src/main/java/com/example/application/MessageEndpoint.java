package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import nl.martijndwars.webpush.Subscription;

@Endpoint
@AnonymousAllowed
public class MessageEndpoint {

  private MessageService messageService;

  public MessageEndpoint(MessageService messageService) {
    this.messageService = messageService;
  }

  public @Nonnull String getPublicKey() {
    return messageService.getPublicKey();
  }

  public void subscribe(Subscription subscription) {
    messageService.subscribe(subscription);
  }

  public void unsubscribe(String endpoint) {
    messageService.unsubscribe(endpoint);
  }
}
