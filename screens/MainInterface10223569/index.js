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
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_113_0} />
      <View style={styles.View_113_1} />
      <View style={styles.View_201_14}>
        <Text style={styles.Text_201_14}>1505</Text>
      </View>
      <View style={styles.View_201_15}>
        <Text style={styles.Text_201_15}>35</Text>
      </View>
      <View style={styles.View_201_8}>
        <Text style={styles.Text_201_8}>
          10 Trending Nutrition Research Articles of 2021
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a49/0961/0e7d5ef124c7acbbd378c6a1eb8444ae"
        }}
        style={styles.ImageBackground_201_7}
      />
      <View style={styles.View_201_2} />
      <View style={styles.View_113_2} />
      <View style={styles.View_201_3}>
        <Text style={styles.Text_201_3}>all</Text>
      </View>
      <View style={styles.View_201_4}>
        <Text style={styles.Text_201_4}>consultants</Text>
      </View>
      <View style={styles.View_201_5}>
        <Text style={styles.Text_201_5}>users</Text>
      </View>
      <View style={styles.View_201_6}>
        <Text style={styles.Text_201_6}>recipes</Text>
      </View>
      <View style={styles.View_113_37}>
        <View style={styles.View_113_11}>
          <Text style={styles.Text_113_11}>
            As 2020 begins, we took a look back at nutrition in the news during
            2019. The most popular diet search according to Google was
            intermittent fasting, which we can attest was a popular search term
            in American Society for Nutrition’s content as well. But there’s
            much more to nutrition than trending diets and many more areas in
            the field of nutrition were researched and discussed this past year.
            Below we share 10 articles from ASN’s four peer reviewed journals
            that received high levels of attention in the news and social media.
          </Text>
        </View>
      </View>
      <View style={styles.View_201_24}>
        <View style={styles.View_201_25}>
          <Text style={styles.Text_201_25}>
            Made as per recipe, prepared about an hour early, covered and
            refrigerated. Very good, flavours melded with little astringency.
            Definitely will be having again.
          </Text>
        </View>
      </View>
      <View style={styles.View_201_26}>
        <View style={styles.View_201_27}>
          <Text style={styles.Text_201_27}>
            tuna, lettuce, tomatoes, onion, cucumber, capsicum, feta, olives
          </Text>
        </View>
      </View>
      <View style={styles.View_201_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ac0/7b8b/70e73bb3d1cd46f2a172dceee4d2283f"
          }}
          style={styles.ImageBackground_113_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aff0/a488/a1143043d5a870cc39aef0b6815a3e9f"
          }}
          style={styles.ImageBackground_113_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edfc/1260/2670021e02696693a3e8e29a2ce69224"
          }}
          style={styles.ImageBackground_113_49}
        />
      </View>
      <View style={styles.View_114_48} />
      <View style={styles.View_114_26}>
        <Text style={styles.Text_114_26}>STATUS</Text>
      </View>
      <View style={styles.View_114_27}>
        <Text style={styles.Text_114_27}>New Recipe</Text>
      </View>
      <View style={styles.View_114_29}>
        <Text style={styles.Text_114_29}>Name:</Text>
      </View>
      <View style={styles.View_114_40} />
      <View style={styles.View_114_41}>
        <Text style={styles.Text_114_41}>save draft</Text>
      </View>
      <View style={styles.View_116_15} />
      <View style={styles.View_116_16}>
        <Text style={styles.Text_116_16}>save and publish</Text>
      </View>
      <View style={styles.View_204_2} />
      <View style={styles.View_204_3}>
        <Text style={styles.Text_204_3}>add 1 more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/552f/5bd7/fe9aef7800cf2d6da750e7ff33e0a8e0"
        }}
        style={styles.ImageBackground_114_42}
      />
      <View style={styles.View_114_43} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2222/ac27/337921d97d602bc0d7077608dbb0e21a"
        }}
        style={styles.ImageBackground_114_50}
      />
      <View style={styles.View_114_51}>
        <Text style={styles.Text_114_51}>UPLOAD PICTURE</Text>
      </View>
      <View style={styles.View_114_53} />
      <View style={styles.View_114_63}>
        <Text style={styles.Text_114_63}>max 160</Text>
      </View>
      <View style={styles.View_116_3}>
        <Text style={styles.Text_116_3}>ingredients:</Text>
      </View>
      <View style={styles.View_116_14}>
        <Text style={styles.Text_116_14}>food preparation:</Text>
      </View>
      <View style={styles.View_116_4} />
      <View style={styles.View_116_5}>
        <Text style={styles.Text_116_5}>write your ingredient 1</Text>
      </View>
      <View style={styles.View_116_6} />
      <View style={styles.View_116_7}>
        <Text style={styles.Text_116_7}>write your ingredient 2</Text>
      </View>
      <View style={styles.View_116_8} />
      <View style={styles.View_116_9}>
        <Text style={styles.Text_116_9}>write your ingredient 3</Text>
      </View>
      <View style={styles.View_116_12} />
      <View style={styles.View_116_13}>
        <Text style={styles.Text_116_13}>Whrie description </Text>
      </View>
      <View style={styles.View_116_2}>
        <View style={styles.View_114_70}>
          <View style={styles.View_114_59}>
            <Text style={styles.Text_114_59}>veg</Text>
          </View>
          <View style={styles.View_114_60}>
            <Text style={styles.Text_114_60}>meat</Text>
          </View>
          <View style={styles.View_114_61}>
            <Text style={styles.Text_114_61}>carb</Text>
          </View>
          <View style={styles.View_114_62}>
            <Text style={styles.Text_114_62}>alcho</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f83e/fff6/2a7acc30e871ec553b47d531029f5e2e"
            }}
            style={styles.ImageBackground_114_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c67b/967e/5b22241d85ce801a581ed942f34eb4b4"
            }}
            style={styles.ImageBackground_114_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d5b/a678/69e2a92474e4f430e81e75b9f3c8f01c"
            }}
            style={styles.ImageBackground_114_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d094/47c3/55671d0bfed4c2791fe23ebaf063ba54"
            }}
            style={styles.ImageBackground_114_58}
          />
          <View style={styles.View_114_64} />
          <View style={styles.View_114_65} />
          <View style={styles.View_114_66} />
        </View>
      </View>
      <View style={styles.View_204_4} />
      <View style={styles.View_204_5}>
        <Text style={styles.Text_204_5}>STATUS</Text>
      </View>
      <View style={styles.View_204_6}>
        <Text style={styles.Text_204_6}>New post</Text>
      </View>
      <View style={styles.View_204_7}>
        <Text style={styles.Text_204_7}>Name:</Text>
      </View>
      <View style={styles.View_204_8} />
      <View style={styles.View_204_9}>
        <Text style={styles.Text_204_9}>save draft</Text>
      </View>
      <View style={styles.View_204_10} />
      <View style={styles.View_204_11}>
        <Text style={styles.Text_204_11}>save and publish</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/552f/5bd7/fe9aef7800cf2d6da750e7ff33e0a8e0"
        }}
        style={styles.ImageBackground_204_14}
      />
      <View style={styles.View_204_15} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2222/ac27/337921d97d602bc0d7077608dbb0e21a"
        }}
        style={styles.ImageBackground_204_16}
      />
      <View style={styles.View_204_17}>
        <Text style={styles.Text_204_17}>UPLOAD PICTURE</Text>
      </View>
      <View style={styles.View_204_18} />
      <View style={styles.View_204_19}>
        <Text style={styles.Text_204_19}>max 160</Text>
      </View>
      <View style={styles.View_204_21}>
        <Text style={styles.Text_204_21}>Article</Text>
      </View>
      <View style={styles.View_204_43}>
        <Text style={styles.Text_204_43}>visibility:</Text>
      </View>
      <View style={styles.View_204_44}>
        <Text style={styles.Text_204_44}>all</Text>
      </View>
      <View style={styles.View_204_45}>
        <Text style={styles.Text_204_45}>only consultants</Text>
      </View>
      <View style={styles.View_204_28} />
      <View style={styles.View_204_29}>
        <Text style={styles.Text_204_29}>Whrie text here and publish</Text>
      </View>
      <View style={styles.View_204_30}>
        <View style={styles.View_204_31}>
          <View style={styles.View_204_32}>
            <Text style={styles.Text_204_32}>veg</Text>
          </View>
          <View style={styles.View_204_33}>
            <Text style={styles.Text_204_33}>meat</Text>
          </View>
          <View style={styles.View_204_34}>
            <Text style={styles.Text_204_34}>carb</Text>
          </View>
          <View style={styles.View_204_35}>
            <Text style={styles.Text_204_35}>alcho</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f83e/fff6/2a7acc30e871ec553b47d531029f5e2e"
            }}
            style={styles.ImageBackground_204_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c67b/967e/5b22241d85ce801a581ed942f34eb4b4"
            }}
            style={styles.ImageBackground_204_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d5b/a678/69e2a92474e4f430e81e75b9f3c8f01c"
            }}
            style={styles.ImageBackground_204_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d094/47c3/55671d0bfed4c2791fe23ebaf063ba54"
            }}
            style={styles.ImageBackground_204_39}
          />
          <View style={styles.View_204_40} />
          <View style={styles.View_204_41} />
          <View style={styles.View_204_42} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6506/127c/14e1a30d21d3e046a0ba603df89b82cb"
        }}
        style={styles.ImageBackground_201_11}
      />
      <View style={styles.View_201_17}>
        <Text style={styles.Text_201_17}>Mediterranean tuna salad</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe3d/8cfb/9d326823cbd323a5d1ba384781903b42"
        }}
        style={styles.ImageBackground_201_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1518/8f34/ca5a8d39fdd2bfbae1c1f860e58cd871"
        }}
        style={styles.ImageBackground_201_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4d/a1a1/ff1033316ac174a45ad6f72f07f6c856"
        }}
        style={styles.ImageBackground_201_13}
      />
      <View style={styles.View_201_28}>
        <Text style={styles.Text_201_28}>1505</Text>
      </View>
      <View style={styles.View_201_35}>
        <Text style={styles.Text_201_35}>12</Text>
      </View>
      <View style={styles.View_201_29}>
        <Text style={styles.Text_201_29}>35</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1518/8f34/ca5a8d39fdd2bfbae1c1f860e58cd871"
        }}
        style={styles.ImageBackground_201_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4d/a1a1/ff1033316ac174a45ad6f72f07f6c856"
        }}
        style={styles.ImageBackground_201_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2d4/4729/b7398b3c7ad2df4e022d002a03da717b"
        }}
        style={styles.ImageBackground_201_16}
      />
      <View style={styles.View_201_22}>
        <Text style={styles.Text_201_22}>Review</Text>
      </View>
      <View style={styles.View_201_23}>
        <Text style={styles.Text_201_23}>Inngredients</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0834/ffd7/d24279682f5e8593a60cca4d0eb7e79e"
        }}
        style={styles.ImageBackground_201_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d2/d50a/82d8766f36447eedc281e319638a92c4"
        }}
        style={styles.ImageBackground_201_34}
      />
      <View style={styles.View_204_0} />
      <View style={styles.View_204_1}>
        <Text style={styles.Text_204_1}>READ MORE</Text>
      </View>
      <View style={styles.View_13_9}>
        <View style={styles.View_20_4} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b9/902c/7cdc8dddf4a6cd16986aec5938064749"
          }}
          style={styles.ImageBackground_13_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b975/25b5/f21422adb54a81876d1c87aff48d7648"
          }}
          style={styles.ImageBackground_13_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/832c/1240/a44999449346a2ec5e7b35d8abc53a32"
          }}
          style={styles.ImageBackground_13_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/026d/22d2/3d264c5242a228d16c9890f8067eb623"
          }}
          style={styles.ImageBackground_13_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e072/f53c/69cc777045e5eee1efcc9028a91f2407"
          }}
          style={styles.ImageBackground_13_8}
        />
        <View style={styles.View_13_10}>
          <Text style={styles.Text_13_10}>Karen</Text>
        </View>
      </View>
      <View style={styles.View_13_16}>
        <View style={styles.View_13_11}>
          <Text style={styles.Text_13_11}>today </Text>
        </View>
        <View style={styles.View_13_13}>
          <Text style={styles.Text_13_13}>yesterday</Text>
        </View>
        <View style={styles.View_13_15}>
          <Text style={styles.Text_13_15}>period</Text>
        </View>
        <View style={styles.View_13_14}>
          <Text style={styles.Text_13_14}>week</Text>
        </View>
      </View>
      <View style={styles.View_26_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c6/9951/89b55c9a02637d9b5ea6af44f3ba7e39"
          }}
          style={styles.ImageBackground_26_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c6/9951/89b55c9a02637d9b5ea6af44f3ba7e39"
          }}
          style={styles.ImageBackground_26_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ad/7c01/1e29326a0634c731534983f97c367910"
          }}
          style={styles.ImageBackground_26_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a606/f986/a281d1c6ac0bbcb96a20dea4279c8c77"
          }}
          style={styles.ImageBackground_26_15}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_113_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("390.8469945355191%"),
    minHeight: hp("390.8469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081966%"),
    backgroundColor: "rgba(64, 205, 215, 1)"
  },
  View_113_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("77.73224043715847%"),
    minHeight: hp("77.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819672%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_201_14: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%"),
    top: hp("93.85245901639344%")
  },
  Text_201_14: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_15: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.16666666666667%"),
    top: hp("93.85245901639344%")
  },
  Text_201_15: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_8: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("47.26775956284153%")
  },
  Text_201_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819672%"),
    resizeMode: "cover"
  },
  View_201_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_113_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.49726775956285%"),
    minHeight: hp("73.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_201_3: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("14.89071038251366%")
  },
  Text_201_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_4: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222222%"),
    top: hp("14.89071038251366%")
  },
  Text_201_4: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_5: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.61111111111111%"),
    top: hp("14.89071038251366%")
  },
  Text_201_5: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_6: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("14.89071038251366%")
  },
  Text_201_6: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_37: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("53.825136612021865%")
  },
  View_113_11: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_113_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_24: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("137.02185792349727%")
  },
  View_201_25: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_201_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_26: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("154.37158469945356%")
  },
  View_201_27: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_201_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_19: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("168.30601092896177%")
  },
  ImageBackground_113_47: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_113_48: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_113_49: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_114_48: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99.59016393442623%"),
    minHeight: hp("99.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("174.86338797814207%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_114_26: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%"),
    top: hp("176.63934426229508%")
  },
  Text_114_26: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_27: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("176.9125683060109%")
  },
  Text_114_27: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_29: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("219.80874316939892%")
  },
  Text_114_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_40: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222222%"),
    top: hp("268.9890710382514%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_114_41: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("269.39890710382514%")
  },
  Text_114_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_15: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.44444444444444%"),
    top: hp("268.9890710382514%"),
    backgroundColor: "rgba(36, 255, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_116_16: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555555%"),
    top: hp("269.39890710382514%")
  },
  Text_116_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_2: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("246.17486338797815%"),
    backgroundColor: "rgba(36, 255, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_204_3: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("246.58469945355193%")
  },
  Text_204_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_114_42: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.22222222222223%"),
    top: hp("177.04918032786884%"),
    resizeMode: "cover"
  },
  View_114_43: {
    width: wp("82.5%"),
    minWidth: wp("82.5%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("181.55737704918033%"),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_114_50: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("180.7377049180328%")
  },
  View_114_51: {
    width: wp("40.833333333333336%"),
    minWidth: wp("40.833333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("189.4808743169399%")
  },
  Text_114_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_53: {
    width: wp("58.88888888888889%"),
    minWidth: wp("58.88888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("218.98907103825138%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_114_63: {
    width: wp("18.88888888888889%"),
    minWidth: wp("18.88888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.833333333333336%"),
    top: hp("219.53551912568307%")
  },
  Text_114_63: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_3: {
    width: wp("26.111111111111114%"),
    minWidth: wp("26.111111111111114%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("225.54644808743168%")
  },
  Text_116_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_14: {
    width: wp("38.333333333333336%"),
    minWidth: wp("38.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("250.6830601092896%")
  },
  Text_116_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_4: {
    width: wp("75.55555555555556%"),
    minWidth: wp("75.55555555555556%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("229.23497267759564%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_116_5: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("229.78142076502732%")
  },
  Text_116_5: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_6: {
    width: wp("75.55555555555556%"),
    minWidth: wp("75.55555555555556%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("234.69945355191254%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_116_7: {
    width: wp("48.888888888888886%"),
    minWidth: wp("48.888888888888886%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("235.24590163934425%")
  },
  Text_116_7: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_8: {
    width: wp("75.55555555555556%"),
    minWidth: wp("75.55555555555556%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("240.71038251366122%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_116_9: {
    width: wp("48.888888888888886%"),
    minWidth: wp("48.888888888888886%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("241.25683060109287%")
  },
  Text_116_9: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_12: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("254.50819672131146%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_116_13: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("255.05464480874318%")
  },
  Text_116_13: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_2: {
    width: wp("81.94444444444444%"),
    minWidth: wp("81.94444444444444%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("206.42076502732237%")
  },
  View_114_70: {
    width: wp("81.94444444444444%"),
    minWidth: wp("81.94444444444444%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_114_59: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222223%"),
    top: hp("5.191256830601134%")
  },
  Text_114_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_60: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("5.464480874316962%")
  },
  Text_114_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_61: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333334%"),
    top: hp("5.464480874316962%")
  },
  Text_114_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_62: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.1111111111111%"),
    top: hp("5.464480874316962%")
  },
  Text_114_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_114_55: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222223%"),
    top: hp("1.3661202185792547%"),
    resizeMode: "cover"
  },
  ImageBackground_114_56: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222223%"),
    top: hp("1.3661202185792547%"),
    resizeMode: "cover"
  },
  ImageBackground_114_57: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("1.3661202185792547%"),
    resizeMode: "cover"
  },
  ImageBackground_114_58: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.05555555555556%"),
    top: hp("1.3661202185792547%"),
    resizeMode: "cover"
  },
  View_114_64: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  View_114_65: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.666666666666664%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  View_114_66: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  View_204_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99.59016393442623%"),
    minHeight: hp("99.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("276.91256830601094%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_204_5: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%"),
    top: hp("278.6885245901639%")
  },
  Text_204_5: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_6: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("278.9617486338798%")
  },
  Text_204_6: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_7: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("321.85792349726773%")
  },
  Text_204_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_8: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222222%"),
    top: hp("371.0382513661202%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_204_9: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("371.448087431694%")
  },
  Text_204_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_10: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.44444444444444%"),
    top: hp("371.0382513661202%"),
    backgroundColor: "rgba(36, 255, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_204_11: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555555%"),
    top: hp("371.448087431694%")
  },
  Text_204_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_14: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.22222222222223%"),
    top: hp("279.0983606557377%"),
    resizeMode: "cover"
  },
  View_204_15: {
    width: wp("82.5%"),
    minWidth: wp("82.5%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("283.60655737704917%"),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_204_16: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("282.78688524590166%")
  },
  View_204_17: {
    width: wp("40.833333333333336%"),
    minWidth: wp("40.833333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("291.53005464480873%")
  },
  Text_204_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_18: {
    width: wp("58.88888888888889%"),
    minWidth: wp("58.88888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("321.0382513661202%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_204_19: {
    width: wp("18.88888888888889%"),
    minWidth: wp("18.88888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.833333333333336%"),
    top: hp("321.58469945355193%")
  },
  Text_204_19: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_21: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("328.0054644808743%")
  },
  Text_204_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_43: {
    width: wp("19.166666666666668%"),
    minWidth: wp("19.166666666666668%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("363.5245901639344%")
  },
  Text_204_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_44: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("366.66666666666663%")
  },
  Text_204_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_45: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("366.66666666666663%")
  },
  Text_204_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_28: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("331.8306010928962%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  View_204_29: {
    width: wp("59.44444444444444%"),
    minWidth: wp("59.44444444444444%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("332.37704918032784%")
  },
  Text_204_29: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_30: {
    width: wp("81.94444444444444%"),
    minWidth: wp("81.94444444444444%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("308.46994535519127%")
  },
  View_204_31: {
    width: wp("81.94444444444444%"),
    minWidth: wp("81.94444444444444%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_204_32: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222223%"),
    top: hp("5.1912568306010485%")
  },
  Text_204_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_33: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("5.464480874316905%")
  },
  Text_204_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_34: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333334%"),
    top: hp("5.464480874316905%")
  },
  Text_204_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_35: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.1111111111111%"),
    top: hp("5.464480874316905%")
  },
  Text_204_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_36: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222223%"),
    top: hp("1.3661202185792263%"),
    resizeMode: "cover"
  },
  ImageBackground_204_37: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222223%"),
    top: hp("1.3661202185792263%"),
    resizeMode: "cover"
  },
  ImageBackground_204_38: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("1.3661202185792263%"),
    resizeMode: "cover"
  },
  ImageBackground_204_39: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.05555555555556%"),
    top: hp("1.3661202185792263%"),
    resizeMode: "cover"
  },
  View_204_40: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  View_204_41: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.666666666666664%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  View_204_42: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("0%"),
    borderColor: "rgba(64, 205, 215, 1)",
    borderWidth: 1
  },
  ImageBackground_201_11: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("47.26775956284153%"),
    resizeMode: "cover"
  },
  View_201_17: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.11111111111111%"),
    top: hp("127.32240437158471%")
  },
  Text_201_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_18: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("127.32240437158471%"),
    resizeMode: "cover"
  },
  ImageBackground_201_12: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.44444444444444%"),
    top: hp("93.85245901639344%"),
    resizeMode: "cover"
  },
  ImageBackground_201_13: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%"),
    top: hp("93.85245901639344%"),
    resizeMode: "cover"
  },
  View_201_28: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777779%"),
    top: hp("169.39890710382514%")
  },
  Text_201_28: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_35: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.66666666666667%"),
    top: hp("169.39890710382514%")
  },
  Text_201_35: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_29: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.66666666666666%"),
    top: hp("169.39890710382514%")
  },
  Text_201_29: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_30: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.94444444444444%"),
    top: hp("169.39890710382514%"),
    resizeMode: "cover"
  },
  ImageBackground_201_31: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.61111111111111%"),
    top: hp("169.39890710382514%"),
    resizeMode: "cover"
  },
  ImageBackground_201_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.49726775956285%"),
    resizeMode: "cover"
  },
  View_201_22: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("133.87978142076503%")
  },
  Text_201_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_23: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("151.36612021857923%")
  },
  Text_201_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_33: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.55555555555556%"),
    top: hp("126.91256830601093%"),
    resizeMode: "cover"
  },
  ImageBackground_201_34: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.77777777777779%"),
    top: hp("169.53551912568307%"),
    resizeMode: "cover"
  },
  View_204_0: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%"),
    top: hp("161.88524590163937%"),
    backgroundColor: "rgba(36, 255, 0, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_204_1: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.388888888888886%"),
    top: hp("162.43169398907105%")
  },
  Text_204_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_2: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.092896174863388%"),
    resizeMode: "cover"
  },
  ImageBackground_13_3: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("1.366120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_13_6: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("1.366120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_13_7: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.5%"),
    top: hp("1.366120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_13_8: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.94444444444444%"),
    top: hp("1.092896174863388%"),
    resizeMode: "cover"
  },
  View_13_10: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("7.923497267759563%")
  },
  Text_13_10: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_16: {
    width: wp("61.66666666666667%"),
    minWidth: wp("61.66666666666667%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("8.19672131147541%")
  },
  View_13_11: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_13: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555557%"),
    top: hp("0%")
  },
  Text_13_13: {
    color: "rgba(64, 205, 215, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_15: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("0%")
  },
  Text_13_15: {
    color: "rgba(64, 205, 215, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_14: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222223%"),
    top: hp("0%")
  },
  Text_13_14: {
    color: "rgba(64, 205, 215, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_16: {
    width: wp("88.33333333333333%"),
    minWidth: wp("88.33333333333333%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("394.53551912568304%")
  },
  ImageBackground_26_12: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_26_13: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("0%")
  },
  ImageBackground_26_14: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333335%"),
    top: hp("0.4098360655737565%"),
    resizeMode: "cover"
  },
  ImageBackground_26_15: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666667%"),
    top: hp("0.4098360655737565%"),
    resizeMode: "cover"
  },
  View_2: { height: 2977 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
