import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Spacer size={14} />
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const LeftColumn = styled.div`
  max-width: 250px;
  min-width: 250px;
`

const MainColumn = styled.div``

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

const SelectWrapper = styled.div`
  label {
    display: flex;
    align-items: center;
  }
`

export default ShoeIndex
