import React from 'react';
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import PropTypes from 'prop-types';

const paddings = {
  none: '0',
  small: spacing.xsmall,
  default: spacing.medium
};

const backgroundColors = {
  white: colors.card.backgroundWhite,
  gray: colors.card.backgroundGray
};

const getAttributes = props => {
  const paddingStyle = paddings[props.padding]
    ? paddings[props.padding]
    : paddings.default;
  const heightStyle = props.height ? `${props.height}px` : 'auto';
  const backgroundStyle = backgroundColors[props.background]
    ? backgroundColors[props.background]
    : backgroundColors.white;

  let styles = {
    padding: paddingStyle,
    border: colors.card.border,
    background: backgroundStyle,
    height: heightStyle,
    hover: {
      border: colors.card.borderHover
    },
    active: {
      border: colors.card.borderActive
    },
    disabled: {
      border: colors.card.borderDisabled,
      background: colors.card.backgroundDisabled
    }
  };

  return styles;
};

const Card = ({ children, onClick, ...props }) => (
  <Card.Element
    onClick={e => {
      onClick(e);
    }}
    {...props}
  >
    {children}
  </Card.Element>
);

Card.Element = styled.div`
  border: 1px solid ${props => getAttributes(props).border};
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
  color: rgb(51, 51, 51);
  position: relative;
  padding: ${props => getAttributes(props).padding};
  height: ${props => getAttributes(props).height};
  background: ${props => getAttributes(props).background};

  &:hover {
    border-color: ${props => getAttributes(props).hover.border};
  }

  &:active {
    border-color: ${props => getAttributes(props).active.border};
  }

  ${props =>
    props.checked
      ? `
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 10px;
          right: 10px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41ICgyNTIzMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QWN0aXZlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlYyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyOC4wMDAwMDAsIC00MDAuMDAwMDAwKSIgZmlsbD0iIzRDRDk2NCI+CiAgICAgICAgICAgIDxnIGlkPSJBY3RpdmUiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyOC4wMDAwMDAsIDQwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJPdmFsLTMtKy1TaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguOTg3NzU1NTYsMTIuMzc0MzIzNSBMOC45NzMyOTc0LDEyLjM4ODc4MjIgTDguMzE3MTU3MzEsMTIuMzg4NzkxMSBMOC4zMDYxMjcyOSwxMi4zNzc3NTkxIEwxMi45NjcyOTcxLDcuNzE2MzEzODQgQzEzLjI1NjAzNCw3LjQyNzkzMzQ0IDEzLjcyNDAwNzEsNy40Mjc5MzM0NCAxNC4wMTI4ODg2LDcuNzE2MDg1NTEgQzE0LjMwMjI3Niw4LjAwNDc0MjIyIDE0LjMwMjE2MDYsOC40NzMyMjA4OSAxNC4wMTM4MDI4LDguNzYyMzQxODYgTDE0LjAxMzM0MTksOC43NjI4MDMzNyBMOS4xNjg0MjI5MSwxMy42MDc4ODc2IEM4Ljg3OTUyNjgzLDEzLjg5NjQyNzUgOC40MTE0OTgxMSwxMy44OTY0Mjc1IDguMTQzNzQ0MzcsMTMuNjI3ODExMSBDNy45OTE4NDYyOSwxMy40MTgwMzMyIDcuOTkxODQ2MjksMTMuNDE4MDMzMiA3Ljk4NTY1MTQ5LDEzLjM1NDQ5ODMgQzcuOTg1NjAyNzIsMTMuMzU0MjY0NCA3Ljk4NTYwMjcyLDEzLjM1NDI2NDQgNy45ODU4MDc0NSwxMy4zNTUyNDEgQzcuOTk0OTkxNzIsMTMuNDE0MTY5NCA3Ljk5NDk5MTcyLDEzLjQxNDE2OTQgOC4xNDIxNzA4NywxMy42MjQxNzk3IEM4LjIxNjQwMzY1LDEzLjY4MDI0ODkgOC4yMTY0MDM2NSwxMy42ODAyNDg5IDguMjM0NDQ3NSwxMy42ODg4MTIgQzguMjM0MzMwOCwxMy42ODg3NDkzIDguMjM0MzMwOCwxMy42ODg3NDkzIDguMjM0MTIxMjIsMTMuNjg4NjM2NyBDOC4yMDcxOTkxNiwxMy42NzUzMjMyIDguMjA3MTk5MTYsMTMuNjc1MzIzMiA4LjExMzc3OTY3LDEzLjU5OTQyOCBMNS43MTcxMDg0NSwxMS4yMDI2MTQ5IEM1LjQyNzU1NTA3LDEwLjkxMjY3MzcgNS40Mjc1NTUwNywxMC40NDI4NjMxIDUuNzE3MTA4NDUsMTAuMTUzNjYzOSBDNi4wMDY5NTU4MSw5Ljg2MzQyODMgNi40NzcyNTk0OCw5Ljg2MzQyODMgNi43NjY4NzExNSwxMC4xNTM0MjgxIEw4Ljk4Nzc1NTU2LDEyLjM3NDMyMzUgWiBNMTAsMjAgQzE1LjUyMjg0NzUsMjAgMjAsMTUuNTIyODQ3NSAyMCwxMCBDMjAsNC40NzcxNTI1IDE1LjUyMjg0NzUsMCAxMCwwIEM0LjQ3NzE1MjUsMCAwLDQuNDc3MTUyNSAwLDEwIEMwLDE1LjUyMjg0NzUgNC40NzcxNTI1LDIwIDEwLDIwIFoiIGlkPSJPdmFsLTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          height: 20px;
          width: 20px;
          z-index: 10;
        }
      `
      : ''
  }

  ${props =>
    props.disabled
      ? `
        cursor: not-allowed;
        pointer-events: none;
        background: ${props => getAttributes(props).disabled.background};
        border-color: ${props => getAttributes(props).disabled.border};
        opacity: .5;
      ` : ''
  }
`;

Card.propTypes = {
  /** Indicates the padding of the card */
  padding: PropTypes.oneOf(['default', 'small', 'none']),

  /** Disables the card */
  disabled: PropTypes.bool,

  /** Indicates that the card should show the check mark */
  checked: PropTypes.bool,

  /** Indicates the height of the card */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A function that will be called when the card is clicked. */
  onClick: PropTypes.func,

  /** Indicates the background of the card */
  background: PropTypes.oneOf(['white', 'gray'])
};

Card.defaultProps = {
  disabled: false,
  checked: false,
  padding: 'default',
  height: 'auto',
  background: 'white'
};

export default Card;
