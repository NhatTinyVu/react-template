export interface Coords {
  x: number;
  y: number;
}

export interface EventHandler {
  (event: any): void;
}

export interface EventHandlerParams {
  eventName: string;
  handler: EventHandler;
}
