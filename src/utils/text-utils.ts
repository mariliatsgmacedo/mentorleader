export const capitalize = (value?:string) => {
    if(!value) return
    const lower = value.toLowerCase();
    return value.charAt(0).toUpperCase() + lower.slice(1);
}