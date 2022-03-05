import react from 'react'
import BuildUp from './BuildUp/BuildUp'
import Customer from './Customer/Customer'
import LandingTemplate from './LandingTemplate/LandingTemplate'
import Workflow from './Workflow/Workflow'

function Main() {
  return (
    <main className='main-content'>
      <LandingTemplate></LandingTemplate>
      <BuildUp></BuildUp>
      <Workflow></Workflow>
      <Customer></Customer>
    </main>
  )
}

export default Main
