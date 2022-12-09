import { AbstractShareButton } from "./AbstractShareButton";
import IEventHandler from "./EventHandler.interface";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  constructor(className: string, eventHandler: IEventHandler) {
    super(className, eventHandler);
  }

  abstract createLink(): string;

  createAction(): any {
    return () => {
      window.open(this.createLink());
    };
  }
}
