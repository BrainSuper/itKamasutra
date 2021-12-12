export const required = (value) => {
    if (value) return undefined
    return `This area is required`;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}