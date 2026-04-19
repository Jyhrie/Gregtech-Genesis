StartupEvents.registry('item', event => {
  // Register the inert soul gem
    event.create('soulgem_inert')
        .displayName('Inert Soul Gem') // Sets the in-game name
        .tooltip('§7A hollow vessel...') // Adds a grey flavor text line

    event.create('soulgem_scylla')
        .displayName(Text.of('Scylla Soul Gem').color('#FFD700').bold())
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Storm Empress').color('#00FBFF').italic())
        .tooltip(Text.of('Howling winds surround you.').gray())
    
    event.create('soulgem_leviathan')
        .displayName(Text.of('Leviathan Soul Gem').color('#6f00ff').bold())
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Abyssal Predator').color('#480388').italic())
        .tooltip(Text.of('You can feel its darkness.').gray())

    event.create('soulgem_netherite_monstrosity')
        .displayName(Text.of('Netherite Monstrosity Soul Gem').color('#ff9100').bold()) // Bright Orange-Red
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Scourge of the Nether').color('#8B0000').italic()) // Dark Red
        .tooltip(Text.of('Dense and oppresive.').gray())

    event.create('soulgem_harbinger')
        .displayName(Text.of('Harbinger Soul Gem').color('#ff0000').bold()) // Bright Red
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Harbinger').color('#7e1616').italic()) // Dark Red
        .tooltip(Text.of('A mechanical ticking echoes through the room.').gray())

    event.create('soulgem_ignis')
        .displayName(Text.of('Ignis Soul Gem').color('#ff0000').bold()) // Bright Red
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Firelord').color('#7e1616').italic()) // Dark Red
        .tooltip(Text.of('It radiates an unbearable, suffocating heat.').gray())

    event.create('soulgem_ancient_remnant')
        .displayName(Text.of('Ancient Remnant Soul Gem').color('#e4c662').bold()) // Bright Red
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Past').color('#cea652').italic()) // Dark Red
        .tooltip(Text.of('The sands of time shift.').gray())
    
    event.create('soulgem_maledictus')
        .displayName(Text.of('Maledictus Soul Gem').color('#f0cf17').bold()) // Bright Red
        .rarity('EPIC')
        .glow(true)
        .tooltip(Text.of('Soul of the Cursed King').color('#188178').italic()) // Dark Red
        .tooltip(Text.of('A chilling aura of misfortune surrounds you.').gray())
    
    event.create('soulgem_ender_guardian')
        .displayName(Text.of('Ender Guardian Soul Gem').color('#b420d1').bold()) // Bright Red
        .rarity('EPIC')
        .glow(true)
        .tooltip(Text.of('Soul of the Ender Guardian').color('#6000a0').italic()) // Dark Red
        .tooltip(Text.of('Its presence is both mesmerizing and terrifying.').gray())
    
    event.create('soulgem_captain_cornelia')
        .displayName(Text.of('Captain Cornelia Soul Gem').color('#15a9ff').bold()) // Bright Red
        .rarity('EPIC') 
        .glow(true) 
        .tooltip(Text.of('Soul of the Captain').color('#010b96').italic()) // Dark Red
        .tooltip(Text.of('The air around you tastes salty.').gray())
})