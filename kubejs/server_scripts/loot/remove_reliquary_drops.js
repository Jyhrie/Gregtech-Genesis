LootJS.modifiers((event) => {
    // 1. Target all mob loot tables and remove Reliquary items
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot("@reliquary");

    event.removeGlobalModifier("@reliquary");
});