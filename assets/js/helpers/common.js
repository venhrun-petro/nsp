
export function getScreenSize() {
  const styles = getComputedStyle(document.documentElement)
  return styles.getPropertyValue('--screen').trim();
}
