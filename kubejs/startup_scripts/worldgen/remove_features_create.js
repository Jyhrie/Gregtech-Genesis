WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "create:zinc_ore",
        "create_new_age:thorium_ore",
        "create_new_age:magnetite_ore"
    ])
})