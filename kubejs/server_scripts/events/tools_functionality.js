BlockEvents.rightClicked((event) => {
  const player = event.player;
  const block = event.block;
  const item = event.item;
  const level = block.level;
  const pos = block.pos;
  const blockId = block.id

  // Only trigger if player is holding kubejs:hoe_growth
  if (item.id === "kubejs:hoe_of_growth") {
    console.log("Right-clicked with growth hoe at", pos);

    const state = block.blockState;
    const props = state.properties; // this is an array

    // Find the "age" property
    let ageProp = null;
    for (let p of props) {
      if (p.name === "age") {
        ageProp = p;
        break;
      }
    }

    if (ageProp) {

      // Set the age to 7 (max)
      const newBlock = Block.of(`${blockId}[age=7]`)
      level.setBlock(pos, newBlock)

      // Feedback
      level.playSound(
        null,
        pos,
        "minecraft:item.hoe.till",
        "neutral",
        1.0,
        1.0,
      );
      level.addParticle(
        "minecraft:happy_villager",
        pos.x + 0.5,
        pos.y + 0.5,
        pos.z + 0.5,
        0,
        0.1,
        0,
      );

      event.cancel(); // prevent normal right-click
    } else {
      console.log("No 'age' property found on this block");
    }
  }
});
