ItemEvents.toolTierRegistry((event) => {
  event.add("void_pick", (tier) => {
    tier.uses = -1; 
    tier.speed = 35; 
    tier.attackDamageBonus = 6.0; 
    tier.level = 4; 
    tier.enchantmentValue = 25; 
    tier.repairIngredient = "kubejs:voidmetal_ingot";
  });
});

StartupEvents.registry("item", (e) => {
    // Pickaxe of the Core
    e.create("pickaxe_of_the_core", "pickaxe")
        .displayName("Pickaxe of the Core")
        .tier("void_pick")
        .rarity("epic")
        .glow(true)
        .tooltip("§6Forged in the heart of the world.")
        .tooltip("§7§bUnbreakable");

    // Axe of the Stream
    e.create("axe_of_the_stream", "axe")
        .displayName("Axe of the Stream")
        .tier("void_pick")
        .rarity("epic")
        .glow(true)
        .tooltip("§9Flowing like the endless tides.")
        .tooltip("§7§bUnbreakable");

    // Shovel of the Earthmover
    e.create("shovel_of_the_earthmover", "shovel")
        .displayName("Shovel of the Earthmover")
        .tier("void_pick")
        .rarity("epic")
        .glow(true)
        .tooltip("§2To move mountains with a single breath.")
        .tooltip("§7§bUnbreakable");

    // Hoe of Growth
    e.create("hoe_of_growth", "hoe")
        .displayName("Hoe of Growth")
        .tier("void_pick")
        .rarity("epic")
        .glow(true)
        .tooltip("§aNature bows to the void")
        .tooltip("§7§bUnbreakable");

    // Sword of the Zephyr
    e.create("sword_of_the_zephyr", "sword")
        .displayName("Sword of the Zephyr")
        .tier("void_pick")
        .rarity("epic")
        .glow(true)
        .tooltip("§bSwifter than the northern gale.")
        .tooltip("§7§bUnbreakable");

    e.create("staff_of_warding").displayName("Staff of Warding");
});