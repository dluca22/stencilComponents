import { formatName } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(formatName(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(formatName('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(formatName('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(formatName('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});
