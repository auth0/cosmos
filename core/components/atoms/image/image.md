```meta
  category: Images
  description: Image displays an image.
```

`import { Image } from '@auth0/cosmos'`

```jsx
<Image source='https://images.ctfassets.net/kbkgmx9upatd/5uVCiyUGruC2kiuyw6EQQs/0ffb496734c2b8cd696ca9004018f29d/about-webtask.svg' {props} />
```

## Usage

The Image component is scaled to maintain its aspect ratio while fitting within the container content box. The image will be "letterboxed" if its aspect ratio does not match the aspect ratio of its container.

## Accessibility

An image must always include an alternative text that provides a textual alternative description.

The key principle is that computers and screen readers cannot analyze an image and determine what the image presents. As developers, text must be provided to the user which presents the **content** and **function** of the images within your web content.

### How do I write good alt text?

- Describe the image as specifically and useful as possible.
- Keep it (relatively) short.
- Don't use images as text.
- Don't include "image of," "picture of," etc. in your alt text.

Since writting good alternative text is critical to pass an accecibility audit please make sure to read the articles below on the Resources section.

## Resources

- [The A11Y Project](https://a11yproject.com/posts/alt-text/)
- [W3C: An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [WebAIM](https://webaim.org/techniques/alttext/)
