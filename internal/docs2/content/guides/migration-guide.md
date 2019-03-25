# Migrating to 1.0.0 <span class="sc-cpmKsF dFDKbt">Work in progress</span>

###### This is a work in progress to help migrate to 1.0.0

## API Changes

<div>

### Alert

[Open docs](/component/alert)

```js

    // replace text:string
    <Alert text="This is important" />

    // with children:string
    <Alert>This is important</Alert>
```

### TextInput

[Open docs](/component/text-input)

```js

    // replace error:string
    <TextInput error="Please enter name" />

    // with hasError:boolean
    <TextInput hasError={true} />

```

### TextArea

[Open docs](/component/text-area)

```js

    // replace error:string
    <TextInput error="Please enter name" />

    // with hasError:boolean
    <TextInput hasError={true} />

```

### Switch

[Open docs](/component/switch)

```js

    // replace onToggle:function
    <Switch onToggle={value => console.log(value)} />

    // with onChange:function
    <Switch onChange={value => console.log(value)} />

```

### AvatarBlock

[Open docs](/component/avatar-block)

```js

    // replace href:string
    <AvatarBlock href="https://auth0.com" title="Title with link"/>

    // with link:shape
    <AvatarBlock link={{ href: 'https://auth0.com', target:'_blank' }} title="Title with link"/>

```

### EmptyState

[Open docs](/component/empty-state)

```js

    // replace text:string
    <EmptyState text="No items have been added to this section." />

    // with children:element
    <EmptyState>No items have been added to this section</EmptyState>

```

### ResourceList

[Open docs](/component/resource-list)

```js

    // replace actions:[shape]
    <ResourceList
      actions={[
        { icon:"settings", label: "Settings", onClick={fn} },
        { icon:"delete",   label: "Delete", onClick={fn} }
      ]}
    />

    // with actions:[elements]
    <ResourceList
      actions={[
        <Button icon="settings" onClick={fn}>Settings</Button>,
        <Button icon="delete"   onClick={fn}>Delete</Button>
      ]}
    />
```

## Layout changes

Coming soon - margins
