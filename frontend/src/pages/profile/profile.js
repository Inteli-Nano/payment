import * as React from 'react'
import { Button, Grid, Box, Typography, Paper } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { profileAction } from '../../store/acitons/auth'
import './../../libs/toast.scss'
const Profile = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const profileInfo = useSelector((state) => state.auth.user)
  const [profile, setProfile] = React.useState({
    _id: '',
    name: '',
    email: '',
    password: '',
  })
  React.useEffect(() => {
    setProfile({
      _id: profileInfo._id,
      name: profileInfo.name,
      email: profileInfo.email,
    })
  }, [profileInfo])
  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== profile.password) {
        return false
      }
      return true
    })
    ValidatorForm.addValidationRule('isLength', (value) => {
      if ((value.length !== 0 && value.length < 3) || value.length > 30) {
        return false
      }
      return true
    })
  }, [profile])
  React.useEffect(() => {
    ValidatorForm.removeValidationRule('isPasswordMatch')
  }, [])

  const onCancel = () => {
    setProfile({
      ...profile,
      _id: profileInfo._id,
      email: profileInfo.email,
      password: profileInfo.password,
      name: profileInfo.name,
    })
  }
  const handleSub = () => {
    history('/membership')
  }
  return (
    <Grid
      component={Paper}
      sx={{ backgroundColor: '#f5f7fa', padding: '20px' }}
    >
      <Box
        sx={{
          paddingTop: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Edit Profile
        </Typography>
        <ValidatorForm
          onSubmit={() => {
            dispatch(profileAction(profile))
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                validators={['required', 'isLength']}
                errorMessages={[
                  'This field is required!',
                  'The name is between 3 and 30 charactes',
                ]}
                autoComplete="given-name"
                name="name"
                value={profile.name}
                onChange={onChange}
                fullWidth
                label="*Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={['required', 'isEmail']}
                errorMessages={[
                  'This field is required!',
                  'Input the email correctly',
                ]}
                fullWidth
                label="Email Address"
                name="email"
                value={profile.email}
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              color="success"
              variant="contained"
              sx={{ mt: 3, mr: 2, width: '20%' }}
              onClick={(e) => handleSub()}
            >
              Change subscription
            </Button>
            <Button
              type="submit"
              color="success"
              variant="contained"
              sx={{ mt: 3, mr: 2, width: '10%' }}
            >
              Save
            </Button>

            <Button
              onClick={onCancel}
              variant="contained"
              color="secondary"
              sx={{ mt: 3, width: '10%' }}
            >
              Cancel
            </Button>
          </Grid>
        </ValidatorForm>
      </Box>
    </Grid>
  )
}
export default Profile
