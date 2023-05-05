import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import { ATL, BKN, BOS, CHA, CHI, CLE, DAL,DEN, DET,GSW, HOU, IND, LAC, LAL,MEM, MIA,MIL,MIN,NOP,NYK,OKC,ORL,PHI,PHX,POR,SAC,SAS,TOR,UTA,WAS} from 'react-nba-logos';

export default function ControlledOpenSelect() {
    const [checked, setChecked] = React.useState(false);

    const teams = [
        {
          value: 'ATL',
          label: <ATL/>,
        },
        {
          value: 'BKN',
          label: <BKN/>,
        },
        {
          value: 'BOS',
          label: <BOS/>,
        },
        {
          value: 'CHA',
          label: <CHA/>,
        },
        {
            value: 'CHI',
            label: <CHI/>,
        },
        {
            value: 'CLE',
            label: <CLE/>,
        },
        {
            value: 'DAL',
            label: <DAL/>,
        },
        {
            value: 'DEN',
            label: <DEN/>,
        },
        {
            value: 'DET',
            label: <DET/>,
        },
        {
            value: 'GSW',
            label: <GSW/>,
        },
        {
            value: 'HOU',
            label: <HOU/>,
        },
        {
            value: 'IND',
            label: <IND/>,
        },
        {
            value: 'LAC',
            label: <LAC/>,
        },
        {
            value: 'LAL',
            label: <LAL/>,
        },
        {
            value: 'MEM',
            label: <MEM/>,
        },
        {
            value: 'MIA',
            label: <MIA/>,
        },
        {
            value: 'MIL',
            label: <MIL/>,
        },
        {
            value: 'MIN',
            label: <MIN/>,
        },
        {
            value: 'NOP',
            label: <NOP/>,
        },
        {
            value: 'NYK',
            label:  <NYK/>,
        },
        {
            value: 'OKC',
            label: <OKC/>,
        },
        {
            value: 'ORL',
            label: <ORL/>,
        },
        {
            value: 'PHI',
            label: <PHI/>,
        },
        {
            value: 'PHX',
            label: <PHX/>,
        },
        {
            value: 'POR',
            label: <POR/>,
        },
        {
            value: 'SAC',
            label: <SAC/>,
        },
        {
            value: 'SAS',
            label: <SAS/>,
        },
        {
            value: 'TOR',
            label: <TOR/>,
        },
        {
            value: 'UTA',
            label: <UTA/>,
        },
        {
            value: 'WAS',
            label: <WAS/>,
        },
      ];

      const icon = (
        <Paper sx={{ m: 1 }} elevation={4}>
          <Box component="svg" sx={{ width: 100, height: 200 }}>
            <GSW/>
          </Box>
        </Paper>
      );

      const handleChange = () => {
        setChecked((prev) => !prev);
      };



    return (
        <div>
            <Box sx={{
                width: 1000,
                height: 400,
                backgroundColor: '#778196',
                borderRadius: '10px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                boxShadow: 5,
                padding: '20px',
                pt: '40px',
                
            }}>
                <Stack spacing={6} direction="row">
                    <TextField
                    id="filled-select-team"
                    select
                    label="Select"
                    defaultValue="GSW"
                    helperText="TEAM 1"
                    variant="filled"
                    >
                    {teams.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>

                    <Typography variant="h2" sx={{color: '#282c34'}}>
                        vs.
                    </Typography>

                    <TextField
                    id="filled-select-team"
                    select
                    label="Select"
                    defaultValue="LAL"
                    helperText="TEAM 2"
                    variant="filled"
                    >
                    {teams.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>

                </Stack>
                    <Button 
                    variant="contained" 
                    size="large" 
                    sx={{margin: '15px', mt: '40px', ml: '40px'}}
                    onClick={handleChange}
                    >
                        Results
                    </Button>
                <Stack spacing={2} direction='column'>
                    <Typography variant="h5" sx={{color: '#282c34'}}>
                        Predicted Winner:
                    </Typography>
                    <Zoom in={checked}>{icon}</Zoom>
                </Stack>
            </Box>
        </div>
    );
}