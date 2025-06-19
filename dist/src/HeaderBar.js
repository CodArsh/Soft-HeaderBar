import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform, Dimensions, } from 'react-native';
const HeaderBar = ({ title = '', subTitle = '', showBackButton = false, onBackPress, rightIcon, onRightPress, backgroundColor = '#fff', textColor = '#000', shadow = false, centerTitle = false, showBottomBorder = true, enableSearch = false, searchPlaceholder = 'Search...', searchValue = '', onSearchTextChange, onSearchSubmit, onSearchClear, }) => {
    const renderLeft = () => {
        if (!showBackButton)
            return React.createElement(View, { style: { width: 40 } });
        return (React.createElement(TouchableOpacity, { onPress: onBackPress, style: styles.iconContainer },
            React.createElement(Text, { style: [styles.icon, { color: textColor }] }, "\u2190")));
    };
    const renderRight = () => {
        if (!rightIcon)
            return React.createElement(View, { style: { width: 40 } });
        return (React.createElement(TouchableOpacity, { onPress: onRightPress, style: styles.iconContainer }, rightIcon));
    };
    const renderTitle = () => {
        if (enableSearch) {
            return (React.createElement(View, { style: styles.searchContainer },
                React.createElement(TextInput, { placeholder: searchPlaceholder, placeholderTextColor: "#888", style: [styles.searchInput, { color: textColor }], value: searchValue, onChangeText: onSearchTextChange, returnKeyType: "search", onSubmitEditing: () => onSearchSubmit?.(searchValue || '') }),
                searchValue?.length > 0 && (React.createElement(TouchableOpacity, { onPress: onSearchClear },
                    React.createElement(Text, { style: { color: textColor, paddingHorizontal: 4 } }, "\u2715")))));
        }
        return (React.createElement(View, null,
            React.createElement(Text, { style: [
                    styles.title,
                    {
                        color: textColor,
                        textAlign: centerTitle ? 'center' : 'left',
                    },
                ], numberOfLines: 1 }, title),
            subTitle && React.createElement(Text, { style: { color: textColor, textAlign: centerTitle ? 'center' : 'left', } }, subTitle)));
    };
    return (React.createElement(View, { style: [
            styles.container,
            {
                paddingVertical: Dimensions.get('screen').width / 40,
                backgroundColor,
                shadowColor: shadow ? '#000' : 'transparent',
                borderBottomWidth: showBottomBorder ? 0.5 : 0,
                borderBottomColor: '#ccc',
                shadowOpacity: shadow ? 0.1 : 0,
                shadowOffset: { width: 0, height: shadow ? 2 : 0 },
                shadowRadius: shadow ? 2 : 0,
                elevation: shadow ? 4 : 0,
            },
        ] },
        showBackButton && renderLeft(),
        React.createElement(View, { style: styles.titleContainer }, renderTitle()),
        renderRight()));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 36,
    },
    searchInput: {
        flex: 1,
        paddingVertical: Platform.OS === 'ios' ? 6 : 0,
        fontSize: 16,
    },
});
export default HeaderBar;
