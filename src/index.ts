import { AbstractShareButton } from "./AbstractShareButton";
import { ShareButtonAlert } from "./ShareButtonAlert";
import { ShareButtonFacebook } from "./ShareButtonFacebook";
import { ShareButtonLinkedin } from "./ShareButtonLinkedin";
import { ShareButtonPinterest } from "./ShareButtonPinterest";
import { ShareButtonPrinter } from "./ShareButtonPrinter";
import { ShareButtonTwitter } from "./ShareButtonTwitter";

const url = "https://www.linkedin.com/pablo.telis";
const twitter:AbstractShareButton = new ShareButtonTwitter('.btn-twitter',url);
twitter.bind()

const facebook:AbstractShareButton = new ShareButtonFacebook('.btn-facebook',url);
facebook.bind()

const linkedin:AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin',url);
linkedin.bind()

const pinterest:AbstractShareButton = new ShareButtonPinterest('.btn-pinterest',url);
pinterest.bind()

const printer:AbstractShareButton = new ShareButtonPrinter('.btn-printer');
printer.bind()

const alerrt:AbstractShareButton = new ShareButtonAlert('.btn-alert','My little message');
alerrt.bind()