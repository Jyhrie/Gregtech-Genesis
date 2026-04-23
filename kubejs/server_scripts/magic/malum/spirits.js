ServerEvents.recipes((event) => {
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "malum:raw_soulstone",
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
        item: "malum:wicked_spirit",
      },
      {
        type: "drop_item",
        item: "malum:wicked_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:wicked_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:infernal_spirit",
      },
      {
        type: "drop_item",
        item: "malum:infernal_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:infernal_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:eldritch_spirit",
      },
      {
        type: "drop_item",
        item: "malum:eldritch_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:eldritch_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "place",
        block: "minecraft:air",
        contextual: [
          {
            type: "chance",
            chance: 0.1,
          },
        ],
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
    type: "lychee:item_inside",
    item_in: {
      item: "malum:cluster_of_brilliance",
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
        item: "malum:aerial_spirit",
      },
      {
        type: "drop_item",
        item: "malum:aerial_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:aerial_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:aqueous_spirit",
      },
      {
        type: "drop_item",
        item: "malum:aqueous_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:aqueous_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:earthen_spirit",
      },
      {
        type: "drop_item",
        item: "malum:earthen_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:earthen_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "place",
        block: "minecraft:air",
        contextual: [
          {
            type: "chance",
            chance: 0.1,
          },
        ],
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
    type: "lychee:item_inside",
    item_in: {
      item: "kubejs:raw_arcane",
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
        item: "malum:sacred_spirit",
      },
      {
        type: "drop_item",
        item: "malum:sacred_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:sacred_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
    {
        type: "drop_item",
        item: "malum:sacred_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:arcane_spirit",
      },
      {
        type: "drop_item",
        item: "malum:arcane_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.5,
          },
        ],
      },
      {
        type: "drop_item",
        item: "malum:arcane_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
            {
        type: "drop_item",
        item: "malum:arcane_spirit",
        contextual: [
          {
            type: "chance",
            chance: 0.3,
          },
        ],
      },
      {
        type: "place",
        block: "minecraft:air",
        contextual: [
          {
            type: "chance",
            chance: 0.1,
          },
        ],
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
