import { RxstorePage } from './app.po';

describe('rxstore App', function() {
  let page: RxstorePage;

  beforeEach(() => {
    page = new RxstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rxstore works!');
  });
});
