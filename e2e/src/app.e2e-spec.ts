import { browser, ExpectedConditions as until } from 'protractor';
import { LoginPage } from './page-objects/login.po';
import { AppSharedPage } from './page-objects/app-shared.po';
import { ShellPage } from './page-objects/shell.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();
  const shell = new ShellPage();

  beforeAll(async () => {
    await app.navigateAndSetLanguage();
  });

  it('should display the home page', async () => {
    expect(await browser.getCurrentUrl()).toContain('/home');
  });

  it('should display the hello message', async () => {
    await browser.wait(until.visibilityOf(shell.welcomeText), 5000, 'Element taking too long to appear');
    expect(await shell.getParagraphText()).toEqual('Gulpclass generator');
  });
});
