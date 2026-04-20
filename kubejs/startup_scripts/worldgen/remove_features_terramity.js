WorldgenEvents.remove(event => {
    const terramity_features = [
        "terramity:bedrock_black_matter_ore_feature",
        "terramity:brimslag",
        "terramity:church_feature",
        "terramity:daemonium_ore",
        "terramity:deepslate_dimlite_ore",
        "terramity:deepslate_iridescent_ore",
        "terramity:deepslate_iridium_ore",
        "terramity:deepslate_sapphire_ore",
        "terramity:deepslate_topaz_ore",
        "terramity:end_iridium_ore",
        "terramity:end_onyx_ore",
        "terramity:gaia_lily_ready",
        "terramity:gaianite_cluster_ore",
        "terramity:igneo_deltas",
        "terramity:igneo_lava_pools",
        "terramity:igneo_ruby_ore",
        "terramity:igneostone_patches",
        "terramity:nether_iridium_ore",
        "terramity:nether_ruby_ore",
        "terramity:profaned_ore",
        "terramity:sapphire_ore",
        "terramity:stellar_remnant",
        "terramity:topaz_ore"
    ]

    // List of all steps where these features might be registered
    const steps = [
        'underground_ores',
        'underground_decoration',
        'underground_structures',
        'surface_structures',
        'local_modifications',
        'vegetal_decoration'
    ]

    steps.forEach(step => {
        event.removeFeatureById(step, terramity_features)
    })
})