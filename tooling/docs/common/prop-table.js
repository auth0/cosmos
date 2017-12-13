import React from 'react'
import styled from 'styled-components'
import getDefaultProps from './default-props'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Header = styled.div`
  font-size: 21px;
  padding: 5px;
  border-bottom: 1px solid #eee;
`

const Row = styled.div`padding: 20px 0 20px 20px;`

const Cell = styled.div`
  display: inline-block;
  width: ${props => (props.width ? props.width : '25%')};
  text-align: ${props => (props.right ? 'right' : 'left')};
  float: ${props => (props.right ? 'right' : 'none')};
  vertical-align: top;
`

const Type = styled.span`
  display: inline-block;
  font-size: 12px;
  font-family: 'Droid Sans Mono', sans-serif;
  background: #deebff;
  color: #0747a6;
  padding: 2px 5px;
  border-radius: 3px;
  margin-left: 5px;
`

const Option = styled.div`
  display: inline-block;
  min-width: 100px;
  transition: color 0.5s;
  cursor: pointer;
  padding: 3px;
  text-align: center;
  background: ${props => (props.selected ? '#deebff' : '#f1f1f1')};
  color: ${props => (props.selected ? '#0747a6' : '#333')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
`

const Options = styled.div`
  float: right;
  & ${Option} {
    border-right: 1px solid #d8d8d8;
  }
  ${Option}:first-child {
    border-radius: 2px 0 0 2px;
  }
  & ${Option}:last-child {
    border-right: none;
    border-radius: 0 2px 2px 0;
  }
`

const Required = styled.span`
  color: #ff0000;
  &::after {
    content: '*';
  }
`

class PropTable extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    getDefaultProps(props.list).map(prop => (state[prop.name] = prop.value))
    this.state = state
  }
  onSelect(event) {
    const key = event.target.getAttribute('data-key')
    let value = event.target.getAttribute('data-value')
    this.setState(prevState => {
      const newState = { ...prevState }
      newState[key] = value
      this.props.onPropsChanged(newState)
      return newState
    })
  }

  render() {
    return (
      <Table>
        <Header>Props</Header>
        <br />
        {this.props.list.map((prop, index) =>
          <Row key={index}>
            <Cell width="25%">
              {prop.required ? <Required /> : null}
              {prop.name}
              <Type>
                {prop.format}
              </Type>
            </Cell>
            <Cell width="26%">
              {prop.description}
            </Cell>

            <Cell width="45%" right>
              <Options>
                {prop.options &&
                  prop.options.map((option, index) =>
                    <Option
                      key={index}
                      data-key={prop.name}
                      data-value={option.value}
                      selected={this.state[prop.name] === option.value}
                      onClick={this.onSelect.bind(this)}
                    >
                      {option.name}
                    </Option>
                  )}
              </Options>
            </Cell>
          </Row>
        )}
      </Table>
    )
  }
}

export default PropTable
