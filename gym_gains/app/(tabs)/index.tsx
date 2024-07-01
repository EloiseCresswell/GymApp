import { Image, StyleSheet, Platform, Dimensions, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/landing_women_workout.png")}
          style={styles.landingImage}
        />
      }
    >
      <View style={styles.wholeText}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.titleHeader}>
            Consistency is key to progress. Don't give up!
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.stepContainerText}>
            This app is designed to monitor your progress and what you've
            achieved everyday!
          </ThemedText>
          <ThemedText type="subtitle" style={styles.stepContainerText}>
            As well as this, we will be able to work with you to be able to
            advise what types of workouts are best based on your menstrual cycle
            so you can continue to smash those gym goals!
          </ThemedText>
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  landingImage: {
    position: "absolute",
    width: "100%",
  },
  wholeText: {
    width: Dimensions.get("window").width,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  titleHeader: {
    color: "rgb(79, 48, 201)",
  },
  stepContainer: {
    marginTop: 40,
    backgroundColor: "red",
  },
  stepContainerText: {
    textAlign: "left",
    padding: 20,
  },
});
