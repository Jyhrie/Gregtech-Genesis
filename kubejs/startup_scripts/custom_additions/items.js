StartupEvents.registry("item", (e) => {
  e.create("twilight_flame").displayName("Twilight Flame");
  e.create("raw_arcane").displayName("Raw Arcane");

  e.create("primal_essence").displayName("Primal Essence");
  e.create("knowledge_fragment").displayName("Fragment of Knowledge");

  e.create("currency1").displayName("Stock Bill");
  e.create("currency2").displayName("Bundle of Stock Bills");

  e.create("heart_of_the_void")
    .displayName("Heart of the Void")
    .unstackable() // Typically ritual catalysts are unstackable
    .rarity("epic")
    .glow(true) // Makes the item look magical/pulsing
    .tooltip("§7A cold, heavy mass that seems to pull the light from the room.")
    .texture("kubejs:item/heart_of_the_void"); // You'll need a texture at this path

  e.create("tainted_heart")
    .displayName("Tainted Heart")
    .rarity("rare")
    .tooltip("§7It still beats with a rhythmic, sickly thud.")
    .texture("kubejs:item/tainted_heart");

  e.create("jade")
    .displayName("Jade")
    .rarity("rare")
    .texture("kubejs:item/jade");

  e.create("seaborn_blood")
    .displayName("Seaborn Blood")
    .rarity("rare")
    .tooltip("Pulsating with inhuman strength")
    .texture("kubejs:item/seaborn_blood");

  e.create("t1_aerospace_material")
    .displayName("Silica-Bonded Aluminium-Lithium Plating")
    .rarity("rare")
    .texture("kubejs:item/t1_aerospace_material");

  e.create("t2_aerospace_material")
    .displayName("Alumina-Shielded Titanium Plating")
    .rarity("rare")
    .texture("kubejs:item/t2_aerospace_material");

  e.create("t3_aerospace_material")
    .displayName("Diboride-Reinforced Inconel Plating")
    .rarity("rare")
    .texture("kubejs:item/t3_aerospace_material");

  e.create("t4_aerospace_material")
    .displayName("Starsteel Carbide Ceremet")
    .rarity("rare")
    .texture("kubejs:item/t4_aerospace_material");
});
