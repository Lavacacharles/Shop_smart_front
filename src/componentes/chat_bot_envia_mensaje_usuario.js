import React, { useState, useEffect } from 'react';
import '../App.css'


const Chat_bot_envia_mensaje_usuario = (texto) => {
    const [TextoShow, setTextoShow] = useState("");
    useEffect(() => {
        setTextoShow(texto)
    }, [texto]);
    return(
        <div>
            {TextoShow}
        </div>
    );
};

export default Chat_bot_envia_mensaje_usuario;