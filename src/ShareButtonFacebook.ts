import AbstractLinkShareButton from "./AbstractLInkShareButton";

export class ShareButtonFacebook extends AbstractLinkShareButton {
  url;
  constructor(className: string, url: string) {
    super(className);
    this.url = url;
  }
  createLink(): string {
    return `https://facebook.com/share/${this.url}`;
  }
}
