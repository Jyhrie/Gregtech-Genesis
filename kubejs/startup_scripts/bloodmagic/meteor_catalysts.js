StartupEvents.registry('item', event => {
    event.create('empty_meteor_catalyst')
        .displayName('Astral Shell')
        .unstackable()
        .rarity('epic')
        .tooltip('§7A dense, hollow vessel of primordial origin.')
        .tooltip('§8Ready to be infused with celestial weight.');
})

StartupEvents.registry('item', event => {
    const catalysts = [
        { id: 'overworld_catalyst_shallow', name: 'Terrestrial Astral Catalyst', color: '§2', lore: 'Attuned to the upper crust.' },
        { id: 'overworld_catalyst_deep', name: 'Abyssal Astral Catalyst', color: '§a', lore: 'Attuned to the deepest stones.' },
        { id: 'nether_catalyst', name: 'Infernal Astral Catalyst', color: '§c', lore: 'Smells of sulfur and ancient debris.' },
        { id: 'twilight_catalyst', name: 'Twilit Astral Catalyst', color: '§d', lore: 'Vibrating with the energy of a perpetual sunset.' },
        { id: 'moon_catalyst', name: 'Lunar Astral Catalyst', color: '§f', lore: 'Cold to the touch and strangely light.' }
    ];

    catalysts.forEach(c => {
        event.create(c.id)
            .displayName(c.color + c.name)
            .unstackable()
            .rarity('epic')
            .glow(true)
            .tooltip(c.lore)
            .tooltip('§8Mark of the Falling Tower Ritual Catalyst');
    });
});