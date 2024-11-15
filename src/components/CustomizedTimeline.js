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

export default function CustomizedTimeline() {
  const experience = [
    {
      date: 'Feb 2023 - Present',
      image: stefanini,
      company: 'Stefanini',
      role: 'Software Developer I',
      description: [
        'Engineered user-friendly interfaces using React, TypeScript, CSS, and AWS services to provide real-time insights for efficient monitoring and optimization of Lambda function performance.',
        'Designed and implemented an intuitive platform for a LLM initiative and enhanced visual elements using React, TypeScript, CSS, and Material-UI. Incorporated account validation through Azure.',
        'Demonstrated proficiency in serverless architecture by implementing AWS Lambdas with Python and orchestrated them with Step Functions for efficient microservices.',
      ],
    },
    {
      date: 'May 2022 - Aug 2022',
      image: tableau,
      company: 'Tableau',
      role: 'Software Engineer Intern',
      description: [
        'Created automated CloudWatch dashboards through Terraform and designed detailed graphs in Tableau Cloud to optimize AWS SES events monitoring.',
        'Created tables, procedures, and tasks in Snowflake, incorporating integrations and external stages to extract data from AWS S3 bucket and efficiently export it to Tableau Cloud, thereby significantly improving debugging capabilities and streamlining data analysis processes.',
      ],
    },
    {
      date: 'Sep 2020 - Apr 2022',
      image: ttu,
      company: 'Texas Tech University',
      role: 'Undergraduate Student Researcher',
      description: [
        'Built a cost-efficient hand prosthetic using servo motors and Arduino Uno, integrated with Google AMR technology to control the hand by voice commands as a proof-of-concept.',
      ],
    },
    {
      date: 'Jan 2019 - Jul 2019',
      image: resource,
      company: 'Resource IT Solutions',
      role: 'Software Developer Intern',
      description: [
        'Debugged and enhanced API functionality in pair programming development of Movida Car Rental’s digital totem while also documenting the APIs for expanded resources, leveraging my expertise in Java, HTML and CSS.',
      ],
    },
  ];

  return (
    <Timeline position="alternate">
      {experience.map((item, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#EDEDED' }}>
              <img src={item.image} width={50} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" color="#FF69B4">
              {item.company}
            </Typography>
            <Typography color="#3A8FB7">{item.role}</Typography>
            {item.description.map((line, idx) => (
              <Typography key={idx}>{line}</Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
