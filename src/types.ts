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

export type AccessibilityActions = [
    { name: 'fontSize'; currentFontSize: number },
    { name: 'underline'; underline: boolean },
    { name: 'letterSpacing'; currentLetterSpacing: number },
    { name: 'lineHeight'; currentLineHeight: number },
    { name: 'textToSpeech'; textToSpeech: boolean },
    { name: 'invertColor'; inverted: boolean },
    { name: 'contrast'; contrasted: boolean },
    { name: 'saturation'; currentSaturation: 1 },
    { name: 'disableAnimations'; disableAnimations: boolean },
    { name: 'enlargeCursor'; enlargeCursor: boolean },
    { name: 'hideMedia'; hideMedia: boolean },
    { name: 'showLine'; showLine: boolean },
    { name: 'dyslexic'; dyslexic: boolean },
    { name: 'motorImpaired'; motorImpaired: boolean },
    { name: 'blind'; blind: boolean },
    { name: 'colorBlind'; colorBlind: boolean },
    { name: 'dyslexia'; dyslexia: boolean },
    { name: 'lowVision'; lowVision: boolean },
    { name: 'epileptic'; epileptic: boolean },
    { name: 'adhd'; adhd: boolean },
    { name: 'cognitiveAndLearning'; cognitiveAndLearning: boolean },
];
type AccessibilityAction = AccessibilityActions[number];

export type AccessibilityActionKey = AccessibilityAction['name'];

export type AccessibilityActionsMap = {
    [S in AccessibilityAction as S['name']]: S;
};

export type AccessibilityWidgetIncomingEvent = (typeof ACCESSIBILITY_EVENTS)[number];
