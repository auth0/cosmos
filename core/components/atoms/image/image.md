```meta
  category: Images
  description: Displays different types of images.
```

`import { Image } from '@auth0/cosmos'`

```jsx
<Image
  source="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80"
  alt="The cosmos"
/>
```

## Usage

The image component is responsive by default. Images will scale down to fit the width of their container. To make an image fit exactly into a certain dimension while keeping its aspect ratio, see [Fitting images to a container](#/component/image#fitting-images-to-a-container).

## Examples

### Fitting images to a container

To make an image fit exactly into a certain dimension while keeping its aspect ratio, you have to specify a width and height and set the `fit` property to either contain or cover.

- _Contain:_ The image content is scaled to maintain its aspect ratio while fitting within the element's content box.
- _Cover_: The image content is sized to maintain its aspect ratio while filling the element's entire content box. The image will be clipped to fit.
- _Scale down_: The image won't scale up more than it's intrinsic size, but scale down when bigger than it's container. This will avoid pixelated images.

```js
<div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ backgroundColor: '#D8D8D8' }}>
      <Image
        source="https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt="Portrait image of the cosmos"
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
        fit="contain"
      />
    </div>

    <div style={{ backgroundColor: '#D8D8D8' }}>
      <Image
        source="https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt="Portrait image of the cosmos"
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
        fit="cover"
      />
    </div>
  </div>
  <br />
  <div style={{ backgroundColor: '#D8D8D8' }}>
    <Image
      source="https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      alt=""
      width="100%"
      height="150px"
      fit="scale-down"
    />
  </div>
</div>
```

When displaying logos in a grid, you can set the image to `fit: contain` and declare either the width and height to make equal size while maintaining the aspect ratio.

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
    alt="SAML logo"
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
      alt="Webtask logo"
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
      alt="CXN logo"
      fit="contain"
      height="70px"
      width="70px"
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
