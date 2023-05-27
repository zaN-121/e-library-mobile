import { View, Text, Image } from "react-native";

import styles from "./about.style";
import { checkImageURL } from "../../../utils";

const About = ({ name, thumbnail, author, releaseYear, language, stock, category }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}> 
      <Image
      source={{
        uri: checkImageURL(thumbnail)
        ? thumbnail
        : ''
      }}
      style={styles.logoImage}
      />
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Title: {name}</Text>
        <Text style={styles.contextText}>Author: {author}</Text>
        <Text style={styles.contextText}>Language: {language}</Text>
        <Text style={styles.contextText}>Published: {releaseYear}</Text>
        <Text style={styles.contextText}>Category: {category}</Text>
        <Text style={styles.contextText}>Stock: {stock}</Text>
      </View>
    </View>
  );
};

export default About;
