//Example race mode. Adds a 'Drow' race.

//First wrap the required pieces, with the name "gs"
//Also, note that it is important to give it the same name as it was originally, because Fabric will ignore requests to wrap things it has seen before, even if you want it wrapped under a new name.
Fabric.Wrap(gs, "gs");

//Define the mod as an object. This mod is very simple, and only has one function inside the object. We still want to wrap it in an object so it doesn't collide with other mods who want to use the same hooks
const DrowRace = {
    init: function ()
    {
        //Subscribe to an event withing the 'gs' object that we wrapped earlier.
        //Note that this is the 'post' event, not the 'pre' event. This is due to how the function works, and unlike the old modloader Fabric can't avoid that.
        Fabric.subscribe(this, 'post.gs.createPlayerRaces', () =>
        {
            //Other than using a different event, the only differences are that we need a `name` and `niceName` properties, and that we have to add it to the race list manually. 
            gs.playerRaces.Drow = {
                name: "Drow",
                niceName: "Drow",
                attributes: { strength: -2, dexterity: 0, intelligence: 0 },
                effect: function (character)
                {
                    character.bonusProjectileRange += 1;
                },
                desc: function ()
                {
                    var str = 'Drow\n';
                    str += 'Medium size\n';
                    str += '-2 strength\n';
                    str += '+1 range';
                    return str;
                }
            };
            //Note that we are adding it to the race list manually - because we are doing this we also get to choose where it goes in the list. I could have done something fancy to find the Elf race and put it right after it, even if it gets moved, but I didn't bother here, just hardcoding the index to put it at.
            //You could also use `.push` to just add it to the end of the list.
            gs.playerRaceList.splice(5, 0, gs.playerRaces.Drow);
        });
    }
};

//Finally, call the init function for our mod to start it up. Comment out this line to disable the mod.
DrowRace.init();