import Container from "@mui/material/Container";
import { useReadLocalStorage } from "usehooks-ts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";

const Profile = () => {
  const user = useReadLocalStorage<any>("user");

  return (
    <div className="mt-[50px]" >
      <Container
        maxWidth="md"
        className="gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-[90%]"
      >
        <div className="flex items-center justify-center">
          <div className="gap-7 mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center">
            <h3>ملف المستخدم </h3>
            <AccountCircleIcon className="m-2 text-blue-600" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="font text-base mb-3"> {user?.username}</h3>
          <hr />
          <div>
            <h3 className="font text-base ">
              {user?.phone}
              <PhoneIcon className="m-2 text-blue-600" />
            </h3>
            <h3 className="font mb-3">
              {user?.email}
              <AlternateEmailTwoToneIcon className="m-2 text-blue-600" />
            </h3>
            <hr />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;