/**
 * Computes the desired range for data in the x demension taking theme margins
 * into acount
 */
export function getXRange(width: number, theme: Theme): number[] {
  return [0 + theme.margin.left, width - theme.margin.right];
}

/**
 * Computes the desired range for data in the y demension taking theme margins
 * into acount
 */
export function getYRange(height: number, theme: Theme): number[] {
  return [0 + theme.margin.top, height - theme.margin.bottom];
}
