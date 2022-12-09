import { AbstractShareButton } from "./AbstractShareButton";

export class ShareButtonTwitter extends AbstractShareButton {
  constructor(className:string,url: string) {
    super(className, url);
  }
  createLink(): string {
    return `https://twitter.com/share/${this.url}`;
  }
}
