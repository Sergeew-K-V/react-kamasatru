import React from 'react'
import BuildUp from './BuildUp/BuildUp'
import Customer from './Customer/Customer'
import LandingTemplate from './LandingTemplate/LandingTemplate'
import PreviewForm from './PreviewForm/PreviewForm'
import Workflow from './Workflow/Workflow'

function Main() {
  return (
    <main className='main-content'>
      <LandingTemplate></LandingTemplate>
      <BuildUp></BuildUp>
      <Workflow></Workflow>
      <Customer></Customer>
      <PreviewForm></PreviewForm>
    </main>
  )
}

export default Main
