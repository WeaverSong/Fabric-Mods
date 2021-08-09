//Note how I use this function - this lets me only wrap the one function I need, instead of making events and wrapping everything in gs.
Fabric.WrapFunc('createNPCTypes', gs, 'gs.createNPCTypes');

const Blitzkrieg = {
    init: function () {
        Fabric.subscribe(this, "post.gs.createNPCTypes", () => {
            for (let key in gs.npcTypes) {
                gs.npcTypes[key].movementSpeed = MOVEMENT_SPEED.FAST;
            }
        });
    }
};

Blitzkrieg.init();