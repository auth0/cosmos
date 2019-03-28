import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Avatar, AvatarBlock, Table, EmptyState, Button } from '@auth0/cosmos'

const items = [
  {
    name: 'Isaac Asimov',
    born: 1920,
    died: 1992,
    image:
      'data:image/jpeg;base64,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'
  },
  {
    name: 'Ray Bradbury',
    born: 1920,
    died: 2012,
    image:
      'data:image/jpeg;base64,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'
  },
  {
    name: 'Philip K. Dick',
    born: 1928,
    died: 1982,
    image:
      'data:image/jpeg;base64,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'
  },
  {
    name: 'George Orwell',
    born: 1903,
    died: 1950,
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xAA2EAACAQMDAwIDBgUEAwAAAAABAgMABBEFEiEGMUETUQciYRQyUnGBwSNCkbHRFaHh8BYkY//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ACaXkMN2Wz3JrNviNqDvew2Qb5I13uB+I9v9v71oV1KI4pJHI2oCx57Viuo3T39/PdSnLyuW/L2rmqKTXhOac2ZIC8k+B5oj0TpR74jex3H+QfvWgNocL9Qc042GyBnOa0e1+E11ckbrpYx3yeR+VWNl8JLlZUaWdCoPzfUeKajM4oC7KGwOx5phodsYGM7jkn61v2nfDjT41T7biUqBlQOD+tWcvQXT0rEvZA5HbcaaPmWdMYCjzXEblDX03L8PumZGBOnKMDHDGhrqD4S6bcRs+lMYJO+DyKaMOMoK/saa70U9RdB6tosT3DRGSFfvMo7D3oUX5ThqB1S0bhlOGHIrQOleol1CNbS6CrcgYDfjrPw6e2TTsZaORJI2KspypHig2CUEJx7YNKqnRdW/1PSUmYqZR8rg+CKVRXPX91Lb6MfSO31JAjMPbmswzg1r/UWjHWtMktonCygh4yRxn2rIp43gleKQYkjYqw9iKC16ethPdGVxlV7Z9603plI4trcbjQBoHyWsWPJOfrRvpUjIyZPngUGoWTAwqARnHip6Scd6HNHuC0AwmD71bRyE4J7+agsQ+fNegkmo6uBjBpxXzyKoeBrhz9a4LEVyXJFAxeqklvIsihlKkEEd6+YtbsVi1m6jtxsiErbc+Oe1fTN5JthfHfH9KwbrC1FveXBGG9QksB7570gDrhdjjKYrvj0lx4phtykozZBPBzT28+iBVBB0PJKJLtVx6e0E596VWHSdstvorTt96Z89+RjgUqg0G34fORke9Y71nCsHVWpRoML624fqAf3rWkfk0BfFLTYoL621OJjm6G2RfG5RwR+lQV+gMWgiU/Xn2o/0i3ZlV2XsPPtQB0zF/HjJOQFJ/KjmTqmzsbbaAHZBjNUGel3Cx/ITRAmDGGBFYmnxFtY5ivpSBSfPOKO9C6utdRsFeB95PcHxUBmTgg0+rihW81Z7YeqxbBXIrPtW+LdxDNJDbWyHGQWJqjbNwPmuXIArBrT4qaiUdJ0Ownh17ij3pTrePUIo4bhgWIADZ70BTdsSHT3BArDuubiWPVXAXBxz+dbNcXiO6NGchxyfagj4j6VFPapfxoDIp2sfcUgxyRjJLnGB7VaaRape3tratyruAcd8VzPaoFdsYxyOO9Enw/08SyS6g+D6PyKPqR3qottR9O0iEUCKkaDCqKVc6suc5J7+KVRRNGCMnGPAoY+KMAbQrSYn54rjb+hB/wAUT/dbuc0Fdafbbpru2llb7PHh4kI4OBn+tQDVs8wt4FtwcuuGP0qFMryFzPK5C5wqDkjz+Qog0q3eSKJos5CheOKu7DRLu1meSG2S4SVSHU8cf4qjP4rMzSlIIzuGcqWBPAz2/Ki74fepba5HbqMx3KHKjsD3zVrdaW0MO6LT0t2OQW4yaXw9tHTqQCUAYViAPeg0jX7IS6G8SACR125HisvuujEtAXkjJdj8oHOa2G7Tegjbtjmq3UtNlul+VvlAwD5oMn1TTdR0WWFYbG2ulkjViqRM+MnBGcjsKftNDv8A1oby302Wwkdv4kOflkH4lHg1oVhoeqWrlluo5E/+incv9O9X0Ficf+ztlPvQUml291HaqrktgfzAjFLqa1abRJ8Y3BN/9KJvQjRTtXH5GoF3HHNbvFJjYVII+lQYKs0l3E1okbSyu21QBk5zWlaN04Ol9Chg1Gcm7vHyFiTKoSOxNV3w90lNJ1i5ub8xRq05it3c+cntWn6tbRvZRgYkO9SCeec1RlWoouGEgbevBGcc0qm62ub66we8rf3pUE773zc5FVPUMAlBQpn1sAn2q05Hb3qJrsrRaf8AaFGTG2OfY5FIB3phEgnmtpuQh24Jo8tZo0QZGBjj8qzBrsx3S3A3AyL8wPcEUXabfMbfcDnaOBxyKCf1DNHInytgeeaZ+G1s8uq3FxkFEG3Jqr1C4Rbdpi2VA4z70RfDC6sorBx6qLIXJIJ5NAazSKkx3YFJZEcnB88U1Pc2zz7mkQZPGWGKhXshhuFuLUCVFH8RV54qCe7emQyYwa7S4UAbuKaEiXVoJYyGUjO0VXRStkqx57ZPmgtprhNnDUMalfMN6oTnmrU5WNmPbHiqC9O9XKjgZ/tQXFtoNjqOhrHdRA713rnup7g1I06RrLSpVmO5ISApPnFeafcxyQxAS49NfTZPxcVX9Q3qLbC3SQL7Kv70AreOZGZ2BJY5OPrXtN3TEAjyaVUWobdkN27VzdW63VlJbMfvrgH2PivAR+Guw5HOKgzzWV9F4Y5AFmTIYYwT25qx0+7ZLVIDjcT3Lc4x2qf16AdOt5gih0mClsc4IPFDNrdE5J+8iZ/etCy1W8QssCvuTyuKHlnurG4b/TZXRSfHiotxqEiTNgZGf5qn6NfwkkTxDkEZNIDPQen11+COXWbu4lK8YLlVH5Vpei2Vho+nCzslKxrn77FiSfcmsg0jqZLO4ZFkLRqOAx8/9NXEXXEwZllMIQHuW71AbzXQ0jU12nFpPwR+Bv8Ampt0qsd8ZGD8w471nFjr8+uvdWrsJI/T3xnsUYciiuyvZGsIzIw3KBkGoLKa8IjP3c4wcHtVJdMVhdlJzg/rSlmZpC+3AAzuquupmMbZJJHOD9aCRFqupzWkfqJbxl0BJUcjiors5B3OWbyTTyjwOcU0y5ye1UQrtiUr2vbgfLXtBbAZIz3IpSAr/iul5JrwnJyO3tUFd1DbG90G7iVcsF3oPqOcf3rO9PcLIAO3/Fawnyj5uRjJ+tZhr1i2lavPAQRGW3xn3U9v8VQ9bWFvcGUtEDu4GR2pWen6ZbyyJf28zheV2nn9aZsbkodwHBOfyq+tAbtlAXexGAff/uaotdH0zpIMo/015t3Zpjkf0o30/pbp1wsy6RbLg5H8If4ql0jS/TYb0jGADyeQKvZ76WEGMADAwMVBG1ywsYXVrS3iiY8H01xx+lVM0iLCw2jIx2HepM85lyXOBzyD4qpumNzexWyEhCc5zjAz3NA/PcCOyLAAkjkDzQ9rF88OmS3KEb0Xd39qndQTpEfspk+VSCdhzUPVdPL9N3C7R606qceVGeB+9AK2/WerNPHvMRQEZVU7j2o6sb6DULUTwOD4K+VPsay+0gPrOCvKDBx71d9N6vHpN3KLpW9GYckfyn3qgzlXPGQeM8Uq9hu4Lq39SFlkU+c0qgtWVgOfFc5xjsATxnzXtKoHByAcDHmqzqnRxrOnYjAF1FlomIxn3U/nSpVRmkTssnpSAo6nawPBBHvV5pN/9kcE8gZ4zjFKlQGdt1HDIIzuGCORnPNWgv1uhksgwc8d/wBKVKgh6nq9nYWrSPnOM5LDkUEf+RySvcTgqPUO1Fx90e9KlQW3S9hcanP9pkjM2GzGmMlz4/QUQdZXtjoegXFncSJPqtwuWRCfkz2H6UqVBk8MxiHbJNMSvubJNe0qqPba8vLN/UtXdAT47GlSpUH/2Q=='
  }
]

