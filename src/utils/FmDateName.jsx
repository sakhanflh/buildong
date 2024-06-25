export function FmDateName(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}