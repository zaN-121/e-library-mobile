import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedBook, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedBook, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedBook, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.thumbnail)
              ? item.thumbnail
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.author}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedBook, item)} numberOfLines={4}>
          {item.name}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedBook, item)}>
            {item?.releaseYear} - 
          </Text>
          <Text style={styles.location}> {item.language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
