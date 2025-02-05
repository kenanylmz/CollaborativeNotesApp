export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: number;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait) as unknown as number;
  };
};

export const validateNote = (content: string): boolean => {
  return content.trim().length > 0;
};

export const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
