export type AccessibilityEvent =
    | 'AccessibilityContrastToggle'
    | 'AccessibilityContrastSet'
    | 'AccessibilityInvertColorToggle'
    | 'AccessibilityInvertColorSet'
    | 'AccessibilityUnderlineToggle'
    | 'AccessibilityUnderlineSet'
    | 'AccessibilityFontSizeSet'
    | 'AccessibilityFontSizeIncrease'
    | 'AccessibilityFontSizeDecrease'
    | 'AccessibilityLetterSpacingLevelUp'
    | 'AccessibilityLetterSpacingSet'
    | 'AccessibilityLineHeightLevelUp'
    | 'AccessibilityLineHeightSet'
    | 'AccessibilitySaturationLevelUp'
    | 'AccessibilitySaturationSet'
    | 'AccessibilityTextToSpeechToggle'
    | 'AccessibilityTextToSpeechSet'
    | 'AccessibilityEnlargeCursorToggle'
    | 'AccessibilityEnlargeCursorSet'
    | 'AccessibilityHideMediaToggle'
    | 'AccessibilityHideMediaSet'
    | 'AccessibilityDisableAnimationsToggle'
    | 'AccessibilityDisableAnimationsSet'
    | 'AccessibilityShowLineToggle'
    | 'AccessibilityShowLineSet'
    | 'AccessibilityDyslexicToggle'
    | 'AccessibilityDyslexicSet'
    | 'AccessibilityProfileMotorImpairedToggle'
    | 'AccessibilityProfileMotorImpairedSet'
    | 'AccessibilityProfileLowVisionToggle'
    | 'AccessibilityProfileLowVisionSet'
    | 'AccessibilityProfileColorBlindToggle'
    | 'AccessibilityProfileColorBlindSet'
    | 'AccessibilityProfileDyslexiaToggle'
    | 'AccessibilityProfileDyslexiaSet'
    | 'AccessibilityProfileBlindToggle'
    | 'AccessibilityProfileBlindSet'
    | 'AccessibilityProfileEpilepticToggle'
    | 'AccessibilityProfileEpilepticSet'
    | 'AccessibilityProfileAdhdToggle'
    | 'AccessibilityProfileAdhdSet'
    | 'AccessibilityProfileCognitiveAndLearningToggle'
    | 'AccessibilityProfileCognitiveAndLearningSet'
    | 'AccessibilityLanguageSet'
    | 'AccessibilityMenuOpen'
    | 'AccessibilityMenuClose'
    | 'AccessibilityReset';

export const ACCESSIBILITY_EVENTS = [
    'AccessibilityOnChangeOption',
    'AccessibilityOnChangeOptionContrast',
    'AccessibilityOnChangeOptionFontSize',
    'AccessibilityOnChangeOptionInvertColor',
    'AccessibilityOnChangeOptionUnderline',
    'AccessibilityOnChangeOptionDisableAnimations',
    'AccessibilityOnChangeOptionDyslexic',
    'AccessibilityOnChangeOptionEnlargeCursor',
    'AccessibilityOnChangeOptionHideMedia',
    'AccessibilityOnChangeOptionLetterSpacing',
    'AccessibilityOnChangeOptionLineHeight',
    'AccessibilityOnChangeOptionSaturation',
    'AccessibilityOnChangeOptionShowLine',
    'AccessibilityOnChangeOptionTextToSpeech',

    'AccessibilityOnChangeProfile',
    'AccessibilityOnChangeProfileAdhd',
    'AccessibilityOnChangeProfileBlind',
    'AccessibilityOnChangeProfileCognitiveAndLearning',
    'AccessibilityOnChangeProfileColorBlind',
    'AccessibilityOnChangeProfileDyslexia',
    'AccessibilityOnChangeProfileEpileptic',
    'AccessibilityOnChangeProfileLowVision',
    'AccessibilityOnChangeProfileMotorImpaired',

    'AccessibilityOnMenuOpen',
    'AccessibilityOnMenuClose',
    'AccessibilityOnChangePosition',
    'AccessibilityOnChangeLanguage',
] as const;

export type AccessibilityActionKey =
    | 'underline'
    | 'contrasted'
    | 'zoom'
    | 'inverted'
    | 'disable-animations'
    | 'dyslexic'
    | 'enlarge-cursor'
    | 'hide-media'
    | 'letter-spacing'
    | 'line-height'
    | 'saturation'
    | 'show-line'
    | 'text-to-speech'
    | 'ad'
    | 'bl'
    | 'cal'
    | 'cb'
    | 'ds'
    | 'ep'
    | 'lv'
    | 'mi';

export type AccessibilityWidgetIncomingEvent = (typeof ACCESSIBILITY_EVENTS)[number];
