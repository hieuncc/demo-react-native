import { styles } from "./style"
const SearchField = () => {
  return (
    <View
      style={styles.container_view_field}  
    >
      <Image 
        source={require("./src/assets/search.png")}
      />
      <TextInput 
        placeholder="Search Store"
        style={styles.input} 
      />
    </View>
  )
}
export default SearchField