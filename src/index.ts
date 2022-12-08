import { ShareButton } from "./share-button";

const url = "https://www.linkedin.com/pablo.telis";
const shareButton = new ShareButton(url);
shareButton.bind("btn-twitter", "twitter");
shareButton.bind("btn-facebook", "facebook");
shareButton.bind("btn-linkedin", "linkedin");
shareButton.bind("btn-pinterest", "pinterest");
