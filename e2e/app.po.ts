export class RxstorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rxstore-app h1')).getText();
  }
}
