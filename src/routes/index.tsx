import {
  HomePage,
  ProjectsPage,
  ExperienciesPage,
  CurriculumPage,
} from '@/pages'

import { Route, Routes } from 'react-router-dom'
import { browserHistory } from 'react-router'

export function AppRoutes() {
  return (
    <Routes history={browserHistory}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experiences" element={<ExperienciesPage />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
    </Routes>
  )
}
