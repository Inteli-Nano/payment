import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { subscriptionHandle } from "./../../store/acitons/payment";
import { getUserInfo } from './../../store/acitons/auth';

import './style.scss'

const tiers = [
  {
    title: 'Free',
    price: 0,
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: 15,
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
  },
  {
    title: 'Enterprise',
    price: 30,
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
  },
]

const MembershipPage = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const auth = localStorage.getItem('auth');

  const handleMember = (price) => {
    price === 0 ? auth ? changeSubFree() : history('/login') : history(`/payment?price=${price}`)
  }
  const changeSubFree = () => {
    subscriptionHandle({email: auth, price: 0, mode: 0});
    dispatch(getUserInfo(auth))
    history('/myprofile');
  }
  return (
    <div>
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={5}>
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardContent>
                  <Box className="card-header">
                    <Typography component="h2" variant="h3">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6">/mo</Typography>
                  </Box>
                  <ul className="list">
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={(e) => {
                      handleMember(tier.price)
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default MembershipPage