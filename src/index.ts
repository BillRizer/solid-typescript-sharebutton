import { AbstractShareButton } from "./AbstractShareButton";
import { DOMEventHandler } from "./DOMEventHandler";
import IEventHandler from "./EventHandler.interface";
import { LogEventHandler } from "./LogEventHandler";
import { ShareButtonAlert } from "./ShareButtonAlert";
import { ShareButtonFacebook } from "./ShareButtonFacebook";
import { ShareButtonLinkedin } from "./ShareButtonLinkedin";
import { ShareButtonPinterest } from "./ShareButtonPinterest";
import { ShareButtonPrinter } from "./ShareButtonPrinter";
import { ShareButtonTwitter } from "./ShareButtonTwitter";


const url = "https://www.linkedin.com/pablo.telis";
// const eventHandler: IEventHandler = new DOMEventHandler();
const eventHandler: IEventHandler = new LogEventHandler()

const twitter:AbstractShareButton = new ShareButtonTwitter(eventHandler,'.btn-twitter',url);
twitter.bind()

const facebook:AbstractShareButton = new ShareButtonFacebook(eventHandler,'.btn-facebook',url);
facebook.bind()

const linkedin:AbstractShareButton = new ShareButtonLinkedin(eventHandler,'.btn-linkedin',url);
linkedin.bind()

const pinterest:AbstractShareButton = new ShareButtonPinterest(eventHandler,'.btn-pinterest',url);
pinterest.bind()

const printer:AbstractShareButton = new ShareButtonPrinter(eventHandler,'.btn-printer');
printer.bind()

const alerrt:AbstractShareButton = new ShareButtonAlert(eventHandler,'.btn-alert','My little message');
alerrt.bind()