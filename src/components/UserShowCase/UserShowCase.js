import './UserShowCase.scss';
import Box from '@mui/material/Box';
import UserList from '../../assets/images/laptop-landing-2.png';

const UserShowCase = () => {
  return ( 
    <>
      <Box className="user-case">
        <Box className="text">
          Loved by <span>20,000+</span> users around the world
        </Box>

        <Box>
          <img src={UserList} width="336" alt="Users" />
        </Box>
      </Box>
    </>
  )
}
export default UserShowCase;