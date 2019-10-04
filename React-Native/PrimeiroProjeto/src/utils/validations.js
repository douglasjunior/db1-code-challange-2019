
export const validatePostDescription = value => (
    value && value.length < 20
        ? undefined
        : 'Informe a descrição com até 20 caracteres.'
);
