export const formatDate = (date) => new Date(date).toLocaleDateString();
export const formatCurrency = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
export const truncateText = (text, maxLength) => text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
export const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
