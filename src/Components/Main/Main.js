import React from 'react'
import BuildUp from './BuildUp/BuildUp'
import Customer from './Customer/Customer'
import LandingTemplate from './LandingTemplate/LandingTemplate'
import PreviewForm from './PreviewForm/PreviewForm'
import Workflow from './Workflow/Workflow'

function Main(props) {
  return (
    <main className='main-content'>
      <LandingTemplate></LandingTemplate>
      <BuildUp buildUpProps={props.main.buildUp}></BuildUp>
      <Workflow workflowProps={props.main.workflow}></Workflow>
      <Customer customerProps={props.main.customer}></Customer>
      <PreviewForm formProps={props.main.previewForm}></PreviewForm>
    </main>
  )
}

export default Main
