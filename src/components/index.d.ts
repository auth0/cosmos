declare module '@auth0/cosmos' {
    import * as React from 'react';
  
    type Icons = 'analytics'
      | 'anomaly-detection' 
      | 'apis' 
      | 'arrow-left' 
      | 'arrow-right' 
      | 'authorization' 
      | 'check' 
      | 'chevron-down' 
      | 'clients' 
      | 'close' 
      | 'code' 
      | 'connections' 
      | 'copy' 
      | 'dashboard' 
      | 'delete' 
      | 'emails' 
      | 'extensions' 
      | 'help' 
      | 'hooks' 
      | 'hosted-pages' 
      | 'hourglass' 
      | 'logs' 
      | 'multifactor' 
      | 'notifications' 
      | 'pencil' 
      | 'play-circle' 
      | 'play' 
      | 'plus' 
      | 'quickstarts' 
      | 'resize-vertical' 
      | 'rotate' 
      | 'rules' 
      | 'settings' 
      | 'sso-integrations' 
      | 'support' 
      | 'users';
    type buttonAppearance = 'default' 
      | 'primary' 
      | 'secondary' 
      | 'cta' 
      | 'link' 
      | 'destructive';
    type buttonSize = 'default'
      | 'large'
      | 'small'
      | 'compressed';
    type target = '_blank'
      | '_self'
      | '_parent'
      | 'top';
  
    interface ButtonProps {
      /**
       * The size of the button
       * 
       * @default default
       * @example <Button size="large">Button</Button>
       */
      size?: buttonSize;
  
      /**
       * The visual style used to convey the button's purpose
       * 
       * @default default
       * @example <Button appearance="primary">Button</Button>
       */
      appearance?: buttonAppearance;
  
      /**
       * Name of icon
       * 
       * @example <Button icon="analytics">Button</Button>
       * 
       */
      icon?: Icons;
  
      /**
       * Tooltip to show when the user hovers over the button
       * 
       * @example <Button label="label">Button</Button>
       */
      label?: string;
  
      /**
       * The URL to navigate to when the button is clicked
       * 
       * @example <Button href="https://auth0.com">Button</Button>
       */
      href?: string;
  
      /**
       * Specifies where to open the navigated document
       * 
       * @example <Button target="_blank">Button</Button>
       */
      target?: target;
  
      /**
       * Disables the button, changing the visual style and make it unable to be pressed
       * 
       * @default false
       * @example <Button disabled>Button</Button>
       */
      disabled?: boolean;
  
      /**
       * Loading state when waiting for an action to complete
       * 
       * @default false
       * @example <Button loading>Button</Button>
       */
      loading?: boolean;
  
      /**
       * Loading state when waiting for an action to complete
       * 
       * @default false
       * @example <Button success>Button</Button>
       */
      success?: boolean;
    }
  
    type alertType = 'default'
      | 'information'
      | 'success'
      | 'warning'
      | 'danger';
  
    interface AlertProps {
      /**
       * @example <Alert type="default" />
       */
      type?: alertType;
  
      /**
       * @example <Alert title="Notice!" />
       */
      title?: string;
  
      /**
       * @example <Alert text="This is an important message!" />
       */
      text?: string;
  
      /**
       * @example <Alert link="https://auth0.com/docs" />
       */
      link?: string;
    }
  
    type Size = 'small'
      | 'medium'
      | 'large';
  
    interface AvatarProps {
      /**
       * Avatar size
       * 
       * @example <Avatar size="small" />
       */
      size?: Size;
  
      /**
       * Avatar image
       * 
       * @example <Avatar image='https://cdn.auth0.com/website/cosmos/cosmos-logo.svg' />
       */
      image?: string;
  
      /**
       * User's name
       * 
       * @example <Avatar name="John Doe" />
       */
      name?: string;
    }
  
    interface CodeProps { }
  
    type headingSize = 1 | 2 | 3 | 4;
  
    interface HeadingProps {
      /**
       * @example <Heading size={1}>Heading</Heading>
       */
      size?: headingSize;
      children?: string;
    }
  
    type iconColor = 'colors.icon.default' | 'colors.icon.light';
  
    interface IconProps {
      /**
       * Icon name
       */
      name?: Icons;
  
      /**
       * Icon size
       */
      size?: string;
  
      /**
       * Icon foreground color
       */
      color?: iconColor;
    }
  
    interface ImageProps {
      /**
       * URL of the image
       * 
       * @example <Image source="https://goextend.io/images/rounded-logo.png" />
       */
      source?: string;
  
      /**
       * Alt info for the image
       * 
       * @example <Image alt="logo" />
       */
      alt?: string;
    }
  
    type labelAppearance = 'default'
      | 'information'
      | 'success'
      | 'warning'
      | 'danger';
  
    interface LabelProps {
      /**
       * The visual style used to convey the label's purpose
       * 
       * @example <Label appearance="success">Label Text</Label>
       */
      appearance?: labelAppearance;
    }
  
    interface LinkProps {
      /**
       * URL to follow
       * 
       * @example <Link href="https://auth0.com">Click me!</Link>
       */
      href?: string;
  
      /**
       * specifies where to open the linked document
       * 
       * @example <Link target="_self">Click me!</Link>
       */
      target?: target;
  
      /**
       * function to be called on click
       */
      onClick?(): void
    }
  
    interface LogoProps { }
  
    interface OverlayProps {
      /**
       * @default true
       * @example <Overlay closeOnBackdropClick>Hello from Cosmos!</Overlay>
       */
      closeOnBackdropClick?: boolean;
  
      /**
       * @default true
       * @example <Overlay closeOnEscape>Hello from Cosmos!</Overlay>
       */
      closeOnEscape?: boolean;
      onClose?(): void;
  
      /**
       * @default false
       */
      open?: boolean;
    }
  
    interface paragraphProps { }
  
    type radioAlign = 'vertical' | 'horizontal';
  
    interface radioProps {
      /**
       * The direction in which the options should be laid out
       * 
       * @default vertical
       */
      align?: string;
  
      /**
       * The name of the radio
       */
      name?: string;
  
      /**
       * The value of the currently-selected option
       */
      selected?: string;
  
      /**
       * If true, all options in the group will be disabled
       */
      readOnly?: boolean;
  
      /**
       * Callback function which is called when the user selects an option
       */
      onChange?(): void;
    }
  
    interface selectOption {
      text: string;
      value: any
    }
  
    interface selectProps {
      /**
       * Options to render inside select
       */
      options?: [selectOption];
  
      /**
       * Value selected by default
       */
      value?: any;
  
      /**
       * Make input readOnly if it does not validate constraint
       */
      readOnly?: boolean;
  
      /**
       * onChange transparently passed to select
       */
      onChange?(): void;
    }
  
    interface spinnerProps {
      /**
       * @example <Spinner inverse />
       */
      inverse?: boolean
    }
  
    interface switchProps {
      /**
       * Function called on toggle
       * 
       * @example <Switch onToggle={value => console.log(value)} />
       */
      onToggle?(): void;
  
      /**
       * State of the toggle
       * 
       * @example <Switch on />
       */
      on?: boolean;
  
      /**
       * Labels to show, import for accessibility
       * 
       * @example <Switch accessibleLabels={['Enabled', 'Disabled']} />
       */
      accessibleLabels?: [string];
  
      /**
       * Locked switch
       * 
       * @example <Switch readOnly />
       */
      readOnly?: boolean
    }
  
    interface textInputProps {
      /**
       * Hide input, similar to passwords but for other private information. Implies readOnly.
       */
      masked?: boolean;
  
      /**
       * Make input readOnly if it does not validate constraint
       */
      readOnly?: boolean;
      
      /**
       * Use when the expected input is code
       */
      code?: boolean;
  
      /**
       * Pass error string directly to show error state
       */
      error?: string;
  
      /**
       * onChange transparently passed to the input
       */
      onChange?(): void;
  
      /**
       * Text to display when the input is empty
       */
      placeholder?: string;
  
      /**
       * The default value for the field
       */
      defaultValue?: string;
    }
  
    interface textAreaProps { 
      /**
       * Length of the textarea in rows
       */
      length?: number;
  
      /**
       * Make input readOnly if it does not validate constraint
       */
      readOnly?: boolean;
  
      /**
       * Use when the expected input is code
       */
      code?: boolean;
  
      /**
       * Pass error string directly to show error state
       */
      error?: string;
  
      /**
       * Allow resizing of the textarea
       */
      resizable?: boolean;
  
      /**
       * onChange transparently passed to the input
       */
      onChange?(): void;
    }
  
    interface thumbnailProps {
      /**
       * Thumbnail size
       */
      size?: Size;
  
      /**
       * An image URL, an Image component, or an Icon component to display
       */
      source?: string;
    }
  
    type tooltipPosition = 'top' | 'bottom';
  
    interface tooltipProps {
      /**
       * Content to show in the tooltip
       */
      content?: string;
  
      /**
       * Where to place the tooltip
       */
      position?: tooltipPosition;
  
      /**
       * Visible by default
       */
      defaultVisible?: boolean;
    }
  
    /**
     * Use tooltips for giving extra context AND to make visual cues accessible
     * 
     * More info at https://auth0-cosmos.now.sh/docs/tooltip
     */
    export const Tooltip: React.ComponentClass<tooltipProps>;
  
    /**
     * Thumbnail component contains images or icon.
     * 
     * More info at https://auth0-cosmos.now.sh/docs/thumbnail
     */
    export const Thumbnail: React.ComponentClass<thumbnailProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/text-area
     */
    export const TextArea: React.ComponentClass<textAreaProps>;
  
    /**
     * Use TextInput to ask for input from the user
     * 
     * More info at https://auth0-cosmos.now.sh/docs/text-input
     */
    export const TextInput: React.ComponentClass<textInputProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/switch
     */
    export const Switch: React.ComponentClass<switchProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/spinner
     */
    export const Spinner: React.ComponentClass<spinnerProps>;
  
    /**
     * Select renders a styled drop-down selector.
     * 
     * More info at https://auth0-cosmos.now.sh/docs/select
     */
    export const Select: React.ComponentClass<selectProps>;
  
    /**
     * Provides a way for a user to select from a group of options
     * 
     * More info at https://auth0-cosmos.now.sh/docs/radio
     */
    export const Radio: React.ComponentClass<radioProps>;
  
    /**
     * Buttons are great to ask users for action
     * 
     * More info at https://auth0-cosmos.now.sh/docs/button
     */
    export const Button: React.ComponentClass<ButtonProps>;
  
    /**
     * Show a message intended to draw the user's attention
     * 
     * More info at https://auth0-cosmos.now.sh/docs/alert
     */
    export const Alert: React.ComponentClass<AlertProps>;
  
    /**
     * Avatar component contains images.
     * 
     * More info at https://auth0-cosmos.now.sh/docs/avatar
     */
    export const Avatar: React.ComponentClass<AvatarProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/code
     */
    export const Code: React.ComponentClass<CodeProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/heading
     */
    export const Heading: React.ComponentClass<HeadingProps>;
  
    /**
     * The Icon component displays an icon glyph as an <svg> element
     * 
     * More info at https://auth0-cosmos.now.sh/docs/icon
     */
    export const Icon: React.ComponentClass<IconProps>;
  
    /**
     * Use it to add an image.
     * 
     * More info at https://auth0-cosmos.now.sh/docs/image
     */
    export const Image: React.ComponentClass<ImageProps>;
  
    /**
     * Displays additional information about another piece of the UI
     * 
     * More info at https://auth0-cosmos.now.sh/docs/label
     */
    export const Label: React.ComponentClass<LabelProps>;
  
    /**
     * Use Links to connect pages with each other
     * 
     * More info at https://auth0-cosmos.now.sh/docs/link
     */
    export const Link: React.ComponentClass<LinkProps>;
  
    /**
     * The Logo component exports an SVG version of the logo.
     * 
     * More info at https://auth0-cosmos.now.sh/docs/logo
     */
    export const Logo: React.ComponentClass<LogoProps>;
  
    /**
     * Low-level component that can be used to render any content on top of the regular viewport
     * 
     * More info at https://auth0-cosmos.now.sh/docs/overlay
     */
    export const Overlay: React.ComponentClass<OverlayProps>;
  
    /**
     * More info at https://auth0-cosmos.now.sh/docs/paragraph
     */
    export const Paragraph: React.ComponentClass<paragraphProps>;
  }
  