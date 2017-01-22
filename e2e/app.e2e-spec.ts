import { Forms1Page } from './app.po';

describe('forms1 App', function() {
  let page: Forms1Page;

  beforeEach(() => {
    page = new Forms1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
