import { AbstractShareButton } from "./AbstractShareButton";
import IEventHandler from "./EventHandler.interface";

export default abstract class AbstractFnShareButton extends AbstractShareButton {
  constructor(className: string, eventHandler: IEventHandler) {
    super(className, eventHandler);
  }
  abstract createAction(): any;
}
