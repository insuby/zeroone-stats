import { CircularProgress } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';

export const Spinner = (props: CircularProgressProps) => {
  return <CircularProgress sx={{ circle: { stroke: 'rgba(95, 107, 124, 0.8)' } }} {...props} />;
};