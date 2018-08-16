```meta
  category: Layout
  description: A group of cards
  unstable: true
```

`import { CardList } from '@auth0/cosmos'`

```jsx
  <CardList
    {props}
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
  />
```

## Examples

### Switchboard

If you need to emulate a Switchboard you can easily do it. Check the following sample:

```js
class Switchboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { enabled: [false, false] }
  }

  render() {
    return (
      <CardList
        columns={3}
        gutter="none"
        items={[{
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-google/images/logo.svg"
          }, {
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-facebook/images/logo.svg"
          }, {
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-windows-liveid/images/logo.png"
          }, {
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-linkedin/images/logo.svg"
          }, {
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo-github/images/logo.svg"
          }, {
            image: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo-dropbox/images/logo.svg"
          }
        ]}
        renderItem={(item, idx) => (
          <CardList.Item
            background={this.state.enabled[idx] ? "white" : "gray"}
          >
            <Stack widths={[80, 20]} alignVertical="center">
              <Image height="25px" source={item.image} />
              <Switch
                accessibleLabels={[]}
                on={this.state.enabled[idx]}
                onToggle={checked => {
                  this.setState(state => {
                    state.enabled[idx] = checked;
                    return state;
                  });
                }}
              />
            </Stack>
          </CardList.Item>
        )}
      />
    );
  }
}
```

### Accessing items properties

`CardList.Item` supports all the configuration that the `Card` supports. Check the following sample:

```js
class Sample5 extends React.Component {
  render() {
    return (
      <CardList
        columns={1}
        items={[{
          logo: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-windows-server-active-directory-rms/images/logo.svg",
          checked: false,
          disabled: false
        }, {
          logo: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-box/images/logo.svg",
          checked: false,
          disabled: true
        }, {
          logo: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-cloudbees/images/logo.svg",
          checked: false,
          bg: 'gray'
        }, {
          logo: "https://cdn.auth0.com/manage/v1.2988.0/logos/logo2-concur/images/logo.svg",
          checked: true,
          disabled: false
        }]}
        renderItem={(item, idx) => (
          <CardList.Item background={item.bg} checked={item.checked} disabled={item.disabled}>
            <Stack widths={[100]} alignVertical="center">
              <Image height="50px" source={item.logo} />
            </Stack>
          </CardList.Item>
        )}
      />
    );
  }
}
```
