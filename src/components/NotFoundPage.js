import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
    <div>
        404 - Not found. <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;