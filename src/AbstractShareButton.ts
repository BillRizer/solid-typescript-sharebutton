import IEventHandler from "./EventHandler.interface";

export abstract class AbstractShareButton {
  className;
  eventHandler;
  constructor(className: string, eventHandler: IEventHandler) {
    this.className = className;
    this.eventHandler = eventHandler
  }

  abstract createAction(): any;

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
}
