import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';

interface HeaderBarProps {
    title?: string;
    subTitle?: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    rightIcon?: React.ReactNode;
    onRightPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    shadow?: boolean;
    centerTitle?: boolean;
    showBottomBorder?: boolean;

    // Search related props
    enableSearch?: boolean;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchTextChange?: (text: string) => void;
    onSearchSubmit?: (text: string) => void;
    onSearchClear?: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
    title = '',
    subTitle = '',
    showBackButton = false,
    onBackPress,
    rightIcon,
    onRightPress,
    backgroundColor = '#fff',
    textColor = '#000',
    shadow = false,
    centerTitle = false,
    showBottomBorder = true,
    enableSearch = false,
    searchPlaceholder = 'Search...',
    searchValue = '',
    onSearchTextChange,
    onSearchSubmit,
    onSearchClear,
}) => {
    const renderLeft = () => {
        if (!showBackButton) return <View style={{ width: 40 }} />;
        return (
            <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                <Text style={[styles.icon, { color: textColor }]}>←</Text>
            </TouchableOpacity>
        );
    };

    const renderRight = () => {
        if (!rightIcon) return <View style={{ width: 40 }} />;
        return (
            <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                {rightIcon}
            </TouchableOpacity>
        );
    };

    const renderTitle = () => {
        if (enableSearch) {
            return (
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder={searchPlaceholder}
                        placeholderTextColor="#888"
                        style={[styles.searchInput, { color: textColor }]}
                        value={searchValue}
                        onChangeText={onSearchTextChange}
                        returnKeyType="search"
                        onSubmitEditing={() => onSearchSubmit?.(searchValue || '')}
                    />
                    {searchValue?.length > 0 && (
                        <TouchableOpacity onPress={onSearchClear}>
                            <Text style={{ color: textColor, paddingHorizontal: 4 }}>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>
            );
        }
        return (
            <View>
                <Text
                    style={[
                        styles.title,
                        {
                            color: textColor,
                            textAlign: centerTitle ? 'center' : 'left',
                        },
                    ]}
                    numberOfLines={1}
                >
                    {title}

                </Text>
                {subTitle && <Text style={{ color: textColor, textAlign: centerTitle ? 'center' : 'left', }}>{subTitle}</Text>}
            </View>
        );
    };

    return (
        <View
            style={[
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
            ]}
        >
            {showBackButton && renderLeft()}
            <View style={styles.titleContainer}>{renderTitle()}</View>
            {renderRight()}
        </View>
    );
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
