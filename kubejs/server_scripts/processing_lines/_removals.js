//priority: 100
// 
ServerEvents.recipes(event => {
  // Removes every recipe that outputs an item in this tag
  event.remove({ input: '#create:crushed_raw_materials' })
  event.remove({ output: '#create:crushed_raw_materials' })
  event.remove({ input: 'minecraft:gravel', type: 'create:splashing' })
  
  event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
})