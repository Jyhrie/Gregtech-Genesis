LycheeEvents.customCondition('kubejs:check_weeping_well', event => {
    const { level, pos } = event;

    console.log(`[WeepingWell] Condition check started at: [${pos.x}, ${pos.y}, ${pos.z}]`);

    // 1. Check Y-1: 5x5 Platform of Tainted Rock
    for (let x = -2; x <= 2; x++) {
        for (let z = -2; z <= 2; z++) {
            let currentBlock = level.getBlock(pos.offset(x, -1, z));
            if (currentBlock.id !== 'malum:tainted_rock') {
                console.log(`[WeepingWell] FAIL: Platform (Y-1) incomplete at [${x}, -1, ${z}]. Found: ${currentBlock.id}`);
                return false;
            }
        }
    }

    // 2. Check Y0 to Y4: 5x5 Rings
    for (let y = 0; y <= 4; y++) {
        for (let x = -2; x <= 2; x++) {
            for (let z = -2; z <= 2; z++) {
                let isEdge = Math.abs(x) === 2 || Math.abs(z) === 2;
                let currentBlock = level.getBlock(pos.offset(x, y, z));

                if (isEdge) {
                    // Walls must be Tainted Rock
                    if (currentBlock.id !== 'malum:tainted_rock') {
                        console.log(`[WeepingWell] FAIL: Ring Wall (Y${y}) broken at [${x}, ${y}, ${z}]. Found: ${currentBlock.id}`);
                        return false;
                    }
                } else if (y > 0) {
                    // Interior above liquid (Y1-Y4) must be Air
                    if (!currentBlock.air) {
                        console.log(`[WeepingWell] FAIL: Interior (Y${y}) must be AIR at [${x}, ${y}, ${z}]. Found: ${currentBlock.id}`);
                        return false;
                    }
                }
            }
        }
    }
    
    return true;
});