import {
    ACCESSIBILITY_EVENTS,
    AccessibilityEvent,
    AccessibilityWidgetIncomingEvent
} from "./types"
import {loadWidgetScript} from "./loader"

declare global {
    interface Window {
        accessibility?: {
            emit: (event: string, payload?: any) => void
        };
    }
}

export class AccessibilitySDK {
    private loaded = false
    private loadPromise: Promise<void> | null = null
    private listeners: Map<string, Array<(detail: any) => void>> = new Map()
    private listenersAny: Array<(eventName: string, detail: any) => void> = []
    private domListenersAttached: Set<string> = new Set()

    init(token: string) {
        if (this.loadPromise) return this.loadPromise

        this.loadPromise = loadWidgetScript(token).then(() => {
            this.loaded = true
        });

        return this.loadPromise
    }

    ready(): Promise<void> {
        if (this.loaded) return Promise.resolve()
        if (this.loadPromise) return this.loadPromise
        return Promise.reject("Widget not initialized")
    }

    emit(event: AccessibilityEvent, payload?: any) {
        if (!window.accessibility) {
            console.warn("Widget not ready yet")
            return
        }
        window.accessibility.emit(event, payload)
    }

    on(eventName: AccessibilityWidgetIncomingEvent, callback: (detail: any) => void) {
        if (!ACCESSIBILITY_EVENTS.includes(eventName)) {
            console.warn(`Unknown accessibility event: ${eventName}`)
            return
        }

        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, [])
        }
        this.listeners.get(eventName)!.push(callback)

        if (!this.domListenersAttached.has(eventName)) {
            this.attachDomListener(eventName)
            this.domListenersAttached.add(eventName)
        }
    }

    onAny(callback: (eventName: string, detail: any) => void) {
        this.listenersAny.push(callback)

        ACCESSIBILITY_EVENTS.forEach(event => {
            if (!this.domListenersAttached.has(event)) {
                this.attachDomListener(event)
                this.domListenersAttached.add(event)
            }
        })
    }

    setLanguage = (lang: string) => this.emit("AccessibilityLanguageSet", lang)

    openMenu = () => this.emit("AccessibilityMenuOpen")

    closeMenu = () => this.emit("AccessibilityMenuClose")

    setContrast = (enabled: boolean) => this.emit("AccessibilityContrastSet", enabled)

    toggleContrast = () => this.emit("AccessibilityContrastToggle")

    toggleInvertColors = () => this.emit("AccessibilityInvertColorToggle")

    setInvertColors = (enabled: boolean) => this.emit("AccessibilityInvertColorSet", enabled)

    toggleUnderline = () => this.emit("AccessibilityUnderlineToggle")

    setUnderline = (enabled: boolean) => this.emit("AccessibilityUnderlineSet", enabled)

    setFontSize = (level: number) => this.emit("AccessibilityFontSizeSet", level)

    increaseFontSize = () => this.emit("AccessibilityFontSizeIncrease")

    decreaseFontSize = () => this.emit("AccessibilityFontSizeDecrease")

    increaseLetterSpacing = () => this.emit("AccessibilityLetterSpacingLevelUp")

    setLetterSpacing = (level: number) => this.emit("AccessibilityLetterSpacingSet", level)

    increaseLineHeight = () => this.emit("AccessibilityLineHeightLevelUp")

    setLineHeight = (level: number) => this.emit("AccessibilityLineHeightSet", level)

    increaseSaturation = () => this.emit("AccessibilitySaturationLevelUp")

    setSaturation = (level: number) => this.emit("AccessibilitySaturationSet", level)

    toggleTextToSpeech = () => this.emit("AccessibilityTextToSpeechToggle")

    setTextToSpeech = (enabled: boolean) => this.emit("AccessibilityTextToSpeechSet", enabled)

    toggleCursorEnlarge = () => this.emit("AccessibilityEnlargeCursorToggle")

    setCursorEnlarge = (enabled: boolean) => this.emit("AccessibilityEnlargeCursorSet", enabled)

    toggleHideMedia = () => this.emit("AccessibilityHideMediaToggle")

    setHideMedia = (enabled: boolean) => this.emit("AccessibilityHideMediaSet", enabled)

    toggleDisableAnimations = () => this.emit("AccessibilityDisableAnimationsToggle")

    setDisableAnimations = (enabled: boolean) => this.emit("AccessibilityDisableAnimationsSet", enabled)

    toggleReadingGuide = () => this.emit("AccessibilityShowLineToggle")

    setReadingGuide = (enabled: boolean) => this.emit("AccessibilityShowLineSet", enabled)

    toggleDyslexicFont = () => this.emit("AccessibilityDyslexicToggle")

    setDyslexicFont = (enabled: boolean) => this.emit("AccessibilityDyslexicSet", enabled)

    toggleProfileMotorImpaired = () => this.emit("AccessibilityProfileMotorImpairedToggle")

    setProfileMotorImpaired = (enabled: boolean) => this.emit("AccessibilityProfileMotorImpairedSet", enabled)

    toggleProfileLowVision = () => this.emit("AccessibilityProfileLowVisionToggle")

    setProfileLowVision = (enabled: boolean) => this.emit("AccessibilityProfileLowVisionSet", enabled)

    toggleProfileColorBlind = () => this.emit("AccessibilityProfileColorBlindToggle")

    setProfileColorBlind = (enabled: boolean) => this.emit("AccessibilityProfileColorBlindSet", enabled)

    toggleProfileDyslexia = () => this.emit("AccessibilityProfileDyslexiaToggle")

    setProfileDyslexia = (enabled: boolean) => this.emit("AccessibilityProfileDyslexiaSet", enabled)

    toggleProfileBlind = () => this.emit("AccessibilityProfileBlindToggle")

    setProfileBlind = (enabled: boolean) => this.emit("AccessibilityProfileBlindSet", enabled)

    toggleProfileEpileptic = () => this.emit("AccessibilityProfileEpilepticToggle")

    setProfileEpileptic = (enabled: boolean) => this.emit("AccessibilityProfileEpilepticSet", enabled)

    toggleProfileAdhd = () => this.emit("AccessibilityProfileAdhdToggle")

    setProfileAdhd = (enabled: boolean) => this.emit("AccessibilityProfileAdhdSet", enabled)

    toggleProfileCognitive = () => this.emit("AccessibilityProfileCognitiveAndLearningToggle")

    setProfileCognitive = (enabled: boolean) => this.emit("AccessibilityProfileCognitiveAndLearningSet", enabled)

    resetAll = () => this.emit("AccessibilityReset")

    onMenuOpen = (cb: any) => this.on("AccessibilityOnMenuOpen", cb)
    onMenuClose = (cb: any) => this.on("AccessibilityOnMenuClose", cb)
    onChangePosition = (cb: any) => this.on("AccessibilityOnChangePosition", cb)
    onChangeLanguage = (cb: any) => this.on("AccessibilityOnChangeLanguage", cb)

    onChangeOption = (cb: any) => this.on("AccessibilityOnChangeOption", cb)
    onChangeOptionContrast = (cb: any) => this.on("AccessibilityOnChangeOptionContrast", cb)
    onChangeOptionFontSize = (cb: any) => this.on("AccessibilityOnChangeOptionFontSize", cb)
    onChangeOptionInvertColor = (cb: any) => this.on("AccessibilityOnChangeOptionInvertColor", cb)
    onChangeOptionUnderline = (cb: any) => this.on("AccessibilityOnChangeOptionUnderline", cb)
    onChangeOptionDisableAnimations = (cb: any) => this.on("AccessibilityOnChangeOptionDisableAnimations", cb)
    onChangeOptionDyslexic = (cb: any) => this.on("AccessibilityOnChangeOptionDyslexic", cb)
    onChangeOptionEnlargeCursor = (cb: any) => this.on("AccessibilityOnChangeOptionEnlargeCursor", cb)
    onChangeOptionHideMedia = (cb: any) => this.on("AccessibilityOnChangeOptionHideMedia", cb)
    onChangeOptionLetterSpacing = (cb: any) => this.on("AccessibilityOnChangeOptionLetterSpacing", cb)
    onChangeOptionLineHeight = (cb: any) => this.on("AccessibilityOnChangeOptionLineHeight", cb)
    onChangeOptionSaturation = (cb: any) => this.on("AccessibilityOnChangeOptionSaturation", cb)
    onChangeOptionShowLine = (cb: any) => this.on("AccessibilityOnChangeOptionShowLine", cb)
    onChangeOptionTextToSpeech = (cb: any) => this.on("AccessibilityOnChangeOptionTextToSpeech", cb)

    onChangeProfile = (cb: any) => this.on("AccessibilityOnChangeProfile", cb)
    onChangeProfileAdhd = (cb: any) => this.on("AccessibilityOnChangeProfileAdhd", cb)
    onChangeProfileBlind = (cb: any) => this.on("AccessibilityOnChangeProfileBlind", cb)
    onChangeProfileCognitiveAndLearning = (cb: any) => this.on("AccessibilityOnChangeProfileCognitiveAndLearning", cb)
    onChangeProfileColorBlind = (cb: any) => this.on("AccessibilityOnChangeProfileColorBlind", cb)
    onChangeProfileDyslexia = (cb: any) => this.on("AccessibilityOnChangeProfileDyslexia", cb)
    onChangeProfileEpileptic = (cb: any) => this.on("AccessibilityOnChangeProfileEpileptic", cb)
    onChangeProfileLowVision = (cb: any) => this.on("AccessibilityOnChangeProfileLowVision", cb)
    onChangeProfileMotorImpaired = (cb: any) => this.on("AccessibilityOnChangeProfileMotorImpaired", cb)

    private dispatch(eventName: string, detail: any) {
        const hs = this.listeners.get(eventName)
        if (hs) hs.forEach(cb => cb(detail))

        this.listenersAny.forEach(cb => cb(eventName, detail))
    }

    private attachDomListener(eventName: AccessibilityWidgetIncomingEvent) {
        window.addEventListener(eventName, (event: any) => {
            this.dispatch(eventName, event.detail)
        })
    }
}

export const accessibility = new AccessibilitySDK()
