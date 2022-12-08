export class ShareButton {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  public bind = (className: string, type: string) => {
    let _url:string
    if (type == "twitter") {
        _url = `https://twitter.com/ref${this.url}`;
    }
    if (type == "facebook") {
        _url = `https://facebook.com/ref${this.url}`;
    }
    if (type == "linkedin") {
        _url = `https://linkedin.com/ref${this.url}`;
    }
    if (type == "pinterest") {
        _url = `https://pinterest.com/ref${this.url}`;
    }
    const element = document.querySelector(`.${className}`);
    
    if(element){
        element.addEventListener("click", () => window.open(_url));
    }
  };
}
