LootJS.modifiers(event => {
    // This targets every loot table and removes the specified item
    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST)
         .removeLoot('occultism:datura_seeds');
});