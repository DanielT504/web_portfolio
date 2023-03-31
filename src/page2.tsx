import * as React from 'react';

type Page2Props = {
    mode: string;
}

function Page2({mode}: Page2Props) {
    return (
        <div id="pg2"
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

export default Page2;