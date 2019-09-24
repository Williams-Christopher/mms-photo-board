import React from 'react';

export function Error (props) {
    if(!props.error) {
      return null
    }
    return(<p>There was an error: {props.error}</p>)
}
