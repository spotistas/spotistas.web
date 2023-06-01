import { Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { Me } from '../pages/Profile'
// import { Settings } from '../pages/Settings'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Me />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
