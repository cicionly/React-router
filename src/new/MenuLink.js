import React from 'react';
import { Link, Route } from 'react-router-dom';
export default function ({ to, label }) {
    return <Route path={to} children={({match}) =>
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>}
    />
}