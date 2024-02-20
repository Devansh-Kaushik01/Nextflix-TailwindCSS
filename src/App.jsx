import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingRoute from './screens/routes/LandingRoute'
import SignIn from './screens/pages/auth/signIn/SignIn'
import ForgotEmail from './screens/pages/auth/forgotEmail/ForgotEmail'
import AuthRoute from './screens/routes/AuthRoute'
import ForgotEmailSMS from './screens/pages/auth/forgotEmailSMS/ForgotEmailSMS'
import ForgotForm from './screens/pages/auth/forgotForm/ForgotForm'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingRoute />}/>
        <Route path='/in/login' element={<SignIn />} />
       
        <Route path='/auth' element={<AuthRoute/>}>
          <Route path='/auth/LoginHelp' element={<ForgotEmail />} />
          <Route path='/auth/LoginHelpSMS' element={<ForgotEmailSMS />} />
          <Route path='/auth/forgotform' element={<ForgotForm/>} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
