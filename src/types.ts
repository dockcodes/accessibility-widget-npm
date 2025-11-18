export type AccessibilityEvent =
    | "AccessibilityContrastToggle"
    | "AccessibilityContrastSet"
    | "AccessibilityInvertColorToggle"
    | "AccessibilityInvertColorSet"
    | "AccessibilityUnderlineToggle"
    | "AccessibilityUnderlineSet"
    | "AccessibilityFontSizeSet"
    | "AccessibilityFontSizeIncrease"
    | "AccessibilityFontSizeDecrease"
    | "AccessibilityLetterSpacingLevelUp"
    | "AccessibilityLetterSpacingSet"
    | "AccessibilityLineHeightLevelUp"
    | "AccessibilityLineHeightSet"
    | "AccessibilitySaturationLevelUp"
    | "AccessibilitySaturationSet"
    | "AccessibilityTextToSpeechToggle"
    | "AccessibilityTextToSpeechSet"
    | "AccessibilityEnlargeCursorToggle"
    | "AccessibilityEnlargeCursorSet"
    | "AccessibilityHideMediaToggle"
    | "AccessibilityHideMediaSet"
    | "AccessibilityDisableAnimationsToggle"
    | "AccessibilityDisableAnimationsSet"
    | "AccessibilityShowLineToggle"
    | "AccessibilityShowLineSet"
    | "AccessibilityDyslexicToggle"
    | "AccessibilityDyslexicSet"
    | "AccessibilityProfileMotorImpairedToggle"
    | "AccessibilityProfileMotorImpairedSet"
    | "AccessibilityProfileLowVisionToggle"
    | "AccessibilityProfileLowVisionSet"
    | "AccessibilityProfileColorBlindToggle"
    | "AccessibilityProfileColorBlindSet"
    | "AccessibilityProfileDyslexiaToggle"
    | "AccessibilityProfileDyslexiaSet"
    | "AccessibilityProfileBlindToggle"
    | "AccessibilityProfileBlindSet"
    | "AccessibilityProfileEpilepticToggle"
    | "AccessibilityProfileEpilepticSet"
    | "AccessibilityProfileAdhdToggle"
    | "AccessibilityProfileAdhdSet"
    | "AccessibilityProfileCognitiveAndLearningToggle"
    | "AccessibilityProfileCognitiveAndLearningSet"
    | "AccessibilityLanguageSet"
    | "AccessibilityMenuOpen"
    | "AccessibilityMenuClose"
    | "AccessibilityReset";

export type AccessibilityWidgetIncomingEvent =
    | "AccessibilityOnChangeOption"
    | "AccessibilityOnChangeOptionContrast"
    | "AccessibilityOnChangeOptionFontSize"
    | "AccessibilityOnChangeOptionInvertColor"
    | "AccessibilityOnChangeOptionUnderline"
    | "AccessibilityOnChangeOptionDisableAnimations"
    | "AccessibilityOnChangeOptionDyslexic"
    | "AccessibilityOnChangeOptionEnlargeCursor"
    | "AccessibilityOnChangeOptionHideMedia"
    | "AccessibilityOnChangeOptionLetterSpacing"
    | "AccessibilityOnChangeOptionLineHeight"
    | "AccessibilityOnChangeOptionSaturation"
    | "AccessibilityOnChangeOptionShowLine"
    | "AccessibilityOnChangeOptionTextToSpeech"

    | "AccessibilityOnChangeProfile"
    | "AccessibilityOnChangeProfileAdhd"
    | "AccessibilityOnChangeProfileBlind"
    | "AccessibilityOnChangeProfileCognitiveAndLearning"
    | "AccessibilityOnChangeProfileColorBlind"
    | "AccessibilityOnChangeProfileDyslexia"
    | "AccessibilityOnChangeProfileEpileptic"
    | "AccessibilityOnChangeProfileLowVision"
    | "AccessibilityOnChangeProfileMotorImpaired"

    | "AccessibilityOnMenuOpen"
    | "AccessibilityOnMenuClose"
    | "AccessibilityOnChangePosition"
    | "AccessibilityOnChangeLanguage";

export const ACCESSIBILITY_EVENTS: AccessibilityWidgetIncomingEvent[] = [
    "AccessibilityOnChangeOption",
    "AccessibilityOnChangeOptionContrast",
    "AccessibilityOnChangeOptionFontSize",
    "AccessibilityOnChangeOptionInvertColor",
    "AccessibilityOnChangeOptionUnderline",
    "AccessibilityOnChangeOptionDisableAnimations",
    "AccessibilityOnChangeOptionDyslexic",
    "AccessibilityOnChangeOptionEnlargeCursor",
    "AccessibilityOnChangeOptionHideMedia",
    "AccessibilityOnChangeOptionLetterSpacing",
    "AccessibilityOnChangeOptionLineHeight",
    "AccessibilityOnChangeOptionSaturation",
    "AccessibilityOnChangeOptionShowLine",
    "AccessibilityOnChangeOptionTextToSpeech",

    "AccessibilityOnChangeProfile",
    "AccessibilityOnChangeProfileAdhd",
    "AccessibilityOnChangeProfileBlind",
    "AccessibilityOnChangeProfileCognitiveAndLearning",
    "AccessibilityOnChangeProfileColorBlind",
    "AccessibilityOnChangeProfileDyslexia",
    "AccessibilityOnChangeProfileEpileptic",
    "AccessibilityOnChangeProfileLowVision",
    "AccessibilityOnChangeProfileMotorImpaired",

    "AccessibilityOnMenuOpen",
    "AccessibilityOnMenuClose",
    "AccessibilityOnChangePosition",
    "AccessibilityOnChangeLanguage",
];
