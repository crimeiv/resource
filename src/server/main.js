"use strict";

const config = JSON.parse(loadTextFile('config.json'));

bindEventHandler('onResourceStart', thisResource, (event, resource) => {
    if (server.game != GAME_GTA_IV) {
        console.error(`[${resource.name}] Unfortunately, only GTA IV is supported.`);
        resource.stop();

        return;
    }
});