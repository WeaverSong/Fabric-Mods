Fabric.Wrap(gs, "gs");

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