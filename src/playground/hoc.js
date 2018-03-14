import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? (
                <p>You are not logged in. Please login!</p> 
            ) : (
                <WrappedComponent {...props} />
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));