LootJS.modifiers(event => {
    event.addBlockLootModifier(
        "minecraft:grass", // 1.20+ name for grass
    )
    // 5% drop chance
    .randomChance(0.02) 
    // Add the seed (replace with the exact item ID)
    .addLoot("hexerei:sage_seed"); 
});