<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Font Family Plugin
The goal of this plugin is to offers an easy handling of SlateJS font family mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Font Family Plugin
```js
import React, { Component } from 'react'
import FontFamilyPlugin from 'slate-font-family-plugin'

const plugins = [
  FontFamilyPlugin()
]

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <Editor
        plugins={plugins}
        state={this.state.state}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
```

#### SlateJS Font Family Plugin Button
```js
import React, { Component } from 'react'
import { FontFamilyButton } from 'slate-font-family-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <FontFamilyButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Action  | Shortcut |
|--------------------------|---------|----------|
| ![Apple Logo][apple]     | Apply   | `⌘`+`j`  |
| ![Apple Logo][apple]     | Remove  | `⌘`+`i`  |
| ![Windows Logo][windows] | Apply   | `^`+`j`  |
| ![Windows Logo][windows] | Remove  | `^`+`i`  |

# API

| Target                     | Description                                                                      |
|----------------------------|----------------------------------------------------------------------------------|
| FontFamilySchema           | Schema object to configure the plugin.                                           |
| FontFamilyMark             | Component that holds the html that will wrap the content with font family style. |
| FontFamilyUtils            | Generic file that holds the util common functions.                               |
| FontFamilyButton           | Button component that have behaviour to wrap content with font family style.     |
| FontFamilyKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.        |

# TODO

- Make keyboard shortcut accepts customization;
- Add keyboard shortcut to apply font family to expanded selection;
- Add keyboard shortcut to remove font family from expanded selection;
- Add button to apply font family to expanded selection;
- Add button to remove font family from expanded selection;
- Add handle to manipulates collapsed selection to remove font family to anchor word;
- Add behaviour to show which font family have applied to collapsed selection;
- Add behaviour to show which font family have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
