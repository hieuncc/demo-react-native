import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container_view_field: {
    // SIZE
    width: "100%", 
    // SPACE
    paddingLeft: 16,
    paddingRight: 16,
    // THEME
    backgroundColor: "rgba(242, 243, 242, 1)",
    // BORDER
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(242, 243, 242, 1)",
    // FLEX
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "600",
    color: "#7C7C7C"
  }
});
