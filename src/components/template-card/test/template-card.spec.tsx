import { newSpecPage } from '@stencil/core/testing';
import { TemplateCard } from '../template-card';

describe('template-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TemplateCard],
      html: `<template-card></template-card>`,
    });
    expect(page.root).toEqualHtml(`
      <template-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </template-card>
    `);
  });
});
