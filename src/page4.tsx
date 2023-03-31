import * as React from 'react';

type Page4Props = {
    mode: string;
}

function Page4({mode}: Page4Props) {
    return (
        <div id="pg4"
            style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
            color: mode === 'light' ? "#121212" : "#ffffff",
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>

        </div>
    )
}

export default Page4;