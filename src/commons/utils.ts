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

