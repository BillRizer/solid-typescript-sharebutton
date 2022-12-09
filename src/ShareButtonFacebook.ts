import AbstractLinkShareButton from "./AbstractLInkShareButton";
import IEventHandler from "./EventHandler.interface";

export class ShareButtonFacebook extends AbstractLinkShareButton {
  url;
  constructor(eventHandler: IEventHandler, className: string, url: string) {
    super(className, eventHandler);
    this.url = url;
  }
  createLink(): string {
    return `https://facebook.com/share/${this.url}`;
  }
}
