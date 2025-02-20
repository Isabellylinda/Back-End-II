export function validarUsuario(nome, email, telefone) {
    if (!nome || nome.length < 2) {
        return 'O nome deve ter pelo menos 2 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'O e-mail informado não é válido.';
    }

    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        return 'O telefone deve estar no formato (XX) XXXXX-XXXX.';
    }

    return null; // Dados válidos
}
