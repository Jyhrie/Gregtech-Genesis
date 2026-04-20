LootJS.modifiers((event) => {
    // Adding Cracked Microcosm to The Leviathan
    event.addEntityLootModifier("cataclysm:the_leviathan")
        .addWeightedLoot([8, 12], [
            Item.of("terramity:cracked_microcosm").withCount(1)
        ]);
});