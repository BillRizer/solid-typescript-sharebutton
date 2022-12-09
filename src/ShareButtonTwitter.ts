import AbstractLinkShareButton from "./AbstractLInkShareButton";

export class ShareButtonTwitter extends AbstractLinkShareButton{
  url;
  constructor(className: string, url: string) {
    super(className);
    this.url = url;
  }
  createLink(): string {
    return `https://twitter.com/share/${this.url}`;
  }
}
