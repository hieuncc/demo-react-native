const style = {
  letterSpacing: 0.1,
  fontWeight: "bold",
}
export function useStyle(size = 16, color = "#181725") {
  if ( size ) {
    return {
      ...style,
      fontSize: size,
      lineHeight: size +2,
      color: color
    }
  }
}