StartupEvents.registry('block', event => {
  event.create('kristens_sarcophagus', 'slab') 
    .displayName("Kristen Wright's Sarcophagus")
    .soundType('metal')           
    .hardness(-1.0)               // Makes it completely unmineable
    .resistance(3600000.0)        // Immune to explosions
    .tagBoth('minecraft:slabs')   // Ensures it acts like a proper slab
    .textureAll('kubejs:block/kristens_sarcophagus') // Points to your custom texture
})

StartupEvents.registry('item', event => {
  event.create('originium_fuel_catalyst')
    .displayName('Originium Fuel Catalyst')
    .maxStackSize(1)
    .glow(true) // Gives it the enchanted glint for a high-tech feel
    .tooltip('§7A reusable matrix required to stabilize fuels.')
})