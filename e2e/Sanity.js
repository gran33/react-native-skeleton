const TestIDs = require('../src/TestIDs');

describe('DEMO E2E', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show welcome screen', async () => {
    await expect(element(by.id(TestIDs.WELCOME_SCREEN))).toBeVisible();
  });

  it('should show launches screen with priming view', async () => {
    await expect(element(by.id(TestIDs.WELCOME_CTA))).toBeVisible();
    await element(by.id(TestIDs.WELCOME_CTA)).tap();
    await expect(element(by.id(TestIDs.LAUNCHES_PRIMING_SCREEN))).toBeVisible();
  });

  it('should show launches screen with list view', async () => {
    await expect(element(by.id(TestIDs.WELCOME_CTA))).toBeVisible();
    await element(by.id(TestIDs.WELCOME_CTA)).tap();
    await expect(element(by.id(TestIDs.LAUNCHES_PRIMING_SCREEN))).toBeVisible();
    await element(by.id(TestIDs.LAUNCHES_CTA)).tap();
    await expect(element(by.id(TestIDs.LAUNCHES_LIST_SCREEN))).toBeVisible();
  });
});
