namespace MidnightLizard.Colors
{
    /** Html element component */
    export enum Component
    {
        Background,
        Text,
        TextSelection,
        HighlightedText,
        Link,
        VisitedLink,
        TextShadow,
        Border,
        Scrollbar$Hover,
        Scrollbar$Normal,
        Scrollbar$Active,
        Image,
        SvgBackground,
        BackgroundImage,
        ButtonBackground,
        ButtonBorder
    }

    /**
     * ComponentShift
     */
    export class ComponentShift
    {
        Background: ColorShift;
        Text: ColorShift;
        TextSelection: ColorShift;
        HighlightedText: ColorShift;
        Link: ColorShift;
        VisitedLink: ColorShift;
        TextShadow: ColorShift;
        Border: ColorShift;
        Scrollbar$Hover: ColorShift;
        Scrollbar$Normal: ColorShift;
        Scrollbar$Active: ColorShift;
        Image: ColorShift;
        SvgBackground: ColorShift;
        BackgroundImage: ColorShift;
        ButtonBackground: ColorShift;
        ButtonBorder: ColorShift;
        constructor() { }
    }
}