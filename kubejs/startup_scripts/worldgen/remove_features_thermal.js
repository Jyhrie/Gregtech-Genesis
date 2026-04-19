WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "thermal:apatite_ore",
        "thermal:cinnabar_ore",
        "thermal:lead_ore",
        "thermal:nickel_ore",
        "thermal:niter_ore",
        "thermal:silver_ore",
        "thermal:sulfur_ore",
        "thermal:tin_ore",
        "thermal:oil_sand",
    ])

    event.removeFeatureById("vegetal_decoration", [
        "thermal:trees_rubberwood",
        "thermal:mega_rubberwood_tree",
        "thermal:rubberwood_tree"
    ])
})


//this is handled in datapacks instead.

        