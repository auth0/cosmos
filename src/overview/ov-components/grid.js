import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 -0.5rem;
`

const Col = styled.div`
  flex: 1 0 0;
  margin: 0 0.5rem;
  width: ${props => props.width || '50%'};
`

export { Row, Col }
