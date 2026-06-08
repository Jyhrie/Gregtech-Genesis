ServerEvents.recipes((event) => {
  event.custom({ //replace with like arcane ink or something.
    type: "lychee:item_inside",
    item_in: {
      item: "minecraft:paper",
    },
    block_in: {
      blocks: ["starbunclemania:source_fluid_block"],
      state: {
        level: 0, // Ensures it only works in a full source block
      },
    },
    post: [
      {
        type: "drop_item",
        item: "kubejs:knowledge_fragment",
      },
      {
        type: "place",
        block: "minecraft:air",
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
