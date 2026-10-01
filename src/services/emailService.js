import emailjs from 'emailjs-com';

export const sendEnquiryEmail = async (templateParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS environment variables are missing. Using mock submission.');
    // Mock submission for development if keys are not set
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, text: 'Mock Success' });
      }, 1500);
    });
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
