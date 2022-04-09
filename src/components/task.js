import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';



export default function Task(props) {
  const dispatch = useDispatch()
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ToDo
        </Typography>
        <Typography variant="h5" component="div">
          {props.toDo}
        </Typography>
      </CardContent>
      <CardActions>
      <Checkbox color="secondary" label="is Done"/>
        {/* onChange={modifier(props.id)} */}
      </CardActions>
    </Card>
  );
}