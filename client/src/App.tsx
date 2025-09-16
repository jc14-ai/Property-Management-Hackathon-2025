import { useState } from 'react';

import {Routes, Route} from 'react-router-dom';

import LandingPage from './features/landing/LandingPage.tsx';
import TenantSignIn from './features/auth/pages/TenantSignIn.tsx';
import ConciergeSignIn from './features/auth/pages/ConciergeSignIn.tsx';
import Tenant from './features/accounts/Tenant.tsx';
import Concierge from './features/accounts/Concierge.tsx';

export default function App() {
  return <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin/tenant' element={<TenantSignIn/>}/>
      <Route path='/signin/concierge' element={<ConciergeSignIn/>}/>
      <Route path='/account/tenant/:id' element={<Tenant/>}/>
      <Route path='/account/concierge/:id' element={<Concierge/>}/>
    </Routes>
  </>
}
