import { newE2EPage } from '@stencil/core/testing';

describe('status-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<status-badge></status-badge>');

    const element = await page.find('status-badge');
    expect(element).toHaveClass('hydrated');
  });
});
