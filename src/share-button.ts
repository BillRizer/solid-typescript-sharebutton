import { EventHandler } from "./EventHandler";

export class ShareButton {
  eventHandler: EventHandler;
  url: string;

  constructor(url: string) {
    this.url = url;
    this.eventHandler = new EventHandler()
  }

  public bind = (className: string, type: string) => {
    let _url: string;
    if (type == "twitter") {
      _url = `https://twitter.com/ref${this.url}`;
    }
    if (type == "facebook") {
      _url = `https://facebook.com/ref${this.url}`;
    }
    if (type == "linkedin") {
      _url = `https://linkedin.com/ref${this.url}`;
    }
    if (type == "pinterest") {
      _url = `https://pinterest.com/ref${this.url}`;
    }
    this.eventHandler.addEventListenerToClass(className, "click", () => {
      window.open(_url);
    });
  };
}
