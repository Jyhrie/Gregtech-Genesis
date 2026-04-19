WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "malum:ore_soulstone",
        "malum:blazing_quartz_ore",
        "malum:brilliant_ore",
        "malum:cthonic_gold_ore",
        "malum:ore_natural_quartz",
    ])

    event.removeFeatureById("underground_decoration", [
        "malum:deepslate_quartz_geode",
        "malun:quartz_geode"
    ])

    event.removeFeatureById("underground_structures", [
        "malum:weeping_well",
    ])

    event.removeFeatureById("vegetal_decoration", [
        "malum:runewood_tree",
        "malum:azure_runewood_tree",
        "malum:rare_runewood_tree",
        "malum:rare_azure_runewood_tree",
    ])
})