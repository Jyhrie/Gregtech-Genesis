ServerEvents.recipes(event => {
    // Recipe: Abyssal Sacrifice -> Tainted Heart
    // event.recipes.bloodmagic.altar(output, input)
    event.recipes.bloodmagic.altar('kubejs:tainted_heart', 'cataclysm:abyssal_sacrifice')
        .upgradeLevel(2)       // 0=T1, 1=T2, 2=T3
        .altarSyphon(10000)    // Total LP required (Max for T3)
        .consumptionRate(20)   // Speed of LP consumption per tick
        .drainRate(10);        // Speed of LP loss if the altar runs empty
});

ServerEvents.recipes(event => {
    event.custom({
        "type": "malum:spirit_infusion",
        "input": { 
            "item": "kubejs:tainted_heart", 
            "count": 1 
        },
        "output": { 
            "item": "kubejs:heart_of_the_void", 
            "count": 1 
        },
        "extra_items": [
            { "item": "minecraft:nether_star" }, 
            { "item": "cataclysm:abyss_eye" }, 
            { "item": "botania:rune_envy" },
            { "item": "cataclysm:abyss_eye" }, 
        ],
        "spirits": [
            { "type": "wicked", "count": 64 },
            { "type": "arcane", "count": 64 },
            { "type": "eldritch", "count": 64 }
        ]
    })
})