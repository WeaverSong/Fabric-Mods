Fabric.Wrap(gs, "gs");

Fabric.subscribe(this, 'post.gs.createPlayerRaces', () =>
{
    gs.playerRaces.Drow = {
        name: "Drow",
        niceName: "Drow",
        attributes: { strength: -2, dexterity: 0, intelligence: 0 },
        effect: function (character) {
            character.bonusProjectileRange += 1;
        },
        desc: function () {
            var str = 'Drow\n';
            str += 'Medium size\n';
            str += '-2 strength\n';
            str += '+1 range';
            return str;
        }
    };

    gs.playerRaceList.splice(5, 0, gs.playerRaces.Drow);
});