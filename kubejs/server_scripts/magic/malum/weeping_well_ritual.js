ServerEvents.recipes((event) => {
  let structureChecks = [];
  let ritualActions = [];
  let formSurroundings = [];

  // 1. Generate the 5x5 base platform (Y-1)
  for (let x = -2; x <= 2; x++) {
    for (let z = -2; z <= 2; z++) {
      structureChecks.push({
        type: "execute",
        command: `execute if block ~${x} ~-1 ~${z} malum:tainted_rock`,
      });
    }
  }

  // 2. Generate the 5x5 rings (Y0 to Y4)
  for (let y = 0; y <= 5; y++) {
    for (let x = -2; x <= 2; x++) {
      for (let z = -2; z <= 2; z++) {
        let isEdge = Math.abs(x) === 2 || Math.abs(z) === 2;

        if (isEdge) {
          // All outer edges (5x5 ring) must be Tainted Rock
          structureChecks.push({
            type: "execute",
            command: `execute if block ~${x} ~${y} ~${z} malum:tainted_rock`,
          });
        } else if (y > 0) {
          // Interior 3x3 must be Air for heights Y1 through Y4
          // (Y0 is the water/liquid layer, so we don't check for air there)
          structureChecks.push({
            type: "execute",
            command: `execute if block ~${x} ~${y} ~${z} minecraft:air`,
          });
        }
      }
    }
  }

  ritualActions.push({
    type: "place",
    block: "malum:void_conduit",
  });

  ritualActions.push({
    type: "execute",
    command: "fill ~-1 ~0 ~-1 ~1 ~3 ~1 malum:primordial_soup",
  });

  ritualActions.push({
    type: "execute",
    command: "setblock ~ ~3 ~ malum:void_conduit",
  });

  ritualActions.push({
    type: "execute",
    command: "summon lightning_bolt ~ ~3 ~",
  });

  // A. The 5x5 Floor (Y-1)
  for (let x = -2; x <= 2; x++) {
    for (let z = -2; z <= 2; z++) {
      let isEdge = Math.abs(x) === 2 || Math.abs(z) === 2;
      if (isEdge) {
        // Outer Ring
        formSurroundings.push({
          type: "execute",
          command: `setblock ~${x} ~-1 ~${z} malum:weeping_well_bricks replace`,
        });
      } else {
        // 3x3 Center
        formSurroundings.push({
          type: "execute",
          command: `setblock ~${x} ~-1 ~${z} malum:weeping_well_central_pillar replace`,
        });
      }
    }
  }

  // Inward facing corner pillars
  const buildCornerPillar = (x, z, rotatedFacing) => {
    // Y-1: Bricks
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~-1 ~${z} malum:weeping_well_bricks`,
    });
    // Y0: Bricks
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~0 ~${z} malum:weeping_well_bricks`,
    });
    // Y1: Support Facing UP
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~1 ~${z} malum:weeping_well_central_encasement_support[facing=down]`,
    });
    // Y2: Central Pillar
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~2 ~${z} malum:weeping_well_central_pillar[facing=up]`,
    });
    // Y3: Support Facing DOWN
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~3 ~${z} malum:weeping_well_central_encasement_support[facing=up]`,
    });
    // Y4: Bricks
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~4 ~${z} malum:weeping_well_bricks`,
    });
    // Y5: Corner Encasement (Facing inward, then rotated 90 right)
    // Note: For NW(-2,-2), inward is SE. 90 deg right from SE is SW.
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~5 ~${z} malum:weeping_well_encasement_corner[facing=${rotatedFacing}]`,
    });
  };

  // NW Corner (-2, -2) -> Inward is SE -> 90deg right is SW
  buildCornerPillar(-2, -2, "north");
  // NE Corner (2, -2) -> Points East
  buildCornerPillar(2, -2, "east");
  // SE Corner (2, 2) -> Points South
  buildCornerPillar(2, 2, "south");
  // SW Corner (-2, 2) -> Points West
  buildCornerPillar(-2, 2, "west");

  formSurroundings.push({
    type: "execute",
    command:
      "fill ~-1 ~0 ~-2 ~1 ~4 ~-2 malum:weeping_well_side_pillar[facing=north] replace",
  }); // North
  formSurroundings.push({
    type: "execute",
    command:
      "fill ~-1 ~0 ~2 ~1 ~4 ~2 malum:weeping_well_side_pillar[facing=south] replace",
  }); // South
  formSurroundings.push({
    type: "execute",
    command:
      "fill ~-2 ~0 ~-1 ~-2 ~4 ~1 malum:weeping_well_side_pillar[facing=west] replace",
  }); // West
  formSurroundings.push({
    type: "execute",
    command:
      "fill ~2 ~0 ~-1 ~2 ~4 ~1 malum:weeping_well_side_pillar[facing=east] replace",
  }); // East

  // --- 4. CENTRAL WALL DETAIL (The Middle Column of each 3x5 wall) ---
  // This function builds the Bricks -> Support -> Pillar x3 -> Support -> Bricks stack
  const buildCentralWallDetail = (x, z, facing) => {
    // Vertical Stack (Y-1 to Y4)
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~-1 ~${z} malum:weeping_well_bricks replace`,
    });
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~0 ~${z} malum:weeping_well_central_encasement_support[facing=down] replace`,
    });
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~1 ~${z} malum:weeping_well_central_pillar[facing=up] replace`,
    });
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~2 ~${z} malum:weeping_well_central_pillar[facing=up] replace`,
    });
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~3 ~${z} malum:weeping_well_central_pillar[facing=up] replace`,
    });
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~4 ~${z} malum:weeping_well_central_encasement_support[facing=up] replace`,
    });

    // Y5: Central Encasement Piece
    formSurroundings.push({
      type: "execute",
      command: `setblock ~${x} ~5 ~${z} malum:weeping_well_central_encasement[facing=${facing}] replace`,
    });

    // Y5 Bridges: Left and Right relative to the wall's facing
    if (facing === "north" || facing === "south") {
      // For North/South walls, left/right is on the X axis
      let dir = facing === "north" ? 1 : -1;
      formSurroundings.push({
        type: "execute",
        command: `setblock ~${x + dir} ~5 ~${z} malum:weeping_well_encasement[facing=${facing}] replace`,
      });
      formSurroundings.push({
        type: "execute",
        command: `setblock ~${x - dir} ~5 ~${z} malum:weeping_well_encasement_mirrored[facing=${facing}] replace`,
      });
    } else if (facing === "east" || facing === "west") {
      // For East/West walls, left/right is on the Z axis
      let dir = facing === "west" ? 1 : -1;
      formSurroundings.push({
        type: "execute",
        command: `setblock ~${x} ~5 ~${z + dir} malum:weeping_well_encasement[facing=${facing}] replace`,
      });
      formSurroundings.push({
        type: "execute",
        command: `setblock ~${x} ~5 ~${z - dir} malum:weeping_well_encasement_mirrored[facing=${facing}] replace`,
      });
    }
  };

  buildCentralWallDetail(0, -2, "north"); // North Center
  buildCentralWallDetail(0, 2, "south"); // South Center
  buildCentralWallDetail(-2, 0, "west"); // West Center
  buildCentralWallDetail(2, 0, "east"); // East Center

  //For Debugging purposes only
  //   event.custom({
  //     type: "lychee:item_inside",
  //     item_in: {
  //       item: "malum:infernal_spirit",
  //     },
  //     block_in: "minecraft:water", // Change to kubejs:liquid_death if needed
  //     post: formSurroundings,
  //   });

  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "kubejs:heart_of_the_void",
    },
    block_in: "minecraft:water", // Change to kubejs:liquid_death if needed
    contextual: {
      type: "and",
      contextual: structureChecks,
    },
    post: formSurroundings.concat(ritualActions),
  });
});
