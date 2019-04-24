import React from 'react';

const Button = ({label, type = 'button'}) =>
    <button className="button" type={type}>
        {label}
    </button>;

export default Button