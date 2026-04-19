WorldgenEvents.remove(event => {
    event.removeFeatureById("surface_structures", [
        "apotheosis:tower_leaf",
        "apotheosis:tower_main",
        "apotheosis:tower_sand",
        "apotheosis:tower_spruce",
    ])
})

//this is handled in datapacks instead.