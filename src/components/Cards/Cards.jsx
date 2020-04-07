import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = (props) => {
  const { data: {confirmed, recovered, deaths, lastUpdate }} = props;

  if(!confirmed) {
    return 'Loading...';
  }

  const className = (term) => {
    return cx(styles.card, {
      [styles.infected]: term === 'infected',
      [styles.recovered]: term === 'recovered',
      [styles.deaths]: term === 'deaths',
    });
  };

  return (
   <div className={styles.container}>
     <Grid container spacing={3} justify="center">
      <Grid item component={Card} xs={12} md={3} className={className('infected')}>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        <Typography variant="h6">
          <CountUp 
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
          />
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Active Cases on COVID-19</Typography>
      </Grid>

      <Grid item component={Card} xs={12} md={3} className={className('recovered')}>
        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
        <Typography variant="h6">
             <CountUp 
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
          />
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
      </Grid>

      <Grid item component={Card} xs={12} md={3} className={className('deaths')}>
        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
        <Typography variant="h6">
             <CountUp 
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
          />
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
      </Grid>
     </Grid>
   </div>
  );
};

export default Cards;
