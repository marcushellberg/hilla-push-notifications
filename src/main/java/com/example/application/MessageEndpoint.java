package com.example.application;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

import nl.martijndwars.webpush.Subscription;

@Endpoint
@AnonymousAllowed
public class MessageEndpoint {

  private MessageService messageService;

  public MessageEndpoint(MessageService messageService) {
    this.messageService = messageService;
  }

  public String getPublicKey() {
    return messageService.getPublicKey();
  }

  public void subscribe(Subscription subscription) {
    messageService.addSubscription(subscription);
  }

  public void unsubscribe(String endpoint) {
    messageService.unsubscribe(endpoint);
  }

}
