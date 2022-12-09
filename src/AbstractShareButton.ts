import { EventHandler } from "./EventHandler";

export abstract class AbstractShareButton {
  className;
  url;
  eventHandler;
  constructor(className: string, url: string) {
    this.className = className;
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();
    this.eventHandler.addEventListenerToClass(this.className, "click", () => {
      window.open(link);
    });
  }
}
