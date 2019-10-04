import { validatePostDescription } from '../src/utils/validations';

describe('Validate ports properties', () => {
  test('Validate empty description', () => {
    const result = validatePostDescription('');
    expect(result).not.toBe(undefined);
  });

  test('Validate valid description', () => {
    const result = validatePostDescription('Meu post');
    expect(result).toBe(undefined);
  });

  test('Validate big description', () => {
    const result = validatePostDescription('Meu post ddddddddddddd');
    expect(result).not.toBe(undefined);
  });

  test('Test error message', () => {
    const result = validatePostDescription();
    expect(result).toBe('Informe a descrição com até 20 caracteres.');
  });
});
