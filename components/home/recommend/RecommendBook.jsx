import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./recommendbook.style";
import RecommendBookCard from "../../common/cards/recommendbook/RecommendBookCard";
import useFetch from "../../../hook/useFetch";
import AnimatedLottieView from "lottie-react-native";

const RecommendBook = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("book", {
    size: 30
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommend Books</Text>
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
          data?.map((book) => (
            <RecommendBookCard
              book={book}
              key={`recommend-book-${book.bookId}`}
              handleNavigate={() => router.push(`/book-details/${book.bookId}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default RecommendBook;
