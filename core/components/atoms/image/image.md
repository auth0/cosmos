```meta
  category: Images
  description: Displays different types of images.
```

`import { Image } from '@auth0/cosmos'`

```jsx
<Image source='https://cdn.auth0.com/website/press/resources/webtask-logo.svg' {props} />
```

## Usage

The image component works similar to an HTML `<img>` tag, but is responsive by default. Images will scale down to fit the width of their container. To make an image fit exactly into a certain dimension while keeping its aspect ratio, check [Fitting images to a container](#/component/image#fitting-images-to-a-container).

## Examples

### Image and text

```js
<div>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
  <Image
    alt=""
    source="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80"
  />
  <Paragraph>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </Paragraph>
</div>
```

### Fitting images to a container

To make an image fit exactly into a certain dimension while keeping its aspect ratio, you have to specify a width or a height and set the `fit` property to either contain or cover.

- _Contain:_ The image is scaled to maintain its aspect ratio while fitting within the element's content box.
- _Cover_: The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit.

```js
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}
>
  <Image
    source="https://images.ctfassets.net/kbkgmx9upatd/2WYJNVchLWyqaWWmWw4You/6f73fede65925693bd2f8c63c516cd3c/about-_sharelock.svg"
    alt="Auth0 logo"
    width="70px"
    height="70px"
    fit="contain"
  />

  <Image
    fit="contain"
    height="70px"
    width="70px"
    alt="Auth0 logo"
    source="https://images.ctfassets.net/kbkgmx9upatd/6eMje9QPF6qAgwCKESG6wc/b210dd6ce9e2959c16cde0b0bfc4af56/about-saml.svg"
  />

  <div
    style={{
      width: '70px',
      height: '70px'
    }}
  >
    <Image
      source="https://images.ctfassets.net/kbkgmx9upatd/5uVCiyUGruC2kiuyw6EQQs/0ffb496734c2b8cd696ca9004018f29d/about-webtask.svg"
      alt="Autho logo"
      height="100%"
      width="100%"
      fit="contain"
    />
  </div>

  <div
    style={{
      width: '70px',
      height: '70px'
    }}
  >
    <Image
      source="https://images.ctfassets.net/kbkgmx9upatd/5tZo55mG0EAcmw0aMWAOGA/c27f309cc0d63783f3c317ee9afac7f6/about-cxn.svg"
      alt="Auth0 logo"
      fit="contain"
      height="70px"
      width="70px"
    />
  </div>
</div>
```

```js
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ backgroundColor: '#D8D8D8' }}>
    <Image
      source="https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
      width="150px"
      height="150px"
      fit="contain"
    />
  </div>

  <div style={{ backgroundColor: '#D8D8D8' }}>
    <Image
      source="https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
      width="150px"
      height="150px"
      fit="cover"
    />
  </div>

  <div style={{ backgroundColor: '#D8D8D8' }}>
    <Image
      source="https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt=""
      width="150px"
      height="150px"
      fit="contain"
    />
  </div>

  <div style={{ backgroundColor: '#D8D8D8' }}>
    <Image
      source="https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt=""
      width="150px"
      height="150px"
      fit="cover"
    />
  </div>
</div>
```

## Accessibility

### Alternative text

An image must always include an _alternative text_ that provides a textual alternative description. The key principle is that computers and screen readers cannot analyze an image and determine what the image presents. As developers, text must be provided to the user which presents the **content** and **function** of the images within your web content.

_How do I write good alt text?_

- Describe the image as specifically and useful as possible.
- Keep it (relatively) short.
- Don't use images as text.
- Don't include "image of," "picture of," etc. in your alt text.

Since writting good alternative text is critical to pass an accecibility audit please make sure to read the articles below on the Resources section.

## Resources

- [The A11Y Project](https://a11yproject.com/posts/alt-text/)
- [W3C: An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [WebAIM](https://webaim.org/techniques/alttext/)
