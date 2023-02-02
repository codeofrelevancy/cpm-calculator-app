/**
 * Currency formatter
 */
const FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/**
 * Extract number from the given value
 *
 * @param any value
 * @return number
 */
function toNumber(value: any) {
  const number = parseFloat(value.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(number)) {
    return 0;
  }
  return number;
}

/**
 * Format currency from the given value
 *
 * @param any value
 * @return string
 */
function formatCurrency(value: any) {
  return FORMATTER.format(value);
}

export { toNumber, formatCurrency };
