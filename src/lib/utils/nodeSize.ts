export function size(node: Element, cb?: (width: number, height: number) => void) {
    const resizeObserver = new ResizeObserver(([entry]) => {
        const contentWidth = entry.contentRect.width
        const contentHeight = entry.contentRect.height
        cb?.(contentWidth, contentHeight)
    })
    resizeObserver.observe(node)
    return {
        destroy() {
            resizeObserver.disconnect()
        }
    }
}