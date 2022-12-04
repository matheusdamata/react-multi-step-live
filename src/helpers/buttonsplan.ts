type ButtonsPlanProps = {
  id: number
  title: string
  priceMo: number
  priceYr: number
  color: 'strawberry' | 'purplishBlue' | 'marineBlue'
}

export const buttonsplan = <ButtonsPlanProps[]>[
  {
    id: 1,
    title: 'Arcade',
    priceMo: 9,
    priceYr: 90,
    color: 'strawberry',
  },
  {
    id: 2,
    title: 'Advanced',
    priceMo: 12,
    priceYr: 120,
    color: 'purplishBlue',
  },
  {
    id: 3,
    title: 'Pro',
    priceMo: 15,
    priceYr: 150,
    color: 'marineBlue',
  },
]
