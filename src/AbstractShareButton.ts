import { EventHandler } from "./EventHandler";

export abstract class AbstractShareButton {
  className;
  eventHandler;
  constructor(className: string) {
    this.className = className;
    this.eventHandler = new EventHandler();
  }

  abstract createAction():any;
 
  bind() {
      const action = this.createAction();
      this.eventHandler.addEventListenerToClass(this.className, "click",action);
    }
}
