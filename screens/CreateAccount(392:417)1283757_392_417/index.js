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
      <View style={styles.View_392_418}>
        <View style={styles.View_392_419}>
          <View style={styles.View_392_420}>
            <View style={styles.View_392_421}>
              <View style={styles.View_392_422}>
                <View style={styles.View_392_423}>
                  <View style={styles.View_392_424}>
                    <View style={styles.View_392_425}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea0d093f-2cd6-4fb1-baca-430a68990a5a"
                        }}
                        style={styles.ImageBackground_392_426}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_392_430}>
                <View style={styles.View_392_431}>
                  <Text style={styles.Text_392_431}>
                    Scheduling for your team
                  </Text>
                </View>
                <View style={styles.View_392_432}>
                  <Text style={styles.Text_392_432}>
                    Enable your team to be booked easily with scheduling
                    ensuring even distribution of calls and Collective
                    availability making it easy to get everyone on when needed.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_392_433}>
          <View style={styles.View_392_434}>
            <View style={styles.View_392_435}>
              <View style={styles.View_392_436}>
                <View style={styles.View_392_437}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f34aafba-ac65-4eec-bcee-d24a27153e99"
                    }}
                    style={styles.ImageBackground_392_438}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_392_443}>
            <View style={styles.View_392_444}>
              <Text style={styles.Text_392_444}>Share your ImmoPro link</Text>
            </View>
            <View style={styles.View_392_445}>
              <Text style={styles.Text_392_445}>
                Share your short ImmoPro personal link and make it incredibly
                easyy for people to book a meeting at a time that works for both
                of you!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_392_446}>
          <View style={styles.View_392_447}>
            <View style={styles.View_392_448}>
              <View style={styles.View_392_449}>
                <View style={styles.View_392_450}>
                  <View style={styles.View_392_451}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99e2d8a1-8297-4536-b970-888fc2e9fe95"
                      }}
                      style={styles.ImageBackground_392_452}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_392_457}>
              <View style={styles.View_392_458}>
                <Text style={styles.Text_392_458}>
                  Set your calendar availability
                </Text>
              </View>
              <View style={styles.View_392_459}>
                <Text style={styles.Text_392_459}>
                  Set repeating schedules for the times of the day and week that
                  you want people to be able to book viewings with you.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_392_513}>
          <View style={styles.View_392_499}>
            <Text style={styles.Text_392_499}> ImmoPro</Text>
          </View>
          <View style={styles.View_392_500}>
            <View style={styles.View_392_501} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab17f9e1-f37b-4d2f-b2b1-a1c0cffa703a"
              }}
              style={styles.ImageBackground_392_502}
            />
          </View>
        </View>
        <View style={styles.View_392_472}>
          <View style={styles.View_392_473}>
            <View style={styles.View_392_474}>
              <Text style={styles.Text_392_474}>Create an ImmoPro account</Text>
            </View>
            <View style={styles.View_392_475}>
              <Text style={styles.Text_392_475}>Access your account</Text>
            </View>
            <View style={styles.View_392_476}>
              <View style={styles.View_392_477}>
                <Text style={styles.Text_392_477}>Email</Text>
              </View>
              <View style={styles.View_392_478}>
                <View style={styles.View_392_479}>
                  <Text style={styles.Text_392_479}>Enter your email</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_392_480}>
              <View style={styles.View_392_481}>
                <Text style={styles.Text_392_481}>Full Name</Text>
              </View>
              <View style={styles.View_392_482}>
                <View style={styles.View_392_483}>
                  <Text style={styles.Text_392_483}>Enter your name</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_392_484}>
              <View style={styles.View_392_485}>
                <Text style={styles.Text_392_485}>Country</Text>
              </View>
              <View style={styles.View_392_486}>
                <View style={styles.View_392_487}>
                  <Text style={styles.Text_392_487}>Enter your country</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_392_488}>
              <View style={styles.View_392_489}>
                <Text style={styles.Text_392_489}>Password</Text>
              </View>
              <View style={styles.View_392_490}>
                <View style={styles.View_392_491}>
                  <Text style={styles.Text_392_491}>Enter your password</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_392_492}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67dc1198-3cf1-40ac-b057-5050825a95c4"
              }}
              style={styles.ImageBackground_392_493}
            />
            <View style={styles.View_392_495}>
              <Text style={styles.Text_392_495}>
                Don&#39;t email me about product updates. If this box is left
                unticked, ImmoPro will occasionally send helpful and relevant
                emails. You can unsubscribe at any time.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_392_496}>
            <View style={styles.View_392_497}>
              <Text style={styles.Text_392_497}>Create an account</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 249, 1)" },
  View_2: { height: hp("118%") },
  View_392_418: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%")
  },
  View_392_419: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_420: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_421: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_422: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_423: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 246, 255, 1)"
  },
  View_392_424: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_425: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_392_426: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_392_430: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_431: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_431: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 13.151451110839844,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_432: {
    width: wp("36%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_432: {
    color: "rgba(75, 85, 99, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_433: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_434: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_435: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 246, 255, 1)"
  },
  View_392_436: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_437: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_392_438: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_392_443: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_444: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_444: {
    color: "rgba(45, 55, 72, 1)",
    fontSize: 13.151451110839844,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_445: {
    width: wp("35%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_445: {
    color: "rgba(75, 85, 99, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_446: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_447: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_448: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_449: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 246, 255, 1)"
  },
  View_392_450: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_451: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_392_452: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_392_457: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_458: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_458: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 13.151451110839844,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_459: {
    width: wp("36%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_459: {
    color: "rgba(75, 85, 99, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_513: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_392_499: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_392_499: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 42.838172912597656,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_500: {
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
  View_392_501: {
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
  ImageBackground_392_502: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_392_472: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_392_473: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_474: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_392_474: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 25.40559959411621,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_475: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_392_475: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 15.740663528442383,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_476: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_477: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_477: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_478: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_479: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_479: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 8.767634391784668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_480: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_481: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_481: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_482: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_483: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_483: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 8.767634391784668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_484: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_485: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_485: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_486: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_487: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_487: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 8.767634391784668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_488: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_392_489: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_489: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_490: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_392_491: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_491: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 8.767634391784668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_492: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_392_493: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_495: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_495: {
    color: "rgba(31, 41, 55, 1)",
    fontSize: 9.562240600585938,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_496: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_392_497: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_392_497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.35684585571289,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2871369171142578,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
