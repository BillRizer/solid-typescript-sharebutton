export class EventHandler {
  public addEventListenerToClass(
    className: string,
    eventName: string,
    fn: any
  ) {
    const elements = document.querySelectorAll(`${className}`);
    for (const element of elements) {
      element.addEventListener(eventName, fn);
    }
  }
}
