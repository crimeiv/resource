"use strict";

const config = JSON.parse(loadTextFile('config.json'));

bindEventHandler('onResourceStart', thisResource, (event, resource) => {
    if (server.game != GAME_GTA_IV) {
        console.error('[crime-resource] This resource only supports GTA IV.');
        resource.stop();

        return;
    }
});