
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function RangeSlider({value, setValue, money, handleSetRange}) {


  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleSetRange(money, newValue)
  };


  return (
    <Box sx={{ width: '100%', padding: '0 10px' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        min={0}
        max={200000}
        sx={{
          color: 'primary.main', 
          '& .MuiSlider-thumb': {
            backgroundColor: '#009688', 
            '&:hover': {
              boxShadow: '0px 0px 18px 13px #0096873d',
            },
            '&:hover': {
              boxShadow: '0px 0px 18px 3px #0096873d',
            },
            '&.Mui-focusVisible': {
              boxShadow: '0px 0px 18px 13px #0096873d',
            }
          },
          '& .MuiSlider-track': {
            backgroundColor: '#009688', 
            border: '1px solid #009688'
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#00968782', 
          },
        }}
      />
    </Box>
  );

}