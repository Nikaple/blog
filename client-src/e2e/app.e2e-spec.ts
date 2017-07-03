import { ClientSrcPage } from './app.po';

describe('client-src App', () => {
  let page: ClientSrcPage;

  beforeEach(() => {
    page = new ClientSrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
