export function checkNotNull(
    value: any,
    error: string = `Invalid value: ${value}`
) {
    if (value === null) {
        throw new Error(error)
    }
}

export function checkNotNullOrEmpty(
    value: any,
    error: string = `Invalid value: ${value}`
) {
    if (value === null || (typeof value === "string" && !value.trim())) {
        throw new Error(error)
    }
}
