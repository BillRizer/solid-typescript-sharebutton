import { AbstractShareButton } from "./AbstractShareButton";

export default abstract class AbstractPrinterShareButton extends AbstractShareButton {
  constructor(className: string) {
    super(className);
  }
  createAction() {
    return () => {
      window.print();
    };
  }
}
