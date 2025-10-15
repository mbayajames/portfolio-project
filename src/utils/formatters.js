export const formatDate = (date, format = 'long') => {
  const options = {
    short: { year: 'numeric', month: 'short' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  };

  return new Date(date).toLocaleDateString('en-US', options[format] || options.long);
};

export const formatNumber = (number, decimals = 0) => {
  return Number(number).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const formatPercentage = (value, decimals = 0) => {
  return `${Number(value).toFixed(decimals)}%`;
};

export const truncateText = (text, length = 100, suffix = '...') => {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const capitalizeWords = (text) => {
  return text
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
};

export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
};