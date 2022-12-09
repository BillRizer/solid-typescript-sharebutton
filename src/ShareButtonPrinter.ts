import AbstractFnShareButton from "./AbstractFnShareButton";
import IEventHandler from "./EventHandler.interface";

export class ShareButtonPrinter extends AbstractFnShareButton {
  constructor(eventHandler: IEventHandler, className: string) {
    super(className, eventHandler);
  }
  createAction() {
    return () => {
      window.print();
    };
  }
}
