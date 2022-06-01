export function size(node: Element, cb?: (width: number, height: number) => void) {
    const resizeObserver = new ResizeObserver(([entry]) => {
        cb?.(entry.contentRect.width, entry.contentRect.height)
    })
    resizeObserver.observe(node)
    return {
        destroy() {
            resizeObserver.disconnect()
        }
    }
}