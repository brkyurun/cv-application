const ContactInfo = ({ icon, data }) => {
  return (
    <p className="flex items-center ">
      {icon} {data}
    </p>
  );
};

export default ContactInfo;
