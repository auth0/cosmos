import React from 'react';
import styled from 'styled-components';
import { spacing } from '@auth0/cosmos-tokens';
import PropTypes from 'prop-types';

import Card from '../../atoms/card';

const gutters = {
  none: '0',
  small: spacing.xsmall,
  default: spacing.medium
};

const getAttributes = props => {
  const gutterStyle = gutters[props.gutter]
    ? gutters[props.gutter]
    : gutters.default;
  const columns = props.columns || 3;
  const widthAjust = Number(gutterStyle.replace('px', '')) * (columns - 1);

  let styles = {
    width: `calc((100% - ${widthAjust}px) / ${columns});`,
    margin: gutterStyle,
    borderWidth: props.gutter === 'none' ? '0' : '1px',
    borderRadius: props.gutter === 'none' ? '0' : '3px',
    nth: `${columns}n`,
    nthBorderLeft: `${columns}n+1`,
    nthBorderTop: `-n+${columns}`
  };

  return styles;
};

const CardList = props => (
  <CardList.Element {...props}>
    {props.items.map((item, index) => {
      const itemRenderer = props.renderItem;
      return React.cloneElement(itemRenderer(item, index), {
        key: item.key || index,
        onClick: e => {
          if (props.onItemClick) {
            props.onItemClick(e, item, index + 1);
          }
        }
      });
    })}
  </CardList.Element>
);

CardList.Element = styled.div`
  & > div {
    display: inline-block;
    width: ${props => getAttributes(props).width};
    border-radius: ${props => getAttributes(props).borderRadius};
    margin-bottom: ${props => getAttributes(props).margin};
    margin-right: ${props => getAttributes(props).margin};
    border-top-width: ${props => getAttributes(props).borderWidth};
    border-left-width: ${props => getAttributes(props).borderWidth};
    &:nth-child(${props => getAttributes(props).nth}) {
      margin-right: 0;
    }
    &:nth-child(${props => getAttributes(props).nthBorderLeft}) {
      border-left-width: 1px;
    }
    &:nth-child(${props => getAttributes(props).nthBorderTop}) {
      border-top-width: 1px;
    }
    ${props =>
    props.gutter === 'none'
      ? `
        &:hover {
          transform: scale(1.05) translateZ(0);
          backface-visibility: hidden;
          filter: blur(0);
          box-shadow: 0 0 10px rgba(0,0,0,.2);
          transition: transform .2s ease;
          z-index: 1000;
        }
      ` : ''
  };
  }
`;

CardList.Item = Card;

CardList.propTypes = {
  /** Indicates the gutter of the cards */
  gutter: PropTypes.oneOf(['default', 'small', 'none']),

  /** Indicates the number of columns for the card list */
  columns: PropTypes.number,

  /** The items that will be rendered in the card list. */
  items: PropTypes.array.isRequired,

  /** A function that will be called when a card is clicked. */
  onItemClick: PropTypes.func
};

CardList.defaultProps = {
  columns: 3,
  gutter: 'default'
};

export default CardList;
