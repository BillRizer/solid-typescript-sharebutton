import AbstractAlertShareButton from "./AbstractAlertShareButton";

export class ShareButtonAlert extends AbstractAlertShareButton {
  message: string;
  constructor(className: string, message: string) {
    super(className);
    this.message = message;
  }

  createMessage(): string {
    return `${this.message}`;
  }
}
