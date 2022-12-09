import { AbstractShareButton } from "./AbstractShareButton";

export class ShareButtonFacebook extends AbstractShareButton {
  constructor(className:string,url: string) {
    super(className, url);
  }
  createLink(): string {
    return `https://facebook.com/share/${this.url}`;
  }
}
