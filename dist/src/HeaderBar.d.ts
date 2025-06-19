import React from 'react';
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
    enableSearch?: boolean;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchTextChange?: (text: string) => void;
    onSearchSubmit?: (text: string) => void;
    onSearchClear?: () => void;
}
declare const HeaderBar: React.FC<HeaderBarProps>;
export default HeaderBar;
