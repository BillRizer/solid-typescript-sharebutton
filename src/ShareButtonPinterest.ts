import AbstractLinkShareButton from "./AbstractLInkShareButton";

export class ShareButtonPinterest extends AbstractLinkShareButton {
  url;
  constructor(className: string, url: string) {
    super(className);
    this.url = url;
  }
  createLink(): string {
    return `https://pinterest.com/share/${this.url}`;
  }
}
