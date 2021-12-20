import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
    scroll_view: {
        width: '100%',
        height: '100%',
    },
    fixed_button_bottom: {
        width: "100%",
        padding: 25,
    },
    wrap_header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrap_content: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 30
    },
    wrap_quantity: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    wrap_price_quantity: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
    },
    // content
    accordion_children_content: {
        color: '#7C7C7C',
        fontSize: 13,
        lineHeight: 21,
        paddingBottom: 15,
    },
})