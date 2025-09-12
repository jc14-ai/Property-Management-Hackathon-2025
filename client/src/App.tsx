import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'

import LandingPage from './features/landing/LandingPage.tsx'
import TenantSignIn from './features/auth/pages/TenantSignIn.tsx'
import ConciergeSignIn from './features/auth/pages/ConciergeSignIn.tsx'

export default function App() {
  return <>
  <LandingPage/>
  <Routes>
    <Route path='/signin/tenant' element={<TenantSignIn/>}/>
    <Route path='/signin/concierge' element={<ConciergeSignIn/>}/>
  </Routes>
  </>
}
