Fabric.Wrap(Character.prototype, "Character");

Fabric.subscribe(this, 'post.Character.updateStats', (i) =>
{
    if (i.this.type.name === 'Player')
    {
        i.this.maxHp = 1;
        i.this.currentHp = Math.min(1, i.this.currentHp);
    }
});