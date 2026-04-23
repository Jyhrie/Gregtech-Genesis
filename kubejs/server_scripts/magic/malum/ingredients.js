ServerEvents.recipes((event) => {
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "minecraft:gold_block",
    },
    block_in: {
      blocks: ["kubejs:holy_water"],
      state: {
        level: 0,
      },
    },
    post: [
      {
        type: "drop_item",
        item: "malum:hallowed_gold_ingot",
        count: 8,
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

    event.custom({
    "type": "malum:spirit_focusing",
    "durabilityCost": 1,
    "input": {
      "item": "minecraft:gold_ingot"
    },
    "output": {
      "item": "malum:hallowed_gold_ingot",
      "count": 1
    },
    "spirits": [
      { "type": "sacred", "count": 1 }
    ],
    "time": 40
  })
});
