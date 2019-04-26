import styled from 'styled-components'

import { Example } from './example'

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 -0.5rem;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  margin: 0 0.5rem;
  width: ${(props) => props.width || '50%'};
  ${Example} {
    flex-grow: 1;
  }
`

export { Row, Col }
