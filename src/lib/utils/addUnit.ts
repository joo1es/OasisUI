export const addUnit = (value?: string | number) => {
    if (typeof value === 'undefined') return ''
    if (typeof value === 'number') {
        return `${value}px`
    } else {
        return isNaN(Number(value)) ? value : `${value}px`
    }
}