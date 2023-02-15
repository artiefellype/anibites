import { SafeAreaView, Text, View, StatusBar, Platform} from 'react-native';


const isAndroid = Platform.OS === 'android';
const topBarHeight = StatusBar.currentHeight;


const Main = () => {
  return (
    <>
        <SafeAreaView className={'flex-1 bg-[#fafafa]'}>
          <View className={isAndroid ? `mt-[${topBarHeight}] flex items-center justify-center`: "mt-0"}>
            <Text> AAA </Text>
          </View>
        </SafeAreaView>
    </>
  )
}

export default Main;