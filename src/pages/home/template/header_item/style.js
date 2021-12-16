const style = {
  color: "#181725",
  letterSpacing: 0.1,
  fontWeight: "bold",
}
export function useStyle(size = 16) {
  if ( size ) {
    return {
      ...style,
      fontSize: size,
      lineHeight: size +2,
    }
  }
}