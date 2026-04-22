ServerEvents.recipes((event) => {
  event.recipes.botania.terra_plate(
    "terramity:opaline_moonstone",
    [
      "terramity:moonstone_rock",
      "botania:life_essence",
      "botania:pixie_dust",
      "botania:mana_diamond",
    ],
    100000,
  );

  // Recipe for Daemonium
  event.custom({
    "type": "malum:spirit_focusing",
    "durabilityCost": 1,
    "input": {
      "item": "botania:manasteel_ingot"
    },
    "output": {
      "item": "terramity:daemonium",
      "count": 1
    },
    "spirits": [
      { "type": "wicked", "count": 8 },
      { "type": "arcane", "count": 8 }
    ],
    "time": 100
  })

  // Recipe for Iridium Chunk
  event.custom({
    "type": "malum:spirit_focusing",
    "durabilityCost": 1,
    "input": {
      "item": "botania:quartz_mana"
    },
    "output": {
      "item": "terramity:iridium_chunk",
      "count": 1
    },
    "spirits": [
      { "type": "infernal", "count": 2 },
      { "type": "sacred", "count": 2 }
    ],
    "time": 100
  })

  
});
