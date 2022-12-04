import styled from 'styled-components'
import Box from '@mui/material/Box'
import * as Switch from '@radix-ui/react-switch'

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['marine-blue']};
`

export const SideLeft = styled.div`
  width: 15rem;
  height: 416px;

  border-radius: 6px;

  background: ${(props) => props.theme.purple};
`

export const BoxContainer = styled(Box)`
  margin: 3.75rem;

  position: absolute;

  span {
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 4rem;

  & > span {
    margin: 0.5rem 0 2rem;
  }
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const ButtonItem = styled.button`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme['light-gray']};
  border-radius: 6px;

  padding: 1rem;

  background: ${(props) => props.theme.white};

  cursor: pointer;

  & .active,
  :hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme['purplish-blue']};
  }
`

const BUTTON_PROPS = {
  strawberry: 'strawberry-red',
  purplishBlue: 'purplish-blue',
  marineBlue: 'marine-blue',
} as const

type ButtonProps = {
  bgColor: keyof typeof BUTTON_PROPS
}

export const ButtonIcon = styled.span<ButtonProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  margin-bottom: 2rem;

  background: ${(props) => props.theme[BUTTON_PROPS[props.bgColor]]};
`

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  padding: 0.5rem 0;
  margin-top: 2rem;

  border-radius: 6px;

  background: ${(props) => props.theme.magnolia};
`

type selectedPlanTextProps = {
  variant: true | false
}

export const SelectedPlanMonthly = styled.span<selectedPlanTextProps>`
  font-weight: ${(props) => (props.variant === false ? 700 : 400)};
  color: ${(props) =>
    props.variant === false
      ? props.theme['marine-blue']
      : props.theme['cool-gray']};
`

export const SelectedPlanYearly = styled.span<selectedPlanTextProps>`
  font-weight: ${(props) => (props.variant === false ? 400 : 700)};
  color: ${(props) =>
    props.variant === true
      ? props.theme['marine-blue']
      : props.theme['cool-gray']};
`

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;

  background: ${(props) => props.theme['purple-light']};

  border-radius: 9999px;
  border: 0;

  position: relative;

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-dark']};
  }
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;

  width: 21px;
  height: 21px;

  background: ${(props) => props.theme.purple};

  border-radius: 9999px;

  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`

export const SideRightFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ButtonGoBack = styled.button`
  width: 25%;
  height: 2rem;

  border: 0;
  border-radius: 6px;

  margin-top: 4rem;

  color: ${(props) => props.theme.purple};
  background: transparent;

  &:hover {
    transition: color 0.2s ease;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ButtonNext = styled.button`
  width: 25%;
  height: 2rem;

  border: 0;
  border-radius: 6px;

  margin-top: 4rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple};

  &:hover {
    transition: background-color 0.2s ease;
    background: ${(props) => props.theme['purple-dark']};
  }
`
