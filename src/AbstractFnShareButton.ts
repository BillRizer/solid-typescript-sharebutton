import { AbstractShareButton } from "./AbstractShareButton";

export default abstract class AbstractFnShareButton extends AbstractShareButton {
  constructor(className: string) {
    super(className);
  }
  abstract createAction() :any
  
}
