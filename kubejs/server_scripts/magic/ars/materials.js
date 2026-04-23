ServerEvents.recipes((event) => {
  event.custom({
    type: "lychee:item_inside",
    item_in: [
      { item: "ars_nouveau:source_gem" },
      { item: "botania:manasteel_ingot" },
    ],
    block_in: {
      blocks: ["minecraft:water"],
      state: {
        level: 0,
      },
    },
    post: [
      {
        type: "drop_item",
        item: "kubejs:thaumium_ingot",
      },
      {
        type: "execute",
        command:
          "playsound minecraft:block.amethyst_block.chime ambient @a ~ ~ ~ 1 1.2",
      },
      {
        type: "execute",
        command: "particle minecraft:enchant ~ ~0.5 ~ 0.5 0.5 0.5 0.1 100",
      },
    ],
  });
});
