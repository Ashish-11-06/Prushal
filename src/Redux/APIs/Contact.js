
import axiosInstance from "./axiosInstance";

const ContactApi = {
  sendMessage: (data) => {
    return axiosInstance.post(`/contact/form`, data); 
  },
};

export default ContactApi;
