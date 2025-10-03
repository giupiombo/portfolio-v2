import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import stefanini from '../images/stefanini.png';
import tableau from '../images/tableau.svg';
import ttu from '../images/ttu.png';
import resource from '../images/resource.png';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CustomizedTimeline({ experience }) {
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile screen

  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", Arial, sans-serif', // Set global font to Montserrat
    },
  });

  const imageMap = {
    stefanini,
    tableau,
    ttu,
    resource,
  };

  return (
    <ThemeProvider theme={theme}>
      <Timeline position={isMobile ? 'right' : 'alternate'}>
        {experience.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              sx={isMobile ? { display: 'none' } : { m: 'auto 0' }}
              variant="body2"
              style={{ fontWeight: 'bolder' }}
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#EDEDED' }}>
                <img src={imageMap[item.image]} width={50} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                color="#FF69B4"
                style={{ fontWeight: 'bolder' }}
              >
                {item.company}
              </Typography>
              {item.roles.map((role, idx) => (
                <div key={idx}>
                  <Typography color="#3A8FB7" style={{ fontWeight: 'bolder' }}>
                    {role.position}
                  </Typography>
                  {role.date ? (
                    <Typography
                      style={{ fontWeight: 'bolder', marginBottom: '0.5rem' }}
                    >
                      {role.date}
                    </Typography>
                  ) : (
                    isMobile && (
                      <Typography
                        style={{ fontWeight: 'bolder', marginBottom: '0.5rem' }}
                      >
                        {item.date}
                      </Typography>
                    )
                  )}
                  {role.description.map((line, idx) => (
                    <Typography
                      key={idx}
                      style={{ marginBottom: '0.5rem', textAlign: 'justify' }}
                    >
                      {line}
                    </Typography>
                  ))}
                  <p />
                </div>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
}
