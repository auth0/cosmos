import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Table, Avatar } from '@auth0/cosmos'

const defaultItems = [
  {
    name: 'Harry Kane',
    goals: 6,
    assists: 0,
    country: '🇬🇧',
    image: 'https://twitter-avatar.now.sh/HKane'
  },
  {
    name: 'Romelu Lukaku',
    goals: 4,
    assists: 1,
    country: '🇧🇪',
    image: 'https://twitter-avatar.now.sh/Romelu_lukaku9'
  },
  {
    name: 'Antoine Griezmann',
    goals: 4,
    assists: 2,
    country: '🇫🇷',
    image: 'https://twitter-avatar.now.sh/AntoGriezmann'
  },
  {
    name: 'Ivan Perišić',
    goals: 3,
    assists: 1,
    country: '🇭🇷',
    image: 'https://twitter-avatar.now.sh/ivanperisic44'
  }
]

const tableFactory = ({ items = defaultItems, onRowClick = () => {}, wrapper = shallow } = {}) =>
  wrapper(
    <Table items={items} onRowClick={onRowClick}>
      <Table.Column field="image" width="50px">
        {item => <Avatar type="user" image={item.image} />}
      </Table.Column>
      <Table.Column field="name" title="Name" width="30%" sortable />
      <Table.Column field="country" title="Country" />
      <Table.Column field="goals" title="Goals" />
      <Table.Column field="assists" title="Assists" />
    </Table>
  )

describe('Table', () => {
  it('renders properly', () => {
    const wrapper = tableFactory()
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onRowClick', () => {
    const tableParams = { onRowClick: jest.fn(), wrapper: mount }
    const wrapper = tableFactory(tableParams)

    wrapper
      .find('tr')
      .last()
      .simulate('click')

    expect(tableParams.onRowClick).toHaveBeenCalledTimes(1)
  })

  it('provides automatic sorting', () => {
    const data = [
      { number: 1 },
      { number: 3 },
      { number: 5 },
      { number: 7 },
      { number: 8 },
      { number: 0 },
      { number: 2 },
      { number: 4 },
      { number: 6 },
      { number: 9 }
    ]

    const wrapper = mount(
      <Table items={data}>
        <Table.Column sortable field="number" title="Number" />
      </Table>
    )
    const tableItems = () => wrapper.find('td').map(x => x.text())

    const ascending = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    expect(tableItems()).toEqual(ascending)

    wrapper
      .find('th')
      .first()
      .simulate('click')

    const descending = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
    expect(tableItems()).toEqual(descending)
  })

  it('sorts with custom compare function', () => {
    const wrapper = mount(
      <Table items={defaultItems}>
        <Table.Column field="goals" title="Goals" sortable />
        <Table.Column field="assists" title="Assists" sortable />
        <Table.Column
          field="points"
          title="Points"
          sortable
          comparator={(a, b) => {
            return a.goals + a.assists - b.goals - b.assists
          }}
        >
          {item => item.goals + item.assists}
        </Table.Column>
      </Table>
    )

    const getItemsAtColumn = column =>
      wrapper
        .find('tr')
        .map(tr => tr.find('td').map(td => td.text())[column])
        .slice(1) // Remove the header (which is a <tr> as well)

    expect(getItemsAtColumn(0)).toEqual(['3', '4', '4', '6'])
    expect(getItemsAtColumn(1)).toEqual(['1', '1', '2', '0'])
    expect(getItemsAtColumn(2)).toEqual(['4', '5', '6', '6'])

    wrapper
      .find('th')
      .last()
      .simulate('click')

    expect(getItemsAtColumn(0)).toEqual(['3', '4', '6', '4'])
    expect(getItemsAtColumn(1)).toEqual(['1', '1', '0', '2'])
    expect(getItemsAtColumn(2)).toEqual(['4', '5', '6', '6'])
  })
})
