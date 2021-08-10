//Example challenge mod. Caps the player's max HP at 1.


//First wrap the required pieces. Note that Character is a es5 class, so we wrap Character.prototype, with the name "Character.prototype"
//Also, note that it is important to give it the same name as it was originally, because Fabric will ignore requests to wrap things it has seen before, even if you want it wrapped under a new name.
Fabric.Proxy('updateStats', Character.prototype, "Character.prototype.updateStats");

//Define the mod as an object. This mod is very simple, and only has one function inside the object. We still want to wrap it in an object so it doesn't collide with other mods who want to use the same hooks
const ZeroHP = {
    init: function ()
    {
        //Subscribe to a Fabric event within the "Character.prototype" that we wrapped earlier.
        Fabric.subscribe(this, 'run.post.Character.prototype.updateStats', (i) =>
        {
            //Notice how it is `i.this` instead of just `this`
            //`this` is still the mod object, so you can still call other functions within your object. `i.this` is the context of the function the event came from.
            if (i.this.type.name === 'Player')
            {
                i.this.maxHp = 1;
                i.this.currentHp = Math.min(1, i.this.currentHp);
            }
        });
    }
};

//Finally, call the init function for our mod to start it up. Comment out this line to disable the mod.
ZeroHP.init();