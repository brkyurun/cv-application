import {
  HiLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import ContactInfo from "./ContactInfo";

const CVPreview = ({ aboutSection, educationSection, experienceSection }) => {
  return (
    <div className="col-span-2 w-11/12 border-2 border-sky-800 bg-gray-50 text-center">
      <p className="pt-12 text-4xl font-bold">{`${aboutSection.firstName} ${aboutSection.lastName}`}</p>
      <p className="text-lg italic">{aboutSection.jobTitle}</p>
      <div className="flex items-center justify-center gap-16 pt-4">
        <ContactInfo
          icon={<HiLocationMarker className="mr-1" />}
          data={aboutSection.address}
        />
        <ContactInfo
          icon={<HiOutlinePhone className="mr-1" />}
          data={aboutSection.phone}
        />
        <ContactInfo
          icon={<HiOutlineMail className="mr-1" />}
          data={aboutSection.mailAddress}
        />
      </div>
    </div>
  );
};

export default CVPreview;
