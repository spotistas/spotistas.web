import { Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { Profile } from '../pages/Profile'
import { Settings } from '../pages/Settings'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
