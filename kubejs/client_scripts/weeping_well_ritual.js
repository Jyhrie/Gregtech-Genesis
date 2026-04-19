JEIEvents.information(event => {
    // You can add this description to multiple items related to the ritual
    const ritualItems = [
        'malum:umbral_spirit',
        'malum:void_conduit',
        'malum:tainted_rock'
    ];

    event.addItem(ritualItems, [
        Text.of("The Rite of the Weeping Well").gold().bold(),
        Text.of("\n"), // Spacer
        Text.of("Construct a hollow ").white(),
        Text.of("5x7x5 Tainted Rock ").lightPurple(),
        Text.of("formation. Fill the 3x3 interior basin with ").white(),
        Text.of("Liquid Death").darkRed(),
        Text.of(". Finally, cast a ").white(),
        Text.of("Heart of the Void ").darkPurple(),
        Text.of("into the liquid to awaken the structure.").white()
    ]);
});