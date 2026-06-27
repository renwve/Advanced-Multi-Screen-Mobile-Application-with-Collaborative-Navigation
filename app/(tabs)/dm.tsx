import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DMScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const router = useRouter();

  const colors = {
    background: isDark ? "#0f0f10" : "#f2f2f2",
    card: isDark ? "#1c1c1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subtext: isDark ? "#b3b3b3" : "#8a8a8a",
    background2: isDark ? "#006166" : "#BBF3F6",
    accent: "#4fded0",
  };

  const artists = [
    {
      name: "WONHEE",
      group: "ILLIT",
      time: "18 hrs ago",
      image:
        "https://phinf.wevpstatic.net/MjAyNjAzMTZfMjc3/MDAxNzczNjIyODgxMzMz.jHwQiYWUVLsr4qRZChfcf4BPpR-petDBoKmibAYWxYAg.b5WVYzCZfpDFMeVWTektUh0gLkV5VR1iByN3UEJ8lKAg.JPEG/313441402267372082e50533d-b260-4a99-82bd-061fef372a84.jpg?type=w670",
      emoji: "🌟",
    },
    {
      name: "MINJU",
      group: "ILLIT",
      time: "1 day ago",
      image:
        "https://i.redd.it/251101-illit-weverse-update-minju-v0-lhrhci49bnyf1.jpg?width=4032&format=pjpg&auto=webp&s=d790315d14b86ad2fbc960f24ec64eea4ff75ea0",
      emoji: "🥰",
    },
    {
      name: "TAEHYUN",
      group: "TOMORROW X TOGETHER",
      time: "8 hrs ago",
      image: "https://picsum.photos/200?4",
      emoji: "🌟",
    },
  ];

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <View style={styles.header}>
          <Text
            style={[
              styles.headerTitle,
              { color: colors.text },
            ]}
          >
            Weverse DM
          </Text>

          <View style={styles.headerIcons}>
            <Ionicons
              name="person-add-outline"
              size={26}
              color={colors.text}
            />

            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={colors.text}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.banner,
            {
              backgroundColor: isDark
                ? "#2a2a2c"
                : "#ececef",
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.bannerTitle,
                { color: colors.text },
              ]}
            >
              DM open!
            </Text>

            <Text
              style={[
                styles.bannerSubtitle,
                { color: colors.subtext },
              ]}
            >
              WINNER
            </Text>
          </View>

          <Image
            source={{
              uri: "https://picsum.photos/300/150",
            }}
            style={styles.bannerImage}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.sectionCard,
            { backgroundColor: colors.card },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text },
            ]}
          >
            Messages
          </Text>

          <TouchableOpacity
            style={styles.newMessageRow}
            onPress={() =>
              router.push("/dm/newdm")
            }
          >
            <View
              style={[
                styles.plusCircle,
                {
                  backgroundColor:
                    colors.background2,
                },
              ]}
            >
              <Ionicons
                name="add"
                size={20}
                color="#27c6d5"
              />
            </View>

            <Text
              style={[
                styles.messagePlaceholder,
                { color: colors.subtext },
              ]}
            >
              DM with your artist
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.sectionCard,
            { backgroundColor: colors.card },
          ]}
        >
          <View
            style={styles.recommendedHeader}
          >
            <Text
              style={[
                styles.sectionTitle,
                { color: colors.text },
              ]}
            >
              Recommended
            </Text>

            <TouchableOpacity
              style={styles.refreshButton}
            >
              <Feather
                name="refresh-cw"
                size={10}
                color={colors.text}
              />
            </TouchableOpacity>
          </View>

          {artists.map((artist, index) => (
            <TouchableOpacity
              key={index}
              style={styles.artistRow}
            >
              <View style={styles.artistLeft}>
                <View>
                  <Image
                    source={{
                      uri: artist.image,
                    }}
                    style={styles.avatar}
                  />

                  <View
                    style={styles.emojiBadge}
                  >
                    <Text>
                      {artist.emoji}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    marginLeft: 14,
                  }}
                >
                  <View
                    style={styles.nameRow}
                  >
                    <Text
                      style={[
                        styles.artistName,
                        {
                          color: colors.text,
                        },
                      ]}
                    >
                      {artist.name}
                    </Text>

                    <MaterialIcons
                      name="verified"
                      size={16}
                      color="#13c7df"
                    />
                  </View>

                  <Text
                    style={[
                      styles.artistGroup,
                      {
                        color:
                          colors.subtext,
                      },
                    ]}
                  >
                    {artist.group}
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.timeText,
                  {
                    color: colors.subtext,
                  },
                ]}
              >
                {artist.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 35,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },

  banner: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bannerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  bannerSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },

  bannerImage: {
    width: 130,
    height: 40,
    borderRadius: 12,
  },

  sectionCard: {
    borderRadius: 28,
    padding: 20,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  newMessageRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  plusCircle: {
    width: 40,
    height: 40,
    borderRadius: 36,
    backgroundColor: "#dffbfc",
    justifyContent: "center",
    alignItems: "center",
  },

  messagePlaceholder: {
    fontSize: 18,
    marginLeft: 20,
  },

  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  refreshButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  artistRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 25,
  },

  artistLeft: {
    flexDirection: "row",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 37,
  },

  emojiBadge: {
    position: "absolute",
    bottom: -3,
    right: -3,
    backgroundColor: "#fff5d9",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  artistName: {
    fontSize: 18,
    fontWeight: "700",
  },

  artistGroup: {
    fontSize: 14,
    marginTop: 3,
  },

  timeText: {
    fontSize: 14,
  },
});