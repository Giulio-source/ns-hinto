export function isValidEmail(value: string) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(value);
}

export function isValidName(str: string) {
  /**
   * Allowed values:
   * - Any letter, including accented ones
   * - Apostrophe: '
   * - Hypen: -
   * - Spaces
   */
  return /^[A-Za-zÀ-ÿ\s'-]*$/.test(str);
}

export function isValidTelephone(value: string) {
  return /^\+?[\d ]*$/.test(value);
}

export function shuffleArray<T>(array: Array<T>): Array<T> {
  const newArray = array.slice(); // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
