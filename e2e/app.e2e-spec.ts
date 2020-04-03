import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display company name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Company Name');
  });
});
