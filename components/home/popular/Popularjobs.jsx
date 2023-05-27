import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import AnimatedLottieView from "lottie-react-native";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("book", {
    size: 20,
  });

  const [selectedBook, setSelectedBook] = useState();

  const handleCardPress = (item) => {
    router.push(`/book-details/${item.book_id}`);
    setSelectedBook(item.book_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Publication Year 2022</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <AnimatedLottieView
          autoPlay={true}
          style={{width: 100, height: 100}}
          source={require('../../../assets/images/97018-window10-style-login-loader.json')}
          />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedBook={selectedBook}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.book_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
