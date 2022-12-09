import { AbstractShareButton } from "./AbstractShareButton";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  constructor(className: string) {
    super(className);
  }
  
  abstract createLink(): string;

  createAction(): any {
    return () => {
      window.open(this.createLink());
    };
  }
}
