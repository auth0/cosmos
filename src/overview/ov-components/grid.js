import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Col = styled.div`
  width: ${props => props.width || '50%'};
`

export { Row, Col }
