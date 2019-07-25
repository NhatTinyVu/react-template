export interface Coords {
  x: number;
  y: number;
}

export interface EventHandler {
  (event: any): void;
}

export interface CoordsHandler {
  (coords: Coords): void;
}

export interface UseEventHandlerParams {
  eventName: string;
  handler: EventHandler;
}
