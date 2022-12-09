import AbstractLinkShareButton from "./AbstractLInkShareButton";
import IEventHandler from "./EventHandler.interface";

export class ShareButtonLinkedin extends AbstractLinkShareButton {
  url;
  constructor(eventHandler: IEventHandler, className: string, url: string) {
    super(className, eventHandler);
    this.url = url;
  }
  createLink(): string {
    return `https://linkedin.com/share/${this.url}`;
  }
}
