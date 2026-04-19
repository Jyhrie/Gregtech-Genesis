StartupEvents.registry("item", (e) => {
  // e.create('livingrock_dust').displayName('Livingrock Dust')
  // e.create('charred_bone_dust').displayName('Charred Bone Dust')
  // e.create('shard_of_source').displayName('Shard of Source')
  // e.create('chipped_obsidian').displayName('Chipped Obsidian')
  // e.create('ender_fragment').displayName('Ender Fragment')
  // e.create('gilded_blood').displayName('Gilded Blood')
  // e.create('water_condensate').displayName('Water Condensate')

  // e.create('hallowed_paste').displayName('Hallowed Paste')
  // e.create('malevolent_essence').displayName('Malevolent Essence')
  // e.create('arcane_cluster').displayName('Arcane Cluster')
  // e.create('smoldering_ash').displayName('Smoldering Ash')
  // e.create('telluric_grit').displayName('Telluric Grit')
  // e.create('waterfall_blend').displayName('Waterfall Blend')
  // e.create('abyssal_binding').displayName('Abyssal Binding')
  // e.create('zephyr_precipitate').displayName('Zephyr Precipitate')
  // e.create('primal_essence').displayName('Primal Essence')

  e.create("twilight_flame").displayName("Twilight Flame");
  e.create("raw_arcane").displayName("Raw Arcane");

  e.create("currency1").displayName("Stock Bill");
  e.create("currency2").displayName("Bundle of Stock Bills");

  e.create("heart_of_the_void")
    .displayName("Heart of the Void")
    .unstackable() // Typically ritual catalysts are unstackable
    .rarity("epic")
    .glow(true) // Makes the item look magical/pulsing
    .tooltip("§7A cold, heavy mass that seems to pull the light from the room.")
    .texture("kubejs:item/heart_of_the_void"); // You'll need a texture at this path

  // Tainted Heart
  e.create("tainted_heart")
    .displayName("Tainted Heart")
    .rarity("rare")
    .tooltip("§7It still beats with a rhythmic, sickly thud.")
    .texture("kubejs:item/tainted_heart");

  // e.create('crystallized_source')
  //     .displayName('Crystallized Source')
  //     .texture('ae2:block/quartz_cluster')
  //     .color(0, 0x9D31FF)
  //     .glow(true)
  //     .tooltip('§dPure Crystallized Source')
});
