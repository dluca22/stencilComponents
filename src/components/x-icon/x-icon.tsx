import { Component, h } from '@stencil/core';

@Component({
  tag: 'x-icon',
  styleUrl: 'x-icon.css',
  shadow: true,
})
export class XIcon {
  render() {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0 0-1.4z" />
      </svg>
    );
  }
}
