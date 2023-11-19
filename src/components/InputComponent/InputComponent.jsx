import {OutlinedInput, InputAdornment} from '@mui/material'
const InputComponent = ({placeholder, icon}) => {
  return (
    <OutlinedInput
      placeholder={placeholder}
      fullWidth
      endAdornment={
        <InputAdornment position="end">
          {icon}
        </InputAdornment>
          }
          sx={{ backgroundColor:'#fff', height:'37px', width: '283px' }}
        />
  );
};

export default InputComponent;