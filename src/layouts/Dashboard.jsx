import React from 'react'
import Categories from './CategoriesHome'
import { Grid } from 'semantic-ui-react'
import Employer from '../pages/Employer'
import JobAdvertisement from '../pages/JobAdvertisement'
import JobSeeker from '../pages/JobSeeker'
import Cv from '../pages/cv/Cv'
import School from '../pages/cv/School'
import JobPosition from '../pages/JobPosition'
import { Route, Routes } from 'react-router-dom'
import JobAdvertisementPost from '../pages/JobAdvertisementPost'
import SignedUp from '../pages/SignedUp'
import Home from '../pages/Home'

export default function Dashboard() {
  return (
    <div>
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={10}>
            <Routes>
              <Route path='' element={<SignedUp />} />
              <Route path='is-arayanlar' element={<JobSeeker />} />
              <Route path='is-ilanlari' element={<JobAdvertisement />} />
              <Route path='is-ilani-ver' element={<JobAdvertisementPost />} />
              <Route path='kayit-ol' element={<SignedUp />} />
              <Route path='ekmek-kapisi' element={<Home />} />
              <Route path='ozgecmis-bilgileri' element={<Cv />} />              
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
