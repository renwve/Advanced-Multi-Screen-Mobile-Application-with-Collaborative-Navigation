import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ShopScreen() {
  const artists = [
    {
      id: 1,
      name: "ILLIT",
      image:
        "https://pub-dc9a9c6ac2a64ba48bce426ced0ac56a.r2.dev/groups/ILLIT/logo.jpg?v=1778328992377",
    },
    {
      id: 2,
      name: "SEVENTEEN",
      image:
        "https://i.redd.it/seventeen-coming-soon-logo-teaser-images-v0-a82ek0x8zxp81.jpg?width=1000&format=pjpg&auto=webp&s=8ff20a3c971f49c93bd94f5877f2b9818d90fad3",
    },
    {
      id: 3,
      name: "YEONJUN",
      image:
        "https://shoptxtofficial.com/cdn/shop/files/YJ_NOLABELS_PART02_Packshot_Thumbnail_01_Std_Theme1_Blind.jpg?v=1781292409&width=1000",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoBox}>
              <Image
                source={require("../../assets/weverselogo.jpg")}
                style={styles.logo}
              />
            </View>

            <Text style={styles.logoText}>shop</Text>
          </View>

          <View style={styles.headerIcons}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={24}
              color="#52d9d3"
            />

            <Ionicons
              name="cart-outline"
              size={30}
              color="#111"
            />

            <Ionicons
              name="menu"
              size={34}
              color="#111"
            />
          </View>
        </View>

        <View style={styles.shipping}>
          <View style={styles.shippingLeft}>
            <Ionicons
              name="location-sharp"
              size={18}
              color="#111"
            />

            <Text style={styles.shippingText}>
              Ship to Canada
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.banner}
        >
          <Image
            source={{
              uri: "https://www.allkpop.com/upload/2026/05/content/280132/1779946342-img-6768.jpeg",
            }}
            style={styles.bannerImage}
          />

          <View style={styles.fade} />

          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              2026 VERNON THE 8 [V8]
            </Text>

            <Text style={styles.bannerTitle}>
              LIVE - GOYANG
            </Text>

            <Text
              numberOfLines={1}
              style={styles.bannerSubtitle}
            >
              Online Live Streaming Ticket Now on Weverse Shop
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.slider}>
          <View style={styles.track}>
            <View style={styles.activeDot} />
          </View>

          <Text style={styles.page}>04</Text>

          <Text style={styles.total}>/ 17</Text>

          <TouchableOpacity style={styles.plus}>
            <Ionicons
              name="add"
              size={10}
              color="#111"
            />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={["#22d4df", "#ad69ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <View style={styles.gradientCard}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={22}
              color="#55d8d5"
            />

            <Text style={styles.gradientText}>
              Don't miss out on pre-order items.
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.artistCard}>
          <Text style={styles.artistTitle}>
            My Artist
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {artists.map((artist) => (
              <TouchableOpacity
                key={artist.id}
                style={styles.artistItem}
              >
                <Image
                  source={{ uri: artist.image }}
                  style={styles.artistImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.upButton}>
          <Ionicons
            name="arrow-up"
            size={20}
            color="#111"
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 10,
  },

  header: {
    marginTop: 35,
    paddingHorizontal: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
  },

  logoText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  shipping: {
    marginTop: 15,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#ececec",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shippingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  shippingText: {
    fontSize: 15,
    marginLeft: 5,
    color: "#111",
  },

  change: {
    fontSize: 15,
    color: "#28cfd2",
    fontWeight: "600",
  },

  banner: {
    marginHorizontal: 20,
    marginTop: 15,
    height: 300,
    borderRadius: 28,
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  fade: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 170,
    backgroundColor: "rgba(255,255,255,0.88)",
  },

  bannerContent: {
    position: "absolute",
    bottom: 42,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  bannerTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#111",
    textAlign: "center",
  },

  bannerSubtitle: {
    marginTop: 1,
    fontSize: 15,
    color: "#6f6f6f",
    textAlign: "center",
  },

  slider: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  track: {
    width: 110,
    height: 6,
    backgroundColor: "#ececf2",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 20,
  },

  activeDot: {
    width: 16,
    height: 6,
    backgroundColor: "#111",
    borderRadius: 20,
  },

  page: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },

  total: {
    fontSize: 15,
    color: "#888",
    marginLeft: 4,
  },

  plus: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
  },

  gradientBorder: {
    marginHorizontal: 20,
    marginTop: 28,
    borderRadius: 30,
    padding: 1.8,
  },

  gradientCard: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  gradientText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginLeft: 14,
  },

  artistCard: {
    marginHorizontal: 20,
    marginTop: 26,
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  artistTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 15,
    color: "#111",
  },

  artistItem: {
    marginRight: 15,
  },

  artistImage: {
    width: 75,
    height: 75,
    borderRadius: 30,
    backgroundColor: "#eee",
  },

  upButton: {
    position: "absolute",
    right: 22,
    bottom: 95,
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
});