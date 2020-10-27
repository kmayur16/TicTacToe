import './Button.css';

import React from 'react';

export default function Button({ selected, handleClick, children }) {
const classes = `Button ${selected ? 'SelectedButton' : undefined}`;
return (
<button className={classes} onClick={handleClick}>
{children}
</button>
);
}