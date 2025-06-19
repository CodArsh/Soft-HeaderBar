# 📱 rn-soft-headerbar

A customizable, lightweight, and modern `HeaderBar` (AppBar) component for React Native. Built for simplicity and flexibility — no third-party dependencies required.

# 📸 Screenshots
![HeaderBar Demo](https://raw.githubusercontent.com/CodArsh/Soft-HeaderBar/main/src/demo.jpg)


---

## 🚀 Features

- Title and Subtitle support
- Back button
- Left/Right custom icons
- Optional search bar
- Centered title option
- Fully typed with TypeScript
- No external dependencies

---

## 📦 Installation
```bash
npm install rn-soft-headerbar
# or
yarn add rn-soft-headerbar
```

# 🧠 Usage
```
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeaderBar from 'rn-soft-headerbar';

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar
        title="My App"
        subTitle="Welcome!"
        showBackButton
        onBackPress={() => console.log('Back')}
        rightIcon={<Text>⚙️</Text>}
        onRightPress={() => console.log('Settings')}
        shadow
        centerTitle
        enableSearch
        searchValue={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={(val) => console.log('Search:', val)}
        onSearchClear={() => setSearchText('')}
      />
    </View>
  );
};

export default App;
```

# ⚙️ Props
| Prop Name            | Type                     | Default     | Description                                       |
| -------------------- | ------------------------ | ----------- | ------------------------------------------------- |
| `title`              | `string`                 | `""`        | Main title shown in the center or left.           |
| `subTitle`           | `string`                 | `undefined` | Optional subtitle shown below the title.          |
| `showBackButton`     | `boolean`                | `false`     | Whether to show a back arrow button.              |
| `onBackPress`        | `() => void`             | `undefined` | Callback when back button is pressed.             |
| `leftIcon`           | `React.ReactNode`        | `undefined` | Custom left-side icon (overrides back button).    |
| `onLeftPress`        | `() => void`             | `undefined` | Callback when `leftIcon` is pressed.              |
| `rightIcon`          | `React.ReactNode`        | `undefined` | Custom right-side icon (e.g., settings, profile). |
| `onRightPress`       | `() => void`             | `undefined` | Callback when `rightIcon` is pressed.             |
| `shadow`             | `boolean`                | `false`     | Adds subtle shadow under the HeaderBar.           |
| `centerTitle`        | `boolean`                | `false`     | Centers the title text.                           |
| `enableSearch`       | `boolean`                | `false`     | Replaces title with a search input field.         |
| `searchValue`        | `string`                 | `""`        | Controlled value for the search input.            |
| `onSearchTextChange` | `(text: string) => void` | `undefined` | Callback on search input text change.             |
| `onSearchSubmit`     | `(text: string) => void` | `undefined` | Callback when search is submitted.                |
| `onSearchClear`      | `() => void`             | `undefined` | Callback when search clear (×) button is pressed. |
| `backgroundColor`    | `string`                 | `#fff`      | Background color of the HeaderBar.                |
| `textColor`          | `string`                 | `#000`      | Color of title, subtitle, and icons.              |
| `style`              | `ViewStyle`              | `undefined` | Custom container style for HeaderBar.             |

---

# 📝 License
MIT © 2025 Arsil Malek