ServerEvents.recipes(event => {

  //TODO: replace with 2d item instead of gtceu machine.
  
  // ----------------------------------------------------
  // 1. CLEAR THE DEFAULT EASY RECIPES
  // ----------------------------------------------------
  event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })

  // ----------------------------------------------------
  // 2. TIER 1 ROCKET (End of HV Milestone)
  // ----------------------------------------------------
  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      { "item": "ad_astra:rocket_nose_cone" },      // Slot 0 (Top)
      { "item": "kubejs:t1_aerospace_material" },    // Slot 1
      { "item": "kubejs:t1_aerospace_material" },         // Slot 2
      { "item": "kubejs:t1_aerospace_material" },    // Slot 3
      { "item": "kubejs:t1_aerospace_material" },    // Slot 4
      { "item": "kubejs:t1_aerospace_material" },  // Slot 5 (The IMU Brain!)
      { "item": "kubejs:t1_aerospace_material" },    // Slot 6
      { "item": "ad_astra:rocket_fin" },            // Slot 7
      { "item": "gtceu:hv_flight_controller" },            // Slot 8 (Omega Tank)
      { "item": "gtceu:hv_rocket_fuel_tank" },            // Slot 9 (Omega Tank)
      { "item": "ad_astra:rocket_fin" },            // Slot 10
      { "item": "ad_astra:rocket_fin" },            // Slot 11
      { "item": "gtceu:hv_rocket_engine" },          // Slot 12 (Over-Engineered Engine)
      { "item": "ad_astra:rocket_fin" }             // Slot 13
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_1_rocket"
    }
  })

// ----------------------------------------------------
  // 3. TIER 2 ROCKET (The Extreme Voltage (EV) Tier)
  // ----------------------------------------------------
  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      { "item": "ad_astra:rocket_nose_cone" },      // Slot 0 (Top)
      { "item": "kubejs:t2_aerospace_material" }, // Slot 1
      { "item": "kubejs:t2_aerospace_material" }, // Slot 2
      { "item": "kubejs:t2_aerospace_material" }, // Slot 3
      { "item": "kubejs:t2_aerospace_material" }, // Slot 4
      { "item": "kubejs:t2_aerospace_material" }, // Slot 5
      { "item": "kubejs:t2_aerospace_material" }, // Slot 6
      { "item": "ad_astra:rocket_fin" },            // Slot 7
      { "item": "gtceu:ev_flight_controller" },     // Slot 8
      { "item": "gtceu:ev_rocket_fuel_tank" },      // Slot 9
      { "item": "ad_astra:rocket_fin" },            // Slot 10
      { "item": "ad_astra:rocket_fin" },            // Slot 11
      { "item": "gtceu:ev_rocket_engine" },         // Slot 12
      { "item": "ad_astra:rocket_fin" }             // Slot 13
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_2_rocket"
    }
  })

  // ----------------------------------------------------
  // 4. TIER 3 ROCKET (The Insane Voltage (IV) Tier)
  // ----------------------------------------------------
  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      { "item": "ad_astra:rocket_nose_cone" },      // Slot 0
      { "item": "kubejs:t3_aerospace_material" },   // Slot 1
      { "item": "kubejs:t3_aerospace_material" },   // Slot 2
      { "item": "kubejs:t3_aerospace_material" },   // Slot 3
      { "item": "kubejs:t3_aerospace_material" },   // Slot 4
      { "item": "kubejs:t3_aerospace_material" },   // Slot 5
      { "item": "kubejs:t3_aerospace_material" },   // Slot 6
      { "item": "ad_astra:rocket_fin" },            // Slot 7
      { "item": "gtceu:iv_flight_controller" },     // Slot 8
      { "item": "gtceu:iv_rocket_fuel_tank" },      // Slot 9
      { "item": "ad_astra:rocket_fin" },            // Slot 10
      { "item": "ad_astra:rocket_fin" },            // Slot 11
      { "item": "gtceu:iv_rocket_engine" },         // Slot 12
      { "item": "ad_astra:rocket_fin" }             // Slot 13
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_3_rocket"
    }
  })

  // ----------------------------------------------------
  // 5. TIER 4 ROCKET (The Starsteel Tier)
  // ----------------------------------------------------
  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      { "item": "ad_astra:rocket_nose_cone" },      // Slot 0
      { "item": "kubejs:t4_aerospace_material" },// Slot 1
      { "item": "kubejs:t4_aerospace_material" },// Slot 2
      { "item": "kubejs:t4_aerospace_material" },// Slot 3
      { "item": "kubejs:t4_aerospace_material" },// Slot 4
      { "item": "kubejs:t4_aerospace_material" },// Slot 5
      { "item": "kubejs:t4_aerospace_material" },// Slot 6
      { "item": "ad_astra:rocket_fin" },            // Slot 7
      { "item": "gtceu:luv_flight_controller" },     // Slot 8 (Kept at IV per request)
      { "item": "gtceu:luv_rocket_fuel_tank" },      // Slot 9
      { "item": "ad_astra:rocket_fin" },            // Slot 10
      { "item": "ad_astra:rocket_fin" },            // Slot 11
      { "item": "gtceu:luv_rocket_engine" },         // Slot 12
      { "item": "ad_astra:rocket_fin" }             // Slot 13
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_4_rocket"
    }
  })
})