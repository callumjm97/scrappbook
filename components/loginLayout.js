const layoutStyle = {
    background: "#CFE7D7"
};

const LoginLayout = props => (
    <body style={layoutStyle}>
        {props.children}
    </body>
);
export default LoginLayout;