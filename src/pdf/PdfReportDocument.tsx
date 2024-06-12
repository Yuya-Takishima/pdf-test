import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./PdfStyles";
// 子コンポーネント

interface FormData {
  destination: string;
  contactPerson: string;
  sender: string;
  department: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  customerName: string;
  imgSrc: string;
}

type PdfReportDocumentProps = {
  form: FormData;
};
const PdfReportDocument: React.FC<PdfReportDocumentProps> = ({ form }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* タイトル */}
          <View
            style={[styles.content, styles.left_content_padding, styles.title]}
          >
            <Text style={styles.title_spacing}>ＦＡＸ</Text>
            <Text>送付状</Text>
          </View>
          {/* 送信日 */}
          <View
            style={[
              styles.content,
              styles.right_content_padding,
              styles.date_align,
            ]}
          >
            <View style={styles.border_box}>
              <Text style={styles.inner_border_box}>送信日</Text>
            </View>
            <View style={[styles.date]}>
              <Text>2024</Text>
              <Text style={styles.date_format_spacing}>年</Text>
              <Text>09</Text>
              <Text style={styles.date_format_spacing}>月</Text>
              <Text>06</Text>
              <Text style={styles.date_format_spacing}>日</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {/* 送信先 */}
          <View style={[styles.content, styles.left_content_padding]}>
            <View style={styles.form_column}>
              <View style={[styles.border_box, styles.width_100]}>
                <Text style={styles.inner_border_box}>送信先</Text>
              </View>
              <View style={styles.form_area}>
                <View style={styles.row_between}>
                  <Text style={styles.form_text}>{form.destination}</Text>
                  <Text style={styles.form_text}>御中</Text>
                </View>
                <Text style={styles.form_top_border}>ご担当者様</Text>
              </View>
            </View>
          </View>
          {/* 発信者 */}
          <View style={[styles.content, styles.right_content_padding]}>
            <View style={styles.form_column}>
              <View style={[styles.border_box, styles.width_100]}>
                <Text style={styles.inner_border_box}>発信者</Text>
              </View>
              <View style={styles.form_area}>
                <Text style={styles.form_text}>{form.sender}</Text>
                <Text style={[styles.form_text, styles.form_top_border]}>
                  {form.department}
                </Text>
                <Text
                  style={[
                    styles.form_text,
                    styles.form_top_border,
                    styles.text_right,
                  ]}
                >
                  {form.name}
                </Text>
                <Text style={styles.form_top_border}>TEL：{form.phone}</Text>
                <Text style={styles.form_top_border}>FAX：{form.email}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.border_box}>
            <Text style={styles.inner_border_box}>顧客名</Text>
          </View>
          <View style={styles.customer_info}>
            <Text>{form.address}</Text>
            <Text>{form.customerName}</Text>
          </View>
          <View style={styles.addressee}>
            <Text>様邸</Text>
          </View>
        </View>
        <View style={[styles.width_100]}>
          <View style={styles.border_box}>
            <Text style={styles.inner_border_box}>内容</Text>
          </View>
        </View>
        {form.imgSrc !== "" && (
          <View style={styles.mt_20}>
            <Image src={form.imgSrc} cache={false} />
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PdfReportDocument;
