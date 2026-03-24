export type AccessibilityEvent =
    | 'AccessibilityContrastToggle'
    | 'AccessibilityContrastSet'
    | 'AccessibilityInvertColorToggle'
    | 'AccessibilityInvertColorSet'
    | 'AccessibilityUnderlineToggle'
    | 'AccessibilityUnderlineSet'
    | 'AccessibilityFontSizeLevelUp'
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

const NUMBER_EVENTS = ['AccessibilityOnChangeOptionFontSize', 'AccessibilityOnChangeOptionLetterSpacing', 'AccessibilityOnChangeOptionLineHeight', 'AccessibilityOnChangeOptionSaturation'] as const;
const BOOLEAN_EVENTS = [
    'AccessibilityOnChangeOptionInvertColor',
    'AccessibilityOnChangeOptionUnderline',
    'AccessibilityOnChangeOptionDisableAnimations',
    'AccessibilityOnChangeOptionDyslexic',
    'AccessibilityOnChangeOptionEnlargeCursor',
    'AccessibilityOnChangeOptionHideMedia',
    'AccessibilityOnChangeOptionContrast',
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
] as const;

const EMPTY_EVENTS = ['AccessibilityOnMenuOpen', 'AccessibilityOnMenuClose'] as const;

const STRING_EVENTS = ['AccessibilityOnChangeLanguage'] as const;

const POSITION_EVENT = 'AccessibilityOnChangePosition' as const;

const ABSTRACT_EVENT = 'AccessibilityOnChangeOption' as const;

export const ACCESSIBILITY_EVENTS = [...NUMBER_EVENTS, ...BOOLEAN_EVENTS, ...EMPTY_EVENTS, ...STRING_EVENTS, POSITION_EVENT, ABSTRACT_EVENT] as const;

export const ACCESSIBILITY_ACTION_NUMBER_KEY = ['zoom', 'letter-spacing', 'line-height', 'saturation'] as const;
export const ACCESSIBILITY_ACTION_BOOLEAN_KEY = [
    'underline',
    'contrasted',
    'inverted',
    'disable-animations',
    'dyslexic',
    'enlarge-cursor',
    'hide-media',
    'show-line',
    'text-to-speech',
    'ad',
    'bl',
    'cal',
    'cb',
    'ds',
    'ep',
    'lv',
    'mi',
] as const;
type NumberKey = (typeof ACCESSIBILITY_ACTION_NUMBER_KEY)[number];
type BooleanKey = (typeof ACCESSIBILITY_ACTION_BOOLEAN_KEY)[number];

export type AccessibilityActionKey = NumberKey | BooleanKey;
export type ActionValue<K extends AccessibilityActionKey> = K extends NumberKey ? number : boolean;

interface IncomingEventBooleanPayload {
    value: boolean;
}
interface IncomingEventNumberPayload {
    value: number;
}
interface IncomingEventStringPayload {
    value: string;
}
interface IncomingEventPositionPayload {
    value: 'left' | 'right';
}

interface IncomingEventAbstractPayload {
    value: number | boolean;
    type: AccessibilityWidgetIncomingBooleanEvent | AccessibilityWidgetIncomingNumberEvent;
}

type AccessibilityWidgetIncomingBooleanEvent = (typeof BOOLEAN_EVENTS)[number];
type AccessibilityWidgetIncomingNumberEvent = (typeof NUMBER_EVENTS)[number];
type AccessibilityWidgetIncomingStringEvent = (typeof STRING_EVENTS)[number];
type AccessibilityWidgetIncomingEmptyEvent = (typeof EMPTY_EVENTS)[number];
type AccessibilityWidgetIncomingPositionEvent = typeof POSITION_EVENT;
type AccessibilityWidgetIncomingAbstractEvent = typeof ABSTRACT_EVENT;

export type AccessibilityWidgetWindowEvents = Record<AccessibilityWidgetIncomingBooleanEvent, CustomEvent<IncomingEventBooleanPayload>> &
    Record<AccessibilityWidgetIncomingNumberEvent, CustomEvent<IncomingEventNumberPayload>> &
    Record<AccessibilityWidgetIncomingStringEvent, CustomEvent<IncomingEventStringPayload>> &
    Record<AccessibilityWidgetIncomingEmptyEvent, CustomEvent> &
    Record<AccessibilityWidgetIncomingPositionEvent, CustomEvent<IncomingEventPositionPayload>> &
    Record<AccessibilityWidgetIncomingAbstractEvent, CustomEvent<IncomingEventAbstractPayload>>;

export type AccessibilityWidgetIncomingEvent = (typeof ACCESSIBILITY_EVENTS)[number];
