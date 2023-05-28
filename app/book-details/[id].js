import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  BookAbout,
  BookFooter,
  BookTabs,
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetchById from "../../hook/useFetchById";
import { BorrowBook } from "../../services/borrowApi";

const tabs = ["About"];

const BookDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetchById(`book/${params.id}`);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);
  const [bookId, setBookId] = useState('')
  
  
  useEffect(() => {
    async function fetchBookId(){
      setBookId(params.id)
    }
    fetchBookId()
  }, [])

  const handleOnPress = () => {
    BorrowBook({
      bookId
    }).then((result)=>{
      if(result?.data?.code == 200){
        alert('Success borrowing book')
        router.push('home')
      }else{
        alert("Maximum borrowed is 4 book")
      }
    }).catch(err=>{
      console.error(err)
    })
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <View>
            <BookAbout
            name={data?.name ?? "No data provided"} 
            info={data?.name ?? "No data provided"}
            thumbnail={data?.thumbnail ?? 'Failed Load Picture'}
            author={data?.author ?? 'No data provided'}
            stock={data?.stock ?? 'No data provided'}
            category={data?.category.name ?? 'No data provided'}
            language={data?.language ?? 'No data provided'}
            releaseYear={data?.releaseYear ?? 'No data provided'}
            />

          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data?.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>

              <BookTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <BookFooter onPress={handleOnPress}/>
      </>
    </SafeAreaView>
  );
};

export default BookDetails;
