export function toCamelCase(input: string): string {
  return (
    input
      // Remove everything except letters and numbers, replace with space
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      // Trim extra spaces
      .trim()
      // Split into words
      .split(/\s+/)
      // Transform into camelCase
      .map((word, index) => {
        const lower = word.toLowerCase();
        if (index === 0) return lower;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join('')
  );
}
