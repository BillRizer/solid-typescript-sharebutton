import AbstractFnShareButton from "./AbstractFnShareButton";
import IEventHandler from "./EventHandler.interface";

export class ShareButtonAlert extends AbstractFnShareButton {
  message: string;
  constructor(eventHandler: IEventHandler, className: string, message: string) {
    super(className, eventHandler);
    this.message = message;
  }

  createAction() {
    return () => {
      alert(`${this.message}`);
    };
  }
}
