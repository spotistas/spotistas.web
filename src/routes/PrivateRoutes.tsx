import { Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { Home } from '../pages/Home'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
