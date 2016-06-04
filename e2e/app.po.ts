export class FlickrSearcherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('flickr-searcher-app h1')).getText();
  }
}
