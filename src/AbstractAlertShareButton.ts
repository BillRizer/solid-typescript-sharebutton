import { AbstractShareButton } from "./AbstractShareButton";

export default abstract class AbstractAlertShareButton extends AbstractShareButton {
  constructor(className: string) {
    super(className);
  }
  abstract createMessage(): string;

  createAction() {
    return () => {
      const message = this.createMessage();
      alert(message);
    };
  }
}
