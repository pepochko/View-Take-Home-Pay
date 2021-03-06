import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }

  getSearchInput() {
    return element(by.css('.search'));
  }

  getAutocompleteNames() {
    return element.all(by.css('.autocomplete-names'));
  }
}
