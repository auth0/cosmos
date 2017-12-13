import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  width: ${props => props.width || '45%'};
`

export { Grid, Column }
