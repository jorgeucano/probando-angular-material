import { ProbandoMaterialPage } from './app.po';

describe('probando-material App', function() {
  let page: ProbandoMaterialPage;

  beforeEach(() => {
    page = new ProbandoMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
