import AbstractLinkShareButton from "./AbstractLInkShareButton";

export class ShareButtonLinkedin extends AbstractLinkShareButton {
  url;
  constructor(className: string, url: string) {
    super(className);
    this.url = url;
  }
  createLink(): string {
    return `https://linkedin.com/share/${this.url}`;
  }
}
