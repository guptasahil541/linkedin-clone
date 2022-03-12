import React from 'react';
import './HeaderOptions.css';
import Avatar from '@material-ui/core/Avatar';

function HeaderOptions({avatar, Icon, title}) {
  return (
    <div className='headerOptions'>
      {Icon && <Icon className='headerOptions__icon' />}
      {avatar && <Avatar src={avatar} className='headerOptions__icon' />}
      <h3 className='headerOptions__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions;
