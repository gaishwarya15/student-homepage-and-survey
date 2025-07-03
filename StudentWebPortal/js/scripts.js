function formatPhoneNumber(input) {
    // Remove all non-digit characters
    const cleaned = ('' + input.value).replace(/\D/g, '');
    
    // Format the cleaned input
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
        input.value = (!match[2] ? match[1] :
                        `(${match[1]}) ${match[2]}${match[3] ? ' ' + match[3] : ''}`);
    }
}
