import {
  HiLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import ContactInfo from "./ContactInfo";

const AboutPreview = ({ aboutSection }) => {
  return (
    <div>
      <p className="pt-12 text-4xl font-bold">{`${aboutSection.firstName} ${aboutSection.lastName}`}</p>
      <p className="text-lg italic">{aboutSection.jobTitle}</p>
      <div className="flex items-center justify-center gap-16 pt-4">
        {aboutSection.address && (
          <ContactInfo
            icon={<HiLocationMarker className="mr-1" />}
            data={aboutSection.address}
          />
        )}
        {aboutSection.phone && (
          <ContactInfo
            icon={<HiOutlinePhone className="mr-1" />}
            data={aboutSection.phone}
          />
        )}
        {aboutSection.mailAddress && (
          <ContactInfo
            icon={<HiOutlineMail className="mr-1" />}
            data={aboutSection.mailAddress}
          />
        )}
      </div>
      <p className="pt-6 text-left">{aboutSection.about}</p>
    </div>
  );
};

export default AboutPreview;
