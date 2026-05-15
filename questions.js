const QUESTIONS = [
  {
    "room": "Room 1: The Unsaturated Lock",
    "observation": "Bromine water is added to an unknown organic compound at room temperature. The orange solution turns colourless.",
    "question": "Which type of compound is present?",
    "answers": [
      ["Alkane", false, "#7c8aa5"],
      ["Alkene", true, "#00ffa6"],
      ["Alcohol", false, "#4fd1ff"],
      ["Carboxylic Acid", false, "#ff8a65"]
    ],
    "explanation": "Alkenes contain C=C double bonds that undergo addition reactions with bromine water, decolourising it."
  },
  {
    "room": "Room 2: The Silver Mirror Vault",
    "observation": "Tollens' reagent is added and a shiny silver mirror forms on the inside of the test tube.",
    "question": "What functional group is present?",
    "answers": [
      ["Aldehyde", true, "#c0c0c0"],
      ["Ketone", false, "#ffb347"],
      ["Alcohol", false, "#4fd1ff"],
      ["Phenol", false, "#a66cff"]
    ],
    "explanation": "Tollens' reagent is a mild oxidising agent that reacts with aldehydes to form metallic silver."
  },
  {
    "room": "Room 3: The Carbonyl Chamber",
    "observation": "2,4-Dinitrophenylhydrazine (2,4-DNPH) is added and an orange precipitate forms.",
    "question": "Which reagent produced this result?",
    "answers": [
      ["2,4-DNPH", true, "#ff8c00"],
      ["Tollens' Reagent", false, "#c0c0c0"],
      ["Bromine Water", false, "#d2691e"],
      ["Ferric Chloride", false, "#9370db"]
    ],
    "explanation": "2,4-DNPH is the standard test for the carbonyl group (C=O) found in both aldehydes and ketones."
  },
  {
    "room": "Room 4: The Acid Pressure Gate",
    "observation": "Sodium bicarbonate is added to the sample and vigorous bubbling (effervescence) occurs.",
    "question": "What gas is being released?",
    "answers": [
      ["Carbon Dioxide", true, "#00d4ff"],
      ["Hydrogen", false, "#ffffff"],
      ["Oxygen", false, "#4fd1ff"],
      ["Nitrogen", false, "#7c8aa5"]
    ],
    "explanation": "Carboxylic acids react with carbonates to release carbon dioxide gas, causing fizzing."
  },
  {
    "room": "Room 5: The Violet Archive",
    "observation": "Neutral ferric chloride is added to an aromatic compound and a distinct colour change occurs.",
    "question": "What colour appears if phenol is present?",
    "answers": [
      ["Purple/Violet", true, "#8a2be2"],
      ["Green", false, "#32cd32"],
      ["Bright Red", false, "#ff0000"],
      ["Silver", false, "#c0c0c0"]
    ],
    "explanation": "Phenols form a complex with iron(III) ions that results in a purple or violet solution."
  },
  {
    "room": "Room 6: The Reflux Reactor",
    "observation": "You need to oxidise ethanol completely into ethanoic acid.",
    "question": "Which conditions are required?",
    "answers": [
      ["Acidified K2Cr2O7 + Reflux", true, "#ff7f50"],
      ["Bromine Water + UV Light", false, "#d2691e"],
      ["Ferric Chloride + Cold", false, "#9370db"],
      ["2,4-DNPH + Heat", false, "#ff8c00"]
    ],
    "explanation": "Heating under reflux with acidified potassium dichromate ensures full oxidation to the carboxylic acid."
  },
  {
    "room": "Room 7: The Dichromate Corridor",
    "observation": "During the oxidation of a primary alcohol, the acidified potassium dichromate changes colour.",
    "question": "What is the specific colour shift?",
    "answers": [
      ["Orange to Green", true, "#32cd32"],
      ["Purple to Colourless", false, "#8a2be2"],
      ["Blue to Red", false, "#ff4d4d"],
      ["Colourless to Pink", false, "#ffb6c1"]
    ],
    "explanation": "The Cr(VI) ions (orange) are reduced to Cr(III) ions (green) during the reaction."
  },
  {
    "room": "Room 8: The Dual Evidence Terminal",
    "observation": "A compound gives a positive result with both Tollens' reagent and 2,4-DNPH.",
    "question": "Which compound class fits this data?",
    "answers": [
      ["Aldehyde", true, "#c0c0c0"],
      ["Ketone", false, "#ffb347"],
      ["Alcohol", false, "#4fd1ff"],
      ["Phenol", false, "#a66cff"]
    ],
    "explanation": "Aldehydes have a carbonyl group (positive 2,4-DNPH) and are easily oxidised (positive Tollens')."
  },
  {
    "room": "Room 9: The Substitution Lock",
    "observation": "An alkane is reacted with bromine water, but nothing happens until UV light is applied.",
    "question": "What type of reaction is this?",
    "answers": [
      ["Free Radical Substitution", true, "#ffd700"],
      ["Electrophilic Addition", false, "#00ffa6"],
      ["Elimination", false, "#ff8a65"],
      ["Condensation", false, "#4fd1ff"]
    ],
    "explanation": "Alkanes require UV light to break the bromine-bromine bond and begin the substitution process."
  },
  {
    "room": "Room 10: The Final Classification",
    "observation": "A compound is tested with 2,4-DNPH and NO precipitate forms. It also does not react with sodium bicarbonate.",
    "question": "Which compound type is most likely?",
    "answers": [
      ["Alcohol", true, "#4fd1ff"],
      ["Aldehyde", false, "#c0c0c0"],
      ["Ketone", false, "#ffb347"],
      ["Carboxylic Acid", false, "#ff8a65"]
    ],
    "explanation": "Alcohols do not contain a carbonyl group (no 2,4-DNPH reaction) and are not acidic (no bicarbonate reaction)."
  }
];
