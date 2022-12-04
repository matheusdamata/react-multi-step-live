import { useState } from 'react'

import {
  BoxContainer,
  ButtonGoBack,
  ButtonIcon,
  ButtonItem,
  ButtonNext,
  ButtonsContainer,
  Container,
  SelectedPlanMonthly,
  SelectedPlanYearly,
  SideLeft,
  SideRight,
  SideRightFooter,
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
} from './styles'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { buttonsplan } from '../../helpers/buttonsplan'

const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

export function Home() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <SideLeft>
        <BoxContainer sx={{ maxWidth: 360 }}>
          <Stepper activeStep={1} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </BoxContainer>
      </SideLeft>
      <SideRight>
        <h1>Select your plan</h1>
        <span>You have the option of montlhy or yearly billing.</span>

        <ButtonsContainer>
          {buttonsplan.map((button) => (
            <ButtonItem key={button.id}>
              <ButtonIcon bgColor={button.color}></ButtonIcon>
              <strong>{button.title}</strong>
              {isChecked ? (
                <span>${button.priceYr}/yr</span>
              ) : (
                <span>${button.priceMo}/mo</span>
              )}
            </ButtonItem>
          ))}
        </ButtonsContainer>

        <SwitchContainer>
          <SelectedPlanMonthly variant={isChecked}>Monthly</SelectedPlanMonthly>
          <SwitchRoot
            id="airplane-mode"
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          >
            <SwitchThumb />
          </SwitchRoot>
          <SelectedPlanYearly variant={isChecked}>Yearly</SelectedPlanYearly>
        </SwitchContainer>

        <SideRightFooter>
          <ButtonGoBack>Go Back</ButtonGoBack>
          <ButtonNext>Next Step</ButtonNext>
        </SideRightFooter>
      </SideRight>
    </Container>
  )
}
