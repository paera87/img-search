import { FlickrSearcherPage } from './app.po';

describe('flickr-searcher App', function() {
  let page: FlickrSearcherPage;

  beforeEach(() => {
    page = new FlickrSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('flickr-searcher works!');
  });
});
