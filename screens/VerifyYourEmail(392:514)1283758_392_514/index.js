import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_392_515}>
        <View style={styles.View_392_517}>
          <View style={styles.View_392_518}>
            <View style={styles.View_392_519}>
              <Text style={styles.Text_392_519}>
                First, lets verify your email
              </Text>
            </View>
            <View style={styles.View_392_520}>
              <Text style={styles.Text_392_520}>
                Check younesjonathan@gmail.com to verify your account and get
                started.
              </Text>
            </View>
            <View style={styles.View_392_521}>
              <View style={styles.View_392_522}>
                <Text style={styles.Text_392_522}>Open inbox</Text>
              </View>
            </View>
            <View style={styles.View_392_523}>
              <View style={styles.View_392_524}>
                <Text style={styles.Text_392_524}>Resend email</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_392_542}>
        <View style={styles.View_392_543}>
          <Text style={styles.Text_392_543}> ImmoPro</Text>
        </View>
        <View style={styles.View_392_544}>
          <View style={styles.View_392_545} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8e3cd9a-87f0-4b9b-8478-40cae3712c2a"
            }}
            style={styles.ImageBackground_392_546}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 249, 1)" },
  View_2: { height: hp("130%") },
  View_392_515: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%")
  },
  View_392_517: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_392_518: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_519: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_392_519: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 17.95821762084961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_520: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_392_520: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 15.426183700561523,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_521: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_392_522: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.128133773803711,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2825626754760742,
    textTransform: "none"
  },
  View_392_523: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_524: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.128133773803711,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2825626754760742,
    textTransform: "none"
  },
  View_392_542: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%")
  },
  View_392_543: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_392_543: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 42.838172912597656,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_544: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_392_545: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(31, 41, 55, 1)"
  },
  ImageBackground_392_546: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
