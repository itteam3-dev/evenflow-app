export const KAFKA_BROKER = process.env.KAFKA_BROKER || 'localhost:9093';
export const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID || 'eventfowapp';
export const KAFKA_CONSUMER_GROUP = 'eventfowapp-consumer';

// Kafka topics

export const KAFKA_TOPICS = {
  // Auth events
  USER_REGISTERED: 'user.registered',
  USER_LOGIN: 'user.login',
  PASSWORD_RESET_REQUEST: 'user.password-reset-request',

  // event events
  EVENT_CREATED: 'event.created',
  EVENT_UPDATED: 'event.updated',
  EVENT_CANCELLED: 'event.cancelled',

  // ticket events
  TICKET_PURCHASED: 'event.ticket.purchased',
  TICKET_CANCELLED: 'event.ticket.cancelled',
  TICKET_CHECKED_IN: 'event.ticket.checked-in',

  // payment events
  PAYMENT_COMPLETED: 'payment.completed',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',

  // notification events
  SEND_EMAIL: 'notification.send-email',
  SEND_PUSH: 'notification.send-push',
} as const;

export type KafkaTopics = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];
