import { Font, StyleSheet } from "@react-pdf/renderer";
import NotoFont from "../fonts/NotoSansJP-Regular.ttf";
import NotoFontBold from "../fonts/NotoSansJP-Bold.ttf";

// フォント
Font.register({
  family: "Noto",
  fonts: [
    {
      src: NotoFont,
    },
    {
      src: NotoFontBold,
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  // 共通スタイル
  page: {
    backgroundColor: "#E4E4E4",
    fontFamily: "Noto",
    fontSize: "14pt",
    padding: 30,
    borderStyle: "solid",
    borderColor: "#000",
  },
  content: {
    flexBasis: "50%",
    flexDirection: "row",
  },
  left_content_padding: {
    paddingRight: 8,
  },
  right_content_padding: {
    paddingLeft: 8,
  },
  border_box: {
    borderWidth: 1,
    padding: 2,
  },
  inner_border_box: {
    textAlign: "center",
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  section: {
    flexDirection: "row",
    marginBottom: 20,
  },
  width_100: {
    width: "100%",
  },
  text_right: {
    textAlign: "right",
  },
  mt_20: {
    marginTop: 20,
  },

  // タイトル〜送信日
  title: {
    fontWeight: "bold",
    fontSize: "24pt",
  },
  title_spacing: {
    letterSpacing: "4pt",
  },
  date_align: {
    alignItems: "flex-end",
  },
  date: {
    flexDirection: "row",
    marginLeft: 10,
    paddingBottom: 4,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  date_format_spacing: {
    paddingHorizontal: 5,
  },

  // 送信先・発信者
  form_column: {
    flexDirection: "column",
    flexBasis: "100%",
  },
  form_area: {
    textAlign: "left",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  row_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form_text: {
    paddingLeft: 10,
    paddingVertical: 3,
  },
  form_top_border: {
    borderTopWidth: 1,
    paddingLeft: 10,
    paddingVertical: 3,
  },

  // 顧客名
  customer_info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginLeft: 10,
    width: "80%",
  },
  addressee: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});

export default styles;
