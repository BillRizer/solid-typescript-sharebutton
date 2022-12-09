export default interface IEventHandler {
  addEventListenerToClass(
    className: string,
    eventName: string,
    fn: Function
  ): void;
}
