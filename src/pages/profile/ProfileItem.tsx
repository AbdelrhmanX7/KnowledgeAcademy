import { Button } from '@/UI';
import { ReactNode } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface ProfileItemProps {
  icon: ReactNode;
  title: string;
  value: string | number | undefined;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, title, value }) => {
  return (
    <div className='my-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4>
          {icon} {title}
        </h4>
        <h3 className='font text-base m-2'> {value}</h3>
      </div>
      <div>
        <Button>
          <EditOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProfileItem;
