import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: { confirmed, deaths, recovered, lastUpdate }}) => {
  if(!confirmed){
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={2} >
        <Grid item component={Card} spacing={3} xs={12} md={3} justifyContent='center' className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'><CountUp start={0} end={confirmed.value} separator="," duration={2} className={styles.infectedText}/> </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of Active Cases of Covid-19</Typography>
          </CardContent>
        </Grid>


        <Grid item component={Card} spacing={3} xs={12} md={3} justifyContent='center' className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'><CountUp start={0} end={recovered.value} separator="," duration={2} className={styles.recoveredText}/> </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of Recovered Cases of Covid-19</Typography>
          </CardContent>
        </Grid>


        <Grid item component={Card} spacing={3} xs={12} md={3} justifyContent='center' className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'><CountUp start={0} end={deaths.value} separator="," duration={2} className={styles.deathText}/> </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of Deaths of Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards