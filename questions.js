const QUESTIONS = [
  {
    "room": "Room 1: The Bromine Solution",
    "observation": "A student adds a dilute bromine solution (in CH2Cl2) to an unknown hydrocarbon. The yellow color of the bromine disappears.",
    "question": "Which functional group is likely present?",
    "answers": [
      ["Tertiary Alcohol", false, "#4fd1ff"],
      ["Carboxylic Acid", false, "#ff8a65"],
      ["Saturated Hydrocarbon", false, "#7c8aa5"],
      ["Alkene or Alkyne", true, "#00ffa6"]
    ],
    "explanation": "The decolorization of bromine is a classic test for unsaturation, specifically C=C or C≡C bonds."
  },
  {
    "room": "Room 2: The Baeyer Test",
    "observation": "A sample is subjected to the Baeyer test to check for the presence of an alkene.",
    "question": "What specific observations indicate a positive result?",
    "answers": [
      ["Purple color disappears & brown suspension forms", true, "#8a2be2"],
      ["Formation of a silver mirror", false, "#c0c0c0"],
      ["Production of CO2 bubbles", false, "#00d4ff"],
      ["Formation of a yellow precipitate", false, "#ffd700"]
    ],
    "explanation": "A positive Baeyer test involves the disappearance of the purple permanganate color and the formation of a brown MnO2 suspension."
  },
  {
    "room": "Room 3: The Lucas Reagent",
    "observation": "Various alcohols are tested with Lucas reagent (HCl/ZnCl2) at room temperature.",
    "question": "Which type of alcohol reacts almost immediately?",
    "answers": [
      ["Tertiary (3°) alcohols", true, "#4fd1ff"],
      ["Secondary (2°) alcohols", false, "#7c8aa5"],
      ["Methyl alcohol", false, "#ffffff"],
      ["Primary (1°) alcohols", false, "#a66cff"]
    ],
    "explanation": "Tertiary alcohols form insoluble alkyl chlorides very rapidly due to the stability of the tertiary carbocation intermediate."
  },
  {
    "room": "Room 4: The 2,4-DNP Identification",
    "observation": "The 2,4-DNP test is performed on an unknown organic sample.",
    "question": "This test is used to identify which pair of functional groups?",
    "answers": [
      ["Alcohols and Phenols", false, "#a66cff"],
      ["Aldehydes and Ketones", true, "#ff8c00"],
      ["Carboxylic acids and Esters", false, "#ff8a65"],
      ["Alkenes and Alkynes", false, "#00ffa6"]
    ],
    "explanation": "2,4-DNP reacts with carbonyl groups in both aldehydes and ketones to form yellow or orange precipitates."
  },
  {
    "room": "Room 5: The Halide Heat Test",
    "observation": "A test for halides is conducted using NaI in acetone. No precipitate forms after 5 minutes at room temperature.",
    "question": "What should be done next?",
    "answers": [
      ["Add Tollen's reagent", false, "#c0c0c0"],
      ["Place test tube in a 50°C water bath", true, "#00d4ff"],
      ["Assume the test is negative and stop", false, "#7c8aa5"],
      ["Add more bromine solution", false, "#ffd700"]
    ],
    "explanation": "Heating can help accelerate the reaction for less reactive halides to form the white precipitate."
  },
  {
    "room": "Room 6: The Carbonyl Conclusion",
    "observation": "A sample gives a positive 2,4-DNP test but a negative Tollen's test.",
    "question": "What can you conclude about the sample?",
    "answers": [
      ["The sample is an alcohol", false, "#4fd1ff"],
      ["The sample is an aldehyde", false, "#c0c0c0"],
      ["The sample is a carboxylic acid", false, "#ff8a65"],
      ["The sample is a ketone", true, "#ffb347"]
    ],
    "explanation": "A positive 2,4-DNP confirms a carbonyl, but a negative Tollen's excludes aldehydes, leaving ketones."
  }
];
