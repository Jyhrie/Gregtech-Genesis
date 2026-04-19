ServerEvents.recipes(event => {
    event.custom({
        "type": "malum:spirit_infusion",
        "input": { 
            "item": "kubejs:primordial_pearl",
            "count": 1 
        },
        "output": { 
            "item": "kubejs:empty_meteor_catalyst",
            "count": 1 
        },
        "extra_items": [
            { "item": "botania:livingrock", "count": 1 },
            { "item": "botania:livingrock", "count": 1 },
            { "item": "botania:livingrock", "count": 1 },
            { "item": "botania:livingrock", "count": 1 }
        ],
        "spirits": [
            { "type": "earthen", "count": 25 },
            { "type": "eldritch", "count": 25 },
            { "type": "wicked", "count": 25 }
        ]
    })
})