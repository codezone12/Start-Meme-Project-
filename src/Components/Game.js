import React from 'react';

const Game = () => {
    return (
        <>
            <div className='p-9'>

            </div>
            <div style={{ width: '98vw', height: '100vh', }}>
                <div className=''>

                </div>
                <iframe
                    src="https://www.free80sarcade.com/galaga.php"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 'none', }}
                ></iframe>
            </div>
        </>
    );
};

export default Game;
