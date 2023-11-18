import { Button } from '@mui/material';

const ButtonComponent = ({variant='text', children, sx, ...rest }) => {
  return (
    <Button variant={variant} sx={sx} {...rest} >
      {children}
    </Button>
  );
}

export default ButtonComponent;