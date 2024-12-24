function parseValidationErrors(response) {
    if (response.status != 422) return [];

    let errors = [];
    if (response.data.errors) {
        errors = Object.values(response.data.errors).flat();
    } else if (response.data.email) {
        errors = [response.data.email];
    } else {
        errors = [response.data.message];
    }

    return errors;
}

export { parseValidationErrors };