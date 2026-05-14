const QUESTIONS = [
  {
    "room": "Room 1: The Unsaturated Door Lock",
    "observation": "Bromine water is added to an unknown organic compound at room temperature. The orange solution turns colourless.",
    "question": "Which type of compound is present?",
    "answers": [
      ["Alkane", false, "#7c8aa5"],
      ["Alkene", true, "#00ffa6"],
      ["Alcohol", false, "#4fd1ff"],
      ["Carboxylic Acid", false, "#ff8a65"]
    ],
    "explanation": "Bromine water decolourises at room temperature when an alkene is present."
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
    "explanation": "A silver mirror is the positive observation for aldehydes."
  },
  {
    "room": "Room 3: The Carbonyl Chamber",
    "observation": "2,4-Dinitrophenylhydrazine is added and an orange precipitate forms.",
    "question": "Which reagent produced this result?",
    "answers": [
      ["2,4-DNPH", true, "#ff8c00"],
      ["Tollens' Reagent", false, "#c0c0c0"],
      ["Bromine Water", false, "#d2691e"],
      ["Ferric Chloride", false, "#9370db"]
    ],
    "explanation": "2,4-DNPH gives an orange precipitate with aldehydes and ketones."
  },
  {
    "room": "Room 4: The Acid Pressure Gate",
    "observation": "Sodium bicarbonate is added to the sample and vigorous bubbling occurs.",
    "question": "What observation is taking place?",
    "answers": [
      ["Effervescence of Carbon Dioxide", true, "#00d4ff"],
      ["Silver Mirror", false, "#c0c0c0"],
      ["Purple Colour", false, "#a66cff"],
      ["Orange Precipitate", false, "#ff8c00"]
    ],
    "explanation": "Carboxylic acids release carbon dioxide, causing effervescence."
  },
  {
    "room": "Room 5: The Violet Archive",
    "observation": "Ferric chloride is added to an aromatic compound.",
    "question": "What colour appears if phenol is present?",
    "answers": [
      ["Purple/Violet", true, "#8a2be2"],
      ["Green", false, "#32cd32"],
      ["Colourless", false, "#b0e0e6"],
      ["Silver", false, "#c0c0c0"]
    ],
    "explanation": "Phenol gives a purple or violet colour with ferric chloride."
  },
  {
    "room": "Room 6: The Reflux Reactor",
    "observation": "You need to oxidise ethanol completely into ethanoic acid.",
    "question": "Which conditions are required?",
    "answers": [
      ["Acidified Potassium Dichromate + Heat Under Reflux", true, "#ff7f50"],
      ["Bromine Water at Room Temperature", false, "#d2691e"],
      ["Ferric Chloride", false, "#9370db"],
      ["Sodium Bicarbonate", false, "#00d4ff"]
    ],
    "explanation": "Complete oxidation of ethanol uses acidified potassium dichromate and reflux."
  },
  {
    "room": "Room 7: The Colour Shift Corridor",
    "observation": "During oxidation of an alcohol, the reagent changes colour.",
    "question": "What colour change is observed?",
    "answers": [
      ["Orange to Green", true, "#32cd32"],
      ["Purple to Colourless", false, "#8a2be2"],
      ["Silver to Black", false, "#c0c0c0"],
      ["Blue to Red", false, "#6495ed"]
    ],
    "explanation": "Acidified potassium dichromate changes from orange to green."
  },
  {
    "room": "Room 8: The Dual Evidence Terminal",
    "observation": "The unknown compound gives both a silver mirror and an orange precipitate with 2,4-DNPH.",
    "question": "Which compound class fits both results?",
    "answers": [
      ["Aldehyde", true, "#c0c0c0"],
      ["Ketone", false, "#ffb347"],
      ["Alcohol", false, "#4fd1ff"],
      ["Alkene", false, "#00ffa6"]
    ],
    "explanation": "Only aldehydes are positive for both Tollens' and 2,4-DNPH."
  },
  {
    "room": "Room 9: The Temperature-Controlled Gate",
    "observation": "You are preparing the bromine water test for an alkene.",
    "question": "Which conditions are required?",
    "answers": [
      ["Room Temperature, No Catalyst", true, "#00ffa6"],
      ["UV Light", false, "#ffd700"],
      ["High Pressure", false, "#87ceeb"],
      ["Boiling with Reflux", false, "#ff7f50"]
    ],
    "explanation": "The bromine water test is carried out at room temperature without a catalyst."
  },
  {
    "room": "Room 10: The Final Classification Lock",
    "observation": "A compound is tested with 2,4-DNPH and no precipitate forms.",
    "question": "Which compound type does NOT react?",
    "answers": [
      ["Alcohols", true, "#4fd1ff"],
      ["Aldehydes", false, "#c0c0c0"],
      ["Ketones", false, "#ffb347"],
      ["Carbonyl Compounds", false, "#ff8c00"]
    ],
    "explanation": "Alcohols do not react with 2,4-DNPH."
  }
];
