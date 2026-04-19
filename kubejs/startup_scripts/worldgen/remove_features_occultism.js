WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "occultism:ore_silver",
        "occultism:ore_silver_deepslate"
    ])
})