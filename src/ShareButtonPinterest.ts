import { AbstractShareButton } from "./AbstractShareButton";

export class ShareButtonPinterest extends AbstractShareButton {
  constructor(className:string,url: string) {
    super(className, url);
  }
  createLink(): string {
    return `https://pinterest.com/share/${this.url}`;
  }
}
