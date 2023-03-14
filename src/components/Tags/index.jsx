/* eslint-disable react/prop-types */
import React from 'react';
import { Tag } from 'antd';

const colors = {
  1: 'magenta',
  2: 'cyan',
  3: 'volcano',
  4: 'orange',
  5: 'gold',
  6: 'lime',
  7: 'green',
  8: 'red',
  9: 'blue',
  10: 'geekblue',
  11: 'purple',
};

const Tags = React.memo(({ tags }) => (
  <span>
    {tags.map(({ type: { name, url } }) => {
      const id = url.match(/(\d+)(?!.*\d)/)[1]; // get type id
      const color = colors[id] || 'green';
      return (
        <Tag color={color} key={name}>
          {name.toUpperCase()}
        </Tag>
      );
    })}
  </span>
));

export default Tags;
