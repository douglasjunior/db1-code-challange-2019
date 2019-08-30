
export const validateTaskSearch = value => (
    !value || value.length <= 50
        ? undefined
        : 'O termo de busca deve ter até 50 caracteres'
);
