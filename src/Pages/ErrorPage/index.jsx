const ErrorPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60%'
            }}
        >
            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center'
                }}
            >
                <h1>Page not found</h1>
            </div>
        </div>
    )
}

export default ErrorPage;