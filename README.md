# @dockcodes/accessibility-widget

Check our [Accessibility Widget](https://wcag.dock.codes/#wcag-open).

### Installation

```bash
npm install @dockcodes/accessibility-widget
```

or

```bash
yarn add @dockcodes/accessibility-widget
```

### Usage

```ts
import accessibility from '@dockcodes/accessibility-widget';

await accessibility.init('YOUR_TOKEN');

accessibility.setContrast(true);
accessibility.setLanguage('en');
accessibility.setFontSize(4);
accessibility.onMenuOpen(() => {
    console.log('Menu opened!');
});
console.log(accessibility.isContrast) // true | false
```

### Getters

| Method                   | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| `isContrast`             | Returns whether page contrast is enabled                |
| `isInvert`               | Returns whether color inversion is enabled              |
| `isUnderline`            | Returns whether link underlining is enabled             |
| `fontSizeScale`          | Returns the current font size (1–5)                     |
| `letterSpacingScale`     | Returns the current letter spacing level (1–5)          |
| `lineHeightScale`        | Returns the current line height (1–5)                   |
| `saturationScale`        | Returns the current color saturation level (1–3)        |
| `isTextToSpeech`         | Returns whether text-to-speech is enabled               |
| `isCursorEnlarge`        | Returns whether enlarged cursor is enabled              |
| `isHideMedia`            | Returns whether hiding embedded media is enabled        |
| `isDisableAnimations`    | Returns whether page animations are disabled            |
| `isReadingGuide`         | Returns whether reading guide is enabled                |
| `isDyslexicFont`         | Returns whether dyslexic-friendly font is enabled       |
| `isProfileMotorImpaired` | Returns whether motor impairment profile is enabled     |
| `isProfileLowVision`     | Returns whether low vision profile is enabled           |
| `isProfileColorBlind`    | Returns whether color blind profile is enabled          |
| `isProfileDyslexia`      | Returns whether dyslexia profile is enabled             |
| `isProfileBlind`         | Returns whether blind profile is enabled                |
| `isProfileEpileptic`     | Returns whether epilepsy-safe profile is enabled        |
| `isProfileAdhd`          | Returns whether ADHD profile is enabled                 |
| `isProfileCognitive`     | Returns whether cognitive & learning profile is enabled |


### Event triggers

| Method                                      | Description                                   |
| ------------------------------------------- | --------------------------------------------- |
| `toggleContrast()`                          | Toggles the page contrast                     |
| `setContrast(enabled: boolean)`             | Sets the page contrast on/off                 |
| `toggleInvertColors()`                      | Toggles color inversion                       |
| `setInvertColors(enabled: boolean)`         | Sets color inversion on/off                   |
| `toggleUnderline()`                         | Toggles link underlining                      |
| `setUnderline(enabled: boolean)`            | Enables/disables link underlining             |
| `setFontSize(level: number)`                | Sets the font size (1–5)                      |
| `increaseFontSize()`                        | Increases font size by 1                      |
| `decreaseFontSize()`                        | Decreases font size by 1                      |
| `increaseLetterSpacing()`                   | Increases letter spacing                      |
| `setLetterSpacing(level: number)`           | Sets letter spacing level (1–5)               |
| `increaseLineHeight()`                      | Increases line height                         |
| `setLineHeight(level: number)`              | Sets line height (1–5)                        |
| `increaseSaturation()`                      | Increases color saturation                    |
| `setSaturation(level: number)`              | Sets color saturation (1–3)                   |
| `toggleTextToSpeech()`                      | Toggles text-to-speech functionality          |
| `setTextToSpeech(enabled: boolean)`         | Enables/disables text-to-speech               |
| `toggleCursorEnlarge()`                     | Toggles enlarged cursor                       |
| `setCursorEnlarge(enabled: boolean)`        | Enables/disables enlarged cursor              |
| `toggleHideMedia()`                         | Toggles hiding embedded media                 |
| `setHideMedia(enabled: boolean)`            | Enables/disables hiding media                 |
| `toggleDisableAnimations()`                 | Toggles disabling page animations             |
| `setDisableAnimations(enabled: boolean)`    | Enables/disables animation disabling          |
| `toggleReadingGuide()`                      | Toggles reading guide (line highlighting)     |
| `setReadingGuide(enabled: boolean)`         | Enables/disables reading guide                |
| `toggleDyslexicFont()`                      | Toggles dyslexic-friendly font                |
| `setDyslexicFont(enabled: boolean)`         | Enables/disables dyslexic font                |
| `toggleProfileMotorImpaired()`              | Toggles motor impairment profile              |
| `setProfileMotorImpaired(enabled: boolean)` | Enables/disables motor impairment profile     |
| `toggleProfileLowVision()`                  | Toggles low vision profile                    |
| `setProfileLowVision(enabled: boolean)`     | Enables/disables low vision profile           |
| `toggleProfileColorBlind()`                 | Toggles color blind profile                   |
| `setProfileColorBlind(enabled: boolean)`    | Enables/disables color blind profile          |
| `toggleProfileDyslexia()`                   | Toggles dyslexia profile                      |
| `setProfileDyslexia(enabled: boolean)`      | Enables/disables dyslexia profile             |
| `toggleProfileBlind()`                      | Toggles blind profile                         |
| `setProfileBlind(enabled: boolean)`         | Enables/disables blind profile                |
| `toggleProfileEpileptic()`                  | Toggles epilepsy-safe profile                 |
| `setProfileEpileptic(enabled: boolean)`     | Enables/disables epilepsy-safe profile        |
| `toggleProfileAdhd()`                       | Toggles ADHD profile                          |
| `setProfileAdhd(enabled: boolean)`          | Enables/disables ADHD profile                 |
| `toggleProfileCognitive()`                  | Toggles cognitive & learning profile          |
| `setProfileCognitive(enabled: boolean)`     | Enables/disables cognitive & learning profile |
| `setLanguage(lang: string)`                 | Sets the widget language                      |
| `openMenu()`                                | Opens the accessibility menu                  |
| `closeMenu()`                               | Closes the accessibility menu                 |
| `resetAll()`                                | Resets all widget settings to default         |


### Event handlers

| Method                                    | Event                              |
| ----------------------------------------- | ---------------------------------- |
| `onMenuOpen(cb)`                          | on open accessibility menu         |
| `onMenuClose(cb)`                         | on closed accessibility menu       |
| `onChangeLanguage(cb)`                    | on change widget language          |
| `onChangePosition(cb)`                    | on change widget position          |
| `onChangeOption(cb)`                      | on change any of widget option     |
| `onChangeOptionContrast(cb)`              | on change contrast                 |
| `onChangeOptionFontSize(cb)`              | on change font size                |
| `onChangeOptionInvertColor(cb)`           | on change invert colors option     |
| `onChangeOptionUnderline(cb)`             | on change links decoration         |
| `onChangeOptionDisableAnimations(cb)`     | on disable or enable animations    |
| `onChangeOptionDyslexic(cb)`              | on enable or disable dyslexic font |
| `onChangeOptionEnlargeCursor(cb)`         | on change cursor size              |
| `onChangeOptionHideMedia(cb)`             | on hide or show media              |
| `onChangeOptionLetterSpacing(cb)`         | on change letter spacing           |
| `onChangeOptionLineHeight(cb)`            | on change line height              |
| `onChangeOptionSaturation(cb)`            | on change saturation               |
| `onChangeOptionShowLine(cb)`              | on enable or disable reading guide |
| `onChangeOptionTextToSpeech(cb)`          | on enable or disable TTS           |
| `onChangeProfile(cb)`                     | on change any profile              |
| `onChangeProfileAdhd(cb)`                 | on change ADHD profile             |
| `onChangeProfileBlind(cb)`                | on change Blind profile            |
| `onChangeProfileCognitiveAndLearning(cb)` | on change Cognitive profile        |
| `onChangeProfileColorBlind(cb)`           | on change Color blind profile      |
| `onChangeProfileDyslexia(cb)`             | on change Dyslexia profile         |
| `onChangeProfileEpileptic(cb)`            | on change Epilepsy profile         |
| `onChangeProfileLowVision(cb)`            | on change Low vision profile       |
| `onChangeProfileMotorImpaired(cb)`        | on change Motor impaired profile   |

### Google Tag Manager integration

```javascript
import accessibility from '@dockcodes/accessibility-widget';

await accessibility.init('YOUR_TOKEN');

accessibility.onChangeOption((data) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'AccessibilityChange',
        optionType: data.type,
        optionValue: data.value,
    });
});
```

### 🔑 Get Your Free Widget Token

👉 https://wcag.dock.codes/my-account/tokens/
