import { BookingFrPage } from './app.po';

describe('booking-fr App', function() {
  let page: BookingFrPage;

  beforeEach(() => {
    page = new BookingFrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
