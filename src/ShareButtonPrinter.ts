import AbstractFnShareButton from "./AbstractFnShareButton";

export class ShareButtonPrinter extends AbstractFnShareButton {
  constructor(className: string) {
    super(className);
  }
  createAction() {
    return () => {
      window.print();
    };
  }
}
