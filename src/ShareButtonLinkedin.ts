import { AbstractShareButton } from "./AbstractShareButton";

export class ShareButtonLinkedin extends AbstractShareButton {
  constructor(className:string,url: string) {
    super(className, url);
  }
  createLink(): string {
    return `https://linkedin.com/share/${this.url}`;
  }
}
