// Google Analytics integration
export const initGA = () => {
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
  
  if (trackingId) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId);
  }
};

export const trackPageView = (page) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
      page_path: page
    });
  }
};

export const trackEvent = (category, action, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackButtonClick = (buttonName) => {
  trackEvent('Button', 'click', buttonName);
};

export const trackFormSubmit = (formName) => {
  trackEvent('Form', 'submit', formName);
};

export const trackProjectView = (projectId) => {
  trackEvent('Project', 'view', projectId);
};

export const trackDownload = (fileName) => {
  trackEvent('Download', 'click', fileName);
};