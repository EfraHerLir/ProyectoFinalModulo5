import React from "react";

const TopBar = ({ title, image, price, profesor }) => (
    <>

        <div class="topbar">
            <div class="ed-grid"></div>
        </div>

        <div class="topbar">
            <div class="ed-grid m-grid-1">
                <p class="s-mb-1 m-mb-0 s-center m-left">Made in Mexico by Efraherlir</p>
                <a class="button--cta button--tiny s-to-center m-to-right" href="localhost.mx">Facebook</a>
                <svg class="svg-icon before"><use href="https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-cuadrado-en-color-azul-164585769.jpg"/></svg>
                <a class="button--cta button--tiny s-to-center m-to-right" href="localhost.mx">Telegram</a>
                <svg class="svg-icon before"><use href="https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-cuadrado-en-color-azul-164585769.jpg"/></svg>
                <a class="button--cta button--tiny s-to-center m-to-right" href="localhost.mx">Whatsapp</a>
                <svg class="svg-icon before"><use href="https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-cuadrado-en-color-azul-164585769.jpg"/></svg>
                <a class="button--cta button--tiny s-to-center m-to-right" href="localhost.mx">Instagram</a>
                <svg class="svg-icon before"><use href="https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-cuadrado-en-color-azul-164585769.jpg"/></svg>
                   </div>
        </div>
        
    </>
)

export default TopBar

