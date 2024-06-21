import React from 'react';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { userResult } from '../utils/constants';
// Example data for the charts
const data = [
  { name: 'Test 1', score: 80 },
  { name: 'Test 2', score: 90 },
  { name: 'Test 3', score: 70 },
  { name: 'Test 4', score: 85 },
];

const comparisonData = [
  { name: 'You', value: 85 },
  { name: 'Others', value: 75 },
];

const COLORS = ['#0088FE', '#FF8042'];



const Result = ({ theme = 'light' }) => {
  const { index } = useParams();
  const imgUrl = userResult[index]?.imgUrl || '';

  return (
    <Stack
      sx={{
        direction: 'vertical',
        display: {
          xs: 'auto',
          md: 'block',
        },
        height: '100vh',
        backgroundColor: theme === 'dark' ? '#2B2C40' : '#f6f6f6',
        color: theme === 'dark' ? '#f6f6f6' : 'black',
      }}
    >
      <Container>
        <Paper elevation={3} sx={{ padding: '10px', backgroundColor: theme === 'dark' ? '#2B2C40' : '#fff' }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              bgcolor: theme === 'dark' ? '#2B2C40' : '#fff',
              color: theme === 'dark' ? '#DBDBEB' : 'black',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            Results and Analysis
          </Typography>
        </Paper>
        <Stack alignItems="center" mt={2}>
          {imgUrl && (
            <img
              src={imgUrl}
              alt={`Result image ${index}`}
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          )}
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={4}>
          <Box>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ color: theme === 'dark' ? '#DBDBEB' : 'black' }}
            >
              Performance Chart
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </Box>
          <Box>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ color: theme === 'dark' ? '#DBDBEB' : 'black' }}
            >
              Comparison Chart
            </Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={comparisonData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Result;
