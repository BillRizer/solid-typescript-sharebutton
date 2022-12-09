import { ShareButtonFacebook } from "./ShareButtonFacebook";
import { ShareButtonLinkedin } from "./ShareButtonLinkedin";
import { ShareButtonPinterest } from "./ShareButtonPinterest";
import { ShareButtonTwitter } from "./ShareButtonTwitter";

const url = "https://www.linkedin.com/pablo.telis";
const twitter = new ShareButtonTwitter('.btn-twitter',url);
twitter.bind()

const facebook = new ShareButtonFacebook('.btn-facebook',url);
facebook.bind()

const linkedin = new ShareButtonLinkedin('.btn-linkedin',url);
linkedin.bind()

const pinterest = new ShareButtonPinterest('.btn-pinterest',url);
pinterest.bind()