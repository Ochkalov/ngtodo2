import { Ngtodo2Page } from './app.po';

describe('ngtodo2 App', () => {
  let page: Ngtodo2Page;

  beforeEach(() => {
    page = new Ngtodo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