storiesOf('Table', module).add('default', () => (
  <Example title="default">
    <Table items={items}>
      <Table.Column field="name" title="Name" />
      <Table.Column field="born" title="Born" />
      <Table.Column field="died" title="Died" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('column as variable', () => {
  const columns = (
    <React.Fragment>
      <Table.Column field="name" title="Name" />
      <Table.Column field="born" title="Born" />
      <Table.Column field="died" title="Died" />
    </React.Fragment>
  )

  return (
    <Example title="default">
      <Table items={items}>{columns}</Table>
    </Example>
  )
})

storiesOf('Table', module).add('explicit widths', () => (
  <Example title="default">
    <Table items={items}>
      <Table.Column field="name" title="Name" width="70%" />
      <Table.Column field="born" title="Born" />
      <Table.Column field="died" title="Died" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('cell renderer', () => (
  <Example title="default">
    <Table items={items}>
      <Table.Column field="image" width="65px">
        {item => <Avatar image={item.image} size="large" />}
      </Table.Column>
      <Table.Column field="name" title="Name" width="65%" />
      <Table.Column field="born" title="Born" />
      <Table.Column field="died" title="Died" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('sorting', () => (
  <Example title="default">
    <Table items={items}>
      <Table.Column field="image" width="65px" >
        {item => <Avatar image={item.image} size="large" />}
      </Table.Column>
      <Table.Column field="name" title="Name" width="65%" sortable />
      <Table.Column field="born" title="Born" sortable />
      <Table.Column field="died" title="Died" sortable />
    </Table>
  </Example>
))

storiesOf('Table', module).add('initial sort props', () => (
  <Example title="default">
    <Table items={items} sortOn="died" sortDirection="desc">
      <Table.Column field="image" width="65px">
        {item => <Avatar image={item.image} size="large" />}
      </Table.Column>
      <Table.Column field="name" title="Name" width="65%" />
      <Table.Column field="born" title="Born" sortable />
      <Table.Column field="died" title="Died" sortable />
    </Table>
  </Example>
))

storiesOf('Table', module).add('stressed', () => (
  <Example title="stressed - 4 columns with 119 characters per row">
    <Table
      items={[
        {
          data:
            'Loremipsumdolorsitametconsecteturadipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        }
      ]}
    >
      <Table.Column field="data" title="Field 1" width="65px" />
      <Table.Column field="data" title="Field 2" width="150px" />
      <Table.Column field="data" title="Field 3" width="65px" />
      <Table.Column field="data" title="Field 4" width="65px" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('stressed with truncating', () => (
  <Example title="stressed - 7 columns with 119 characters per row">
    <Table
      items={[
        {
          data:
            'Loremipsumdolorsitametconsecteturadipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        },
        {
          data:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
        }
      ]}
    >
      <Table.Column field="data" title="Field 1" width="150px" truncate />
      <Table.Column field="data" title="Field 2" width="10%" truncate />
      <Table.Column field="data" title="Field 3" width="20%" truncate />
      <Table.Column field="data" title="Field 4" width="auto" truncate />
    </Table>
  </Example>
))

storiesOf('Table', module).add('with no items', () => (
  <Example title="no items">
    <Table
      items={[]}
    >
      <Table.Column field="image" width="65px">
        {item => <Avatar type="user" image={item.image} />}
      </Table.Column>
      <Table.Column field="name" title="Name" width="30%" />
      <Table.Column field="country" title="Country" />
      <Table.Column field="goals" title="Goals" sortable />
      <Table.Column field="assists" title="Assists" sortable />
    </Table>
  </Example>
))

storiesOf('Table', module).add('loading state with data', () => (
  <Example title="loading">
    <Table
      loading
      items={[
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        },
        {
          data: 'Lorem ipsum dolor sit amet.'
        }
      ]}
    >
      <Table.Column field="data" title="Field 1" />
      <Table.Column field="data" title="Field 2" />
      <Table.Column field="data" title="Field 3" />
      <Table.Column field="data" title="Field 4" />
      <Table.Column field="data" title="Field 7" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('loading state without data', () => (
  <Example title="loading">
    <Table loading items={[]}>
      <Table.Column field="data" title="Field 1" />
      <Table.Column field="data" title="Field 2" />
      <Table.Column field="data" title="Field 3" />
      <Table.Column field="data" title="Field 4" />
      <Table.Column field="data" title="Field 7" />
    </Table>
  </Example>
))

storiesOf('Table', module).add('with buttons', () => (
  <Example title="with buttons">
    <Table
      items={[
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
          image: 'https://randomuser.me/api/portraits/men/43.jpg'
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
      ]}
      onRowClick={(evt, item) => alert(`${item.name} was clicked!`)}
    >
      <Table.Column field="name" title="Name" width="30%">
        {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
      </Table.Column>
      <Table.Column field="country" title="Country" />
      <Table.Column field="goals" title="Goals" />
      <Table.Column field="assists" title="Assists" width="5%">
        {item => <Button appearance="default" icon="emails" href="https://auth0.com" />}
      </Table.Column>
    </Table>
  </Example>
))
