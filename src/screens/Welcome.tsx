import React, { useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {
  View, Text, Image, Animated, Dimensions, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Screen, Line, Button } from "../components";

export type WelcomeProps = {
  baseSlide?: number;
};

const anim = new Animated.ValueXY({ x: 0, y: 0 });

const Welcome = ({ baseSlide = 2 }: WelcomeProps) => {
  const navigation = useNavigation();
  const [slideNumber, setSlideNumber] = useState(baseSlide);

  const slideAnimation = (position: string) => {
    setSlideNumber(position === "left" ?
      (slideNumber - 1) : (slideNumber + 1));
    Animated.timing(anim, {
      useNativeDriver: false,
      toValue: {
        x: -Dimensions.get('window').width * (position === "left" ?
          (slideNumber - 1) : (slideNumber + 1)),
        y: 0
      }, duration: 300
    }).start();
  }

  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
          index: 1,
          routes: [{name: 'BottomNavigator'}],
      })
    );
  }

  return (
    <Screen backgroundColor='white' style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={{ fontSize: 24 }}>Florian Lemyre{"\n"}</Text>
          Développeur Web et Mobile
        </Text>
        <Text style={styles.phone}>
          06.21.23.04.37
        </Text>
      </View>

      <Line width={Dimensions.get("window").width - 32} color="#B154DE" height={2} />

      <View style={styles.animationHolder}>

        <TouchableOpacity style={styles.touchLeft}
          onPressIn={() => slideNumber > 0 ? slideAnimation("left") : null} />
        <TouchableOpacity style={styles.touchRight}
          onPressIn={() => slideNumber < 2 ? slideAnimation("right") : null} />

        <Animated.View style={[styles.pictureHolder, anim.getLayout()]}>
          <View style={styles.picture}>
            <Image source={require("../assets/images/welcome.png")} 
                style={{height: 180, width: 180, alignSelf: "center"}}
                resizeMode="contain" />
            <Text style={styles.textHolder}>
              Bonjour et bienvenue sur mon application bac à sable.
              Si vous lisez ça,{" "}
              <Text style={{ fontWeight: "bold" }}> 
                je suis probablement à la recherche d'un travail.{" "}
              </Text>
              Cette application sert à refléter mes compétences 
              via différentes fonctions.
            </Text>
          </View>

          <View style={styles.picture}>
            <View style={styles.logosHolder}>
              <Image source={require("../assets/images/React.png")} 
                style={{height: 120, width: 120}} resizeMode="contain" />
              <Image source={require("../assets/images/TypeScript.png")} 
                style={{height: 120, width: 120}} resizeMode="contain" />
            </View>
            <Text style={styles.textHolder}>
              J'ai créé cette application en utilisant 
              React Native où j'ai 3 ans d'expérience
              et je m'essaie pour la première fois à TypeScript.
            </Text>
          </View>

          <View style={styles.picture}>
            <Text style={[styles.textHolder, {marginTop: 16}]}>
              En espérant que vous soyez intéressé, 
              vous pouvez trouver mon code sur Github 
              si ce n'est pas déjà fait. N'hésitez pas à m'appeler
              si vous avez des questions.
            </Text>
          </View>
        </Animated.View>

      </View>

      {slideNumber === 2 ? 
        <React.Fragment>
          <TouchableOpacity style={styles.clipboard} onPress={() => {
            Clipboard.setString("https://github.com/FalaiseSol/cvapp")}}>
            <Text style={styles.link}>
              https://github.com/FalaiseSol/cvapp
            </Text>
            <Icon name="clipboard" size={20} color="black" />
          </TouchableOpacity>
          <Button onPress={() => { 
            Linking.openURL("https://github.com/FalaiseSol/cvapp");
          }} text="GitHub" style={[styles.button, {backgroundColor: "#202020"}]} />
        </React.Fragment>
      : null}

      <View style={styles.dotsHolder}>
        <View style={[styles.dot, {
          backgroundColor: slideNumber === 0 ?
            "#B154DE" : "#CCCCCC"
        }]} />
        <View style={[styles.dot, {
          backgroundColor: slideNumber === 1 ?
            "#B154DE" : "#CCCCCC"
        }]} />
        <View style={[styles.dot, {
          backgroundColor: slideNumber === 2 ?
            "#B154DE" : "#CCCCCC"
        }]} />
      </View>
      
      <Button text={slideNumber === 2 ? "Accueil" : "Suivant"} style={styles.button}
        onPress={() => slideNumber === 2 ? goHome() : slideAnimation("right")} />

    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 16,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flexShrink: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
  },
  phone: {
    fontWeight: "bold",
    textAlignVertical: "bottom",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  animationHolder: {
    flex: 1,
    height: 200,
    overflow: "hidden",
  },
  textHolder: {
    fontSize: 19,
    lineHeight: 33,
    letterSpacing: 0.6,
    color: "black",
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  clipboard: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent:"space-between",
  },
  link: {
    fontSize: 16,
    color:"blue",
  },
  touchLeft: {
    position: "absolute",
    width: Dimensions.get('window').width * 0.5,
    height: "100%",
  },
  touchRight: {
    position: "absolute",
    width: Dimensions.get('window').width * 0.5,
    left: Dimensions.get('window').width * 0.5,
    height: "100%",
  },
  pictureHolder: {
    zIndex: -100,
    height: "100%",
    width: Dimensions.get('window').width * 3,
    flexDirection: "row",
    alignItems: "center",
  },
  picture: {
    height: "100%",
    width: Dimensions.get('window').width,
  },
  logosHolder: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
  },
  button: {
    marginHorizontal: 16,
  },
  dotsHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  dot: {
    height: 10,
    width: 10,
    marginHorizontal: 6,
    borderRadius: 9999,
  },
});

export default Welcome;