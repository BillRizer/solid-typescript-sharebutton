import IEventHandler from "./EventHandler.interface";

export class LogEventHandler implements IEventHandler {
  public addEventListenerToClass(
    className: string,
    eventName: string,
    fn: any
  ) {
    console.log(`mock to event added -> className: ${className}, eventName: ${eventName} fn:`,fn);
    
  }
}
