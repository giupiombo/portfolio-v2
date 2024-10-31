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

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Feb 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={stefanini} width={50} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Stefanini
          </Typography>
          <Typography>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ante laoreet
            augue dapibus aenean bibendum vel ridiculus quisque vivamus. Iaculis
            est venenatis per; iaculis conubia inceptos elementum. Mollis orci
            metus sapien ex ultrices ac. Iaculis erat ad imperdiet maecenas
            felis. Nulla porta augue; pretium mi arcu cras.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          May 2022 - Aug 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={tableau} width={50} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Tableau
          </Typography>
          <Typography>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ante laoreet
            augue dapibus aenean bibendum vel ridiculus quisque vivamus. Iaculis
            est venenatis per; iaculis conubia inceptos elementum. Mollis orci
            metus sapien ex ultrices ac. Iaculis erat ad imperdiet maecenas
            felis. Nulla porta augue; pretium mi arcu cras.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep 2020 - Apr 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={ttu} width={50} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            TTU
          </Typography>
          <Typography>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ante laoreet
            augue dapibus aenean bibendum vel ridiculus quisque vivamus. Iaculis
            est venenatis per; iaculis conubia inceptos elementum. Mollis orci
            metus sapien ex ultrices ac. Iaculis erat ad imperdiet maecenas
            felis. Nulla porta augue; pretium mi arcu cras.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          May 2022 - Aug 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={tableau} width={50} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Tableau
          </Typography>
          <Typography>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ante laoreet
            augue dapibus aenean bibendum vel ridiculus quisque vivamus. Iaculis
            est venenatis per; iaculis conubia inceptos elementum. Mollis orci
            metus sapien ex ultrices ac. Iaculis erat ad imperdiet maecenas
            felis. Nulla porta augue; pretium mi arcu cras.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
