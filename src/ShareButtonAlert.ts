import AbstractFnShareButton from "./AbstractFnShareButton";

export class ShareButtonAlert extends AbstractFnShareButton {
  message: string;
  constructor(className: string, message: string) {
    super(className);
    this.message = message;
  }

  createAction() {
    return () => {
      alert(`${this.message}`);
    };
  }
}
